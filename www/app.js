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
  //-- if - left here for future reference --
  if (page.id === 'home.html') {
    page.querySelector('#testbutton').onclick = function() {
      document
        .querySelector('#myNavigator')
        .pushPage('1.html', { data: { title: 'Page 1!' }, animation: 'slide' });
    };
    //-- else if - left here for future reference --
  } else if (page.id === '99.html' || page.id === '100.html') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else {
    //-- impt sets the page title --
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});
