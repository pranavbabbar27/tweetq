<?php

namespace Drupal\tweets_queue\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Builds a form to test disabled elements.
 */
class TweetsQueueCsvUploadForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return '_form_tweets_queue_csv_upload';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    // Elements that take a simple default value.
    $client_info = tweets_queue_fetch_client_handler_info();
    $fids[0] = tweets_queue_get_client_field_info($client_info, CRON_TWEET_IMPORT_FID);

    $form['managed_file'] = array(
      '#type' => 'managed_file',
      '#title' => 'Import CSV',
      '#default_value' => $fids,
      '#disabled' => FALSE,
      '#upload_location' => TWEET_QUEUE_CSV_FILE_UPLOAD_DIRECTORY,
      '#progress_message' => $this->t('Please wait...'),
      '#upload_validators' => [
        'file_validate_extensions' => [
          'csv',
        ],
        'file_validate_size' => [
          '10485760'
        ]
      ],
    );
    $form['submit'] = array(
      '#type' => 'submit',
      '#value' => t('Run Import'),
    );
    return $form;
  }

  /**
   * Function to validate the key if already in use.
   * 
   * @params
   *  $title - The key value.
   *  $nid - If the node is getting edited.
   */
  public function getFileRealPath($fid) {
    $uri = '';
    if (empty($fid)) {
      return $uri;
    }
    $query = \Drupal::database()->select('file_managed', 'f');
    $query->addField('f', 'uri');
    $query->condition('f.fid', $fid);
    $uri = $query->execute()->fetchField();
    return $uri;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = \Drupal::service('config.factory')->getEditable('tweets_queue_admin.settings');
    $fid = reset($form_state->getValue('managed_file'));
    $file = '';
    if ($fid) {
      $file_path = $this->getFileRealPath($fid);
      $file = \Drupal::service('file_system')->realpath($file_path);
      $tweet_handler_info = array(
        CRON_TWEET_IMPORT_FID => $fid,
      );
      // Save file information in the handler.
      tweets_queue_update_handler_info($tweet_handler_info);
    }
    if (empty($file)) {
      $client_info = tweets_queue_fetch_client_handler_info();
      $fids = tweets_queue_get_client_field_info($client_info, CRON_TWEET_IMPORT_FID);
      $file_path = $this->getFileRealPath($fid);
      $file = \Drupal::service('file_system')->realpath($file_path);
    }
    if ($file) {
      $this->importCsvData($file);  
    }
  }

  public function importCsvData($file) {
    $uid = \Drupal::currentUser()->id();
    $file = fopen($file, 'r');
    $row = 0;
    $import_message = array('total' => 0, 'duplicate' => 0, 'imported' => 0);
    while (($line = fgetcsv($file)) !== FALSE) {
      if ($row == 0) {
        $row++;
        continue;
      }
      $import_message['total'] = $import_message['total'] + 1;
      $message = (isset($line[0])) ? $line[0] : '';
      $hash_tag = (isset($line[1])) ? $line[1] : '';
      $message = tweets_queue_get_urls_present($message);
      $hash_tag = tweets_queue_get_urls_present($hash_tag);
      $size = tweets_queue_calculate_tweet_message_size($message, $hash_tag, 'size');
      $twitter_message_info = array(
        'message' => $message,
        'hashtag' => $hash_tag,
        'uid' => $uid,
        'size' => $size,
      );
      $nid = tweets_queue_check_user_message_presence($message, $hash_tag);
      if ($nid) {
        $import_message['duplicate'] = $import_message['duplicate'] + 1;
        continue;
      }
      $import_message['imported'] = $import_message['imported'] + 1;
      tweets_queue_insert_message_queue_record($twitter_message_info);
    } 
    fclose($file);
    drupal_set_message(t('Migration completed successfully.'));
    drupal_set_message(t('Total : @total Imported: @imported Duplicate: @duplicate ',
      array(
        '@total' => $import_message['total'],
        '@imported' => $import_message['imported'],
        '@duplicate' => $import_message['duplicate'])
      )
    );
  }

}
