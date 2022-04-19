//const joinButton = document.getElementById('joinButton');
const password = document.getElementById('password');
const confirm = document.getElementById('confirmPassword');
const errorMsg = document.getElementById('errorMsg');
const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    verify();
})

function verify() {
    if (confirm.value === password.value) {
        errorMsg.textContent = 'Passwords match';
        password.classList.remove('invalid');
        confirm.classList.remove('invalid');
        password.classList.add('valid');
        confirm.classList.add('valid');
    } if (confirm.value !== password.value) {
        errorMsg.textContent = 'Passwords do not match';
        password.classList.remove('valid');
        confirm.classList.remove('valid');
        password.classList.add('invalid');
        confirm.classList.add('invalid');
    } 
}


