const form = document.getElementById("regForm");

const username = document.getElementById("userName");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPassword");

const userError = document.getElementById("userError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");

// Sabhi error spans ko starting me hide karo
userError.style.display = "none";
emailError.style.display = "none";
passError.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // 1. Username validation (4 to 8 characters)
  const userVal = username.value.trim();
  if (userVal.length < 4 || userVal.length > 8) {
    userError.style.display = "inline";
    isValid = false;
  } else {
    userError.style.display = "none";
  }

  // 2. Email validation (must contain @gmail)
  const emailVal = email.value.trim();
  if (!emailVal.includes("@gmail")) {
    emailError.style.display = "inline";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  // 3. Password validation (at least 1 uppercase, 1 lowercase, 1 special character)
  const passVal = password.value;
  const hasUpper = /[A-Z]/.test(passVal);
  const hasLower = /[a-z]/.test(passVal);
  const hasSpecial = /[^A-Za-z0-9]/.test(passVal);

  if (!hasUpper || !hasLower || !hasSpecial) {
    passError.style.display = "inline";
    isValid = false;
  } else {
    passError.style.display = "none";
  }

  // Agar saare validations pass ho gaye
  if (isValid) {
    console.log("Form valid hai! Data submit kiya ja sakta hai.");
  }
});
