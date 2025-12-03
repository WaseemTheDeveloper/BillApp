// Global data management functions
function initializeData() {
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify([]))
  }
  if (!localStorage.getItem("bills")) {
    localStorage.setItem("bills", JSON.stringify([]))
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", initializeData)
