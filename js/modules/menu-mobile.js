import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(button, list, events) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(list);
    this.active = "active";
    this.openMenu = this.openMenu.bind(this);
    // laço if else define "touchstart" e "click" como
    // argumentos padrões de events caso usuario não defina
    if (events === undefined) {
      this.events = ["click", "touchstart"];
    } else {
      this.events = events;
    }
  }

  openMenu(event) {
    event.preventDefault();
    this.menuButton.classList.add(this.active);
    this.menuList.classList.add(this.active);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.active);
      this.menuButton.classList.remove(this.active);
    });
  }
  addMenuMobileEvents() {
    this.events.forEach((evento) => {
      if (evento === "touchstart") {
        evento.preventDefault;
      } else {
        this.menuButton.addEventListener(evento, this.openMenu);
      }
    });
  }
  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
