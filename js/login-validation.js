document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      validateInputs();
    });
  }

  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");

    return false;
  };

  const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");

    return true;
  };

  const isValidEmail = (email) => {
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return reg.test(String(email).toLowerCase());
  };

  const isValidPassword = (password) => {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return reg.test(password);
  };

  const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    let isEmailValid = true;
    let isPasswordValid = true;

    if (emailValue === "") {
      isEmailValid = setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
      isEmailValid = setError(email, "Provide a valid email address");
    } else {
      isEmailValid = setSuccess(email);
    }

    if (passwordValue === "") {
      isPasswordValid = setError(password, "Password is required");
    } else if (!isValidPassword(passwordValue)) {
      isPasswordValid = setError(
        password,
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number."
      );
    } else {
      isPasswordValid = setSuccess(password);
    }

    // Check if all inputs are valid
    if (isEmailValid && isPasswordValid) {
      form.submit(); // Submit the form if everything is valid
    }
  };
});
