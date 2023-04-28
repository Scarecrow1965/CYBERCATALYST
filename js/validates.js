// ============================================
// KNOWN VARIBLES FOR VALIDATION ATTEMPT (id)s
// AND TURNED THEM INTO SELECTORS
// ============================================
// CANDIDATE FORM
// form - id="BiginWebToContactForm5564459000000447016"
const signUpForm2 = document.getElementById("BiginWebToContactForm5564459000000447016");
// form whole div - id="elementDiv5564459000000447016"
// id="candidate_firstname"
const candFirstName = document.getElementById("candidate_firstname");
// id="candidate_lastname"
const candLastName = document.getElementById("candidate_lastname");
// id="candidate_username"
const candUsername = document.getElementById(")candidate_username");
// id="candidate_homephone" - non-mandatory
const candHomePhone = document.getElementById("candidate_homephone");
// id="candidate_mobilephone"
const candMobile = document.getElementById("candidate_mobilephone");
// id="candidate_street"
const candStreet = document.getElementById("candidate_street");
// id="candidate_city"
const candCity = document.getElementById("candidate_city");
// id="candidate_province"
const candProv = document.getElementById("candidate_province");
// id="candidate_country"
const candCountry = document.getElementById("candidate_country");
// id="candidate_mailingcode"
const candCode = document.getElementById("candidate_mailingcode");
// id="candidate_email"
const candemail = document.getElementById("candidate_email");
// id="candidate_emailconf"
// id="status_req"
const candStatus = document.getElementById("status_req");
// id="theFile" (could be multiple file) (max=20Mb)

// id="formsubmit5564459000000447016" - SUBMIT BUTTON - disabled
const submit2 = document.getElementById("formsubmit5564459000000447016");
// id="formreset5564459000000447016" - RESET BUTTON
const reset2 = document.getElementById("formreset5564459000000447016");
//
// -------------------------------
// EMPLOYER FORM
// -------------------------------
// form - id="BiginWebToContactForm5564459000000447001"
const signUpForm1 = document.getElementById("BiginWebToContactForm5564459000000447001");
// form whole div - id="elementDiv5564459000000447001"
// id="employer_accountname"
const emplAccount = document.getElementById("employer_accountname");
// id="employer_title"
const emplTitle = document.getElementById("employer_title");
// id="employer_firstname"
const emplFirstName = document.getElementById("employer_firstname");
// id="employer_lastname"
const emplLastName = document.getElementById("employer_lastname");
// id="employer_email"
const emplemail = document.getElementById("employer_email");
// id="employer_emailconf"
// id="employer_street"
const emplStreet = document.getElementById("employer_street");
// id="employer_city"
const emplCity = document.getElementById("employer_city");
// id="employer_province"
const emplProv = document.getElementById("employer_province");
// id="employer_country"
const emplCountry = document.getElementById("employer_country");
// id="employer_mailingcode"
const emplCode = document.getElementById("employer_mailingcode");
// id="employer_homephone" - non-mandatory
const emplHomePhone = document.getElementById("employer_homephone");
// id="employer_mobilephone"
const emplMobile = document.getElementById("employer_mobilephone");
// id="formsubmit5564459000000447001" - SUBMIT BUTTON - disabled
const submit1 = document.getElementById("formsubmit5564459000000447001");
// id="formreset5564459000000447001" - RESET BUTTON
const reset1 = document.getElementById("formreset5564459000000447001");

