document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
      "You have power over your mind — not outside events. – Marcus Aurelius",
      "We suffer more often in imagination than in reality. – Seneca",
      "If it is not right, do not do it; if it is not true, do not say it. – Marcus Aurelius",
      "He who angers you conquers you. – Elizabeth Kenny",
      "Dwell on the beauty of life. – Marcus Aurelius"
    ];
  
    const quoteBox = document.getElementById("quote-box");
    const quoteBtn = document.getElementById("quote-btn");
  
    if (quoteBox && quoteBtn) {
      quoteBtn.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteBox.textContent = quotes[randomIndex];
      });
    }
  });
  