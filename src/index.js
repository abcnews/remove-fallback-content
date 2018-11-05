require('./polyfills');
const { getSections } = require('../node_modules/odyssey/src/app/utils/anchors');
const styles = require('./styles.css');

getSections(['remove']).forEach(section => {
  const rootEl = document.createElement('div');

  rootEl.className = styles.root;
  rootEl.setAttribute('data-component', 'RemoveFallbackContent');
  section.betweenNodes.forEach(node => rootEl.appendChild(node));
  section.substituteWith(rootEl, []);
});
