let emailButton = document.getElementById('btn-form');
emailButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email');
    saveData(email.value);
})

function saveData(email) {
    console.log(email);
}
