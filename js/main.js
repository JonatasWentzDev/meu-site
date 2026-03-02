gsap.from(".logo img", {
  y: -40,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from("nav a", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
});

gsap.from(".hero h1", {
  x: -80,
  opacity: 0,
  duration: 1.2,
  delay: 0.3,
  ease: "power3.out",
});

gsap.from(".hero p", {
  x: -60,
  opacity: 0,
  duration: 1,
  delay: 0.6,
  ease: "power3.out",
});

gsap.from(".buttons a", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.9,
  stagger: 0.2,
  ease: "power3.out",
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".card, .portfolio-card, .expertise-card").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
});

document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    const numeroDestino = "5511997654321"; // coloque seu número aqui

    const texto = `Olá, me chamo ${nome}.
Email: ${email}
WhatsApp: ${telefone}

Preciso de: ${mensagem}`;

    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(
      texto,
    )}`;

    window.open(url, "_blank");
  });

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
