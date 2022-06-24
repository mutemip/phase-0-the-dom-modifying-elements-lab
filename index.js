// Write your code here!
const mainDom = document.querySelector('main#main');
mainDom.remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";

newHeader.innerHTML = "Paul Mutemi is the champion";
// newHeader.className = 'victory'
