function validateEmail (email) {
    const REGEX_EMAIL = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (REGEX_EMAIL.test(email)) {
        console.log(`${email} is an email address`);
    } else {
        console.log(`${email} is not an email address`);
    }
}

validateEmail ('a@gmail.com')
validateEmail ('ab@yahoo.com')
validateEmail ('abc@hotmail.com')
validateEmail ('@gmail.com')
validateEmail ('ab@gmail.')
validateEmail ('@#abc@gmail.com')