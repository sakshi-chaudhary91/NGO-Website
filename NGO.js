// Dark Mode Toggle
function toggleTheme() {
  const body = document.getElementById("body");
  if (body.classList.contains("bg-white")) {
    body.classList.remove("bg-white","text-gray-800");
    body.classList.add("bg-gray-900","text-gray-100");
  } else {
    body.classList.add("bg-white","text-gray-800");
    body.classList.remove("bg-gray-900","text-gray-100");
  }
}