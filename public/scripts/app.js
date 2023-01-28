const sendButton = document.querySelector('.button');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('send button clicked');

    let formData = {
        name: name.value,
        email: email.value,
        message: message.value
    };

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/contact-me', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = () => {
        if (xhr.responseText == 'Success') {

            alert('Email Sent Sucessfully');
            console.log(xhr.responseText)

            name.value = '';
            email.value = '';
            message.value = '';
        } else {
            alert('Something Went Wrong');
        }
    }
    xhr.send(JSON.stringify(formData));

});

