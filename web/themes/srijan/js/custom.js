//custom js.

(function ($) {
 // code to disable button on the basis of length.
	$(document).ready(function(){
		var limit_chars = 140;

		var website_pattern = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
		var website_pattern_https = /^(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
		var mobile_pattern = /^[0-9-+ ]+$/;

		//Signup form validation.
		var alphabet_msg = "Only Letters are allowed";
		var full_name_missing_msg = "Please enter full name";
		var email_msg = "Please enter a valid email ID";
		var email_missing_msg = "Please enter your email ID";
		var existing_email_msg = "Email ID already exist";

		var login_email_missing_msg = "Please enter the email address";
		var login_email_msg = "Please enter a valid email address";
		var login_non_existing_email_msg = "You are yet to sign-up with us";
		var login_valid_password_msg = "Please enter a valid password";

		var forgot_email_missing_msg = "Please enter the email address";
		var forgot_email_msg = "Please enter a valid email ID";
		var forgot_non_existing_email_msg = "This Email ID is not registered with us. Kindly enter your registered Email ID";
		var forgot_password_sent_email_msg = "An email to change the password has been sent to your Email ID";

		var update_password_no_match_msg = "New password and confirm password must be same";

		var password_missing_msg = "Please enter the password";
		var password_character_msg = 'Enter password between 6 and 12 characters<br>At least one Uppercase Letter: A-Z,<br> At least one Lowercase Letter: a-z, <br>At least one Numerical Character: 0-9, <br>At least one of the following special character "!", "@", "#"';
		var password_length_msg = "Enter password between 6 and 12 characters";
		var password_minimum_length = 6;
		var password_maximum_length = 12;
		var website_invalid_msg = 'please enter valid website';
		var mobile_invalid_msg = 'please enter valid mobile number';
		var signup_error = '';

		var email_validation_path = '/dashboard/validateEmail';
		var user_login_validation_path = '/dashboard/validateUserLogin';
		var forgot_password_send_token_path = '/dashboard/forgotPasswordSendToken';
		var user_history_path = '/dashboard/user-history';
		var profile_change_password_path = '/dashboard/changePassword';
		var friend_invite_send_token_path = '/dashboard/friendInviteSendToken';
		var invite_friends_path = '/dashboard/inviteFriends';
		var multiple_selected_deletion = '/dashboard/delete-tweets';

		// var email_validation_path = '/Barbet/_www/dashboard/validateEmail';
		// var user_login_validation_path = '/Barbet/_www/dashboard/validateUserLogin';
		// var forgot_password_send_token_path = '/Barbet/_www/dashboard/forgotPasswordSendToken';
		// var user_history_path = '/Barbet/_www/dashboard/user-history';
		// var profile_change_password_path = '/Barbet/_www/dashboard/changePassword';
		// var friend_invite_send_token_path = '/Barbet/_www/dashboard/friendInviteSendToken';
		// var invite_friends_path = '/Barbet/_www/dashboard/inviteFriends';
		// var multiple_selected_deletion = '/Barbet/_www/dashboard/delete-tweets';

		$( "#foo" ).trigger( "click" );

		// Disable the update button on profile page
        $(".profilesettingform #edit-submit").attr('disabled', 'true');
		$(".profilesettingform .form-text").keyup(function() {
			var get_length = $(this);
			 if(get_length.length){
	        (get_length.val().length <= 0)? $(".profilesettingform #edit-submit").attr('disabled', 'true')
	        	:$(".profilesettingform #edit-submit").removeAttr('disabled');
	        }
		});
		$(".profilesettingform #edit-changeuser-password").keyup(function() {
			var get_length = $(this);
			 if(get_length.length){
	        (get_length.val().length <= 0)? $(".profilesettingform #edit-submit").attr('disabled', 'true')
	        	:$(".profilesettingform #edit-submit").attr('disabled' ,'true');
	        }
		});

		//Disable the update button on settings page
    	var getvalue = $('#user-form select option:selected').val();
	    if(getvalue == getvalue) {
            $(".user-form #edit-submit").attr('disabled', 'true');
		}
        $("#user-form select").on('change',function() {
	          if (getvalue == getvalue) {
				$(".user-form #edit-submit").removeAttr('disabled');
		      }
		});

		//Account setting invite friends.
		$("#user-form #invite-friends").click(function() {
	   		var emails = $('#user-form #edit-invite-friend-list').val();
				var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  			var valid = regex.test(emails);
  			$("#user-form-email-validation-error").remove();
  			$("#email-sent").remove();
  			if (emails.length == 0) {
	    		$("<span id='user-form-email-validation-error' class='validation-error'>" + 'Please enter an email address' + "</p>").insertAfter( "#user-form #edit-invite-friend-list" );
	    		return;
	    	}

				if (emails.length > 0) {
	    		if (!valid) {
	    			$("#user-form-email-validation-error").remove();
	    			$("<span id='user-form-email-validation-error' class='validation-error'>" + email_msg + "</p>").insertAfter( "#user-form #edit-invite-friend-list" );
						return;
	    		}
	    		// if (valid) {
	    		// 	$("#user-form-email-validation-error").remove();
	    		// 	$.post(invite_friends_path, {'email' : emails}, function(data) {
	    		// 		if  (data == "exist") {
					// 		$("<span id='user-form-email-validation-error' class='validation-error'>" + existing_email_msg + "</p>").insertAfter( "#user-form #edit-invite-friend-list" );
	    		// 		}
				  //   });
					//
	    		// }
	    	}

	    	$.post(invite_friends_path, {'email' : emails}, function(data) {
				if  (data == "done") {
					$("<span id='email-sent' class='mail-sent'>Friend invitation email sent successfully</p>").insertAfter( "#user-form #edit-invite-friend-list" );
					$('#email-sent').delay(2000).fadeOut(300);
					   setTimeout(function(){ location.reload(); }, 3000);
					   return;
				}
				$("<span id='user-form-email-validation-error' class='validation-error'>" + data + "</p>").insertAfter( "#user-form #edit-invite-friend-list" );
		    });


		});

		//Multiple deletion
		$("#delete-selected").click(function() {
			var nid = [];
		    $("input:checkbox[name=multiple-deletion]:checked").each(function() {
		         nid.push($(this).val());
		   });
			$.post(multiple_selected_deletion, {'nid' : nid}, function(data) {
				// $("<span id='delete-selected'>" + data + "</p>").insertAfter( "#delete-selected" );
				 var nids = data.split(",");

		    	 for (var i in nids) {
			    	$('#' + nids[i]).parent().parent().parent().hide();
				 }
			location.reload();
		    });
		});
		//All checks on single check
	 	 $('[name="all-selected-deleted"]').click(function(){
      	  if($(this).prop("checked")) {
      	      $('[name="multiple-deletion"]').prop("checked", true);
      	  } else {
     	       $('[name="multiple-deletion"]').prop("checked", false);
      	  }
     	 });

		//Volunteer invite form.
		$("#profile-account-settings-form #invite-friend").click(function() {
	   		var emails = $('#profile-account-settings-form #edit-invite-friend-list').val();
  			$("#profile-account-settings-form-email-validation-error").remove();
  			$("#email-sent").remove();
  			if (emails.length == 0) {
	    		$("<span id='profile-account-settings-form-email-validation-error' class='validation-error'>" + 'Please enter an email' + "</p>").insertAfter( "#profilesettingform #edit-invite-friend-list" );
	    		return;
	    	}

	    	$.post(friend_invite_send_token_path, {'email' : emails}, function(data) {
				if  (data == "done") {
					$("<span id='email-sent' class='mail-sent'>Friend invitation email sent successfully</p>").insertAfter( "#profile-account-settings-form #edit-invite-friend-list" );
					$('#email-sent').delay(5000).fadeOut(300);
					location.reload();
					return;
				}
				$("<span id='profile-account-settings-form-email-validation-error' class='validation-error'>" + data + "</p>").insertAfter( "#profile-account-settings-form #edit-invite-friend-list" );
		    });

		});

		//Profile setting form Beginning.

		//Valid url check
	    $("#profilesettingform #edit-field-mobile-number").focusout(function() {
	   		var mobile = $('#edit-field-mobile-number').val();
	   		var valid = mobile_pattern.test(mobile);
	   		$("#mobile-validation-error").remove();
	    	if (mobile.length > 0) {
	    		if(mobile.length < 10){
			        $("<span id='mobile-validation-error' class='validation-error'>" + mobile_invalid_msg + "</p>").insertAfter( "#profilesettingform #edit-field-mobile-number" );
			        return;
			    }

	    		if (!(valid)) {
	    			$("<span id='mobile-validation-error' class='validation-error'>" + mobile_invalid_msg + "</p>").insertAfter( "#profilesettingform #edit-field-mobile-number" );
	    		}
	    	}
	  	});

		//Valid url check
	    $("#profilesettingform #edit-field-website").focusout(function() {
	   		var website = $('#profilesettingform #edit-field-website').val();
	   		var valid = website_pattern.test(website);
	   		var valid_htttps = website_pattern_https.test(website);
	   		$("#website-validation-error").remove();
	    	if (website.length > 0) {
	    		if (!(valid || valid_htttps)) {
	    			$("<span id='website-validation-error' class='validation-error'>" + website_invalid_msg + "</p>").insertAfter( "#profilesettingform #edit-field-website" );
	    		}
	    	}
	  	});

	  	//Checking out data in fields for updation of profile
	  	// $("#profilesettingform .update-profile-button").click(function() {
	  	// 	//	var password = $('#profilesettingform #edit-changeuser-password').val();
	  	// 	var jobtitle = $('#profilesettingform #edit-field-job-title').val();
	  	// 	var orgname = $('#profilesettingform #edit-field-organization').val();
	  	// 	var website = $('#profilesettingform #edit-field-website').val();
	  	// 	if (jobtitle.length > 0 || orgname.length > 0 || website.length > 0) {
	  	// 		$("<span id='update-message'>Profile has been updated</span>").insertAfter( "#profilesettingform #update-message");
	  	// 	}


	  	// });

		$("#profilesettingform #change-password .change").click(function() {
	   		var password = $('#profilesettingform #edit-changeuser-password').val();
	    	//var regex = /^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]{6,12}$/;

  			$("#profile-settingform-password-validation-error").remove();
  			$("#password-changed").remove();
  			if (password.length == 0) {
	    		$("<span id='profile-settingform-password-validation-error' class='validation-error'>" + password_missing_msg + "</p>").insertAfter( "#profilesettingform #change-password .change" );
	    		return;
	    	}


         	$.post(profile_change_password_path, {'password' : password}, function(data) {
				if  (data == "done") {
					$("<span id='password-changed' class='mail-sent'>Password Changed successfully</p>").insertAfter( "#profilesettingform #change-password .change" );
					$('#password-changed').delay(5000).fadeOut(300);
					location.reload();
					return;
				}
				$("<span id='profile-settingform-password-validation-error' class='validation-error'>" + data + "</p>").insertAfter( "#profilesettingform #change-password .change" );
		    });

		});

		//Profile submit validtion.
		$('#profilesettingform').submit(function() {
			var mobile = $('#edit-field-mobile-number').val();
	   		var valid_mobile = mobile_pattern.test(mobile);

	   		var website = $('#profilesettingform #edit-field-website').val();
	   		var valid_website = website_pattern.test(website);
	   		var valid_website_htttps = website_pattern_https.test(website);

	   		var passed = true;
	   		$("#mobile-validation-error").remove();
	    	if (mobile.length > 0) {
	    		if(mobile.length < 10){
			        $("<span id='mobile-validation-error' class='validation-error'>" + mobile_invalid_msg + "</p>").insertAfter( "#profilesettingform #edit-field-mobile-number" );
			        passed = false;
			    }

	    		if (!(valid_mobile)) {
	    			$("#mobile-validation-error").remove();
	    			$("<span id='mobile-validation-error' class='validation-error'>" + mobile_invalid_msg + "</p>").insertAfter( "#profilesettingform #edit-field-mobile-number" );
	    			passed = false;
	    		}
	    	}

	    	$("#website-validation-error").remove();
	    	if (website.length > 0) {
	    		if (!(valid_website || valid_website_htttps)) {
	    			$("<span id='website-validation-error' class='validation-error'>" + website_invalid_msg + "</p>").insertAfter( "#profilesettingform #edit-field-website" );
	    			passed = false;
	    		}
	    	}
			return passed;
		});

		//Profile setting form End.


		//Twitter signup form
		//Full name validtaion.
	    $("#twitter-signup-form #edit-field-full-name").on('keyup', function(e) {
	    	var name = $('#twitter-signup-form #edit-field-full-name').val();
	    	var alphabet = /^[a-zA-Z ]+$/.test(name);
	    	$("#fname-validation-error").remove();
	    	if (name.length > 0) {
	    		if (!alphabet) {
	    			$("<span id='fname-validation-error' class='validation-error'>" + alphabet_msg + "</p>").insertAfter( "#edit-field-full-name" );
	    		}
	    	}
	    });

	    $("#twitter-signup-form #edit-field-full-name").focusout(function() {
	   		var name = $('#twitter-signup-form #edit-field-full-name').val();
	    	if (name.length == 0) {
	    		$("#fname-validation-error").remove();
	    		$("<span id='fname-validation-error' class='validation-error'>" + full_name_missing_msg + "</p>").insertAfter( "#edit-field-full-name" );
	    	}
	  	});

	    $("#twitter-signup-form #edit-email").focusout(function() {
	   		var email = $('#twitter-signup-form #edit-email').val();
	   		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  			var valid = regex.test(email);

  			$("#email-validation-error").remove();
	    	if (email.length == 0) {
	    		$("<span id='email-validation-error' class='validation-error'>" + email_missing_msg + "</p>").insertAfter( "#twitter-signup-form #edit-email" );
	    	}

  			if (email.length > 0) {
	    		if (!valid) {
	    			$("#email-validation-error").remove();
	    			$("<span id='email-validation-error' class='validation-error'>" + email_msg + "</p>").insertAfter( "#twitter-signup-form #edit-email" );
	    		}
	    		if (valid) {
	    			$("#email-validation-error").remove();
	    			$.post(email_validation_path, {'email' : email}, function(data) {
	    				if  (data == "exist") {
							$("<span id='email-validation-error' class='validation-error'>" + existing_email_msg + "</p>").insertAfter( "#twitter-signup-form #edit-email" );
	    				}
				    });

	    		}
	    	}
	  	});

	  	//Valid url check
	    $("#twitter-signup-form #edit-field-website").focusout(function() {
	   		var website = $('#twitter-signup-form #edit-field-website').val();
	   		var valid = website_pattern.test(website);
	   		var valid_htttps = website_pattern_https.test(website);
	   		$("#website-validation-error").remove();
	    	if (website.length > 0) {
	    		if (!(valid || valid_htttps)) {
	    			$("<span id='website-validation-error' class='validation-error'>" + website_invalid_msg + "</p>").insertAfter( "#twitter-signup-form #edit-field-website" );
	    		}
	    	}
	  	});


	    //Twitter signup form submit.
		$('#twitter-signup-form').submit(function() {
			var passed = true;
			var name = $('#twitter-signup-form #edit-field-full-name').val();
	 		var alphabet = /^[a-zA-Z ]+$/.test(name);

			//Full Name check.
			$("#fname-validation-error").remove();
			if (name.length > 0) {
	    		if (!alphabet) {
	    			passed = false;
	    			$("<span id='fname-validation-error' class='validation-error'>" + alphabet_msg + "</p>").insertAfter( "#edit-field-full-name" );
	    		}
	    	}
	    	if (name.length == 0) {
	    		$("#fname-validation-error").remove();
	    		passed = false;
	    		$("<span id='fname-validation-error' class='validation-error'>" + full_name_missing_msg + "</p>").insertAfter( "#edit-field-full-name" );
	    	}

	    	//Email check
			var email = $('#twitter-signup-form #edit-email').val();
			$("#email-validation-error").remove();
	    	if (email.length == 0) {
	    		passed = false;
	    		$("<span id='email-validation-error' class='validation-error'>" + email_missing_msg + "</p>").insertAfter( "#twitter-signup-form #edit-email" );
	    	}

	    	var website = $('#twitter-signup-form #edit-field-website').val();
	   		var valid = website_pattern.test(website);
	   		var valid_htttps = website_pattern_https.test(website);
	   		$("#website-validation-error").remove();
	    	if (website.length > 0) {
	    		if (!(valid || valid_htttps)) {
	    			passed = false;
	    			$("<span id='website-validation-error' class='validation-error'>" + website_invalid_msg + "</p>").insertAfter( "#twitter-signup-form #edit-field-website" );
	    		}
	    	}

	    	return passed;
		});


		//Signup form submit.
		$('#signup-form').submit (function() {
			var passed = true;

	 		var name = $('#signup-form #edit-field-full-name').val();
	 		var alphabet = /^[a-zA-Z ]+$/.test(name);

			//Full Name check.
			$("#fname-validation-error").remove();
			if (name.length > 0) {
	    		if (!alphabet) {
	    			passed = false;
	    			$("<span id='fname-validation-error' class='validation-error'>" + alphabet_msg + "</p>").insertAfter( "#edit-field-full-name" );
	    		}
	    	}
	    	if (name.length == 0) {
	    		$("#fname-validation-error").remove();
	    		passed = false;
	    		$("<span id='fname-validation-error' class='validation-error'>" + full_name_missing_msg + "</p>").insertAfter( "#edit-field-full-name" );
	    	}

	    	//Check for error
	    	var email_failed = $("#signup-form #email-validation-error").hasClass('validation-error');
			if (email_failed) {
				return false;
			}

			//Email check
			var email = $('#signup-form #edit-email').val();
			$("#email-validation-error").remove();
	    	if (email.length == 0) {
	    		passed = false;
	    		$("<span id='email-validation-error' class='validation-error'>" + email_missing_msg + "</p>").insertAfter( "#signup-form #edit-email" );
	    	}

	    	//Password check.
	     	var password = $('#signup-form #edit-user-password').val();
	    // 	var regex = /^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]{6,12}$/;
  			// var valid = regex.test(password);
  			// $("#password-validation-error").remove();
  			// if (!valid) {
  			// 	$("#password-validation-error").remove();
  			// 	passed = false;
	    // 		$("<span id='password-validation-error' class='validation-error'>" + password_character_msg + "</p>").insertAfter( "#signup-form #edit-user-password" );
  			// }
  			if (password.length == 0) {
	    		$("#password-validation-error").remove();
	    		passed = false;
	    		$("<span id='password-validation-error' class='validation-error'>" + password_missing_msg + "</p>").insertAfter( "#signup-form #edit-user-password" );
	    	}

	    	//Website validation.
	    	var website = $('#signup-form #edit-field-website').val();
	   		var valid = website_pattern.test(website);
	   		var valid_htttps = website_pattern_https.test(website);
	   		$("#website-validation-error").remove();
	    	if (website.length > 0) {
	    		if (!(valid || valid_htttps)) {
	    			passed = false;
	    			$("<span id='website-validation-error' class='validation-error'>" + website_invalid_msg + "</p>").insertAfter( "#signup-form #edit-field-website" );
	    		}
	    	}
		 	return passed;
		});

		//Full name validtaion.
	    $("#signup-form #edit-field-full-name").on('keyup', function(e) {
	    	var name = $('#signup-form #edit-field-full-name').val();
	    	var alphabet = /^[a-zA-Z ]+$/.test(name);
	    	$("#fname-validation-error").remove();
	    	if (name.length > 0) {
	    		if (!alphabet) {
	    			$("<span id='fname-validation-error' class='validation-error'>" + alphabet_msg + "</p>").insertAfter( "#edit-field-full-name" );
	    		}
	    	}
	    });

	    $("#signup-form #edit-field-full-name").focusout(function() {
	   		var name = $('#signup-form #edit-field-full-name').val();
	    	if (name.length == 0) {
	    		$("#fname-validation-error").remove();
	    		$("<span id='fname-validation-error' class='validation-error'>" + full_name_missing_msg + "</p>").insertAfter( "#edit-field-full-name" );
	    	}
	  	});

	    // $("#email-validation-error").remove();
	    $("#signup-form #edit-email").focusout(function() {
	   		var email = $('#signup-form #edit-email').val();
	   		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  			var valid = regex.test(email);

  			$("#email-validation-error").remove();
	    	if (email.length == 0) {
	    		$("<span id='email-validation-error' class='validation-error'>" + email_missing_msg + "</p>").insertAfter( "#signup-form #edit-email" );
	    	}

  			if (email.length > 0) {
	    		if (!valid) {
	    			$("#email-validation-error").remove();
	    			$("<span id='email-validation-error' class='validation-error'>" + email_msg + "</p>").insertAfter( "#signup-form #edit-email" );
	    		}
	    		if (valid) {
	    			$("#email-validation-error").remove();
	    			$.post(email_validation_path, {'email' : email}, function(data) {
	    				if  (data == "exist") {
							$("<span id='email-validation-error' class='validation-error'>" + existing_email_msg + "</p>").insertAfter( "#signup-form #edit-email" );
	    				}
				    });

	    		}
	    	}
	  	});

	    //Password validation.
	   //  $("#signup-form #edit-user-password").focusout(function() {
	  		// var password = $('#signup-form #edit-user-password').val();
	   //  	var regex = /^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]{6,12}$/;
  		// 	var valid = regex.test(password);
  		// 	$("#password-validation-error").remove();
  		// 	if (!valid) {
  		// 		$("#password-validation-error").remove();
	   //  		$("<span id='password-validation-error' class='validation-error'>" + password_character_msg + "</p>").insertAfter( "#signup-form #edit-user-password" );
  		// 	}
	  	// });

	    $("#signup-form #edit-user-password").keyup(function() {
	   		var password = $('#signup-form #edit-user-password').val();
	   		$("#password-validation-error").remove();
	    	if (password.length == 0) {

	    		$("#password-validation-error").remove();
	    		$("<span id='password-validation-error' class='validation-error'>" + password_missing_msg + "</p>").insertAfter( "#signup-form #edit-user-password" );
	    	}
	  	});

	  	//Valid url check
	    $("#signup-form #edit-field-website").focusout(function() {
	   		var website = $('#signup-form #edit-field-website').val();
	   		var valid = website_pattern.test(website);
	   		var valid_htttps = website_pattern_https.test(website);
	   		$("#website-validation-error").remove();
	    	if (website.length > 0) {
	    		if (!(valid || valid_htttps)) {
	    			$("<span id='website-validation-error' class='validation-error'>" + website_invalid_msg + "</p>").insertAfter( "#signup-form #edit-field-website" );
	    		}
	    	}
	  	});

		//Twitter tweet message character count as per twitter.
	    $("#send-tweets-form #edit-message").on('keyup', function(e) {
	    	var tweet_msg = $('#send-tweets-form #edit-message').val();
	    	var tweet_msg_length = twttr.txt.getTweetLength(tweet_msg);
	    	$("#send-tweets-form #edit-display-box").val(140-tweet_msg_length);
	    	if (tweet_msg_length > limit_chars) {
	    		$("#send-tweets-form #edit-submit").attr('disabled', 'true');
	    	}
	    	else {
	    		$("#send-tweets-form #edit-submit").removeAttr('disabled');
	    	}
	    });

	    $("#send-tweets-form #edit-message").on('keyup', function(e) {
	    	var tweet_msg = $('#send-tweets-form #edit-message').val();
	    	var tweet_msg_length = twttr.txt.getTweetLength(tweet_msg);
	    	if (tweet_msg_length > 954) {
	    		$("#send-tweets-form #edit-save").attr('disabled', 'true');
	    	}
	    	else {
	    		$("#send-tweets-form #edit-save").removeAttr('disabled');
	    	}
	    });

	    //Click on forgot password link.
		$("#user-login-form #forgot-password").click(function() {
			$(this).hide();
			$('#user-login-form #edit-name').val('');
			$('#user-login-form #edit-pass').val('');
			$('#user-login-form #edit-email').val('');
			$("#email-validation-error").remove();
			$("#password-validation-error").remove();
			$("#user-login-validation-error").remove();
			$("#forgot-password-mail-sent").remove();
			$("#forgot-email-validation-error").remove();
		});

		// User Login form validation.
	    // User Login form email validation.
	    $("#user-login-form #edit-pass").focusin(function() {
	   		var email = $('#user-login-form #edit-name').val();
	   		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  			var valid = regex.test(email);

  			$("#password-validation-error").remove();
			$("#user-login-validation-error").remove();
  			$("#email-validation-error").remove();
	    	if (email.length == 0) {
	    		$("<span id='email-validation-error' class='validation-error'>" + login_email_missing_msg + "</p>").insertAfter( "#user-login-form #edit-name" );
	    		return;
	    	}

  			if (email.length > 0) {
	    		if (!valid) {
	    			$("#email-validation-error").remove();
	    			$("<span id='email-validation-error' class='validation-error'>" + login_email_msg + "</p>").insertAfter( "#user-login-form #edit-name" );
	    			return;
	    		}
	    		if (valid) {
	    			$("#email-validation-error").remove();
	    			$.post(email_validation_path, {'email' : email}, function(data) {
	    				if  (data != "exist") {
	    					$("#password-validation-error").remove();
							$("#user-login-validation-error").remove();
							$("<span id='email-validation-error' class='validation-error'>" + login_non_existing_email_msg + "</p>").insertAfter( "#user-login-form #edit-name" );
							return;
	    				}
				    });

	    		}
	    	}
	  	});

		$("#user-login-form #edit-pass").focusout(function() {
	   		var password = $('#user-login-form #edit-pass').val();
	   		var email = $('#user-login-form #edit-name').val();
	   		var email_failed = $("#user-login-form #email-validation-error").hasClass('validation-error');
			if (email_failed) {
				$("#password-validation-error").remove();
				$("#user-login-validation-error").remove();
				return false;
			}
	    	if (password.length == 0) {
	    		$("#password-validation-error").remove();
	    		$("<span id='password-validation-error' class='validation-error'>" + password_missing_msg + "</p>").insertAfter("#user-login-form #edit-pass" );
	    		return;
	    	}
	    	var email_failed = $("#user-login-form #email-validation-error").hasClass('validation-error');
	    	if (email_failed) {
				return;
			}
	   //  	$("#user-login-validation-error").remove();
	   //  	$.post(user_login_validation_path, {'email' : email, 'password' : password}, function(data) {
				// if  (data != "exist") {
				// 	$("<span id='user-login-validation-error' class='validation-error'>" + login_valid_password_msg + "</p>").insertAfter("#user-login-form #edit-pass" );
				// 	// $("#user-login-form #edit-submit").attr('disabled', 'true');
				// }
				// else {
				// 	// $("#user-login-form #edit-submit").removeAttr('disabled');
				// }
		  //   });
	  	});

		$('#user-login-form').submit(function() {
			var email = $('#user-login-form #edit-name').val();
			var password = $('#user-login-form #edit-pass').val();
	   		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  			var valid = regex.test(email);
  			var passed = true;

  			var password_failed = $("#user-login-form #user-login-validation-error").hasClass('validation-error');
			if (password_failed) {
				return false;
			}

			$("#password-validation-error").remove();
  			$("#email-validation-error").remove();

  			if (email.length == 0) {
	    		$("<span id='email-validation-error' class='validation-error'>" + login_email_missing_msg + "</p>").insertAfter( "#user-login-form #edit-name" );
	    		passed =  false;
	    	}

			if (email.length > 0) {
	    		if (!valid) {
	    			$("#email-validation-error").remove();
	    			$("<span id='email-validation-error' class='validation-error'>" + login_email_msg + "</p>").insertAfter( "#user-login-form #edit-name" );
	    			passed =  false;
	    		}
	    		if (valid) {
	    			$("#email-validation-error").remove();
	    			$.post(email_validation_path, {'email' : email}, function(data) {
	    				if  (data != "exist") {
							$("#user-login-validation-error").remove();
							$("<span id='email-validation-error' class='validation-error'>" + login_non_existing_email_msg +  "</p>").insertAfter( "#user-login-form #edit-name" );
							passed =  false;
	    				}
				    });

	    		}
	    	}

	    	if (password.length == 0) {
	    		$("<span id='password-validation-error' class='validation-error'>" + password_missing_msg + "</p>").insertAfter("#user-login-form #edit-pass" );
	    		passed =  false;
	    	}

			return passed;
		});

		// Forgot password/send password form.
	  	$("#user-login-form #edit-email").focusout(function() {
	   		var email = $('#user-login-form #edit-email').val();
	   		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  			var valid = regex.test(email);

  			$("#forgot-email-validation-error").remove();
  			$("#forgot-password-mail-sent").remove();
	    	if (email.length == 0) {
	    		$("<span id='forgot-email-validation-error' class='validation-error'>" + forgot_email_missing_msg + "</p>").insertAfter( "#user-login-form #edit-email" );
	    	}

  			if (email.length > 0) {
	    		if (!valid) {
	    			$("#forgot-email-validation-error").remove();
	    			$("<span id='forgot-email-validation-error' class='validation-error'>" + forgot_email_msg + "</p>").insertAfter( "#user-login-form #edit-email" );
	    		}
	    		if (valid) {
	    			$("#forgot-email-validation-error").remove();
	    			$.post(email_validation_path, {'email' : email}, function(data) {
	    				if  (data != "exist") {
							$("<span id='forgot-email-validation-error' class='validation-error'>" + forgot_non_existing_email_msg + "</p>").insertAfter( "#user-login-form #edit-email" );
	    				}
				    });
	    		}
	    	}
	  	});

		$("#user-login-form #forgot-password-submit").click(function() {
			$("#forgot-email-validation-error").remove();
			$("#forgot-password-mail-sent").remove();
			var email = $('#user-login-form #edit-email').val();
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  			var valid = regex.test(email);
  			$("#forgot-email-validation-error").remove();
  			$("#forgot-password-mail-sent").remove();

			if (email.length == 0) {
	    		$("<span id='forgot-email-validation-error' class='validation-error'>" + forgot_email_missing_msg + "</p>").insertAfter( "#user-login-form #edit-email" );
	    		return;
	    	}
	    	if (email.length > 0) {
	    		if (!valid) {
	    			$("#forgot-email-validation-error").remove();
	    			$("<span id='forgot-email-validation-error' class='validation-error'>" + forgot_email_msg + "</p>").insertAfter( "#user-login-form #edit-email" );
	    		}
	    		if (valid) {
	    			$.post(email_validation_path, {'email' : email}, function(data) {
	    				if  (data != "exist") {
	    					$("#forgot-email-validation-error").remove();
							$("<span id='forgot-email-validation-error' class='validation-error'>" + forgot_non_existing_email_msg + "</p>").insertAfter( "#user-login-form #edit-email" );
							return;
	    				}
				    });
	    		}
	    	}

	    	$.post(forgot_password_send_token_path, {'email' : email}, function(data) {
	    		$("#forgot-email-validation-error").remove();
	    		$("#forgot-password-mail-sent").remove();
				if  (data == "done") {
					$('#user-login-form #edit-email').val('')
					$("<span id='forgot-password-mail-sent' class='mail-sent'>" + forgot_password_sent_email_msg + "</p>").insertAfter( "#user-login-form #edit-email" );
					return;
				}
				$("<span id='forgot-email-validation-error' class='validation-error'>" + data + "</p>").insertAfter( "#user-login-form #edit-email" );
		    });

		});


		//Password change validation.
	    $("#update-password #edit-password").focusout(function() {
	   		var password = $('#update-password #edit-password').val();
	    	//var regex = /^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]{6,12}$/;
  			//var valid = regex.test(password);
  			var passed = true;
  			$("#password-validation-error").remove();
  			if (password.length == 0) {
	    		$("#password-validation-error").remove();
	    		$("#update-password #edit-actions #edit-submit").attr('disabled', 'true');
	    		$("<span id='password-validation-error' class='validation-error'>" + password_missing_msg + "</p>").insertAfter( "#update-password #edit-password" );
	    		return;
	    	}

  			// if (!valid) {
  			// 	$("#password-validation-error").remove();
  			// 	$("#update-password #edit-actions #edit-submit").attr('disabled', 'true');
	    // 		$("<span id='password-validation-error' class='validation-error'>" + password_character_msg + "</p>").insertAfter( "#update-password #edit-password" );
	    // 		return;
  			// }
  			// $("#update-password #edit-actions #edit-submit").removeAttr('disabled');
	  	});

		$("#update-password #edit-reset-password").focusout(function() {
	   		var password = $('#update-password #edit-password').val();
	   		var reset_password = $('#update-password #edit-reset-password').val();
	   		$("#reset-password-validation-error").remove();
  			if (password != reset_password) {
  				$("#update-password #edit-actions #edit-submit").attr('disabled', 'true');
	    		$("<span id='reset-password-validation-error' class='validation-error'>" + update_password_no_match_msg + "</p>").insertAfter( "#update-password #edit-reset-password" );
	    		return;
  			}
  			$("#update-password #edit-actions #edit-submit").removeAttr('disabled');
	  	});

		//Edit tweet message character count as per twitter.
	    /*$("#tweets-queue-tweet-form #edit-message").on('keyup', function(e) {
	    	var tweet_msg = $('#tweets-queue-tweet-form #edit-message').val();
	    	var tweet_msg_length = twttr.txt.getTweetLength(tweet_msg);
	    	$("#tweets-queue-tweet-form #edit-display-box").val(140-tweet_msg_length);
	    	if (tweet_msg_length > limit_chars) {
	    		$("#tweets-queue-tweet-form #edit-submit").attr('disabled', 'true');
	    	}
	    	else {
	    		$("#tweets-queue-tweet-form #edit-submit").removeAttr('disabled');
	    	}
	    });*/

	    $("#tweets-queue-tweet-form #edit-message").on('keyup', function(e) {
	    	var tweet_msg = $('#tweets-queue-tweet-form #edit-message').val();
	    	var tweet_msg_length = twttr.txt.getTweetLength(tweet_msg);
	    	if (tweet_msg_length > 900) {
	    		$("#tweets-queue-tweet-form #edit-save").attr('disabled', 'true');
	    	}
	    	else {
	    		$("#tweets-queue-tweet-form #edit-save").removeAttr('disabled');
	    	}
	    });

		$(".-form-tweets-queue-csv-upload .description").insertAfter(".-form-tweets-queue-csv-upload #edit-submit");
		$("#block-usersdashboardheaderblock .content").append("<a id='notification-display' href='#;'></a>");
		$("#block-usersdashboardnontwitterheaderblock .content").append("<a id='notification-display' href='#;'></a>");
		$("#block-usersdashboardheaderblock .profile + a, #block-usersdashboardnontwitterheaderblock .profile + a").click(function() {
			$(this).toggleClass("active");
			// $(this).siblings(".notifications").children(".notification-message-list").toggleClass("active");
		});

		// code to trim text and add more link.
	    var showChar = 140;
	    var moretext = "...";
	    var lesstext = "Less";

	    $('.block-tweets-queue .item-list + .item-list ul ul li:nth-child(3)').each(function() {
	        var content = $(this).html();

	        if(content.length > showChar) {

	            var c = content.substr(0, showChar);
	            var h = content.substr(showChar, content.length - showChar);
	            var html = c + '<span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';
	            $(this).html(html);
	        }
	    });

	    var showChar = 95;
	    var moretext = "...";
	    var lesstext = "Less";

	    $('.notifications .notification-message-list > div span.message').each(function() {
	        var content = $(this).html();

	        if(content.length > showChar) {

	            var c = content.substr(0, showChar);
	            var h = content.substr(showChar, content.length - showChar);
	            var html = c + '<span class="morecontent"><span>' + h + '</span></span><span class="ellipsis">' + moretext + '</span>';
	            $(this).html(html);
	        }
	    });

	    if($('#block-signinwithtwitterblock').length > 0){
	    	$('body').addClass('signinwithtwitterblock');
		}

	    if($('#profilesettingform').length > 0){
	    	$('body').addClass('profilesettingform-body');
		}

		if ($('div').hasClass('no-tweet-found')) {
		    $('body').addClass('no-tweet');
		}

		if ($('form').hasClass('-form-tweets-queue-csv-upload')) {
		    $('body').addClass('import-tweet-page');
		}

	     $(".message_history_count b").click(function(e) {
	        $(".notification-message-list, #notification-display").removeClass("active");
	        e.stopPropagation();
	    });

	     $("#block-usersdashboardheaderblock .profile + a, #block-usersdashboardnontwitterheaderblock .profile + a").click(function(e) {
	        $(".notification-message-list").toggleClass("active");
	        $('#block-usersdashboardheaderblock .profile .profile-links').removeClass('active animate');
			// $('#block-usersdashboardheaderblock .profile > a').removeClass('active');
	        e.stopPropagation();
	    });

	     $("#block-usersdashboardheaderblock .profile > a, #block-usersdashboardnontwitterheaderblock .profile > a").click(function(e) {
	     	e.preventDefault();
	        $(".profile-links").toggleClass("active");
	        $('#notification-display').removeClass('active');
			$('.notification-message-list').removeClass('active');
	        setTimeout(function() {
	            $('.profile-links').toggleClass('animate');
	        }, 100);
	        e.stopPropagation();
	    });

	    $('.profile-information-complete').parent('div').addClass('filled');

	    $(document).click(function(e) {
	        if (!$(e.target).is('.notification-message-list, #notification-display, .profile-links')) {
	            $(".notification-message-list, #notification-display, .profile-links").removeClass("active animate");
	        }
	    });

	    $(".morelink").click(function(){
	        if($(this).hasClass("less")) {
	            $(this).removeClass("less");
	            $(this).html(moretext);
	        } else {
	            $(this).addClass("less");
	            $(this).html(lesstext);
	        }
	        $(this).parent().prev().toggle();
	        $(this).prev().toggle();
	        return false;
	    });
	    // Change an error message
		// $(".messages--error").text('Unrecognized Email and Password');

	    $("#forgot-password-section").hide();
	    $("#forgot-password").click(function() {
	    	$("#forgot-password-section").show();
	    	$("#user-login-prefix").hide();
	    	$("#edit-actions").hide();
		});
	    $("#forgot-password-cancel").click(function() {
	    	$("#forgot-password-section").hide();
	    	$("#user-login-prefix").show();
	    	$("#edit-actions").show();
	    	$("#forgot-password").show();
		});

	    $(".create-header #ajax-wrapper").click(function() {
	    	var blankMessage = '';
	    	$(".messages--error").remove();
		});

		$("#notification-display").click(function(){
            $.ajax({
                type: 'POST',
                url: user_history_path,
                success: function(data) {
                }
            });

   //          if ($('#message-history-count-section').hasClass('hidden')) {
			//     $('#message-history-count-section').remove();
			// }

   //          $("#twitter-notification-count").remove();
   //          $("#message-history-count-section").addClass('hidden');
   		});

		// ripple effect
		  $(".block-users-tweets-statistics-block .content > div a, .send-tweets-form #edit-submit, .-form-tweets-queue-csv-upload #edit-submit, #change-password .change").click(function (e) {

		  // Remove any old one
		  $(".ripple").remove();

		  // Setup
		  var posX = $(this).offset().left,
		      posY = $(this).offset().top,
		      buttonWidth = $(this).width(),
		      buttonHeight =  $(this).height();

		  // Add the element
		  $(this).prepend("<span class='ripple'></span>");


		 // Make it round!
		  if(buttonWidth >= buttonHeight) {
		    buttonHeight = buttonWidth;
		  } else {
		    buttonWidth = buttonHeight;
		  }

		  // Get the center of the element
		  var x = e.pageX - posX - buttonWidth / 2;
		  var y = e.pageY - posY - buttonHeight / 2;


		  // Add the ripples CSS and start the animation
		  $(".ripple").css({
		    width: buttonWidth,
		    height: buttonHeight,
		    top: y + 'px',
		    left: x + 'px'
			}).addClass("rippleEffect");
		});

		  // Fadeout messages.
		/*$('.messages, .messages--error').show(100);
		$('.messages, .messages--error').delay(8000).fadeOut(300);*/

		// Message position changes.
		$(".path-frontpage .region-content .messages--error").insertAfter("#user-login-prefix .form-type-password");
		$(".messages").appendTo(".item-list + .item-list").insertBefore(".item-list + .item-list > ul");
		$(".messages").appendTo(".send-tweets-form .message-header").insertBefore(".send-tweets-form .form-type-textarea");
		$(".messages").appendTo(".send-tweets-form .message-header").insertBefore(".send-tweets-form .form-type-textarea");
		$(".messages").insertAfter(".import-tweet-page .block-system-main-block");

		/*if ($('.messages ul').hasClass('messages__list')) {
		    $('.messages').delay(50).addClass('listing-msg');
		}*/


		// $('.send-tweets-form .form-type-managed-file .form-managed-file .js-form-type-checkbox .file').append('<a href="#;"></a>');
		// $('.send-tweets-form .form-type-managed-file .form-managed-file .js-form-type-checkbox .file:after').click(function(){
		// 	$('.send-tweets-form .form-type-managed-file .form-managed-file .js-form-type-checkbox .file a').remove();
		// });

	});
	$('#result').insertAfter('#edit-user-password');

	$(document).ready(function() {
		$('#edit-user-password').keyup(function() {
			$('#result').html(checkStrength($('#edit-user-password').val()))
			})
			function checkStrength(password) {
			var strength = 0
	        if (password.length == 0) {
            $('#result').removeClass()
            $('#result').html('');
              return;
            }

			if (password.length < 6 && password.length > 0) {
			$('#result').removeClass()
			$('#result').addClass('short')
			$('#result').html('Short');
			}
			if (password.length > 7) strength += 1
			// If password contains both lower and uppercase characters, increase strength value.
			if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
			// If it has numbers and characters, increase strength value.
			if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
			// If it has one special character, increase strength value.
			if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
			// If it has two special characters, increase strength value.
			if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
			// Calculated strength value, we can return messages
			// If value is less than 2
			if (strength < 2 && strength != 0) {
			$('#result').removeClass()
			$('#result').addClass('weak')
			return 'Weak';
			} else if (strength == 2) {
			$('#result').removeClass()
			$('#result').addClass('good')
			return 'Good';
			} else if (strength > 2 && strength != 0) {
			$('#result').removeClass()
			$('#result').addClass('strong')
			return 'Strong';
			}
		}

	});
	// js for adding placeholder on newsletter field
	$(".block-simplenews .form-email").attr("placeholder", "Enter Vaild Email ID");
	$(".contact-message-write-to-us-form").prepend("<div class='heading-write-us'>Write to us</div>");
	/*$(window).scroll(function() {
    var scroll = $(window).scrollTop();

       if(scroll >= 200) {
        $(".header").addClass("change");
       } else {
        $(".header").removeClass("change");
       }
    });*/

	$('#my_tweets .text').click(function() {
		$(this).siblings('div').animate({ height: 'toggle', opacity: 'toggle' }, '1500');
		$(this).parent().toggleClass('active');

	});

	if ($('#my_tweets > div a').hasClass('active')) {
	    $('#my_tweets > div').animate({ height: 'toggle', opacity: 'toggle' }, '1500');
	    $('#my_tweets').addClass('active');
	}



    // change text of summary
    $(".user-form summary").text("Settings");

    // add spinner when click on submit button
    $("body").prepend('<div id="overlayspin" class="ui-widget-overlay" style="z-index: 1001; display: none;"></div>');
	$("body").prepend("<div id='spinner' style='display: none;'><i class='fa fa-spinner' aria-hidden='true'></i></div>");
	$('#contact-message-write-to-us-form').submit(function() {
	    var pass = true;
	    //some validations
	    if(pass == false){
	        return false;
	    }
	    $("#overlayspin, #spinner").show();
	    return true;
	});


 	 // $.ajax(function(){
 	 	function onChangeCheckbox(){
 	 		console.log('change');
 	 	}
 	 	$('.js-form-managed-file').on('change', '.form-checbox', onChangeCheckbox);
         // $('.form-checbox').on('change',function(){
         // 	console.log('change');
         //    $('.option + .form-submit').submit();
         //    });
         // });
         $( ".faq-qa-header" ).each(function( index ) {
				      var article_no = $(this).next().find('dt').length;
							$(this).children('h3').append('(' + article_no + ' Articles)');
				 });
				 $('.view-faq .view-content').addClass('faq');
         var window_width_ = $(window).width();
         if(window_width_ > 767) {
	        $( ".faq .faq-qa-header" ).each(function( index ) {
			       $(this).unwrap();
			    });
					$(".faq .faq-qa-header").first().children().addClass('active');
					$(".faq .faq-qa-hide").first().show();
	       }

	      if(window_width_ < 767) {
	    	$(".faq .faq-category-group").first().children().children().addClass('active');
				$(".faq .faq-category-group").first().children('.faq-qa-hide').show();
				$("<span class='hide_show'>...<span>").insertAfter('.item-list + .item-list > ul > li .item-list ul');

				// for my tweet block
				$("body.user-logged-in .block-users-all-tweets-block .item-list + .item-list ul li, body.user-logged-in .block-users-tweeted-tweets-block .item-list + .item-list ul li, body.user-logged-in .block-users-archived-tweets-block .item-list + .item-list ul li").each(function( index ) {
					$(this).children('.item-list').find('li:nth-child(4),li:nth-child(5) ,li:nth-child(8),li:nth-child(6)').hide();
				});
				$("body.user-logged-in .block-users-valid-tweets-block .item-list + .item-list ul li, body.user-logged-in .block-users-in-valid-tweets-block .item-list + .item-list ul li").each(function( index ) {
					$(this).children('.item-list').find('li:nth-child(4),li:nth-child(5)').hide();
				});
				// show on click
				$(".block-users-all-tweets-block .hide_show, .block-users-tweeted-tweets-block .hide_show, .block-users-archived-tweets-block .hide_show").click(function() {
          $(this).toggleClass('active');
					$(this).parent('.item-list').children('ul').find('li:nth-child(4),li:nth-child(5) ,li:nth-child(8),li:nth-child(6)').toggle();
				});
				$(".block-users-valid-tweets-block .hide_show, .block-users-in-valid-tweets-block .hide_show").click(function() {
					$(this).toggleClass('active');
					$(this).parent('.item-list').children('ul').find('li:nth-child(4),li:nth-child(5)').toggle();
				});
				if ($('.archived_tweets').hasClass('active')) {
						$('div.block_totol_twitt_statistics_mobile').animate({scrollLeft: '1000px'},1000);
				}

			   $( "#block-views-block-plans-block-2 .views-field-title" ).each(function( index ) {
					  $(this).appendTo('<div></div>').insertBefore('#block-views-block-plans-block-2 .view-content');
				});
				$('#block-views-block-plans-block-2 .views-field-title').first().addClass('active');
				$('#block-views-block-plans-block-2 .views-row').first().addClass('active');
				$('#block-views-block-plans-block-1 .views-row').first().addClass('active');
				$('#block-views-block-plans-block-2 .views-field-title').first().click(function(){
					    $('#block-views-block-plans-block-2 .views-field-title').first().addClass('active');
							$('#block-views-block-plans-block-2 .views-row').first().addClass('active');
							$('#block-views-block-plans-block-2 .views-field-title').last().removeClass('active');
							$('#block-views-block-plans-block-2 .views-row').last().removeClass('active');
							$('#block-views-block-plans-block-1 .views-row').last().removeClass('active');
							$('#block-views-block-plans-block-1 .views-row').first().addClass('active');
							$('#block-views-block-plans-block-1 .views-row').first().next().removeClass('active');
							$('#block-views-block-plans-block-2 .views-row').first().next().removeClass('active');
							$('#block-views-block-plans-block-2 .views-field-title').first().next().removeClass('active');

				});
				$('#block-views-block-plans-block-2 .views-field-title').first().next().click(function(){
							$('#block-views-block-plans-block-2 .views-field-title').first().removeClass('active');
							$('#block-views-block-plans-block-2 .views-field-title').first().next().addClass('active');
							$('#block-views-block-plans-block-2 .views-row').first().removeClass('active');
							$('#block-views-block-plans-block-1 .views-row').first().removeClass('active');
							$('#block-views-block-plans-block-2 .views-field-title').last().removeClass('active');
							$('#block-views-block-plans-block-2 .views-row').last().removeClass('active');
							$('#block-views-block-plans-block-1 .views-row').last().removeClass('active');
							$('#block-views-block-plans-block-2 .views-row').first().next().addClass('active');
							$('#block-views-block-plans-block-1 .views-row').first().next().addClass('active');

				});
				$('#block-views-block-plans-block-2 .views-field-title').last().click(function(){
							$('#block-views-block-plans-block-2 .views-field-title').first().removeClass('active');
							$('#block-views-block-plans-block-2 .views-row').first().removeClass('active');
							$('#block-views-block-plans-block-2 .views-field-title').last().addClass('active');
							$('#block-views-block-plans-block-2 .views-row').last().addClass('active');
							$('#block-views-block-plans-block-1 .views-row').last().addClass('active');
							$('#block-views-block-plans-block-1 .views-row').first().removeClass('active');
							$('#block-views-block-plans-block-2 .views-row').first().next().removeClass('active');
							$('#block-views-block-plans-block-1 .views-row').first().next().removeClass('active');
							$('#block-views-block-plans-block-2 .views-field-title').first().next().removeClass('active');
				});

	    }
        $('.faq-header').click(function(e){
        	$('.faq-qa-hide').hide();
        	$('.faq-header').removeClass('active');
           $(this).parent().next().show();
           $(this).addClass('active');
           e.preventDefault();
        });
        $('.user-login-form #forgot-password').appendTo('.user-login-form');

           // js for to prepend button
	        $('#delete-selected').prependTo('#block-srijan-content');
          // add class
	        if($('.path-signup .messages').hasClass('messages--status')) {
	          $('.section').addClass('active');
	        }

	        $("#tweets-queue-tweet-form #edit-message").on('keyup', function(e) {
		    	var tweet_msg = $('#tweets-queue-tweet-form #edit-message').val();
		    	var tweet_msg_length = twttr.txt.getTweetLength(tweet_msg);
		    	$("#tweets-queue-tweet-form #edit-display-box").val(140-tweet_msg_length);
		    	if (tweet_msg_length > 140) {
		    		$("#tweets-queue-tweet-form #edit-tweet-now").attr('disabled', 'true');
		    	}
		    	else {
		    		$("#tweets-queue-tweet-form #edit-tweet-now").removeAttr('disabled');
		    	}
	        });

	        // close popup after open page
	        $('.feedback_link').click(function(){
               $(this).parent().removeClass('active animate');
               setTimeout(function(){
                  $('.contact-message-user-feedback-form textarea').attr('placeholder','Message');
                  $('.ui-dialog-buttonpane .form-actions button:first-child .ui-button-text').text('Submit');
                  $('.ui-dialog-titlebar-close').click(function(){
	                  $('#spinner').hide().removeClass('absolute_top');
				      $('#overlayspin').hide().removeClass('absolute_top');
				  });
				  $('.ui-dialog .ui-dialog-buttonpane .form-actions button:last-child').click(function() {
				       $('.ui-dialog-titlebar-close').trigger('click');
				  });
				  $('.star').removeClass('on');
               }, 500);
	        });
            // if checkbox is checked add class

              $('#delete-selected input').attr('disabled', true);
			  $('.custom-checkbox input[type="checkbox"]').click(function() {
			    if ($('.custom-checkbox input[type="checkbox"]').is(':checked')) {
			      $('#delete-selected input').removeAttr('disabled');
			    } else {
			      $('#delete-selected input').attr('disabled', true);
			    }
			  });

			  $('.header .custom-checkbox input[type="checkbox"]').click(function() {
			    if ($('.header .custom-checkbox input[type="checkbox"]').is(':checked')) {
			      $('#delete-selected input').removeAttr('disabled');
			    } else {
			      $('#delete-selected input').attr('disabled', true);
			    }
			  });

			  // change text of submit button on dialog box
		     $('.feedback_link').click(function(){
			   $('#spinner').show().addClass('absolute_top');
			   $('#overlayspin').show().addClass('absolute_top');
			 });

		    var tweet_text_elem =  $('#tweets-queue-tweet-form #edit-message');
	        if(tweet_text_elem.length){
	        	(tweet_text_elem.val().length > 140)? $(".tweets-queue-tweet-form #edit-tweet-now").attr('disabled', 'true')
	        	:$(".tweets-queue-tweet-form #edit-tweet-now").removeAttr('disabled');
	        }
			 // js for mobile
			   var window_width = $(window).width();
			   function sidebarnav() {
			     if(window_width < 767) {
			       $('#notification-display').appendTo('.block-users-left-side-bar-block > div > div');
			     }
			   }
				 $(document).ready(function () {
						clicksidenav();
						sidebarnav();
				 });
			   $(window).click(function() {
				  $('.c-hamburger').removeClass('is-active');
				});
			   $( window ).resize(sidebarnav);
			   	function clicksidenav() {
					$('.c-hamburger').click(function(e){
	                    $(this).toggleClass('is-active');
	                    e.stopPropagation();
					});
				}
				$(".import_tweets").click(function() {
				    $(this).toggleClass('active');

				});

				$(".import_tweets div").click(function(e) {
					   e.stopPropagation();
				})
				// added target on a
				$('.field--name-field-visit-srijan- a').attr('target', '_blank');
				$("<span class='max_upload--msg'> You can upload only 4 images </span>").insertAfter('.send-tweets-form, .tweets-queue-tweet-form').hide();

                var url = $(location).attr('href'),
			    parts = url.split("/"),
			    last_part = parts[parts.length-1];
				$(".import_tweets_logs .text a").each(function() {
				    var partss = this.href.split("/");
				    last_parts = partss[partss.length-1];
				    if (last_parts == last_part) {
				        $(this).parent().parent().parent().addClass("active");
				        $(this).parent().addClass('active');
				    }

				});
			     // remove class for ipad on touch
		    if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
			        $('.button').hover(function(e) {
					        $(this).trigger('click');
					    });
							$('.item-list li a').hover('touchstart touchend', function(e) {
									$(this).removeClass('.beautytips .beautytips-module-processed .bt-active');
									$(this).trigger('click');
							});
				}
				// validation for contactus page
				$('#contact-message-write-to-us-form .field--name-field-name').children().append("<span class='validation-error'>Please enter name </span>");
				$('#contact-message-write-to-us-form .field--name-field-email').children().append("<span class='validation-error'>Please enter valid email id </span>");
				$('#contact-message-write-to-us-form .field--name-field-message').children().append("<span class='validation-error'>Please enter message </span>");
				$('#contact-message-write-to-us-form  .validation-error').hide();
				function nameEmpty() {
					  function isEmail(email) {
							var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
							return regex.test(email);
						}

				    var name, email, message;
				    name = $('#contact-message-write-to-us-form .field--name-field-name input').val();
						email = $('#contact-message-write-to-us-form .field--name-field-email input').val();
						message = $('#contact-message-write-to-us-form .field--name-field-message textarea').val();

						if (name == "" && email == "" && message == "") {
								$('#contact-message-write-to-us-form .validation-error').show();
								return false;
						}
				    if (name == ""  ) {
				        $('#contact-message-write-to-us-form .field--name-field-name .validation-error').show();
				        return false;
				    }
						if (email == "" ) {
								$('#contact-message-write-to-us-form .field--name-field-email .validation-error').show();
								return false;
						}else if (!isEmail(email)){
							$('#contact-message-write-to-us-form .field--name-field-email .validation-error').show();
							return false;
						}
						if (message == "" ) {
								$('#contact-message-write-to-us-form .field--name-field-message .validation-error').show();
								return false;
						}
				}
				$('#contact-message-write-to-us-form #edit-submit').click(function(e){
					  if(nameEmpty() === false) {
							e.preventDefault();
							return false;
						}
						else {
							return true;
						}
				});

				$('#contact-message-write-to-us-form .field--name-field-name input').on('selectionchange copy paste cut mouseup input', function() {
				    var namel = $('#contact-message-write-to-us-form .form-text').val();
						var getnamel = namel.length;
				    if(getnamel > 0){
							 $('#contact-message-write-to-us-form .field--name-field-name .validation-error').fadeOut(1000);
						} else {
							$('#contact-message-write-to-us-form .field--name-field-name .validation-error').fadeIn(1000);
						}
				});
				$('#contact-message-write-to-us-form .field--name-field-email input').on('selectionchange copy paste cut mouseup input', function()  {
					 var email1 = $('#contact-message-write-to-us-form .form-email').val();
					 function isEmail(email) {
						 var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
						 return regex.test(email);
					 }
						if(isEmail(email1)){
              // alert(email1);
							 $('#contact-message-write-to-us-form .field--name-field-email .validation-error').fadeOut(1000);
						}
						else {
							$('#contact-message-write-to-us-form .field--name-field-email .validation-error').fadeIn(1000);
						}
				});
				$('#contact-message-write-to-us-form .field--name-field-message textarea').on('selectionchange copy paste cut mouseup input', function() {
					var messagel = $('#contact-message-write-to-us-form .form-textarea').val();
					var getmsgl = messagel.length;
					if(getmsgl > 0) {
						 $('#contact-message-write-to-us-form .field--name-field-message .validation-error').fadeOut(1000);
					} else {
						$('#contact-message-write-to-us-form .field--name-field-message .validation-error').fadeIn(1000);
					}
				});
				$(function() {
				  $('#scroll_down > a').on('click', function(e) {
				    e.preventDefault();
				    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
				  });
				});

})(jQuery);


