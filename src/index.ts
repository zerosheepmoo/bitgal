// 자동으로 defer 적용해줌
console.log('Dom loaded@');
const hello = document.createElement("h1")
hello.textContent = '안녕!'
document.body.appendChild(hello);