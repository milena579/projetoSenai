var nomeGlobal;
var mensagemGlobal;
var dateGlobal;

function formatData(date){
    var options = {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
    };
    return date.toLocaleString("pt-BR", options);
}

function confereMensagemWpp(){
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var date =  new Date();

    nomeGlobal = nome;
    mensagemGlobal = mensagem;
    dateGlobal = date;

    document.getElementById('confNome').textContent = nome;
    document.getElementById('confObs').textContent = mensagem;
    document.getElementById('confDate').textContent = formatData(date);

}

function enviar(){
    numeroTelefone = '5541999999999';

    var link = "https://wa.me" + numeroTelefone + "?text=NOME DO RECPTOR(A):" + 
        nomeGlobal + 
        " - " + 
        mensagemGlobal + 
        " - " + 
        formatData(dateGlobal)

    window.open(link, "_blank")
}