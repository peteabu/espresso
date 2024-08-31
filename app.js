document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appForm");
  const generateButton = document.getElementById("generateButton");
  const modal = document.getElementById("appModal");
  const createAccountButton = document.getElementById("createAccountButton");
  const appLink = document.getElementById("appLink");
  const copyButton = document.querySelector(".linkbutton");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    generateButton.textContent = "Generating app...";
    generateButton.disabled = true;

    // Simulate app generation (replace with actual API call in real scenario)
    setTimeout(function () {
      const fakeAppLink =
        "https://espresso.app/" + Math.random().toString(36).substring(7);
      appLink.textContent = fakeAppLink;
      modal.style.display = "block";
      generateButton.textContent = "Generate";
      generateButton.disabled = false;
    }, 3000); // 3 seconds delay
  });

  createAccountButton.addEventListener("click", function () {
    // Replace with your actual account creation page URL
    window.location.href = "auth.html";
  });

  copyButton.addEventListener("click", function () {
    navigator.clipboard
      .writeText(appLink.textContent)
      .then(() => alert("Link copied to clipboard!"))
      .catch((err) => console.error("Failed to copy: ", err));
  });

  // Close modal when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appForm");
  const generateButton = document.getElementById("generateButton");
  const appItem = document.querySelector(".app-item");
  const appLink = document.getElementById("appLink");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Disable the button and change text to "Generating..."
    generateButton.disabled = true;
    generateButton.textContent = "Generating...";

    // Hide the app-item div if it was previously shown
    appItem.style.display = "none";

    // Simulate app generation (replace with actual API call if needed)
    setTimeout(function () {
      // Enable the button and change text back to "Generate"
      generateButton.disabled = false;
      generateButton.textContent = "Generate";

      // Show the app-item div
      appItem.style.display = "block";

      // Set the app link (replace with actual link generation logic)
      const appId = Math.random().toString(36).substring(7);
      appLink.href = `/app/${appId}`;
      appLink.textContent = `App ${appId}`;
    }, 2000); // 2 second delay to simulate generation
  });
});
