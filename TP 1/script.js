document.querySelector("form").addEventListener("submit", function(e){
    let inputs = this.querySelectorAll ("input");
    for (let inout of inputs) {
        if (inputs.value.trim() === " ") {
            e.preventDefault();
            alert ("Chaque champs doivent être remplis.")
            return;
        }
    }
    alert ("Formulaire valide.")
});