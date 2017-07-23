function gravar() {
    var xhr = new XMLHttpRequest();

    var nome = document.getElementById("inputNome").value;
    var email = document.getElementById("inputEmail").value;
    var ocupacao = document.getElementById("inputOcupacao").value;
    var idade = document.getElementById("inputIdade").value;

    var params = "nome=" + nome + 
        "&email=" + email +
        "&ocupacao=" + ocupacao +
        "&idade=" + idade;

    xhr.open('POST', 'usuario', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        alert(this.responseText);
    };
    xhr.send(params);
}