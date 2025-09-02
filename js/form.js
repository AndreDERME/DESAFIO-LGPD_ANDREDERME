
//class contato

class contato {
    constructor(nome, email, telefone, tipo, mensagem, aceitouTermos, aceitouNewsletter) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipo = tipo;
        this.mensagem = mensagem;
        this.aceitouTermos = aceitouTermos;
        this.aceitouNewsletter = aceitouNewsletter;
    }

}

function validarEnvio() {
    const termosCheckbox = document.getElementById("termosCheckbox");
    const enviarBtn = document.getElementById("enviarBtn");

    enviarBtn.disabled = !termosCheckbox.checked;
}

function Post(form) {

    const termosCheckbox = document.getElementById("termosCheckbox");
    const newsletterCheckbox = document.getElementById("newsletterCheckbox");


    if (!termosCheckbox.checked) {
        alert("Por favor, aceite os termos e condições para enviar o formulário.")
        return false;
    }

    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("tipo").value,
        form.elements.namedItem("mensagem").value,
        termosCheckbox.checked,
        newsletterCheckbox.checked);

    console.log("Dados do formulário:", data);

    alert(`Obrigado, ${data.nome}! Sua mensagem de ${data.tipo} foi enviada com sucesso.`);

    termosCheckbox.checked = false;
    newsletterCheckbox.checked = false;

    validarEnvio();

    form.reset();
}

document.addEventListener('DOMContentLoaded', function(){
    validarEnvio();
})