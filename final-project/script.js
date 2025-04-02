document.addEventListener("DOMContentLoaded", function () {
  const alertButton = document.getElementById('alertButton');
  if (alertButton) {
    alertButton.addEventListener('click', function () {
      const userResponse = confirm("Do you want to learn more about Greek Philosophy?");
      if (userResponse) {
        window.location.href = "philosophers.html";
      } else {
        alert("No problem! Feel free to explore at your own pace.");
      }
    });
  }

  const philosophersData = {
    socrates: {
      name: "Socrates",
      teaching: "The only true wisdom is in knowing you know nothing.",
      bio: "Socrates emphasized ethical inquiry through dialogue and the pursuit of virtue. He encouraged people to question assumptions and examine their lives to gain deeper understanding.",
      image: "images/socrates.jpg"
    },
    plato: {
      name: "Plato",
      teaching: "The greatest wealth is to live content with little.",
      bio: "Plato founded the Academy and explored justice, truth, and the ideal forms.",
      image: "images/plato.jpeg"
    },
    aristotle: {
      name: "Aristotle",
      teaching: "Knowing yourself is the beginning of all wisdom.",
      bio: "Aristotle emphasized logic, empirical observation, and ethics based on achieving virtue and balance.",
      image: "images/aristotle.jpg"
    },
    heraclitus: {
      name: "Heraclitus",
      teaching: "No man ever steps in the same river twice.",
      bio: "Heraclitus believed in constant change and the unity of opposites.",
      image: "images/heraclitus.jpg"
    },
    epicurus: {
      name: "Epicurus",
      teaching: "Do not spoil what you have by desiring what you have not.",
      bio: "Epicurus taught that peace and pleasure come from modesty, friendship, and thoughtful living.",
      image: "images/epicurus.jpg"
    }
  };

  const featuredContainer = document.getElementById("featuredPhilosophers");
  if (featuredContainer) {
    ["socrates", "plato", "aristotle"].forEach(key => {
      const phil = philosophersData[key];
      const section = document.createElement("section");
      section.classList.add("scroll-reveal");
      section.innerHTML = `
        <h3>${phil.name}</h3>
        <img src="${phil.image}" alt="${phil.name}" class="section-image" width="300" height="350" loading="lazy">
        <p><em>"${phil.teaching}"</em></p>
      `;
      featuredContainer.appendChild(section);
    });
  }

  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const searchResult = document.getElementById("searchResult");

  function showPhilosopher(name) {
    const key = name.toLowerCase().trim();
    const phil = philosophersData[key];
    searchResult.innerHTML = "";

    if (phil) {
      const card = document.createElement("div");
      card.classList.add("philosopher-card", "scroll-reveal");
      card.innerHTML = `
        <img src="${phil.image}" alt="${phil.name}" class="philosopher-image" width="200" height="250" loading="lazy">
        <p class="philosopher-teaching"><em>"${phil.teaching}"</em></p>
        <p class="philosopher-bio">${phil.bio}</p>
      `;
      searchResult.appendChild(card);
      revealOnScroll();
    } else {
      searchResult.textContent = "Philosopher not found. Try Socrates, Plato, Aristotle, Heraclitus, or Epicurus.";
    }
  }

  if (searchButton && searchInput && searchResult) {
    searchButton.addEventListener("click", () => {
      showPhilosopher(searchInput.value);
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        showPhilosopher(searchInput.value);
      }
    });
  }

  function revealOnScroll() {
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Quote Rotator
  const quotes = [
    `"Know thyself." — Temple of Apollo at Delphi`,
    `"The unexamined life is not worth living." — Socrates`,
    `"Happiness depends upon ourselves." — Aristotle`,
    `"The greatest wealth is to live content with little." — Plato`,
    `"Nothing endures but change." — Heraclitus`,
    `"Do not spoil what you have by desiring what you have not." — Epicurus`
  ];

  const quoteElement = document.getElementById("quoteRotator");
  if (quoteElement) {
    let currentIndex = 0;
    setInterval(() => {
      currentIndex = (currentIndex + 1) % quotes.length;
      quoteElement.textContent = quotes[currentIndex];
    }, 5000); // every 5 seconds
  }
});
