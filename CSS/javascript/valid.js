var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var age = document.getElementById("age");
var email = document.getElementById("emailAddress");
var phoneno = document.getElementById("phoneNo");
var submitBtn = document.getElementById("submit-btn");

var firstName1 = document.getElementById("firstName5");
var lastName1 = document.getElementById("lastName5");
var age1 = document.getElementById("age5");
var email1 = document.getElementById("emailAddress5");
var phoneno1 = document.getElementById("phoneNo5");

var name_regex = /^[a-zA-Z]{0,20}$/;
var age_regex = /^(?:1[01][0-9]|1[8-9]|[2-9][0-9]|[2-9][0-9][0-9]|1[2-9][0-9])$/;
var email_regex = /\S+@\S+\.\S+/;
var phone_regex = /^[0-9]{10}$/;

submitBtn.disabled = "true";



let inputValidator = {
    "firstn": false,
    "lastn": false,
    "ageperson": false,
    "emailid": false,
    "phonenumber": false
};

firstName.addEventListener('input', validateFirstName)
lastName.addEventListener('input', validateLastName)
age.addEventListener('input', validateAge)
email.addEventListener('input', validateEmail)
phoneno.addEventListener('input', validatePhoneNo)

function buttonRelease(){

    console.log(inputValidator);

    var result = inputValidator.firstn === true && inputValidator.lastn === true && inputValidator.ageperson === true && inputValidator.emailid === true && inputValidator.phonenumber === true;
     console.log(result);
    if(result){

        submitBtn.removeAttribute("disabled");
        console.log("Submit button active");
        submitBtn.style.opacity="100%";
    }
    else{
        submitBtn.disabled = "true";
        console.log("Submit button not active");
        submitBtn.style.opacity="55%";
    }
}

function validateFirstName() {

    var msg1=document.getElementById("fname");

    console.log(firstName.value);

    if (name_regex.test(firstName.value)) {
        valid(firstName);
        msg1.innerHTML="";
        inputValidator.firstn = true;
        buttonRelease();
    }
    else {

        invalid(firstName);
        inputValidator.firstn = false;
        
        msg1.innerHTML="Only 20 characters allowed*";

    }
}

function validateLastName() {
    var msg2=document.getElementById("lname");
    console.log(lastName.value);

    if (name_regex.test(lastName.value)) {
        valid(lastName);
        msg2.innerHTML="";
        inputValidator.lastn = true;
        buttonRelease();
        
    }
    else {

        invalid(lastName);
        inputValidator.lastn = false;
        
        msg2.innerHTML="Only 20 characters allowed*";

    }

}

function validateAge() {
    var msg3=document.getElementById("age1");
    console.log(age.value);

    if (age_regex.test(age.value)) {
        valid(age);
        msg3.innerHTML="";
        inputValidator.ageperson = true;
        buttonRelease();
        
    }
    else {

        invalid(age);
        inputValidator.ageperson = false;
        buttonRelease();
        
        msg3.innerHTML="Only 18-999 age group allowed*";

    }

}

function validateEmail() {
    var msg4=document.getElementById("email1");

    console.log(email.value);

    if (email_regex.test(email.value)) {
        valid(email);
        msg4.innerHTML="";
        inputValidator.emailid = true;console.log("dasd");
        buttonRelease();
        
    }
    else {

        invalid(email);
        inputValidator.emailid = false;
        
        msg4.innerHTML="Valid email should be entered*";

    }

}

function validatePhoneNo() {
    var msg5=document.getElementById("phone1");

    if (phone_regex.test(phoneno.value)) {
        valid(phoneno);
        msg5.innerHTML="";
        inputValidator.phonenumber = true;
        buttonRelease();   
    }
    else {

        invalid(phoneno);
        inputValidator.phonenumber = false;  
        msg5.innerHTML="Phone number should contain 10 digits*";

    }
    
}

function valid(element){

    element.style.borderColor = "green";
    element.style.borderWidth = "thin thick";


}

function invalid(element){
    

    element.style.borderColor = "red";
    element.style.borderWidth = "thin thick";

}

function buttonpress() {
    var spform = document.getElementById("form2");
    spform.style.display = "block";
    document.getElementById("submit-btn").style.display="none";
    document.getElementById("back1").style.display="none";
    document.getElementById("addpass").style.display="none";
    sessionStorage.setItem("p2p",1)
    
}

sessionStorage.setItem("p2p",0)

function submitconfirmation(){
    var gender = document.querySelector('input[type=radio][name=gender]:checked');
    sessionStorage.setItem("fname",firstName.value);
    sessionStorage.setItem("lname",lastName.value);
    sessionStorage.setItem("age",age.value);
    sessionStorage.setItem("email",email.value);
    sessionStorage.setItem("phone",phoneno.value);
    sessionStorage.setItem("gender",gender.value);
}
function detail_submit(){
    
    var gender = document.querySelector('input[type=radio][name=gender]:checked');
    sessionStorage.setItem("fname",firstName.value);
    sessionStorage.setItem("lname",lastName.value);
    sessionStorage.setItem("age",age.value);
    sessionStorage.setItem("email",email.value);
    sessionStorage.setItem("phone",phoneno.value);
    sessionStorage.setItem("gender",gender.value);

    var gender1 = document.querySelector('input[type=radio][name=gender1]:checked');
    sessionStorage.setItem("fname5",firstName1.value);
    sessionStorage.setItem("lname5",lastName1.value);
    sessionStorage.setItem("age5",age1.value);
    sessionStorage.setItem("email5",email1.value);
    sessionStorage.setItem("phone5",phoneno1.value);
    sessionStorage.setItem("gender5",gender1.value);
    
}