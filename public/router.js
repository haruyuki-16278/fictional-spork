import { counterInit } from "./pages/counter/counter.js";

window.addEventListener('hashchange', onRouteChange);
onRouteChange();

async function onRouteChange() {
  // idセレクタで"App"を指定してあるので直接アクセスできてほしい
  await loadRoute(App);
  window.Alpine.initTree(App);
}

async function loadRoute(appElement) {
  switch (window.location.hash) {
    case '#counter':
      appElement.innerHTML = await fetch('/pages/counter/counter.html').then(page => page.text());
      counterInit();
      break;
    case '#helloworld':
    default:
      appElement.innerHTML = await fetch('./pages/helloworld/helloworld.html').then(page => page.text());
      break;
  }
}
