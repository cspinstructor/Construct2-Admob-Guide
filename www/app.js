window.fn = {};

window.fn.openMenu = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page, mytitle) {
  var content = document.getElementById('myNavigator');
  var menu = document.getElementById('menu');
  data = { data: { title: mytitle }, animation: 'slide' };
  content.pushPage(page, data).then(menu.close.bind(menu));
};

document.addEventListener('init', function(event) {
  var page = event.target;
  //-- scroll to top of home page --
  if (page.id === 'home.html') {
    page.querySelector('#backToTopBtn').onclick = function() {
      document.querySelector('#myNavigator').pushPage('home.html', {
        data: { title: 'Page 1!' },
        animation: 'lift'
      });
    };
  } else if (page.id === 'home.html') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;

    //--- admob ---
    showBannerAd();
  } else if (page.id === '5.html' || page.id === '10.html') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;

    //--- admob ---
    showRewardedVideoAd();
  } else {
    //-- impt sets the page title --
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;

    //--- admob ---
    showInterstitialAd();
  }
});

//--- ADMOB---
window.onload = function() {
  document.addEventListener('deviceready', initApp);
};

function initApp() {
  //--- Admob in ads.js ----
  initAds();
}
