let allGadgets = [];

const fetchGadgets = async () => {
  const res = await fetch("/gadgets");
  const data = await res.json();
  allGadgets = data;
  return data;
};

const displayGadgets = (gadgets) => {
  const container = document.getElementById("gadgets");
  container.innerHTML = "";

  if (gadgets.length === 0) {
    container.innerHTML = "<p>No gadgets found.</p>";
    return;
  }

  gadgets.forEach(gadget => {
    container.innerHTML += `
      <div class="card">
        <h3>${gadget.title}</h3>
        <p>${gadget.description}</p>
        <p><strong>Price:</strong> ${gadget.price}</p>
        <a href="${gadget.link}" target="_blank">Buy Now</a>
      </div>
    `;
  });
};

const applyFilters = () => {
  const keyword = document.getElementById("search").value.toLowerCase();
  const priceRange = document.getElementById("priceFilter").value;

  const filtered = allGadgets.filter(gadget => {
    const titleMatch = gadget.title.toLowerCase().includes(keyword);

    // Extract numeric price
    const numericPrice = parseInt(gadget.price.replace(/[^0-9]/g, ""));

    // Price filter logic
    let priceMatch = true;
    switch (priceRange) {
      case "0-1000":
        priceMatch = numericPrice <= 1000;
        break;
      case "1001-5000":
        priceMatch = numericPrice > 1000 && numericPrice <= 5000;
        break;
      case "5001-10000":
        priceMatch = numericPrice > 5000 && numericPrice <= 10000;
        break;
      case "10001-20000":
        priceMatch = numericPrice > 10000 && numericPrice <= 20000;
        break;
      default:
        priceMatch = true;
    }

    return titleMatch && priceMatch;
  });

  displayGadgets(filtered);
};

// Theme toggle
const themeSwitcher = document.getElementById("themeSwitcher");

function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

themeSwitcher.addEventListener("change", function () {
  setTheme(this.checked ? "dark" : "light");
});

// Scroll to top
window.onscroll = function () {
  document.getElementById("scrollBtn").style.display =
    window.scrollY > 300 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Event listeners
document.getElementById("search").addEventListener("input", applyFilters);
document.getElementById("priceFilter").addEventListener("change", applyFilters);

// Initial load
window.onload = async () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
  themeSwitcher.checked = savedTheme === "dark";

  const data = await fetchGadgets();
  displayGadgets(data);
};
