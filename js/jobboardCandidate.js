function disableSubmitwhileReset5564459000000447016() {
  var submitbutton = document.getElementById("formsubmit5564459000000447016");
  if (
    document.getElementById("privacyTool5564459000000447016") !== null ||
    document.getElementById("consentTool") !== null
  ) {
    submitbutton.disabled = true;
    submitbutton.style.opacity = "0.5;";
  } else {
    submitbutton.removeAttribute("disabled");
  }
}

function checkMandatory5564459000000447016() {
  var mndFields = new Array(
    "First Name",
    "Last Name",
    "Email",
    "Mobile",
    "Mailing Country",
    "Mailing City",
    "Mailing Street",
    "Mailing Zip",
    "Description",
    "theFile"
  );
  var fldLangVal = new Array(
    "Candidate First Name",
    "Candidate Last Name",
    "Email",
    "Mobile",
    "Mailing Country",
    "Mailing City",
    "Mailing Street",
    "Mailing Postal Code",
    "Status",
    "Upload Resume"
  );
  var i;
  var mndFieldslength = mndFields.length;
  var fieldObj;
  for (i = 0; i < mndFieldslength; i++) {
    fieldObj =
      document.forms.BiginWebToContactForm5564459000000447016[mndFields[i]];
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
  return validateFileUpload();
}

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
