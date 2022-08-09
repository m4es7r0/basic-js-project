import axios from "axios"
import { closeModal, openModal } from "../modules/modal";

export const postData = (form, formDataObj) => {
    const messages = {
        loading: './img/spinner.svg',
        success: 'all fine 👌',
        failure: 'error'
    }

    const statusMessage = document.createElement('img');
    statusMessage.src = messages.loading;
    statusMessage.style.cssText = `
                display: block;
                margin: 20px auto;
                height: 30px;
            `;

    form.append(statusMessage);
    form.insertAdjacentElement('afterend', statusMessage);

    function showThanksModal(messages) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal('.modal');

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-closeModal >&times;</div>
                <div class="modal__title">${messages}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.toggle('hide');
            closeModal('.modal');
        }, 2000)
    }

    axios.post('http://localhost:3000/requests', formDataObj)
        .then(data => {
            showThanksModal(messages.success)
        }).catch(() => {
            showThanksModal(messages.failure)
        }).finally(() => {
            form.reset()
            statusMessage.remove()
        })
}

export const getCardInfo = (classCard) => {
    axios.get('http://localhost:3000/menu')
        .then(res => {
            res.data.forEach(({ img, altimg, title, descr, price, currency }) => {
                new classCard('.menu__field .container', img, altimg, title, descr, price, currency).render()
            })
        })
}