function signup(username) {
    let arr=[
        'Jone',
        'Smith',
        'Alice',
        'Bob'
    ];
    if(arr.includes(username)){
        return 'Username Already Registered, Please Login';
    }   
    else{
        arr.push(username);
        return 'Signup Successful,Please Login';
    }
}
function login(userName, password) {
    let arr=[
        'Jone',
        'Smith',
        'Alice',
        'Bob',
        'Charlie',
    ];
    let pass=[
        'password123',
        'securepass',
        'mypassword',
        'strongpass',
        'Emp@123'
    ];
    
    let index=arr.indexOf(userName);
    if(index!==-1 && pass[index]==='Emp@123'){
        return 'Login Successful...';
    }
    else if(index===-1){
        return 'Wrong Password...';
    }
    else{
        return 'User No Found , Please Signup';
    }
}

console.log(signup('Alice',));
console.log(login('Charlie','mypassword'));
