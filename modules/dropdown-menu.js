// Function to open or close a submenu (aka: dropdown menu).
// Only necessary if you need the submenu to stay open with click.
// Has a know bug where resized mobile submenu becomes unclickable (>780 to <780).

// --- Parameters ---
// dropdownMenus: class selector. ie: `[data-dropdown]`,
// default: none, can't be empty
// events: events that will trigger the menu. ie: ["click"],
// default: ["touchstart", "click"]
// activeClass: not a parameter, but configurable,
// class name to be added when the menu is active.

// ONLY NECESSARY IF YOU NEED TO CLICK AN OPTION TO OPEN SUBMENU
// Removed cause it has a bug with mobile touch on links
// ---- Commands to load above, add them to modules ----

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
