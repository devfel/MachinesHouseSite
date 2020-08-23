// Function to open or close a submenu (aka: dropdown menu).
// Only necessary if you need the submenu to stay open with click.
// Has a know bug where resized mobile submenu becomes unclickable
// Only happens if it goes from >780px to <780px window width.

// --- Parameters ---
// dropdownMenus: class selector. ie: `[data-dropdown]`,
// default: none, can't be empty
// events: events that will trigger the menu. ie: ["click"],
// default: ["touchstart", "click"]
// activeClass: not a parameter, but configurable,
// class name to be added when the menu is active.

import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    // Define touchstart and click as default args
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.activeClass = "active";

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length && window.innerWidth > 780) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
