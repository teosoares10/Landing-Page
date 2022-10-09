export default function successModal() {
    const modal = document.querySelector('.js-success-modal')
    const form = document.querySelector('.js-event-description-form')
    

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        modal.showModal()

        setTimeout(() => {
            modal.close()
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
