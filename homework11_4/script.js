function h(str,sys = 16) {
    let s = 0;
    for (let i = 0; i < str.length; i++) {
        s += str.charCodeAt(i);
    }
    return (s % 256).toString(sys);
}

let users = [];

function findUserByName(name) {
    console.log(users)
    for (let user of users) {
        if (user.name === name) {
            return user
        }
    }
}

function signUp() {
    let name = prompt ("Имя пользователя", "");
    let pass = prompt ("Пароль", "");
    let hash = h(pass);
    users.push({
        name: name,
        pass: hash
    })
    alert(`Пользователь успешно зарегистрирован`)
}


function signIn() {
    let name = prompt ("Имя пользователя", "");
    let pass = prompt ("Пароль", "");
    let hash = h(pass);
    let user = findUserByName(name);
    if (user) {
        if (user.pass === hash) {
            alert ("Вы успешно авторизованы")
        } else {
            alert ("Неверный пароль")
        }
    } else {
        alert ("Неверное имя пользователя")
    }
}

