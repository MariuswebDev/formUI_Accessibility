const toggleBtn = document.getElementById('toggleButton');
const toggleBtnConfirm = document.getElementById('toggle-Confirm');
const input = document.getElementById('password');
const confirmInput = document.getElementById('confirm-password');

toggleBtn.addEventListener('click', () => {
    input.type = input.type === 'password' ? 'text' : 'password';

})

toggleBtnConfirm.addEventListener('click', () => {
    confirmInput.type = confirmInput.type === 'password' ? 'text' : 'password';

})