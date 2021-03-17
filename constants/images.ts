import {imagesProxy} from "../utils/proxies/imagesProxy";

const imagesBasePath = "/images/";

const imagesInnerPaths = {
  base: "",
  main: "main",
  footer: "footer",
  downloadApp: "download-app",
  mock: "mock",
};

const footer = {
  arrowLeft: "arrow-left.svg",
  mask: "mask.svg",
  main: "main.png",
  enamad: "enamad.png",
  instagram: "instagram.svg",
  mail: "mail.svg",
  scrollToTop: "scroll-to-top.svg",
  responsiveMask: "responsive-mask.svg",
};

const main = {
  main: "main.png",
  main2x: "main@2x.png",
  main3x: "main@3x.png",
  mainBg: "main-background.png",
  mainBg2x: "main-background@2x.png",
  mainBg3x: "main-background@3x.png",
  scrollToWrapper: "scroll-to-wrapper.svg",
};

const downloadApp = {
  bazaar: "bazaar.png",
  bazaar2x: "bazaar@2x.png",
  bazaar3x: "bazaar@3x.png",
  googlePlay: "google-play.png",
  googlePlay2x: "google-play@2x.png",
  googlePlay3x: "google-play@3x.png",
  sibche: "sibche.png",
  sibche2x: "sibche@2x.png",
  sibche3x: "sibche@3x.png",
  sibApp: "sibApp.png",
  sibApp2x: "sibApp@2x.png",
  sibApp3x: "sibApp@3x.png",
};

const mock = {
  user1: "36.jpg",
  user2: "60.jpg",
  user3: "65.jpg",
  user4: "79.jpg",
};

const base = {
  arrowRight: "arrow-right.svg",
  logo: "logo.png",
  menu: "menu.svg",
  close: "close.svg",
  submit: "submit.svg",
};

const allImages = {
  base,
  main,
  footer,
  downloadApp,
  mock,
};

export const images = imagesProxy(imagesBasePath, allImages, imagesInnerPaths);
