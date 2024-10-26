function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name) {
        alert("Veuillez entrer votre nom.");
        return false;
    }

    if (!email.match(emailPattern)) {
        alert("Veuillez entrer un email valide.");
        return false;
    }

    if (!message) {
        alert("Veuillez entrer votre message.");
        return false;
    }

    alert("Formulaire soumis avec succès !");
    return true;
}
