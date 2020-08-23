// Class to animate (hide and show) content when user scrolls the page.

// --- Parameters ---
// sections: section or objects you want to track position
// and animate. ie: `[data-anime="scroll"]`,
// default: none, can't be empty

import debounce from "./debounce.js";

export default class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowPerc = window.innerHeight * 0.8;

    this.checkDistance = debounce(this.checkDistance.bind(this), 25);
  }

  // Find the distance of the object to the top of the site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowPerc),
      };
    });
  }

  // Verify the distance of objects in relation to the scrolled amount.
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");

        // Else to hide objects again if the scroll goes up.
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  // Remove the event scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
