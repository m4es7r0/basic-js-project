// const axios = require('axios').default;
import { postData } from "../services/services";

export function forms(formSelector) {

    // Forms
    // если используется XMLHttpRequest и FormData заголовки запроса устанавливать не нужно (setRequestHeader).

    const forms = document.querySelectorAll(formSelector);

    forms.forEach(form => bindPostData(form));
    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            //XML
            // // FormData берет значение из атрибутов "name" тегов input

            // trick который позволяет данные из FormData присвоить объекту P.S. нужен когда планируется отправлять JSON
            // const obj = {};
            // formData.forEach((value, key) => obj[key] = value);

            // Legasy solution formData in JSON
            // const obj = {}
            // formData.forEach((value, key) => obj[key] = value)

            const formData = new FormData(form);
            const formDataObj = Object.fromEntries(formData.entries(formData));

            postData(form, formDataObj)
        })
    }
}