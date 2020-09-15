function check() {
    let fioRegex = /^[А-ЯA-Z]([а-яa-z])+\s[А-ЯA-Z]([а-яa-z])+\s[А-ЯA-Z]([а-яa-z])+$/;
    let fioInput = document.getElementById("fio");

    if (!fioRegex.test(fioInput.value))
        fioInput.setCustomValidity("Неверный формат ФИО");
    else
        fioInput.setCustomValidity("");


    let phoneRegex = /^[+][7|3][0-9]{9,11}$/;
    let phoneInput = document.getElementById("phone");

    if (!phoneRegex.test(phoneInput.value))
        phoneInput.setCustomValidity("Неверный формат номера телефона");
    else
        phoneInput.setCustomValidity("");
}
