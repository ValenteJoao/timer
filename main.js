let tempo = document.querySelector('.tempo');
let iniciar = document.querySelector('.i');
let pausar = document.querySelector('.p');
let reiniciar = document.querySelector('.r');
let visor = document.querySelector('.visor');
let segundos = 0;

function timer(segundos) {
  const data = new Date(1000 * segundos);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: 'GMT'
  })
};

function controlTimer() {
  tempoTela = setInterval(() => {
    segundos++;
    tempo.innerHTML = timer(segundos);
  }, 1000)
};

iniciar.addEventListener('click', () => {
  controlTimer()
  visor.style.border = "5px solid #ffffff00"
});

pausar.addEventListener('click', () => {
  clearInterval(tempoTela)
  visor.style.border = "5px solid red"
});

reiniciar.addEventListener('click', () => {
  clearInterval(tempoTela)
  tempo.innerHTML = '00:00:00'
  segundos = 0;
  visor.style.border = "5px solid #ffffff00"
});


















