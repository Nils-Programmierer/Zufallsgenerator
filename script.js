const options = document.getElementById("anzahl");
const names = document.getElementById("names");



options.addEventListener("input", () => {
    const value = options.value;

    if (value >= 2 && value <= 20) {
        names.innerHTML = "";

        for (let i = 0; i < value; i++) {
            const input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("placeholder", "Option " + (i + 1));
            input.setAttribute("id", (i + 1));
            names.appendChild(input);
            names.appendChild(document.createElement("br"));
        }

    }
});


function Generate() {
    const value = options.value;

    if (value >= 2 && value <= 20) {
        const inputs = names.querySelectorAll('input[type="text"]');
        let optionName = Array.from(inputs).map(input => input.value);


        const isValid = optionName.every(value => {
            return (
                value.length > 0 &&
                value.length <= 15 &&
                !/<|>|&|script|on[a-z]+=|javascript:/i.test(value)
            );
        });

        if (isValid) {
            const randomValue = optionName[Math.floor(Math.random() * optionName.length)];
            Show(randomValue);
        } else {
            console.error("Ungültige Eingabe! Es sind nur Werte bis 15 Zeichen erlaubt, ohne Quellcode.");
            alert("Bitte gebe gültige Werte ein!");
        }
    }
}


function Show(randomValue) {
    input.style.display = "none";
    output.style.display = "block";
    btn.innerHTML = "Nochmal!";
    result.innerHTML = randomValue;
}


function New() {
    options.value = "";
    output.style.display = "none";
    input.style.display = "block";
    btn.innerHTML = "Generieren";
    result.innerHTML = "";
    names.innerHTML = `<input id="Option1" placeholder="Option 1" type="text">
                       <br>
                       <input id="Option2" placeholder="Option 2" type="text"></input>`;
}