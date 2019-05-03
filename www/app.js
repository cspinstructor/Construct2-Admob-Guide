// document.addEventListener('init', function(event) {
//   var page = event.target;
//   console.log('test...');
//   if (page === '1.html') {
//     page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
//     page.querySelector('ons-toolbar .left').innerHTML =
//       '<ons-back-button>Home</ons-back-button>';
//   }
// });

window.fn = {};

window.fn.openMenu = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');

  var menu = document.getElementById('menu');

  content.load(page).then(menu.close.bind(menu));
};

function goHome() {
  fn.load('home.html');
}

window.fn.pushPage = function(page) {
  // document
  //   .getElementById('appNavigator')
  //   .pushPage(page, { data: { title: page.title }, animation: 'slide' });
  document.getElementById('appNavigator').pushPage(page);
};
