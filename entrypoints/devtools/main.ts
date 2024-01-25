browser.devtools.panels.create(
  'oh dev',
  'icon/128.png',
  'devtools-panel.html',
);

browser.devtools.panels.elements
  .createSidebarPane('oh dev')
  .then((pane) => {
    pane.setPage('devtools-pane.html');
  });