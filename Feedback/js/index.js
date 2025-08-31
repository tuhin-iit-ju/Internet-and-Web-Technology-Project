const form = document.getElementById("feedbackForm");
const responseMsg = document.getElementById("response");
const messageBox = document.getElementById("message");
const charCount = document.getElementById("charCount");
const ratingSelect = document.getElementById("rating");
const mainPageBtn = document.getElementById("mainPageBtn");

// Character counter
messageBox.addEventListener("input", () => {
  charCount.textContent = `${messageBox.value.length}/250`;
});

// Main Page redirect
mainPageBtn.addEventListener("click", () => {
  window.location.href = "/Tuhin/MainPage/index.html"; // change this path if needed
});

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = messageBox.value.trim();
  const rating = ratingSelect.value;

  if (name && email && message && rating) {
    responseMsg.textContent = `✅ Thank you, ${name}! You rated us ${rating}/5. Feedback received.`;
    responseMsg.style.color = "#2ecc71";
    form.reset();
    charCount.textContent = "0/250";
  } else {
    responseMsg.textContent = "⚠️ Please fill in all fields!";
    responseMsg.style.color = "red";
  }
});