// ============================================
// OTHER GLOBAL VARIABLES
// ============================================
// const form = document.querySelector("form");
// const inputs = form.querySelectorAll("input");
// const spans = form.querySelectorAll(".error");
// const regEx = {
//     emailver1: /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,4}+)$/,
//     emailver2: /([-!#-'*+\/-9=?A-Z^-~]+(\.[-!#-'*+\/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/, // Source: https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression?page=2&tab=active#answer-14075810
//     SocialSecurityNumber: /^(?!000|666)(?:[0-6][0-9]{2}|7(?:[0-6][0-9]|7[0-2]))-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,
//     phoneregex1: /^([0-9]{2}) ([0-9]{2}) ([0-9]{2}) ([0-9]{2}) ([0-9]{2})$/,
//     phoneregex2: /^\+(?:[0-9] ?){6,14}[0-9]$/,
//     phoneregex3: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
//     phoneregex4: /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
//    phoneregex5: /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})[^\n\r\t\v]/, // allows international codes as well
//     phoneregexallcountries: /^(\+\d{1,3}( )?)?((\(\d{1,3}\))|\d{1,3})[- .]?\d{3,4}[- .]?\d{4}$/,
//    phoneregexsuper: /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/,
//     normaltext: /([\w\D\s\-\'][^\d\;\{\}|\/\!\@\#\$\%\&\?\"\~\^\*\(\)\_\n\r\t\f\v]{1,250}+)$/gmi/, // max 250 characters only, including space and hyphen(-)
//    normaltext: /^[A-Za-zÀ-ÖØ-öø-ÿ\D\s\-\'][^\d\;\{\}|\/\!\@\#\$\%\&\?\"\~\^\*\(\)\_\n\r\t\f\v]{1,250}/, // max 250 characters only, including space, hypen(-), and accepts lowercase and upeercase accents.
//     alphanumeric: /^[\w\d\s-]{1,20}$/, // very basic max 20 characters and numbers, including space and hyphen(-)
//     alphanumeric2: /^[\w\s\-\'][^\;\{\}|\/\!\@\#\$\%\&\?\"\~\^\*\(\)\_\n\r\t\f\v]{1,250}/gmi/, // max 250 characters
//    addressregex1: /^\d+\s[A-z]+\s[A-z]+/,
//    addressregex: /^(\d{3,})\s?(\w{0,5})\s([a-zA-Z]{2,30})\s([a-zA-Z]{2,15})\.?\s?(\w{0,5})$/,
//    addressregex2: /^(\d+) ?([A-Za-z](?= ))? (.*?) ([^ ]+?) ?((?<= )APT)? ?((?<= )\d*)?$/,
//    addressregex3: /\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z].{2,15}$/,
//     time12hhmm: /^(1[0-2]|0?[1-9]):([0-5]?[0-9])$/,
//     time12hhmmss: /^(1[0-2]|0?[1-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
//     time24hhmm: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/,
//     time24hhmmss: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
//     numbers12: /^(1[0-2]|[1-9])$/, // Range of 1-12 (hour, month)
//     numbers24: /^(2[0-4]|1[0-9]|[1-9])$/, // Range of 1-24 (hour)
//     numbers60: /^[1-5]?[0-9]/, // Range of 0-59 (minute, second)
//     numbers31: /^(3[01]|[12][0-9]|[1-9])$/, // Range of 1-31 (day of month)
//     numbers100: /^(100|[1-9]?[0-9])$/, // Range of 0-100 (percentage)
//     dateFormat: /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/, // ex: 10/2/2019
//      ipv4addr: /\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/, 
//     };

// examples of variable for regex
const regExemail = `/([-!#-'*+\/-9=?A-Z^-~]+(\.[-!#-'*+\/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/`; // Source: https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression?page=2&tab=active#answer-14075810
const regExtext = `/^[\w\D\s\-\'][^\d\;\{\}|\/\!\@\#\$\%\&\?\"\~\^\*\(\)\_\n\r\t\f\v]{1,250}/`; // max 250 characters only, including space and hyphen(-)
const regExalphanumeric = `/^[\w\s\-\'][^\;\{\}|\/\!\@\#\$\%\&\?\"\~\^\*\(\)\_\n\r\t\f\v]{1,250}/gmi/`; // max 250 characters
// examples of flags
let valid = true;
let fieldsValid = true;

// ====================================
// CLIENT SIDE FORM
// VALIDATION OF ALL FIELDS
// ====================================
// EVENT LISTENER
// addEventListener(type, listener)
// addEventListener(type, listener, options)
// addEventListener(type, listener, useCapture)

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   alert('SUBMITTED');
//   return true;
// });

// document.forms{id} or document.form[name]

