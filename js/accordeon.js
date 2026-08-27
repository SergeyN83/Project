const lists = document.querySelectorAll('.feature-sub')
const btns = document.querySelectorAll('.feature__link')


btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {

        const isActive = btnItem.classList.contains('feature__link_active')

        if (isActive) {
            lists.forEach((listItem) => {
                btnItem.classList.remove('feature__link_active')
                listItem.classList.add('hidden')
            })
        }
        else {
            btnItem.classList.add('feature__link_active')
            lists[index].classList.remove('hidden')
        }

    })


})