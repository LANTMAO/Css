// 类名选择
// let landInTexts = document.querySelectorAll('.landIn');
// console.log(landInTexts);
// landInTexts.forEach((landInText) => {
//   let letters = landInText.textContent.split('');
//   landInText.textContent = '';
//   letters.forEach((letter, i) => {
//     let span = document.createElement('span');
//     span.textContent = letter;
//     span.style.animationDelay = `${i * 0.05}s`;
//     landInText.append(span);
//   });
// });

// ID 选择
let landP = document.getElementById('landP');
console.log(landP);
letterSpan = landP.textContent.split('');
landP.textContent = '';
letterSpan.forEach((item, i) => {
  let addSpan = document.createElement('span');
  addSpan.textContent = item;
  addSpan.style.animationDelay = `${i * 0.05}s`;
  landP.append(addSpan);
});
