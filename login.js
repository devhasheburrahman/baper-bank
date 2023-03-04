document.getElementById('btn-submit').addEventListener('click', function () {
    const emmailField = document.getElementById('user-email');
    const email = emmailField.value;
    const passwordField = document.getElementById('user-password');
    passwod = passwordField.value;
    if (email === 'hasib@gmail.com' && passwod === 'hasib') {
        console.log('vaild email')
        window.location.href = 'baperBank.html';
    }

    else {
        alert('your email ar password is wronk pleasse type right email or password')
    }
})