/*
  MR. FINLIVO WEBSITE SETTINGS
  Replace the example links below with your real YouTube channel and support email.
*/
const FINLIVO_SETTINGS = {
  youtubeChannelUrl: "https://www.youtube.com/",
  supportEmail: "hello@example.com"
};

document.addEventListener("DOMContentLoaded", () => {
  // Automatically show the current year in footers.
  document.querySelectorAll(".year").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });

  // Connect every YouTube placeholder to the channel URL set above.
  document.querySelectorAll('a[href="https://www.youtube.com/"]').forEach((link) => {
    link.href = FINLIVO_SETTINGS.youtubeChannelUrl;
  });

  // Monthly budget calculator.
  const budgetForm = document.getElementById("budget-form");
  const result = document.getElementById("budget-result");
  if (budgetForm && result) {
    budgetForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const incomeField = document.getElementById("income");
      const expensesField = document.getElementById("expenses");
      const income = Number(incomeField.value);
      const expenses = Number(expensesField.value);

      if (incomeField.value.trim() === "" || expensesField.value.trim() === "" ||
          !Number.isFinite(income) || !Number.isFinite(expenses) || income < 0 || expenses < 0) {
        result.innerHTML = "<p>Please enter valid amounts of ₹0 or more.</p>";
        return;
      }

      const remaining = income - expenses;
      const savingsRate = income > 0 ? (remaining / income) * 100 : 0;
      const formatted = (amount) => new Intl.NumberFormat("en-IN", {
        style: "currency", currency: "INR", maximumFractionDigits: 2
      }).format(amount);

      result.innerHTML = `
        <p>Total income: <strong>${formatted(income)}</strong></p>
        <p>Total expenses: <strong>${formatted(expenses)}</strong></p>
        <p>Remaining balance</p>
        <div class="result-number ${remaining < 0 ? "negative" : ""}">${formatted(remaining)}</div>
        <p>${remaining < 0
          ? "Your expenses are higher than your income. Review your spending plan."
          : `Balance after expenses: ${savingsRate.toFixed(1)}% of your income.`}</p>`;
    });
  }

  // Knowledge library: search and category filter.
  const searchInput = document.getElementById("library-search");
  const categoryFilter = document.getElementById("category-filter");
  const articleCards = Array.from(document.querySelectorAll(".article-card"));
  const libraryCount = document.getElementById("library-count");
  const noArticles = document.getElementById("no-articles");

  function filterArticles() {
    if (!searchInput || !categoryFilter || articleCards.length === 0) return;
    const query = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;
    let visible = 0;

    articleCards.forEach((card) => {
      const matchesText = card.textContent.toLowerCase().includes(query);
      const matchesCategory = category === "all" || card.dataset.category === category;
      const show = matchesText && matchesCategory;
      card.hidden = !show;
      if (show) visible++;
    });

    if (libraryCount) libraryCount.textContent = `Showing ${visible} of ${articleCards.length} articles`;
    if (noArticles) noArticles.hidden = visible !== 0;
  }

  if (searchInput) searchInput.addEventListener("input", filterArticles);
  if (categoryFilter) categoryFilter.addEventListener("change", filterArticles);

  // Expand and collapse article content.
  document.querySelectorAll(".read-button").forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.previousElementSibling;
      if (!content || !content.classList.contains("article-content")) return;
      const open = content.hidden;
      content.hidden = !open;
      button.setAttribute("aria-expanded", String(open));
      button.textContent = open ? "CLOSE ARTICLE −" : "READ ARTICLE +";
    });
  });

  // Registration demo: prepares an email, but does not create a real account.
  const registerForm = document.getElementById("register-form");
  const registerStatus = document.getElementById("register-status");
  if (registerForm && registerStatus) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("register-name").value.trim();
      const email = document.getElementById("register-email").value.trim();
      const interest = document.getElementById("register-interest").value;
      const consent = document.getElementById("register-consent").checked;

      if (!name || !email || !consent) {
        registerStatus.textContent = "Please complete the required fields and consent checkbox.";
        return;
      }

      const subject = encodeURIComponent("Mr. FinLivo registration interest");
      const body = encodeURIComponent(
        "Registration interest (demo form)\n\nName: " + name +
        "\nEmail: " + email + "\nInterest: " + interest +
        "\n\nPlease connect this form to a secure registration service before launch."
      );
      registerStatus.textContent = "Opening your email app to prepare the registration request. This does not create an account yet.";
      window.location.href = `mailto:${FINLIVO_SETTINGS.supportEmail}?subject=${subject}&body=${body}`;
    });
  }

  // Help and suggestions widget. It prepares an email; it does not send automatically.
  const toggle = document.getElementById("help-toggle");
  const panel = document.getElementById("help-panel");
  const close = document.getElementById("help-close");
  const send = document.getElementById("help-send");
  const type = document.getElementById("help-type");
  const message = document.getElementById("help-message");
  const status = document.getElementById("help-status");

  if (toggle && panel && close && send && type && message && status) {
    const setPanelOpen = (open) => {
      panel.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      if (open) message.focus();
      else toggle.focus();
    };

    toggle.addEventListener("click", () => setPanelOpen(panel.hidden));
    close.addEventListener("click", () => setPanelOpen(false));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !panel.hidden) setPanelOpen(false);
    });

    send.addEventListener("click", () => {
      const text = message.value.trim();
      if (!text) {
        status.textContent = "Please enter your question or suggestion first.";
        message.focus();
        return;
      }
      const subject = encodeURIComponent("Mr. FinLivo - " + type.value);
      const body = encodeURIComponent("Message type: " + type.value + "\n\n" + text);
      status.textContent = "Opening your email app. The message will not send until you confirm it there.";
      window.location.href = `mailto:${FINLIVO_SETTINGS.supportEmail}?subject=${subject}&body=${body}`;
    });
  }
});
