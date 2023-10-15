let form = document.getElementById("main");
let loginbtn = document.getElementById("btnn");
let ans = document.getElementById("done");

loginbtn.addEventListener('click', (e)=>{
    const username = document.getElementById('id').value;
    const password = document.getElementById('Password').value;

    const isUsernameValid = username.length >= 9 && username[0] === username[0].toUpperCase() && /[!@#$%^&*]/.test(username);
    const isPasswordValid = password.length >= 9 && password.length <= 20 && /[!@#$%^&*]/.test(password);

    if(isUsernameValid && isPasswordValid){
        ans.innerText=`congatulation 🥳 Login done! Username:${ username} '\n Password':${password}`;
    }else{
        alert('Invalid username or password. Please check it again!')
    }

})
