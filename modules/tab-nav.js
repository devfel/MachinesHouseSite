// Function that create the tab navigation on the website.
// ie: clicking on a image to show/hide a content.

// --- Parameters ---
// menu: used to select the elements to be clicked. ie: `[data="menu"] li`
// default menu: none, can't be empty
// content: used to select the elements to be shown: ie: `[data="content"] section`
// default content: none, can't be empty

export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = `active`;
  }

  activeTab(index) {
    this.tabContent.forEach((elem) => {
      elem.classList.remove(this.activeClass);
    });
    const direcaoAnimacao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcaoAnimacao);
  }

  // function that add events to the tabs.
  addTabNavEvent() {
    this.tabMenu.forEach((element, indexAux) => {
      element.addEventListener("click", () => {
        this.activeTab(indexAux);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0); // activate first tab;
      this.addTabNavEvent();
    }
  }
}
