// let duration = 0.8;
// let delay = 0.3;
// let revealText = document.querySelector('.reveal');
// let letters = revealText.textContent.split('');
// revealText.textContent = '';
// let middle = letters.filter((e) => e !== ' ').length / 2;
// letters.forEach((letter, i) => {
//   let span = document.createElement('span');
//   span.textContent = letter;
//   span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
//   revealText.append(span);
// });


const duration = 0.8;
const delay = 0.3;
let revealDiv = document.querySelector('.reveal');
const revealItem = revealDiv.textContent.split('');
revealDiv.textContent = '';
const middleCount = revealItem.filter(item => item !== '  ').length / 2;
revealItem.forEach((item,i) => {
  let addSpan = document.createElement('span');
  addSpan.textContent = item;
  addSpan.style.animationDelay = `${delay + Math.abs(i - middleCount) * 0.1}s`;
  revealDiv.append(addSpan)
})
