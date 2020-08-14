// 0310 Criando Accordion List, como se fosse um FAQ, no sobre.
export default function initAccordion() {
  const accordionListTitles = document.querySelectorAll(
    `[data-anime="accordion"] dt`
  );

  function activeAccordion() {
    this.classList.toggle(`ativo`);
    this.nextElementSibling.classList.toggle(`ativo`);
    // Pode ser event.currentTarget no lugar do this, se passar o event de parametro nesta funcao.
  }

  if (accordionListTitles.length) {
    accordionListTitles[0].classList.add(`ativo`);
    accordionListTitles[0].nextElementSibling.classList.add(`ativo`);

    accordionListTitles.forEach((element) => {
      element.addEventListener(`click`, activeAccordion);
    });
  }
}
