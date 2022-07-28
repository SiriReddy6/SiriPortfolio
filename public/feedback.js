// function validateForm() {
// 	alert("Thank you! Your feedback has been submitted");
// }


// function validateNumber() {
// 	let phoneNumberField = document.getElementById("number");
// 	let phoneNumber = phoneNumberField.value;
// 	var regx = /^[6-9]\d{9}$/;
// 	if (!regx.test(phoneNumber)) {
// 	  phoneNumberField.setCustomValidity("Please enter a valid phone number");
// 	  return false;
// 	}
// 	return true;
 
//   }


      function validateForm() {
        var name =
          document.forms.feedbackForm.fullName.value;
        var email =
          document.forms.feedbackForm.email.value;
        var phone =
          document.forms.feedbackForm.phoneNum.value;
        var address =
          document.forms.feedbackForm.address.value;
        var comments =
          document.forms.feedbackForm.comments.value; 

        var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
        var regPhone=/^\d{10}$/;                   // Javascript reGex for Phone Number validation.
        var regName = /\d+$/g;                 // Javascript reGex for Name validation

        if (name == "" || regName.test(name)) {
          window.alert("Please enter your name properly.");
          name.focus();
          return false;
        }

        if (address == "") {
          window.alert("Please enter your address.");
          address.focus();
          return false;
        }
        
        if (email == "" || !regEmail.test(email)) {
          window.alert("Please enter a valid e-mail address.");
          email.focus();
          return false;
        }
        
        if (phone == "" || !regPhone.test(phone)) {
          alert("Please enter valid phone number.");
          phone.focus();
          return false;
        }

        if (comments == "") {
          window.alert("Please enter your comments.");
          address.focus();
          return false;
         }

        else {
        	alert("Thank you! Your feedback has been successfully submitted");
        	return true;
        }

      }

// function validateForm() {

// 	// name validation
//   let name = document.forms["feedbackForm"]["fullName"].value;
//   if (name == "" ){
//     alert("Name must be filled out");
//     return false;
//   }
// // email validation
//   var email=document.feedbackForm.email.value;  
// var atposition=x.indexOf("@");  
// var dotposition=x.lastIndexOf(".");  
// if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
//   alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
//   return false;  
//   }  
// // phone number validation
// var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//   if(phoneNum.value.match(phoneno)){
//   	alert("Enter the phone number in XXX-XXX-XXXX, XXX.XXX.XXXX or XXX XXX XXXX format.");
//   	return false;
//   }
//   else{
//   alert("Thank you! Your feedback has been sucessfully submitted");
// }
  
// }