(function ($) {

	function onChangeDisableTweet() {
		var number_of_divs = $('.form-managed-file').find('div').length;
    var valueoftextarea = $('.form-textarea').val();
		if(number_of_divs > 5) {
			$("input[type='file']").change(function(){
		      $(".max_upload--msg").show();
		      this.value = '';
		  });
		}
		if(number_of_divs > 5 && valueoftextarea.length > 140) {
			$(".max_upload--msg").show();
			$("#send-tweets-form #edit-submit").attr('disabled', 'true');
			$("#tweets-queue-tweet-form #edit-tweet-now").attr('disabled', 'true');
		} else if (number_of_divs > 5 && valueoftextarea.length <= 140) {
			$(".max_upload--msg").show().delay(3000).fadeOut(300);
			$("#send-tweets-form #edit-submit").attr('disabled', 'true');
			$("#tweets-queue-tweet-form #edit-tweet-now").attr('disabled', 'true');
		} else if (number_of_divs <= 5 && valueoftextarea.length > 140) {
			$("#send-tweets-form #edit-submit").attr('disabled', 'true');
			$("#tweets-queue-tweet-form #edit-tweet-now").attr('disabled', 'true');
		} else if (number_of_divs == 4 && valueoftextarea.length > 140) {
			$("#send-tweets-form #edit-submit").attr('disabled', 'true');
			$("#tweets-queue-tweet-form #edit-tweet-now").attr('disabled', 'true');
		}
		else {
      $("#send-tweets-form #edit-submit").removeAttr('disabled');
			$("#tweets-queue-tweet-form #edit-tweet-now").removeAttr('disabled');
			$(".max_upload--msg").hide();
		}

		//Twitter tweet message character count as per twitter.
			$("#edit-message").on('keyup', function(e) {
				var tweet_msg = $('#edit-message').val();
				var tweet_msg_length = twttr.txt.getTweetLength(tweet_msg);
			  var limit_chars = 140;
				if (tweet_msg_length > limit_chars) {
					$("#send-tweets-form #edit-submit").attr('disabled', 'true');
					$("#tweets-queue-tweet-form #edit-tweet-now").attr('disabled', 'true');
				}
				else {
					 if(number_of_divs > 5 && tweet_msg_length >= limit_chars) {
						 $("#send-tweets-form #edit-submit").attr('disabled', 'true');
						 $("#tweets-queue-tweet-form #edit-tweet-now").attr('disabled', 'true');
					 } else if(number_of_divs < 5 && tweet_msg_length > limit_chars) {
						 $("#send-tweets-form #edit-submit").attr('disabled', 'true');
						 $("#tweets-queue-tweet-form #edit-tweet-now").attr('disabled', 'true');
					 } else if (number_of_divs > 5 && tweet_msg_length < limit_chars) {
					 	 $("#send-tweets-form #edit-submit").attr('disabled', 'true');
						 $("#tweets-queue-tweet-form #edit-tweet-now").attr('disabled', 'true');
					 } else if (number_of_divs == 4 && tweet_msg_length > limit_chars) {
				 			$("#send-tweets-form #edit-submit").attr('disabled', 'true');
				 			$("#tweets-queue-tweet-form #edit-tweet-now").attr('disabled', 'true');
				 	 } else {
						 $("#send-tweets-form #edit-submit").removeAttr('disabled');
						 $("#tweets-queue-tweet-form #edit-tweet-now").removeAttr('disabled');
					 }
				}
			});

	}
  // twitter text box
   function onTweetCompose(event) {
    var $textarea = $('.send-tweets-form #edit-message , .tweets-queue-tweet-form #edit-message'),
        $placeholderBacker = $('.js-keeper-placeholder-back'),
        currentValue = $textarea.val()
    ;
    var currentValuelength = twttr.txt.getTweetLength(currentValue);

    // realLength is not 140, links counts for 23 characters always.
    var realLength = 140;
    var remainingLength = 140 - currentValuelength;
    $($textarea).addClass('linked');
    $($placeholderBacker).addClass('linked');

     // scroll two bar same time same class
    $('.linked').scroll(function(){
	    $('.linked').scrollTop($(this).scrollTop());
	  })

    if (0 > remainingLength) {
      // Split value if greater than
      var allowedValuePart = currentValue.slice(0, realLength),
          refusedValuePart = currentValue.slice(realLength)
      ;

      // Fill the hidden div.
      $placeholderBacker.html(allowedValuePart + '<em>' + refusedValuePart + '</em>');
      $('#edit-display-box').addClass('red-text');
    } else {
      $placeholderBacker.html('');
      $('#edit-display-box').removeClass('red-text');
    }
	}

	function onFormCheckBoxChange() {
		$(this).parent().parent().find('.form-type-checkbox').next('.form-submit').trigger('mousedown');
	}
    Drupal.behaviors.ajax_send_tweet = {
	 	attach: function attach() {
	 		$('.js-form-managed-file .form-checkbox').unbind('change', onFormCheckBoxChange)
	 		.bind('change', onFormCheckBoxChange);
	 		onChangeDisableTweet();
	 		$('.messages').animate({'bottom': '30'});
	 		var window_width = $(window).width();
	 		if(window_width < 767) {
	 			$('.messages').animate({'bottom': '0'});
	 		}
	 		$('.messages').delay(8000).fadeOut(300);
	 		$("input[type='file']").change(function(){
		       var $fileUpload = $("input[type='file']");
		       if (parseInt($fileUpload.get(0).files.length) > 4){
		       	$(".max_upload--msg").show(500).delay(3000).fadeOut(300);
		       	 this.value = '';
		        }
		    });
				$textarea = $('textarea');
				// Create a pseudo-element that will be hidden behind the placeholder.
				var $placeholderBacker = $('<div class="js-keeper-placeholder-back"></div>');
				$placeholderBacker.insertAfter($textarea);

				onTweetCompose();
				$textarea.on('selectionchange copy paste cut mouseup input', onTweetCompose);
	 	}
	 };
})(jQuery);
