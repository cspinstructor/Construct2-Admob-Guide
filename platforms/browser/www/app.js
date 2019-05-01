window.fn = {};

window.fn.open = function() {
  //var menu = document.getElementById('menu');
  var menu = $('#menu')[0];
  menu.open();
};

window.fn.load = function(page) {
  //var content = document.getElementById('content');
  var content = $('#content')[0];
  //var menu = document.getElementById('menu');
  var menu = $('#menu')[0];
  content.load(page).then(menu.close.bind(menu));
};
