// 0311 Scroll Suave Link Interno - Menu Ir devagar para o conteudo.
export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    `[data-menu="suave"] a[href^="#"]`
  );

  function rolarParaSecao(evento) {
    evento.preventDefault();
    const href = evento.currentTarget.getAttribute(`href`); // tem que ser com getAttribute ou entao pega o link inteiro.
    const secaoSelecionada = document.querySelector(href);

    // Forma alternativa de se fazer o smooth.
    // const topo = secaoSelecionada.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });

    secaoSelecionada.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((elem) => {
    elem.addEventListener(`click`, rolarParaSecao);
  });
}
