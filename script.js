document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const length = document.getElementById('length').value;
    const password = generatePassword(length);

    document.getElementById('result').innerText = password;
});

function generatePassword(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
