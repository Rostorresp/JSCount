
let numCounter = 0;
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        numCounter += styles.contains('decrease') ? -1 : styles.contains('increase') ? 1 : 0;
        value.textContent = numCounter;
        value.style.color = numCounter > 0 ? 'green' : numCounter < 0 ? 'red' : 'black';
    });
});
