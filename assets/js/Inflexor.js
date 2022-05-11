function myFunction() {
  document.getElementById("frm1").submit();
}

function confirmSubmition() {
  var enteredPasscode = document.getElementById("inputPasscode").value;
  var data = "<br> <p> some super sectret stuff </p> ",
    password = "$uuddlrlrba";

  var encrypted = CryptoJS.AES.encrypt(data, password).toString();

  var decrypted = CryptoJS.AES.decrypt(encrypted, password).toString(
    CryptoJS.enc.Utf8
  );
  if (decrypted.charAt(0) == "<") {
    document.getElementById("ResultSpan").innerHTML = decrypted;
  } else {
    document.getElementById("ResultSpan").innerHTML = "sorry ";
  }
}

function confirmed() {
  alert("confirmed");
}
