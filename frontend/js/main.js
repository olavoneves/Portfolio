function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = "";
  const interval = setInterval(() => {
    if (i < text.length) {
      element.innerHTML = text.substring(0, i + 1);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}

document.getElementById("typewriter").innerHTML = `
  <h1></h1>
`;

document.getElementById('typewriter').innerHTML = `
    <h1>Olá, eu sou o ${userData.name}!</h1>
    <h3>${userData.role}</h3>
`

document.querySelector('h3').addEventListener('click', () => {
    window.location.href = "./pages/about.html"
})