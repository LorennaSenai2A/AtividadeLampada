let led = "ligar";

const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("lampada");

  if (led == "ligar") {
    // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/acesa.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada acesa.";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/apagada.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada apagada.";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};


const gerarImagem = () => {
  let qtdImagem = document.getElementById ("inQtdImg").value; //valor infromado pelo usario
  let canvas = document.getElementById("canvas");
  canvas.innerHTML = "";

  console.log(qtdImagem);

for (let i = 1; i <=qtdImagem; i++) {
  canvas.innerHTML += `<img class="imagem" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7q2_7GrF18-7UjrwOzBKxdZk_fhEiiHksc98xiHGk8AmYBWWDskMXQsNxPau9rYmI_U&usqp=CAU" alt="">`
}
};

const calcular = () => {
  let valorPedido = document.getElementById("");
  let percentualDesconto = document.getElementById("");
  let valorDesconto = document.getElementById("");
  let valorLiquedo = document.getElementById("");
}
