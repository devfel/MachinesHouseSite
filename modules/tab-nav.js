// 0309 Criando Tabulação no Site, clica na imagem para mostrar o conteudo correto em texto.
export default function initTabNav() {
  const tabMenu = document.querySelectorAll(`[data-tab="menu"] li`);
  const tabContent = document.querySelectorAll(`[data-tab="content"] section`);

  function activeTab(index) {
    tabContent.forEach((elem) => {
      elem.classList.remove(`ativo`);
    });
    const direcaoAnimacao = tabContent[index].dataset.anime;
    tabContent[index].classList.add(`ativo`, direcaoAnimacao);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(`ativo`);

    tabMenu.forEach((element, indice) => {
      element.addEventListener(`click`, () => {
        activeTab(indice);
      });
    });
  }
}
