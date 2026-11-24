const problemas = {
  rampa: {
    titulo: "Rampa interditada",
    fotos: ["IMG-20261106-WA0009.jpg"],
    impactos:
      "Dificulta o acesso de pessoas com mobilidade reduzida e obriga o uso de escadas.",
    melhorias:
      "Solicitar à direção informações sobre a interdição e pedir avaliação técnica para reabrir a rampa."
  },
  entrada: {
    titulo: "Entrada pelo estacionamento",
    fotos: ["IMG_20261119_064221.jpg"],
    impactos:
      "Estudantes dividem o espaço com veículos, o que pode representar risco à segurança.",
    melhorias:
      "Solicitar à direção informações sobre a interdição e pedir avaliação técnica para reabrir a rampa."
  },
  cobertura: {
    titulo: "Áreas sem teto",
    fotos: ["IMG-20261106-WA0003.jpg"],
    impactos:
      "Risco de queda da cobertura e exposição a fios elétricos.",
    melhorias:
      "Solicitar a instalação de cobertura nesses trechos."
  },
  quadra: {
    titulo: "Quadra escolar",
    fotos: ["imagens/quadra.jpg"],
    impactos:
      "Buracos na cobertura podem causar goteiras e limitar o uso da quadra.",
    melhorias:
      "Pedir avaliação técnica e reparo da cobertura."
  }
};

const botoes = document.querySelectorAll(".botoes-problemas button");
const detalhes = document.getElementById("detalhes-problema");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const p = problemas[botao.dataset.problema];
    if (!p) return;

    const fotos = p.fotos
      .map((src) => `<img src="${src}" alt="${p.titulo}" loading="lazy">`)
      .join("");

    detalhes.innerHTML = `
      <h3>${p.titulo}</h3>
      <div class="galeria-problema">${fotos}</div>
      <p><strong>Possíveis impactos:</strong> ${p.impactos}</p>
      <p><strong>Propostas de melhoria:</strong> ${p.melhorias}</p>
    `;

    botoes.forEach((b) => b.classList.toggle("ativo", b === botao));
  });
});
