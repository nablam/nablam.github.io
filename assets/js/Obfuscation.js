//Here it is.

function confirmDecrypt() {
  var encrtyptedDataToDecrypt =
    "U2FsdGVkX18PbKaY9pQWdEk4nHMHIUf4yUriHLZKSzYqBDwb+VLmqM7p0mHGfX2Q+zF9rsCTie6hICNuvB5YAOO6+Y90Ki8XyGKgt0uyyhFBRehBPdNPlY/fRFiGtTZfgszPH0MbMP18THHO1A39MA==";
  var enteredPasscode = document.getElementById("inputPasscode").value;

  var decrypted = CryptoJS.AES.decrypt(
    encrtyptedDataToDecrypt,
    enteredPasscode
  ).toString(CryptoJS.enc.Utf8);
  if (decrypted.charAt(0) == "<") {
    document.getElementById("SecretLinkSpace").innerHTML = decrypted;
  } else {
    document.getElementById("SecretLinkSpace").innerHTML =
      "Sorry  " +
      enteredPasscode +
      " is incorrect <br> " +
      ' Pleasee contact Nabil <br> <b>lamribenn@gmail.com</b><br> use subject "timeline view request" , and a brief message <br> describing your interest.<br>thank you  ';
  }
}
