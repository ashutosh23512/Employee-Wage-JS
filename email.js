const emailRegex = RegExp("^abc.*$");

function emailTest(email){
    if(emailRegex.test(email))console.log("Valid Email");
    else throw "Email Id is Invalid";
}

try{
    emailTest("abc@gmail.com");
}catch(e){
    console.error(e);
}

try{
    emailTest("@gmail.com");
}catch(e){
    console.error(e);
}