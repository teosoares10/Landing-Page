export default function darkMode() {
    const html = document.documentElement
    const modeButton = document.querySelector('.js-mode-icon')
    const keyBenefits = document.querySelectorAll('.js-key-benefits__benefit')

    modeButton.addEventListener('click', () => {
        html.toggleAttribute('data-dark-mode')

        if(html.hasAttribute('data-dark-mode')){
            keyBenefits.forEach((benefit) => {
                benefit.toggleAttribute('data-text-color')
            })
            modeButton.classList.toggle("c-button--color--dark")
        } else {
            keyBenefits.forEach((benefit) => {
                benefit.toggleAttribute('data-text-color')
            })
            modeButton.classList.toggle("c-button--color--dark")
        }
    })

}

