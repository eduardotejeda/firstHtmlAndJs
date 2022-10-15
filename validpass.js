function isValidPassword(username, password) { 

    let passLength = password.length;

    if(passLength >= 8 && password.includes(username)); {
        return true;
    } else {
        return false;
    }
}                   
