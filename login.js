document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const mobileInput = document.getElementById("mobile");
  const emailInput = document.getElementById("email");
  const addressInput = document.getElementById("address");
  const genderInputs = document.getElementsByName("gender");

  const errorName = document.querySelector(".ErrorName");
  const errorName2 = document.querySelector(".ErrorName2");
  const errorAge = document.querySelector(".ErrorAge");
  const errorAge2 = document.querySelector(".ErrorAge2");
  const errorEmail = document.querySelector(".ErrorEmail");
  const errorEmail2 = document.querySelector(".ErrorEmail2");
  const errorAddress = document.querySelector(".Erroraddress");
  const errorAddress2 = document.querySelector(".Erroraddress2");
  const errorGender = document.querySelector(".radio-gender");

  const signButton = document.querySelector("button");

  // Timeout redirect after 30 seconds
  setTimeout(() => {
    alert("Time is Out, Go Home");
    window.location.href = "index.html";
  }, 300);

  // Validation functions
  const validateName = () => {
    if (nameInput.value === "") {
      errorName.style.display = "block";
      errorName2.style.display = "none";
      return false;
    } else if (!isNaN(nameInput.value)) {
      errorName.style.display = "none";
      errorName2.style.display = "block";
      return false;
    } else {
      errorName.style.display = "none";
      errorName2.style.display = "none";
      return true;
    }
  };

  const validateMobile = () => {
    if (mobileInput.value === "") {
      errorAge.style.display = "block";
      errorAge2.style.display = "none";
      return false;
    } else if (isNaN(mobileInput.value)) {
      errorAge.style.display = "none";
      errorAge2.style.display = "block";
      return false;
    } else {
      errorAge.style.display = "none";
      errorAge2.style.display = "none";
      return true;
    }
  };

  const validateEmail = () => {
    if (emailInput.value === "") {
      errorEmail.style.display = "block";
      errorEmail2.style.display = "none";
      return false;
    } else if (
      !emailInput.value.includes("@") ||
      !emailInput.value.includes(".")
    ) {
      errorEmail.style.display = "none";
      errorEmail2.style.display = "block";
      return false;
    } else {
      errorEmail.style.display = "none";
      errorEmail2.style.display = "none";
      return true;
    }
  };

  const validateAddress = () => {
    if (addressInput.value === "") {
      errorAddress.style.display = "block";
      errorAddress2.style.display = "none";
      return false;
    } else {
      errorAddress.style.display = "none";
      errorAddress2.style.display = "none";
      return true;
    }
  };

  const validateGender = () => {
    for (const gender of genderInputs) {
      if (gender.checked) {
        errorGender.style.display = "none";
        return true;
      }
    }
    errorGender.style.display = "block";
    return false;
  };

  // Validate all fields
  const validateAll = () => {
    const isNameValid = validateName();
    const isMobileValid = validateMobile();
    const isEmailValid = validateEmail();
    const isAddressValid = validateAddress();
    const isGenderValid = validateGender();
    return (
      isNameValid &&
      isMobileValid &&
      isEmailValid &&
      isAddressValid &&
      isGenderValid
    );
  };

  signButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (validateAll()) {
      const nameValue = encodeURIComponent(nameInput.value);
      const emailValue = encodeURIComponent(emailInput.value);

      window.location.href = `index.html?name=${nameValue}&email=${emailValue}`;
    }
  });
});
