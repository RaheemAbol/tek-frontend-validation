document.addEventListener("DOMContentLoaded", function () {
  const popupContainer = document.createElement("div");
  popupContainer.style.position = "fixed";
  popupContainer.style.bottom = "20px";
  popupContainer.style.right = "20px";
  popupContainer.style.width = "200px";
  popupContainer.style.padding = "20px";
  popupContainer.style.backgroundColor = "orange"; // Orange background
  popupContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
  popupContainer.style.borderRadius = "5px";
  popupContainer.style.zIndex = "1000";
  popupContainer.style.display = "none"; // Initially hidden

  const closeButton = document.createElement("button");
  closeButton.textContent = "✖";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.border = "none";
  closeButton.style.background = "none";
  closeButton.style.fontSize = "16px";
  closeButton.style.cursor = "pointer";

  closeButton.addEventListener("click", function () {
    popupContainer.style.display = "none";
  });

  const message = document.createElement("p");
  message.innerHTML =
    "Our team is available and happy to help. How can we help you today? 🙌";
  message.style.margin = "40px 0 10px 0"; // Adjust for the close button
  message.style.fontSize = "16px";
  message.style.color = "#fff";
  message.style.textAlign = "center";

  const inputContainer = document.createElement("div");
  inputContainer.style.display = "flex";
  inputContainer.style.alignItems = "center";
  inputContainer.style.marginTop = "10px";

  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.placeholder = "Type your message";
  inputField.style.flex = "1";
  inputField.style.padding = "10px";
  inputField.style.border = "none";
  inputField.style.borderRadius = "5px 0 0 5px";

  const sendButton = document.createElement("button");
  sendButton.innerHTML = "&#9654;"; // Unicode for right arrow
  sendButton.style.padding = "10px";
  sendButton.style.border = "none";
  sendButton.style.backgroundColor = "#fff";
  sendButton.style.color = "orange";
  sendButton.style.cursor = "pointer";
  sendButton.style.borderRadius = "0 5px 5px 0";

  inputContainer.appendChild(inputField);
  inputContainer.appendChild(sendButton);

  popupContainer.appendChild(closeButton);
  popupContainer.appendChild(message);
  popupContainer.appendChild(inputContainer);

  document.body.appendChild(popupContainer);

  setTimeout(function () {
    popupContainer.style.display = "block";
  }, 5000);
});
