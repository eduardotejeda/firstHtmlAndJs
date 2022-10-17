function isValidPassword(username, password) { 

    let passLength = password.length;

    if((passLength > 8) && (!password.includes(username) && (password.indexOf(' ') === -1))) {
        return true;
    } else {
        return false;
    }
}                   
