// ==========================================================
// Candidate Template
// ==========================================================
class FormValidatorCandidate {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
  }
  initialize() {
    this.validateOnEntry();
    // this.validateOnSubmit();
  }
  // validateOnSubmit() {
  //   let self = this;
  //   this.form.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     self.fields.forEach((field) => {
  //       const input = document.querySelector(`#${field}`);
  //       self.validateFields(input);
  //     });
  //   });
  // }

  validateOnEntry() {
    let self = this;
    this.fields.forEach((field) => {
      const input = document.querySelector(`#${field}`);
      // this will output the fields listed at the bottom of this class
      // console.log(field);
      //
      input.addEventListener("input", (event) => {
        self.validateFields(input);
      });
    });
  }

  validateFields(field) {
    // Check presence of values
    if (field.value.trim() === "") {
      this.setStatus(
        field,
        `${field.previousElementSibling.innerText} cannot be blank`,
        "error"
      );
      // used for testing purposes only
      // console.log(error);
      //
    } else {
      this.setStatus(field, null, "success");
    }

    // check for a valid email address
    if (field.type === "email") {
      const regex =
        /([-!#-'*+\/-9=?A-Z^-~]+(\.[-!#-'*+\/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/;
      // used for testing purposes only
      // console.log(regex);
      //
      if (regex.test(field.value)) {
        this.setStatus(field, null, "success");
      } else {
        this.setStatus(field, "Please enter valid email address", "error");
      }
    }

    if (
      field.id === "candidate_firstname" ||
      field.id === "candidate_lastname" ||
      field.id === "candidate_city" ||
      field.id === "candidate_province" ||
      field.id === "candidate_country"
    ) {
      // max 80 characters only including space hyphen lower and upper case accents
      const regex =
        /(^[A-Za-zÀ-ÖØ-öø-ÿ\s\-\'][^\d\;\{\}|\/\!\@\#\$\%\&\?\"\~\^\*\(\)\_\n\r\t\f\v]+){1,80}$/;
      // used for testing purposes only this will display regex if used
      // console.log("This is the regex being used on text only: ", regex);
      //
      if (regex.exec(field.value)) {
        this.setStatus(field, null, "success");
        // used for testing purposes only this will display the filed being processes
        // console.log("Field: ",field," being used right now and good.\n");
        //
      } else {
        this.setStatus(field, "Please enter valid text", "error");
        // used for testing purposes only this will display the field being processes
        // console.log("Field: ",field," being used right now and bad.\n");
        //
      }
    }

    if (field.id === "candidate_mailingcode") {
      // max 10 alphanumeric characters including space hyphen and underscore
      const regex =
        /([A-Z0-9\s\-][^\a-z\'\/\;\.\,\_\{\}|\!\@\#\$\%\&\?\"\~\^\*\(\)\n\r\t\f\v]+){1,10}/;
      // used for testing purposes only: this will display regex if used
      // console.log("This is the regex being used on alphanumeric: ", regex);
      //
      if (regex.test(field.value)) {
        this.setStatus(field, null, "success");
      } else {
        this.setStatus(field, "Please enter valid postal code", "error");
      }
    }

    if (field.id === "candidate_username") {
      // max 40 alphanumeric characters including space hyphen underscore numbersign
      const regex =
        /([A-Za-z0-9\s\-\_\#][^\/\;\,\'\`\{\}|\!\@\$\%\&\?\"\~\^\*\(\)\n\r\t\f\v]+){1,40}$/;
      // used for testing purposes only: this will display regex if used
      // console.log("This is the regex being used on alphanumeric: ",regex);
      //
      if (regex.test(field.value)) {
        this.setStatus(field, null, "success");
      } else {
        this.setStatus(field, "Please enter valid information", "error");
      }
    }

    if (field.id === "status_req") {
      // max 250 alphanumeric characters including space hyphen and underscore
      const regex =
        /([A-Za-zÀ-ÖØ-öø-ÿ\d\s\-\'\/\;\.\,][^\_\{\}|\!\@\#\$\%\&\?\"\~\^\*\(\)\n\r\t\f\v]+){1,250}/;
      // used for testing purposes only: this will display regex if used
      // console.log("This is the regex being used on alphanumeric: ", regex);
      //
      if (regex.test(field.value)) {
        this.setStatus(field, null, "success");
      } else {
        this.setStatus(field, "Please enter valid information", "error");
      }
    }

    if (field.id === "coupon_code") {
      // max 50 alphanumeric characters including space hyphen and underscore
      const regex =
        /([A-Za-zÀ-ÖØ-öø-ÿ\d\s\-\'\/\;\.\,][^\_\{\}|\!\@\#\$\%\&\?\"\~\^\*\(\)\n\r\t\f\v]+){1,50}/;
      // used for testing purposes only: this will display regex if used
      // console.log("This is the regex being used on alphanumeric: ", regex);
      //
      if (regex.test(field.value)) {
        this.setStatus(field, null, "success");
      } else {
        this.setStatus(field, "Please enter valid information", "error");
      }
    }

    if (field.id === "candidate_street") {
      // max 250 alphanumeric characters including space hyphen and underscore
      const regex = /^(\b\D+\b)?\s*(\b.*?\d.*?\b)\s*(\b\D+\b)?$/;
      // used for testing purposes only: this will display regex if used
      console.log("This is the regex being used on alphanumeric: ", regex);
      //
      if (regex.test(field.value)) {
        this.setStatus(field, null, "success");
      } else {
        this.setStatus(field, "Please enter valid street address", "error");
      }
    }

    // telephone numbers
    if (
      field.id === "candidate_homephone" ||
      field.id === "candidate_mobilephone"
    ) {
      // this regex should accept all phone numbers including plus and parentheses
      const regex =
        /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/;
      // used for testing purposes only: this will display regex if used
      // console.log("This is the regex being used on alphanumeric:",regex);
      //
      if (regex.test(field.value)) {
        this.setStatus(field, null, "success");
      } else {
        this.setStatus(field, "Please enter a valid phone number", "error");
      }
    }

    // email confirmation edge case
    if (field.id === "candidate_emailconf") {
      const emailField = this.form.querySelector("#candidate_email");
      if (field.value.trim() == "") {
        this.setStatus(field, "email confirmation required", "error");
      } else if (field.value != emailField.value) {
        this.setStatus(field, "emails does not match", "error");
      } else {
        this.setStatus(field, null, "success");
      }
    }
  }

  setStatus(field, message, status) {
    const successIcon = field.parentElement.querySelector(".icon-success");
    const errorIcon = field.parentElement.querySelector(".icon-error");
    const errorMessage = field.parentElement.querySelector(".error-message");
    if (status === "success") {
      if (errorIcon) {
        errorIcon.classList.add("hidden");
      }
      if (errorMessage) {
        errorMessage.innerText = "";
      }
      successIcon.classList.remove("hidden");
      field.classList.remove("input-error");
      // used for testing purposes only
      console.log("This is successIcon &colon; ", successIcon);
      //
    }
    if (status === "error") {
      if (successIcon) {
        successIcon.classList.add("hidden");
      }
      field.parentElement.querySelector(".error-message").innerText = message;
      errorIcon.classList.remove("hidden");
      field.classList.add("input-error");
    }
  }
}

const form = document.getElementById(
  "BiginWebToContactForm5564459000000447016"
);
const fields = [
  "candidate_firstname",
  "candidate_lastname",
  "candidate_username",
  "candidate_homephone",
  "candidate_mobilephone",
  "candidate_street",
  "candidate_city",
  "candidate_province",
  "candidate_country",
  "candidate_mailingcode",
  "candidate_email",
  "candidate_emailconf",
  "status_req",
  "coupon_code"
];

const validator = new FormValidatorCandidate(form, fields);
validator.initialize();

// RESET BUTTON ACTIVATION
function disableSubmitwhileReset5564459000000447016() {
  var submitbutton = document.getElementById('formsubmit5564459000000447016');
  if (
    document.getElementById('privacyTool5564459000000447016') !== null ||
    document.getElementById('consentTool') !== null
  ) {
    submitbutton.disabled = true;
    submitbutton.style.opacity = '0.5;';
  } else {
    submitbutton.removeAttribute('disabled');
  }
}

function checkMandatory5564459000000447016() {
  // mandatory fields by name
  var mndFields = new Array(
    'First Name',
    'Last Name',
    'Email',
    'Mobile',
    'Mailing Country',
    'Mailing Province',
    'Mailing City',
    'Mailing Street',
    'Mailing Zip',
    'Description',
    'theFile'
  );

  // fields of the form to be validated by name
  var fldLangVal = new Array(
    'Candidate First Name',
    'Candidate Last Name',
    'Email',
    'Mobile',
    'Mailing Country',
    'Mailing Province',
    'Mailing City',
    'Mailing Street',
    'Mailing Zip',
    'Status',
    'Upload Resume',
    'Coupon Code'
 );

  var i;
  var mndFieldslength = mndFields.length;
  var fieldObj;

  for (i = 0; i < mndFieldslength; i++) {
    fieldObj =
      document.forms.BiginWebToContactForm5564459000000447016[mndFields[i]];
    if (fieldObj) {
      if (fieldObj.value.replace(/^s+|s+$/g, '').length === 0) {
        if (fieldObj.type === 'file') {
          alert('Please select a file to upload.');
          fieldObj.focus();
          return false;
        }
        alert(fldLangVal[i] + ' cannot be empty.');
        fieldObj.focus();
        return false;
      } else if (fieldObj.nodeName === 'SELECT') {
        if (fieldObj.options[fieldObj.selectedIndex].value === '-None-') {
          alert(fldLangVal[i] + ' cannot be none.');
          fieldObj.focus();
          return false;
        }
      } else if (fieldObj.type === 'checkbox') {
        if (fieldObj.checked === false) {
          alert('Please accept  ' + fldLangVal[i]);
          fieldObj.focus();
          return false;
        }
      }
      if (fieldObj.name === 'Last Name' && fieldObj.value) {
        name = fieldObj.value;
      }
    }
  }
  return validateFileUpload();
}

//
// FILE UPLOAD VALIDATION <- APPLIES TO CANDIDATE ONLY
//
function validateFileUpload() {
  var e = document.getElementById("theFile"),
    t = 0;
  if (e) {
    if (e.files.length > 3)
      return alert("You can upload a maximum of three files at a time."), !1;
    if ("files" in e) {
      var i = e.files.length;
      if (0 !== i) {
        for (var o = 0; o < i; o++) {
          var a = e.files[o];
          "size" in a && (t += a.size);
        }
        if (t > 20971520)
          return alert("Total file(s) size should not exceed 20MB."), !1;
      }
    }
  }
  return !0;
}

//Check if both policy boxes are :checked before enable submit button
$(".check-policy").on("change", function() {
  checkedFunc("consentTool", "privacyTool5564459000000447016");
});

function checkedFunc(element1Id, element2Id) {
  var mybutton = document.getElementById("formsubmit5564459000000447016");
  var element1 = document.getElementById(element1Id);
  var element2 = document.getElementById(element2Id);
  if (element1.checked == true && element2.checked == true) {
    mybutton.class = "submit";
    mybutton.removeAttribute("disabled");
  } else {
    mybutton.class = "button:disabled";
    mybutton.setAttribute("disabled", "disabled");
  }
}