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

console.log(signup('Alice','password123'));
console.log(signup('Charlie','mypassword'));
