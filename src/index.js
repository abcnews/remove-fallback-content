const Anchors = require('../node_modules/odyssey/src/app/utils/anchors');

function init(){
  Anchors.getSections([
    'remove'
  ]).forEach(section => {
    section.betweenNodes.forEach(node => node.parentNode.removeChild(node));
  });
}

init();