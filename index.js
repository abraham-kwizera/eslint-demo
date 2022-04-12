let didShowMessage = false;
const message = 'I like logs';

function showMessage() {
    for (let i = 0; i < 5; i += 1) {
        console.log(message);
    }
}

showMessage();