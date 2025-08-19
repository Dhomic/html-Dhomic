function validarSenha() {
    const especial = ['$', '%', '&', '*', '(', ')', '+', '=', '{', '}', ';', ':', '"', '?', '/', '|', '`', '~'];
    const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const senha = document.getElementById("senha").value;
    let valid;

    if (senha.length < 8) {
        valid = "Senha Fraca";
    } else if (senha.length >= 8 && num.some(n => senha.includes(n))) {
        if (especial.some(e => senha.includes(e))) {
            valid = "Senha Forte";
        } else {
            valid = "Senha Média";
        }
    } else {
        valid = "Senha Média";
    }

    document.getElementById("valid").textContent = valid;
    return false; // Prevent form submission
}