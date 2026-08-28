const modalBtn = document.querySelector('.more')
const modal = document.querySelector('.modal')

modalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

//modal__close
modal.addEventListener('click', (event) => {
    const targer = event.target

    if (targer.classList.contains('overlay') || targer.classList.contains('modal__close')) {
        modal.classList.add('hidden')
    }
})