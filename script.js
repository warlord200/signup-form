function change() {
  const password = document.getElementById("pw");
  const confirm = document.getElementById("confirm-pw");
  console.log(password.value);
  console.log(confirm.value);
  if (password.value != confirm.value) {
    confirm.setCustomValidity("Passwords do not match");
    confirm.reportValidity();
  } else {
    confirm.setCustomValidity("");
  }
}
