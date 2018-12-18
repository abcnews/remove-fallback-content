const styles = require('./styles.css');

[].slice.call(document.querySelectorAll('a[name="remove"]')).forEach(startNode => {
  const { parentNode } = startNode;
  const betweenNodes = [];
  const rootEl = document.createElement('div');
  let nextNode = startNode;
  let isMoreContent = true;

  while (isMoreContent && (nextNode = nextNode.nextSibling) !== null) {
    if (
      nextNode &&
      nextNode.nodeType === Node.ELEMENT_NODE &&
      (nextNode.getAttribute('name') || '').indexOf('endremove') === 0
    ) {
      isMoreContent = false;
    } else {
      betweenNodes.push(nextNode);
    }
  }

  rootEl.className = styles.root;
  rootEl.setAttribute('data-component', 'RemoveFallbackContent');
  betweenNodes.forEach(node => rootEl.appendChild(node));
  parentNode.insertBefore(rootEl, startNode);
  parentNode.removeChild(startNode);
  parentNode.removeChild(nextNode);
});
