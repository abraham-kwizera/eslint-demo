const message = 'I like logs';

function showMessage() {
    for (let i = 0; i < 5; i += 1) {
        //eslint-disable-next-line no-console
        console.log(message);
    }
}

showMessage();