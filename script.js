/* Pradeepa Lakmal — portfolio interactions */

// 1. Sticky navbar shadow on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 8);
});

// 2. Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navInner = document.querySelector(".nav-inner");
menuBtn.addEventListener("click", () => navInner.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach((a) =>
  a.addEventListener("click", () => navInner.classList.remove("open"))
);

// 3. Render skills
const skills = [
  { name: "HTML5", level: "Advanced" },
  { name: "CSS3", level: "Advanced" },
  { name: "Python", level: "Intermediate" },
  { name: "Java", level: "Intermediate" },
  { name: "Databases", level: "Intermediate" },
  { name: "Git & GitHub", level: "Beginner" },
  { name: "AI Concepts", level: "Exploring" },
  { name: "Problem Solving", level: "Intermediate" },
  { name: "Cybersecurity", level: "Beginner" },
  { name: "Business Analysis", level: "Beginner" },
];
const skillsGrid = document.getElementById("skillsGrid");
skillsGrid.innerHTML = skills
  .map(
    (s) => `
    <div class="skill-card">
      <div class="name">${s.name}</div>
      <div class="level">${s.level}</div>
    </div>`
  )
  .join("");

// 4. Render blog posts
const posts = [
  {
    title: "HTML List",
    desc: "A Complete Guide from Beginner to Expert semantics, styling, accessibility, and real-world patterns.",
    meta: ["Upcoming", "Medium"],
  },
];
const blogGrid = document.getElementById("blogGrid");
blogGrid.innerHTML = posts
  .map(
    (p) => `
    <article class="blog-card">
      <div class="blog-meta">${p.meta.map((m) => `<span>${m}</span>`).join("")}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <span class="soon">Available</span>
    </article>`
  )
  .join("");

// 5. Contact form
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  status.className = "form-status";
  status.textContent = "";

  if (!name || !email || !message) {
    status.classList.add("error");
    status.textContent = "Please fill in all required fields.";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.classList.add("error");
    status.textContent = "Please enter a valid email.";
    return;
  }
  status.classList.add("success");
  status.textContent = "Thanks! Your message has been sent.";
  form.reset();
});
