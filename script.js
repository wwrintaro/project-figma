
function removeHide() {
    let pop = document.querySelector('.pop-up');

    pop.classList.remove('hide')

    let body = document.querySelector('main');

    body.classList.add('hide')
}
