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
  let qtdImagem = document.getElementById("inQtdImg").value; //valor infromado pelo usario
  let canvas = document.getElementById("canvas");
  canvas.innerHTML = "";

  console.log(qtdImagem);

  for (let i = 1; i <= qtdImagem; i++) {
    canvas.innerHTML += `<img class="imagem" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7q2_7GrF18-7UjrwOzBKxdZk_fhEiiHksc98xiHGk8AmYBWWDskMXQsNxPau9rYmI_U&usqp=CAU" alt="">`;
  }
};

const calcular = () => {
  console.log("Funcionou!");
  let valorPedido = document.getElementById("inValorPedido");
  let perDesconto = document.getElementById("inPercDesc");
  let valDesconto = document.getElementById("inValDesc");
  let valFinal = document.getElementById("inValFinal");

  // switch (true) {
  //   case valorPedido >= 2000
  //   perDesconto.value = 1.5
  //     break;
  // case valorPedido >= 1500
  // perDesconto.value = 1.0
  // break;
  // case valorPedido >= 1000
  //   percDesconto.value = 0.8
  // break;
  //   case valorPedido >= 500
  //   percDesconto.value = 0.5
  //     break;
  // }

  // valDesconto.value = (valorPedido.value * perDesconto.value) / 100;
  //     valFinal.value = valorPedido.value - valDesconto.value;

  if (valorPedido.value >= 2000) {
    perDesconto.value = 1.5;
    valDesconto.value = (valorPedido.value * perDesconto.value) / 100;
    valFinal.value = valorPedido.value - valDesconto.value;
  } else if (valorPedido.value >= 1500) {
    perDesconto.value = 1.0;
    valDesconto.value = (valorPedido.value * perDesconto.value) / 100;
    valFinal.value = valorPedido.value - valDesconto.value;
  } else if (valorPedido.value >= 1000) {
    perDesconto.value = 0.8;
    valDesconto.value = (valorPedido.value * perDesconto.value) / 100;
    valFinal.value = valorPedido.value - valDesconto.value;
  } else if (valorPedido.value >= 500) {
    perDesconto.value = 0.5;
    valDesconto.value = (valorPedido.value * perDesconto.value) / 100;
    valFinal.value = valorPedido.value - valDesconto.value;
  }
};

const validaForm = () => {
  let msgErro = document.getElementById("mensagem-erro");
  let inData = document.getElementById("inData").value;
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inProd = document.getElementById("inProd").value;
  let inQtd = document.getElementById("inQtd").value;
  let inVal = document.getElementById("inVal").value;

  msgErro.style.display = "block";

  //apagando as informações de erro:
  msgErro.innerText = "";

  //validação dos dados:
  inData == "" && (msgErro.innerHTML += "Data inválida <br>");

  inCli == "" && (msgErro.innerHTML += "Nome do cliente inválido <br>");
  inCli.length < 3 &&
    (msgErro.innerHTML += "Nome do cliente com tamanho inválido <br>");

  inFone == "" && (msgErro.innerHTML += "Telefone inválida <br>");

  inMail == "" && (msgErro.innerHTML += "E-mail inválida <br>");
  inMail.length < 10 && (msgErro.innerHTML += "E-mail inválida <br>");

  inProd == "" && (msgErro.innerHTML += "Produto inválida <br>");
  inProd.length < 6 && (msgErro.innerHTML += "Produto inválida <br>");

  inQtd == "" && (msgErro.innerHTML += "  Qtde inválida <br>");
  inQtd < 0 && (msgErro.innerHTML += "  Qtde negativo inválida <br>");

  inVal == "" && (msgErro.innerHTML += "Valor inválida <br>");
  inVal < 0 && (msgErro.innerHTML += "Valor negativo inválida <br>");

  //mostrar | ocultar erro:
  msgErro.innerText == ""
    ? ((msgErro.style.display = "none"), (msgErro.innerText = "enviado!"))
    : ((msgErro.style.display = "block"), msg.classList.remove("verde"));

  msgErro.innerText == "enviado!" &&
    ((msgErro.style.display = "block"),
    (msgErro.innerText = "Formulário enviado com sucesso!"),
    msgErro.classList.add("verde"));
};
