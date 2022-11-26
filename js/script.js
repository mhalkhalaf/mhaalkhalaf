var st = false
let ShowLoginPas = document.querySelector('#showlogin')
let ClosLoginPas = document.querySelector('#closlogin')
let ShowsignPas = document.querySelector('#showsign')
let ClossignPas = document.querySelector('#clossign')
let ShowsignPas2 = document.querySelector('#showsign2')
let ClossignPas2 = document.querySelector('#clossign2')

function login() {
    if (st) {
        document.querySelector('#passwordlogin').setAttribute('type', 'password');
        ShowLoginPas.classList.add('d-none')
        ClosLoginPas.classList.remove('d-none')
        st = false
    } else {
        document.querySelector('#passwordlogin').setAttribute('type', 'text');
        ClosLoginPas.classList.add('d-none')
        ShowLoginPas.classList.remove('d-none')
        st = true
    }
}

function sign() {
    if (st) {
        document.querySelector('#signupPassword').setAttribute('type', 'password');
        ShowsignPas.classList.add('d-none')
        ClossignPas.classList.remove('d-none')
        st = false
    } else {
        document.querySelector('#signupPassword').setAttribute('type', 'text');
        ClossignPas.classList.add('d-none')
        ShowsignPas.classList.remove('d-none')
        st = true
    }
}

function signr() {
    if (st) {
        document.querySelector('#signupPasswordRNew').setAttribute('type', 'password');
        ShowsignPas2.classList.add('d-none')
        ClossignPas2.classList.remove('d-none')
        st = false
    } else {
        document.querySelector('#signupPasswordRNew').setAttribute('type', 'text');
        ClossignPas2.classList.add('d-none')
        ShowsignPas2.classList.remove('d-none')
        st = true
    }
}