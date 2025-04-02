document.addEventListener("DOMContentLoaded", function () {
  console.log('JavaScript file is loaded and DOM is ready!');

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


  // Data for all philosophers
  const philosophersData = {
    socrates: {
      name: "Socrates",
      teaching: "The only true wisdom is in knowing you know nothing.",
      bio: "Socrates emphasized ethical inquiry through dialogue and the pursuit of virtue. He encouraged people to question assumptions and examine their lives to gain deeper understanding.",
      image: "images/socrates-statue.jpg"
    },
    plato: {
      name: "Plato",
      teaching: "The greatest wealth is to live content with little.",
      bio: "Plato founded the Academy and explored justice, truth, and the ideal forms. He believed in a higher reality beyond physical existence and that reason leads us to truth.",
      image: "images/plato-statue.jpg"
    },
    aristotle: {
      name: "Aristotle",
      teaching: "Knowing yourself is the beginning of all wisdom.",
      bio: "Aristotle emphasized logic, empirical observation, and ethics based on achieving virtue and balance (the 'Golden Mean'). He influenced nearly every field of knowledge.",
      image: "images/aristotle.jpg"
    },
    heraclitus: {
      name: "Heraclitus",
      teaching: "No man ever steps in the same river twice.",
      bio: "Heraclitus believed in constant change and the unity of opposites. He saw fire as the fundamental element and 'logos' as the guiding principle of the universe.",
      image: "images/heraclitus.jpg"
    },
    epicurus: {
      name: "Epicurus",
      teaching: "Do not spoil what you have by desiring what you have not.",
      bio: "Epicurus taught that pleasure, defined as the absence of pain, is the greatest good. He emphasized friendship, simple living, and peace of mind over material wealth.",
      image: "images/epicurus.jpg"
    }
  };

  // Show featured philosophers (defaults)
  const featuredPhilosophers = ["socrates", "plato", "aristotle"];
  const featuredContainer = document.getElementById("featuredPhilosophers");

  featuredPhilosophers.forEach(key => {
    const phil = philosophersData[key];
    const section = document.createElement("section");
    section.innerHTML = `
      <h3>${phil.name}</h3>
      <img src="${phil.image}" alt="${phil.name}" class="section-image">
      <p><em>"${phil.teaching}"</em></p>
    `;
    featuredContainer.appendChild(section);
  });

  // Search interaction
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const searchResult = document.getElementById("searchResult");

  function showPhilosopher(name) {
    const key = name.toLowerCase().trim();
    const phil = philosophersData[key];
    searchResult.innerHTML = ""; // Clear previous

    if (phil) {
      const card = document.createElement("div");
      card.classList.add("philosopher-card");
      card.innerHTML = `
        <img src="${phil.image}" alt="${phil.name}" class="philosopher-image">
        <p class="philosopher-teaching"><em>"${phil.teaching}"</em></p>
        <p class="philosopher-bio">${phil.bio}</p>
      `;
      searchResult.appendChild(card);
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
});
