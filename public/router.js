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
      appElement.innerHTML = await fetch('/pages/counter.html').then(page => page.text());
      break;
    case '#helloworld':
    default:
      appElement.innerHTML = await fetch('./pages/helloworld.html').then(page => page.text());
      break;
  }
}
