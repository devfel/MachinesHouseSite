import SmoothScroll from "./modules/smooth-scroll.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/horario-func.js";
import feathStores from "./modules/fetch-stores.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import AnimaScroll from "./modules/anima-scroll.js";

const smoothScroll = new SmoothScroll(`[data-menu="suave"] a[href^="#"]`);
smoothScroll.init();

const accordion = new Accordion(`[data-animate="accordion"] dt`);
accordion.init();

const tabNav = new TabNav(
  `[data-tab="menu"] li`,
  `[data-tab="content"] section`
);
tabNav.init();

const modal = new Modal(
  `[data-modal="abrir"]`,
  `[data-modal="fechar"]`,
  `[data-modal="container"]`
);
modal.init();

const tooltip = new Tooltip(`[data-tooltip]`);
tooltip.init();

const animaScroll = new AnimaScroll(`[data-anime="scroll"]`);
animaScroll.init();

const dropdownMenu = new DropdownMenu(`[data-dropdown]`);
dropdownMenu.init();

const menuMobile = new MenuMobile(`[data-menu="button"]`, `[data-menu="list"]`);
menuMobile.init();

feathStores(`./storesapi.json`, `.numbers-grid`);
fetchBitcoin(`https://blockchain.info/ticker`, `.btc-preco`);

initFuncionamento();
