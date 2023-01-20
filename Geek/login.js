alert('para funcionar: email: admin@admin.com     e    senha: 12345');
function logar(){
    var email = document.getElementById("inputEmail");
    var senha = document.getElementById("inputPassword");

    console.log(email.value+senha.value);

    if(email.value == "admin@admin.com" && senha.value == "12345"){
        localStorage.setItem("acesso", true);
        alert("Usuário autenticado!");
        windows.location.href="index.html";
    }else{
        alert("Usuário ou Senha inválidos!");
    }
}