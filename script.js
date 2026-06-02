const perguntas = [

{
pergunta:"Você recebeu um link desconhecido pelo WhatsApp. O que fazer?",
opcoes:["Abrir imediatamente","Verificar a origem antes"],
correta:1
},

{
pergunta:"Uma senha segura deve conter:",
opcoes:["Apenas números","Letras, números e símbolos"],
correta:1
},

{
pergunta:"Ao comprar online você deve:",
opcoes:["Verificar HTTPS","Confiar apenas no preço"],
correta:0
},

{
pergunta:"Você deve compartilhar códigos de verificação?",
opcoes:["Não","Sim"],
correta:0
},

{
pergunta:"Golpes podem chegar por:",
opcoes:["E-mail falso","Somente telefone"],
correta:0
}

];

let indice = 0;
let pontos = 0;

function iniciarQuiz(){

indice = 0;
pontos = 0;

mostrarPergunta();

}

function mostrarPergunta(){

if(indice >= perguntas.length){

document.getElementById("pergunta").innerHTML =
`Você acertou ${pontos} de ${perguntas.length} perguntas!`;

document.getElementById("opcoes").innerHTML = "";

document.getElementById("resultado").innerHTML =
pontos >= 4
? "🎉 Excelente! Você está atento à segurança digital."
: "📚 Continue estudando para navegar com mais segurança.";

return;
}

const atual = perguntas[indice];

document.getElementById("resultado").innerHTML = "";
document.getElementById("pergunta").innerText = atual.pergunta;

let html = "";

atual.opcoes.forEach((opcao, i) => {

html += `
<button onclick="responder(${i})">
${opcao}
</button>
`;

});

document.getElementById("opcoes").innerHTML = html;

}

function responder(opcao){

if(opcao === perguntas[indice].correta){
pontos++;
}

indice++;

mostrarPergunta();

}

iniciarQuiz();