// 
// EXAMPLE OF VALIDATION PROGRAM THAT WORKS
// 
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
        this.setStatus2(field, null, "success");
        // used for testing purposes only this will display the filed being processes
        // console.log("Field: ",field," being used right now and good.\n");
        //
      } else {
        this.setStatus2(field, "Please enter valid text", "error");
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

    if (field.id === "candidate_street") {
      // max 250 alphanumeric characters including space hyphen and underscore
      const regex = /^(\b\D+\b)?\s*(\b.*?\d.*?\b)\s*(\b\D+\b)?$/;
      // used for testing purposes only: this will display regex if used
      console.log("This is the regex being used on alphanumeric: ", regex);
      //
      if (regex.test(field.value)) {
        this.setStatus2(field, null, "success");
      } else {
        this.setStatus2(field, "Please enter valid street address", "error");
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
];

const validator = new FormValidatorCandidate(form, fields);
validator.initialize();

// form.addEventListener('click', (e) => {
//   // PREVENT SUBMIT BUTTON FROM ACTIVATING IF NOTHING IS ENTERED
//     e.preventDefault();
// });

// USING https://www.aleksandrhovhannisyan.com/blog/html-input-validation-without-a-form/
// const input = document.querySelector('#input');
// // OPTION #1
// inputs.addEventListener('change', (e) => {
//   // NOT REALLY USED. FOR UX REASONS
//   // const isValid = e.target.checkValidity();
//   // this will display error if there is one
//   const isValid = e.target.reportValidity();
//   // used for testing purposes only
//   console.log(isValid);
//   //
//   e.target.setAttribute('aria-invalid', !isValid);
// })
// // OPTION #2A
// inputs.forEach((input) => {
//   const errorElement = document.createElement('span');
//   errorElement.id = `${input.id}-error`;
//   input.setAttribute('aria-describedby', errorElement.id);
//   input.insertAdjacentElement(errorElement);
// });
// // OPTION#2B
// input.addEventListener('change',(e) => {
//   const isValid = !e.target.checkValidity();
//   e.target.setAttribute('aria-invalid', isValid);
//   if (isValid) {
//     const errorMessage = e.target.validationMessage;
//     errorElement.textContent = errorMessage;
//   }
// });
// // USING FOCUS
// input.addEventListener("change", (e) => {
//   // Don't keep the user locked in place if we previously validated the input
//   const wasValidated = e.target.getAttribute("aria-invalid") === "true";
//   if (wasValidated) {
//     return;
//   }
//   const errorMessage = e.target.validationMessage;
//   e.target.setAttribute("aria-invalid", !!errorMessage);
//   if (errorMessage) {
//     // Update error label visually
//     errorElement.textContent = errorMessage;
//     // Focus the invalid input so its error is narrated
//     e.target.focus();
//   }
// });
// // CLEARING THE ERROR ON IMPUT
// // Listen for the input event now so we fire this on every keystroke
// input.addEventListener('input', (e) => {
//   if (errorElement.textContent) {
//     e.target.removeAttribute('aria-invalid');
//     errorElement.textContent = '';
//   }
// });

// function validateForm() {
//     if (username.value.length <6) {
//         user.style.color = 'red'
//     } else {
//         user.style.color = 'green'
//     }
//     return validateFileUpload();
// }
//
//  HELPER FUNCTIONS
//
// function checkforValid () {
//     if (
//       document.getElementsByClassName("input").value == "" ||
//       document.getElementsByClassName("input").value .length < 6
//     ) {
//       alert("please enter information");
//       document.getElementsByClassName("input").style.color == "red";
//       document.getElementsByClassName("input").style.borderColor == "red";
//       return false;
//     } else {
//       document.getElementsByClassName("imput").style.borderColor == "green";
//       return true;
//     }
// };
// to validate email and confemail
// const validateEmail = (value) => {
//     const regEx = regex.emailver2;
//     if (value.match(regEx)){
//         return true;
//     }
//     alert ("Sorry this is not a valid email adrress format");
//     return false;
// };
// to validate first name, last name, title, country, province/state, city
// const validateText = (value) => {
//     const regEx = regex.text;
//     if (value.match(regEx)) {
//         return true;
//     }
//     alert ("Cannot use numbers here");
//         return false;
// };
// to validate postal code, description, username
// const validateAlpha = (value) => {
//     const regEx = regex.alphanumeric;
//     if (value.match(regEx)) {
//         return true;
//     }
//     alert("Oops, you can only enter text or numbers here");
//     return false;
// };
// to enable or disable submit button
// const disableSubmitButton = () => {
//     submitButton.disabled = true;
//     disableSubmitButton.classList.add("disabled");
// };
// const enableSubmitButton = () => {
//     submitButton.disabled = false;
//     disableSubmitButton.classList.remove("disabled");
// };

//
// FILE UPLOAD VALIDATION <- APPLIES TO CANDIDATE ONLY
//
(function validateFileUpload() {
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
})();


// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// };

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };
// function ValidateEmail(inputText) {
//   if (inputText.value.match(emailregex2)) {
//     alert("This is not a valid email address");
//     return false;
//   }
// }

// function validate(phone) {
//   // if phonenumber is empty return false
//   if (phone == null) {
//     return "false";
//   }

//   if (phoneregex2.test(phone)) {
//     // Valid international phone number
//   } else {
//     alert("This is not a valid phone number");
//     return false;
//   }
// }

// https://github.com/google/libphonenumber.git

// URL_DATA = "http://localhost:127.0.0.1"

// const validateInputs = () => {
//   // at this point no invalid fields have been encountered
// 	var fieldsValid = true;
//   // test field firstName
// 	if ( isEmpty( form.firstName.value ) )
// 	{
// 	alert( "First name must have a value - form not submitted" );
// 	fieldsValid = false;
// 	}
// 	// test field familyName
// 	if ( isEmpty( orderform.lastName.value ) )
// 	{
// 	alert( "Last name must have a value - form not submitted" );
// 	fieldsValid = false;
// 	}
// 	// return Boolean valid fields status
// 	return fieldsValid;

// const usernameValue = username.value.trim();
// const emailValue = email.value.trim();
// const passwordValue = password.value.trim();
// const passwordconf = confpwd.value.trim();
// if(usernameValue === '') {
//       setError(username, 'Username is required');
//   } else {
//       setSuccess(username);
//   }
//   if(emailValue === '') {
//       setError(email, 'Email is required');
//   } else if (!isValidEmail(emailValue)) {
//       setError(email, 'Provide a valid email address');
//   } else {
//       setSuccess(email);
//   }
//   if(passwordValue === '') {
//       setError(password, 'Password is required');
//   } else if (passwordValue.length < 8 ) {
//       setError(password, 'Password must be at least 8 character.')
//   } else {
//       setSuccess(password);
//   }
//   if(password2Value === '') {
//       setError(password2, 'Please confirm your password');
//   } else if (password2Value !== passwordValue) {
//       setError(password2, "Passwords doesn't match");
//   } else {
//       setSuccess(password2);
//   }

// };
// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// emailField1.addEventListener("keyup", function (event) {
//   isValidEmail1 = emailField1.checkValidity();

//   if (isValidEmail1) {
//     submit1.disabled = false;
//   } else {
//     submit1.disabled = true;
//   }
// });

// submit1.addEventListener("click", function (event) {
//   signUpForm1.submit();
// });

// if (!empFirstName.value) {
//   const nameError = document.getElementById("nameError");
//   nameError.classList.add("visible");
//   emplFirstName.add("invalid");
//   nameError.setAttribute("aria-hidden", false);
//   nameError.setAttribute("aria-invalid", true);
// }
// else {
//   return valid;
// }

// candidate
// function validate(e) {
//   e.preventDefault();

//   if (!firstNameField.value) {
//     const nameError = document.getElementsByClassName("nameError");
//     nameError.classList.add("visible");
//     firstNameField.classList.add("invalid");
//     nameError.setAttribute("aria-hidden", false);
//     nameError.setAttribute("aria-invalid", true);
//   }
//   return valid;
// }

// ===================  MUST KEEP  ==========================
// UPLOADING MULTIPLE FILES FROM MOZILLA
// async function uploadMultiple(formData) {
//   try {
//     const response = await fetch("https://example.com/posts", {
//       method: "POST",
//       body: formData,
//     });
//     const result = await response.json();
//     console.log("Success:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
//
// const photos = document.querySelector('input[type="file"][multiple]');
// const formData = new FormData();
//
// formData.append("title", "My Vegas Vacation");
//
// for (const [i, photo] of Array.from(photos.files).entries()) {
//   formData.append(`photos_${i}`, photo);
// }
//
// uploadMultiple(formData);
// ===============================================================
