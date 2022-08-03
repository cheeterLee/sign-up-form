const firstName = document.querySelector('#first-nmae');
const firstNameError = document.querySelector('#first-name-error');

firstName.addEventListener('input', (e) => {
    if (firstName.value === '') {
        firstNameError.textContent = 'Please enter your first name.';
    } else {
        firstNameError.textContent = '';
    }
});
