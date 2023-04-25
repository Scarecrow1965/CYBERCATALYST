// ==========================================================
// Employer Template
// ==========================================================
class FormValidatorEmployer {
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
      field.id === "employer_title" ||
      field.id === "employer_firstname" ||
      field.id === "employer_lastname" ||
      field.id === "employer_city" ||
      field.id === "employer_province" ||
      field.id === "employer_country"
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

    if (field.id === "employer_mailingcode") {
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

    if (field.id === "employer_accountname") {
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

    if (field.id === "employer_street") {
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
      field.id === "employer_homephone" ||
      field.id === "employer_mobilephone"
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
    if (field.id === "employer_emailconf") {
      const emailField = this.form.querySelector("#employer_email");
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
  "BiginWebToContactForm5564459000000447001"
);

const fields = [
  "employer_accountname",
  "employer_title",
  "employer_firstname",
  "employer_lastname",
  "employer_email",
  "employer_street",
  "employer_city",
  "employer_province",
  "employer_country",
  "employer_mailingcode",
  "employer_homephone",
  "employer_mobilephone",
];

const validator = new FormValidatorEmployer(form, fields);
validator.initialize(); 


// RESET BUTTON ACTIVATION
function disableSubmitwhileReset5564459000000447001() {
  var submitbutton = document.getElementById("formsubmit5564459000000447001");
  if (
    document.getElementById("privacyTool5564459000000447001") !== null ||
    document.getElementById("consentTool") !== null
  ) {
    submitbutton.disabled = true;
    submitbutton.style.opacity = "0.2;";
  } else {
    submitbutton.removeAttribute("disabled");
  }
}

function checkMandatory5564459000000447001() {
  var mndFields = new Array(
    "Account Name",
    "Last Name",
    "First Name",
    "Title",
    "Email",
    "Mobile",
    "Mailing Country",
    // added Province
    "Mailing Province",
    "Mailing City",
    "Mailing Street",
    "Mailing Zip"
  );
  var fldLangVal = new Array(
    "Company Name",
    "Employer First Name",
    "Employer Last Name",
    "Pronouns",
    "Email",
    "Mobile",
    "Mailing Country",
    // added Province
    "Mailing Province",
    "Mailing City",
    "Mailing Street",
    "Mailing Zip"
  );

  var i;
  var mndFieldslength = mndFields.length;
  var fieldObj;

  for (i = 0; i < mndFieldslength; i++) {
    fieldObj =
      document.forms.BiginWebToContactForm5564459000000447001[mndFields[i]];
    if (fieldObj) {
      if (fieldObj.value.replace(/^s+|s+$/g, "").length === 0) {
        if (fieldObj.type === "file") {
          alert("Please select a file to upload.");
          fieldObj.focus();
          return false;
        }
        alert(fldLangVal[i] + " cannot be empty.");
        fieldObj.focus();
        return false;
      } else if (fieldObj.nodeName === "SELECT") {
        if (fieldObj.options[fieldObj.selectedIndex].value === "-None-") {
          alert(fldLangVal[i] + " cannot be none.");
          fieldObj.focus();
          return false;
        }
      } else if (fieldObj.type === "checkbox") {
        if (fieldObj.checked === false) {
          alert("Please accept  " + fldLangVal[i]);
          fieldObj.focus();
          return false;
        }
      }
      if (fieldObj.name === "Last Name" && fieldObj.value) {
        name = fieldObj.value;
      }
    }
  }
  return true;
}

// script just after script for id="wf-script" <- ONLY APPLIES TO EMPLOYER
var formname = document.BiginWebToContactForm;
if (!formname) {
  formname = document.BiginWebToContactForm5564459000000447001;
}
formname.action = "https://bigin.zoho.com/crm/WebToContactForm";
function validateForm() {
  return validateForm5564459000000447001();
}
function validateForm5564459000000447001() {
  if (
    (typeof checkMandatory !== "undefined" && checkMandatory()) ||
    (typeof checkMandatory5564459000000447001 !== "undefined" &&
      checkMandatory5564459000000447001())
  ) {
    var formname = document.BiginWebToContactForm;
    if (!formname) {
      formname = document.BiginWebToContactForm5564459000000447001;
    }
    formname.submit();
  } else {
    event.preventDefault();
    return false;
  }
}


//Check if both policy boxes are :checked before enable submit button
$(".check-policy").on("change", function() {
  checkedFunc("consentTool", "privacyTool5564459000000447001");
});

function checkedFunc(element1Id, element2Id) {
  var mybutton = document.getElementById("formsubmit5564459000000447001");
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

