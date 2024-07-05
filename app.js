const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const message = document.querySelector("#message");
const phone = document.querySelector("#phone");
const form = document.querySelector("#form");

const name_error = document.querySelector("#name_error");
const surname_error = document.querySelector("#surname_error");
const phone_error = document.querySelector("#phone_error");
const message_error = document.querySelector("#message_error");

const charCount = document.querySelector("#charCount");
const errorMsg = document.querySelector("#errorMsg");

const sendWhatsApp = document.querySelector("#sendWhatsApp");

sendWhatsApp.addEventListener("click", function (e) {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const phoneNumber = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (name && surname && phoneNumber && message) {
    const fullName = `${name} ${surname}`;

    // Encode phone number, full name, and message for WhatsApp URL
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    const encodedFullName = encodeURIComponent(fullName);
    const encodedMessage = encodeURIComponent(message);

    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/${encodedPhoneNumber}?text=${encodedFullName}: ${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  } else {
    console.log(
      "Please enter all fields (name, surname, phone number, and message)."
    );
  }
});

message.addEventListener("input", function (e) {
  const maxLength = 10;
  const currentLength = e.target.value.length;

  if (currentLength > maxLength) {
    e.target.value = e.target.value.slice(0, maxLength);
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
  }

  charCount.textContent = `${e.target.value.length}/${maxLength}`;
});

form.addEventListener("submit", (e) => {
  let regexPhoneNumber = /^\+994\d{9}$/;

  name_error.innerHTML = "";
  surname_error.innerHTML = "";
  phone_error.innerHTML = "";
  message_error.innerHTML = "";

  if (name.value.trim() === "" || name.value === null) {
    e.preventDefault();
    name_error.innerHTML = "Name is required";
  } else {
    name_error.innerHTML = "";
  }
  if (surname.value.trim() === "" || surname.value === null) {
    e.preventDefault();
    surname_error.innerHTML = "Surname is required";
  } else {
    surname_error.innerHTML = "";
  }
  if (!phone.value.match(regexPhoneNumber)) {
    e.preventDefault();
    phone_error.innerHTML = "Phone is required!";
  } else {
    phone_error.innerHTML = "";
  }
  if (message.value.trim() === "" || message.value === null) {
    e.preventDefault();
    message_error.innerHTML = "Message is required";
  } else {
    message_error.innerHTML = "";
  }
});
