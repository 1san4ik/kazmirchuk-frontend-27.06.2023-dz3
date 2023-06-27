let userName = prompt('Введіть ваше ім\'я:');
if (userName === '') {
    alert('Привіт Незнайомець! Як твої справи?');
} else if (userName === null) {
    alert('Привіт Незнайомець! Як твої справи?');
} else {
    alert('Привіт ' + userName + '! Як твої справи?');
}