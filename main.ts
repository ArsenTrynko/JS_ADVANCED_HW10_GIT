let info = []

document.querySelector('#add_user').addEventListener('click',function(): void {
    let check = ''
    if((document.querySelector('#login') as HTMLInputElement).validity.patternMismatch ||(document.querySelector('#login') as HTMLInputElement).validity.valueMissing ){
        (document.querySelector('#login') as HTMLInputElement).style.border = '3px solid red';
    }
    if((document.querySelector('#login') as HTMLInputElement).validity.valid
    ){
        (document.querySelector('#login') as HTMLInputElement).style.border = '';
        check += '+'
    }
    if((document.querySelector('#password') as HTMLInputElement).validity.patternMismatch || (document.querySelector('#password') as HTMLInputElement).validity.valueMissing ){
        (document.querySelector('#password') as HTMLInputElement).style.border = '3px solid red';
    }
    if((document.querySelector('#password') as HTMLInputElement).validity.valid){
        (document.querySelector('#password') as HTMLInputElement).style.border = '';
        check += '+'
    }
    if((document.querySelector('#email') as HTMLInputElement).validity.patternMismatch || (document.querySelector('#email') as HTMLInputElement).validity.valueMissing ){
        (document.querySelector('#email') as HTMLInputElement).style.border = '3px solid red';
    }
    if((document.querySelector('#email') as HTMLInputElement).validity.valid){
        (document.querySelector('#email') as HTMLInputElement).style.border = '';
        check += '+'
    }
    if(check == '+++'){
        addUser()
    }
});

document.querySelector('#edit_user').addEventListener('click',function(): void {
    let check: string = ''
    if((document.querySelector('#login') as HTMLInputElement).validity.patternMismatch || (document.querySelector('#login') as HTMLInputElement).validity.valueMissing ){
        (document.querySelector('#login') as HTMLInputElement).style.border = '3px solid red';
    }
    if((document.querySelector('#login') as HTMLInputElement).validity.valid){
        (document.querySelector('#login') as HTMLInputElement).style.border = '';
        check += '+'
    }
    if((document.querySelector('#password') as HTMLInputElement).validity.patternMismatch || (document.querySelector('#password') as HTMLInputElement).validity.valueMissing ){
        (document.querySelector('#password') as HTMLInputElement).style.border = '3px solid red';
    }
    if((document.querySelector('#password') as HTMLInputElement).validity.valid){
        (document.querySelector('#password') as HTMLInputElement).style.border = '';
        check += '+'
    }
    if((document.querySelector('#email') as HTMLInputElement).validity.patternMismatch || (document.querySelector('#email') as HTMLInputElement).validity.valueMissing ){
        (document.querySelector('#email') as HTMLInputElement).style.border = '3px solid red';
    }
    if((document.querySelector('#email') as HTMLInputElement).validity.valid){
        (document.querySelector('#email') as HTMLInputElement).style.border = '';
        check += '+'
    }
    if(check == '+++'){
        saveEditUser();
    }
});






function addUser(): void{
    let LOGIN: string = (document.querySelector('#login') as HTMLInputElement).value;
    let PASSWORD: string = (document.querySelector('#password') as HTMLInputElement).value;
    let EMAIL: string = (document.querySelector('#email') as HTMLInputElement).value;
    let newUser: object = {index:0,login:LOGIN,password:PASSWORD,email:EMAIL};

    info.push(newUser); 

    render();

    $('.delete_btn').on('click', deleteUser);
    $('.edit_btn').on('click',editUser);

}

function deleteUser(){
    let obj: number = Number($(this).parent().parent().children().first().text()) 
    info.splice(obj - 1,1) ;
    render()
    $('.delete_btn').on('click', deleteUser);
    $('.edit_btn').on('click',editUser);

}

let global_userIndex;

function editUser(){
    let obj: number = Number($(this).parent().parent().children().first().text()) 
    let userIndex = obj - 1;
    global_userIndex = userIndex;
    (document.querySelector('#add_user') as HTMLButtonElement).style.display = 'none';
    (document.querySelector('#edit_user') as HTMLButtonElement).style.display = 'block';
    (document.querySelector('#login') as HTMLInputElement).value = info[userIndex].login;
    (document.querySelector('#password') as HTMLInputElement).value = info[userIndex].password; 
    (document.querySelector('#email')as HTMLInputElement).value = info[userIndex].email;  
    $('.delete_btn').each(function(index,elem){
        (elem as HTMLButtonElement).disabled = true;
    })
    $('.delete_btn').addClass('delete_btn_disabled')
    $('.delete_btn').css('cursor','not-allowed')

    
}


function saveEditUser(){
    let EDIT_LOGIN = (document.querySelector('#login')as HTMLInputElement).value;
    let EDIT_PASSWORD = (document.querySelector('#password')as HTMLInputElement).value;
    let EDIT_EMAIL = (document.querySelector('#email')as HTMLInputElement).value;
    let editUserInfo = {index:0,login:EDIT_LOGIN,password:EDIT_PASSWORD,email:EDIT_EMAIL}
    info[global_userIndex] = editUserInfo;
    document.forms.f1.reset();
    render();
    (document.querySelector('#add_user') as HTMLButtonElement).style.display = 'block';
    (document.querySelector('#edit_user')as HTMLButtonElement).style.display = 'none';
    $('.delete_btn').each(function(index,elem){
        (elem as HTMLButtonElement).disabled = false;
    })
    $('.delete_btn').on('click', deleteUser);
    $('.edit_btn').on('click', editUser);

}




function render(){
    let obj_count = info.length;
    document.querySelector('.table').innerHTML = '<tr><td>#</td><td>Login</td><td>Password</td><td>Email</td><td>Edit</td><td>Delete</td></tr>';
    for(let i = 0;i < obj_count;i++){
        info[i].index = i;
        document.querySelector('.table').insertAdjacentHTML('beforeend',`<tr id="person${info[i].index + 1}"><td>${info[i].index + 1}</td><td>${info[i].login}</td><td>${info[i].password}</td><td>${info[i].email}</td><td><button type="button" class="edit_btn">Edit</button></td><td><button type="button" class="delete_btn">Delete</button></td></tr>`)
    }
    document.forms.f1.reset();
}