export function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector)

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = 'visible';
}

export function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector)

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

export function modal(modalSelector, triggerSelector) {

    // Modal

    const modal = document.querySelector(modalSelector),
        modalOpen = document.querySelectorAll(triggerSelector);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector)
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    modalOpen.forEach(btn => btn.addEventListener('click', () => openModal(modalSelector)))

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-closeModal') === '') closeModal(modalSelector)
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) closeModal(modalSelector)
    });

    window.addEventListener('scroll', showModalByScroll)
    return modal
}