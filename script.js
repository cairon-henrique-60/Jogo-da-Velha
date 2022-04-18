//Declaração das variáveis
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer; //Variável para selecionar o player

// Contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o evento de click aos boxes
for(let i = 0; i < boxes.length; i++) {
//quando alguem clica na caixa
  boxes[i].addEventListener("click", function(){
    
    let el = checkEl(player1, player2);

    if(this.childNodes.length == 0) {

        let cloneEl = el.cloneNode(true);

        this.appendChild(cloneEl);

//computar jogada
        if(player1 == player2) {
            player1++;
//aqui estou condicionando caso o jogador se a IA
        if(secondPlayer == 'ai-player') {
//função para incrementar a jogada
        computerPlay();
          player2++;
        }
        } else {
            player2++;
        }

// checa quem é o vencedor
        checkWinCondition();
    }

  });

}

//evento para saber se e 2 players ou a IA
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
//aqui eu pego o atributo dos botoes com getAtribute("id") 
       secondPlayer = this.getAttribute("id");
      
      for(let j = 0; j < buttons.length; j++) {
        buttons[j].style.display = 'none';
      }
//função que mostra o tabulero apor meio segundo que os players forem defidos
      setTimeout(function(){
//desta forma eu removo a class hide que está com o display none no CSS
        let container = document.querySelector("#container");  
        container.classList.remove("hide");        
      }, 500);

    });
}

// função para ver quem vai jogar
function checkEl(player1, player2) {
    if(player1 == player2) {
        el = x;
    } else {
        el = o; 
    } 
    return el;
}

//quem ganhou
function checkWinCondition() {
//declaração das variáveis de cada quadrado do jogo da Velha
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

// condicionais de vitória horizontais
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if(b1child == 'x' && b2child == 'x' && b3child == 'x') {
//vencedor e o X
            declareWinner('x')
        } else if(b1child == 'o' && b2child == 'o' && b3child == 'o') {
// vencedor é o O
            declareWinner('o')
        }

    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;

        if(b4child == 'x' && b5child == 'x' && b6child == 'x') {
//vencedor e o X
            declareWinner('x')
        } else if(b4child == 'o' && b5child == 'o' && b6child == 'o') {
// vencedor é o O
            declareWinner('o')
        }

    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b7child == 'x' && b8child == 'x' && b9child == 'x') {
//vencedor e o X
            declareWinner('x')
        } else if(b7child == 'o' && b8child == 'o' && b9child == 'o') {
// vencedor é o O
            declareWinner('o')
        }

    }

//condicionais de vitória na vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1child = b1.childNodes[0].className;
        let b4child = b4.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if(b1child == 'x' && b4child == 'x' && b7child == 'x') {
//vencedor e o X
            declareWinner('x')
        } else if(b1child == 'o' && b4child == 'o' && b7child == 'o') {
// vencedor é o O
            declareWinner('o')
        }

    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2child = b2.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b8child = b8.childNodes[0].className;

        if(b2child == 'x' && b5child == 'x' && b8child == 'x') {
//vencedor e o X
            declareWinner('x')
        } else if(b2child == 'o' && b5child == 'o' && b8child == 'o') {
// vencedor é o O
            declareWinner('o')
        }

    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3child = b3.childNodes[0].className;
        let b6child = b6.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b3child == 'x' && b6child == 'x' && b9child == 'x') {
//vencedor e o X
            declareWinner('x')
        } else if(b3child == 'o' && b6child == 'o' && b9child == 'o') {
// vencedor é o O
            declareWinner('o')
        }

    }

//condicinais de vitória na diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b1child == 'x' && b5child == 'x' && b9child == 'x') {
//vencedor e o X
            declareWinner('x')
        } else if(b1child == 'o' && b5child == 'o' && b9child == 'o') {
// vencedor é o O
            declareWinner('x')
        }

    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3child = b3.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if(b3child == 'x' && b5child == 'x' && b7child == 'x') {
//vencedor e o X
            declareWinner('x')
        } else if(b3child == 'o' && b5child == 'o' && b7child == 'o') {
// vencedor é o O
            declareWinner('o')
        }

    }

// contador que nos vai dizer quando o jogo der velha velha
    let counter = 0;
//foi usado o childeNodes para acessar o elemento filho e incrementar o contador.
    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }
    //agora eu fiz uma condicional para que se o contador chegar a 9 vai dar velha.
    if(counter == 9) {
        declareWinner('Deu velha!');
    }
    
}

//função que limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner) {
//aqui eu declarei as variaveis que seram atualizadas com a função declareWinner
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardY = document.querySelector("#scoreboard-2");
    let msg = '';

    if(winner == 'x') {
//agrora eu transformei o texto do placar que e 0 em um numero inteiro e somou + 1 na pontuação do jogador
      scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;     
      msg = "O jogador 1 venceu!";
    } else if(winner == 'o') {
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;     
        msg = "O jogador 2 venceu!";
    } else {
        msg = "Deu velha!";
    }

//exibe a msg
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

//função que após 3 segundos a clesse hide será incrementada novamente e a msg será apagada
    setTimeout(function() {
        messageContainer.classList.add("hide");
    }, 3000);

//zera as jogadas
   player1 = 0;
   player2 = 0;

//função para remover os caracters X e O
//aqui eu seleciono todos os filhos dentro da div pai box
   let boxesToRemove = document.querySelectorAll(".box div");

//aqui agora eu removo os elementos filho da div pai boxes com o parentNode
   for(let i = 0; i < boxes.length; i ++) {
      boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
   }

}

//lógica para a IA executar a jogada
function computerPlay() {
//primeiro eu clonei o O
  let cloneO = o.cloneNode(true);
//primeiro eu crio um contados que vai contar as jogadas
  counter = 0;
//e uma vai ser preenchido   
  filled = 0;

  for(let i = 0; i < boxes.length; i++) {
//agora eu crio um numero aleatorio com math.random que todas vez que ele passar no loop ele cria um número aleátorio
   let randomNumber = Math.floor(Math.random() * 5);   
//aqui agora eu executo a logica para saber se os elementos filhos da class boxes está definida e se não eu posso incrementar um elemento   
//sendo assim so irá preencher se o elemento filho estiver vazio
   if(boxes[i].childNodes[0] ==  undefined) {
// agora eu condiocionando a função randomNumber a ser menor que um eu aumento a aleatoriedade dele, desta forma ele nao irá preencher em sequência               
   if(randomNumber <= 1) {
       boxes[i].appendChild(cloneO);
//como a função randomNumber e menor ou igual a 1, o contador vai impedir que o loop se tornar recurssiva        
       counter++;
       break;
       }
//checagem de quantas estão preenchidas       
   } else {
     filled++;
    }

  }

  if(counter == 0 && filled < 9) {
    computerPlay();
  }

 
}