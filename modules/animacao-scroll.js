// 0312 Animação ao Descer Scroll da Página
export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll(`[data-anime="scroll"]`);
  const windowPerc = window.innerHeight * 0.8;

  function animaScroll() {
    sections.forEach((elem) => {
      const sectionTop = elem.getBoundingClientRect().top;
      const isSectionReadyForAnim = sectionTop - windowPerc < 0;

      if (isSectionReadyForAnim) {
        elem.classList.add(`ativo`);
      }

      // para tirar a animação se quiser, o else pois remove a classe ativo da section.
      else if (elem.classList.contains(`ativo`)) {
        elem.classList.remove(`ativo`);
      }
    });
  }

  if (sections.length) {
    animaScroll(); // primeira ativação quando site iniciou.

    window.addEventListener(`scroll`, animaScroll);
  }
}
