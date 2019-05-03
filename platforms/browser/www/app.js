window.fn = {};

window.fn.openMenu = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page, data) {
  var content = document.getElementById('myNavigator');
  var menu = document.getElementById('menu');
  data = { data: { title: page }, animation: 'slide' };
  content.pushPage(page, data).then(menu.close.bind(menu));
};

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'home.html') {
    page.querySelector('#testbutton').onclick = function() {
      document
        .querySelector('#myNavigator')
        .pushPage('1.html', { data: { title: 'Page 1!' } });
    };
  } else if (page.id === '3.html' || page.id === '5.html') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});
