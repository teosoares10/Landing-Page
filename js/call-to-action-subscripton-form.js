import successModal from "./successModal.js"

export default function callToAction() {
    const modalSubscriptionForm = document.querySelector('.js-cta-subscription-form-modal')
    const callToActionButton = document.querySelector('.js-cta-button')
    const callToActionFormButton = document.querySelector('.js-cta-form-button-cancel')
    const subscriptionForm = document.querySelector('.js-cta-subscription-form')
    const modal = document.querySelector('.js-success-modal')

    callToActionButton.addEventListener('click', () => {
        modalSubscriptionForm.showModal()
    })

    callToActionFormButton.addEventListener('click', () => {
        modalSubscriptionForm.close()
    })

    subscriptionForm.addEventListener('submit', (e) => {
        e.preventDefault()

        modal.showModal()

        setTimeout(() => {
            modal.close()
            modalSubscriptionForm.close()
        }, 3500)

        const formInputs = document.querySelectorAll('.js-form-input')
        const formSelects = document.querySelectorAll('.js-form-select')

        formInputs.forEach((input) => {
            input.value = ""
        })

        formSelects.forEach((select) => {
            select.value = ""
        })

    })
}