document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault(); 

    let inputs = this.querySelectorAll("input");
    let email = document.getElementById("email").value;
    let mdp = document.getElementById("pwd").value;
    let mdpConf = document.getElementById("pwd_confirm").value;
    let errors = [];

    for (let input of inputs) {
        if (input.value.trim() === "") {
            errors.push("Tous les champs doivent être remplis.");
            break;
        }
    }

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        errors.push("Email invalide.");
    }

    if (mdp !== mdpConf) {
        errors.push("Les mots de passe ne correspondent pas.");
    }

    let messageDiv = document.getElementById("message");
    messageDiv.innerHTML = ""; 

    if (errors.length > 0) {
        messageDiv.innerHTML = `<p style="color:red">${errors.join("<br>")}</p>`;
    } else {
        document.getElementById("form").style.display = "none";

        let recap = "<h2>Récapitulatif</h2>";
        for (let input of inputs) {
            if (input.id !== "pwd" && input.id !== "pwd_confirm") {
                recap += `<p><b>${input.name} :</b> ${input.value}</p>`;
            }
        }
        messageDiv.innerHTML = recap;
    }
});
