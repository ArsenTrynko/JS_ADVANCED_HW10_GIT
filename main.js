let info = [];
document.querySelector('#add_user').addEventListener('click', function () {
    let check = '';
    if (document.querySelector('#login').validity.patternMismatch || document.querySelector('#login').validity.valueMissing) {
        document.querySelector('#login').style.border = '3px solid red';
    }
    if (document.querySelector('#login').validity.valid) {
        document.querySelector('#login').style.border = '';
        check += '+';
    }
    if (document.querySelector('#password').validity.patternMismatch || document.querySelector('#password').validity.valueMissing) {
        document.querySelector('#password').style.border = '3px solid red';
    }
    if (document.querySelector('#password').validity.valid) {
        document.querySelector('#password').style.border = '';
        check += '+';
    }
    if (document.querySelector('#email').validity.patternMismatch || document.querySelector('#email').validity.valueMissing) {
        document.querySelector('#email').style.border = '3px solid red';
    }
    if (document.querySelector('#email').validity.valid) {
        document.querySelector('#email').style.border = '';
        check += '+';
    }
    if (check == '+++') {
        addUser();
    }
});
document.querySelector('#edit_user').addEventListener('click', function () {
    let check = '';
    if (document.querySelector('#login').validity.patternMismatch || document.querySelector('#login').validity.valueMissing) {
        document.querySelector('#login').style.border = '3px solid red';
    }
    if (document.querySelector('#login').validity.valid) {
        document.querySelector('#login').style.border = '';
        check += '+';
    }
    if (document.querySelector('#password').validity.patternMismatch || document.querySelector('#password').validity.valueMissing) {
        document.querySelector('#password').style.border = '3px solid red';
    }
    if (document.querySelector('#password').validity.valid) {
        document.querySelector('#password').style.border = '';
        check += '+';
    }
    if (document.querySelector('#email').validity.patternMismatch || document.querySelector('#email').validity.valueMissing) {
        document.querySelector('#email').style.border = '3px solid red';
    }
    if (document.querySelector('#email').validity.valid) {
        document.querySelector('#email').style.border = '';
        check += '+';
    }
    if (check == '+++') {
        saveEditUser();
    }
});
function addUser() {
    let LOGIN = document.querySelector('#login').value;
    let PASSWORD = document.querySelector('#password').value;
    let EMAIL = document.querySelector('#email').value;
    let newUser = { index: 0, login: LOGIN, password: PASSWORD, email: EMAIL };
    info.push(newUser);
    render();
    $('.delete_btn').on('click', deleteUser);
    $('.edit_btn').on('click', editUser);
}
function deleteUser() {
    let obj = Number($(this).parent().parent().children().first().text());
    info.splice(obj - 1, 1);
    render();
    $('.delete_btn').on('click', deleteUser);
    $('.edit_btn').on('click', editUser);
}
let global_userIndex;
function editUser() {
    let obj = Number($(this).parent().parent().children().first().text());
    let userIndex = obj - 1;
    global_userIndex = userIndex;
    document.querySelector('#add_user').style.display = 'none';
    document.querySelector('#edit_user').style.display = 'block';
    document.querySelector('#login').value = info[userIndex].login;
    document.querySelector('#password').value = info[userIndex].password;
    document.querySelector('#email').value = info[userIndex].email;
    $('.delete_btn').each(function (index, elem) {
        elem.disabled = true;
    });
    $('.delete_btn').addClass('delete_btn_disabled');
    $('.delete_btn').css('cursor', 'not-allowed');
}
function saveEditUser() {
    let EDIT_LOGIN = document.querySelector('#login').value;
    let EDIT_PASSWORD = document.querySelector('#password').value;
    let EDIT_EMAIL = document.querySelector('#email').value;
    let editUserInfo = { index: 0, login: EDIT_LOGIN, password: EDIT_PASSWORD, email: EDIT_EMAIL };
    info[global_userIndex] = editUserInfo;
    document.forms.f1.reset();
    render();
    document.querySelector('#add_user').style.display = 'block';
    document.querySelector('#edit_user').style.display = 'none';
    $('.delete_btn').each(function (index, elem) {
        elem.disabled = false;
    });
    $('.delete_btn').on('click', deleteUser);
    $('.edit_btn').on('click', editUser);
}
function render() {
    let obj_count = info.length;
    document.querySelector('.table').innerHTML = '<tr><td>#</td><td>Login</td><td>Password</td><td>Email</td><td>Edit</td><td>Delete</td></tr>';
    for (let i = 0; i < obj_count; i++) {
        info[i].index = i;
        document.querySelector('.table').insertAdjacentHTML('beforeend', `<tr id="person${info[i].index + 1}"><td>${info[i].index + 1}</td><td>${info[i].login}</td><td>${info[i].password}</td><td>${info[i].email}</td><td><button type="button" class="edit_btn">Edit</button></td><td><button type="button" class="delete_btn">Delete</button></td></tr>`);
    }
    document.forms.f1.reset();
}
//# sourceMappingURL=main.js.map