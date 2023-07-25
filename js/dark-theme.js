const toggleButton = document.getElementById("switcherCheckbox");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
