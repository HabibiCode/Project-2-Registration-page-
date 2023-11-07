const submission = document.getElementById("submission");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const country = document.getElementById("country");
const dateofbirtho = document.getElementById("dateofbirth");
const Status = document.getElementById("Status");
const password = document.getElementById("password");
const conformpassword = document.getElementById("conformpassword");
const text = document.getElementById("text");
const appointment = document.getElementById("appointment");

// document.getElementById("from").style.display="none";



function showsubmission() {
    if (firstname.value != "" && lastname.value != "" && username.value != "" && phone.value != "" && email.value != "" && country.value != "" && dateofbirtho.value != "" && Status.value != "" && password.value != "" && conformpassword.value != " " && text.value != "" && appointment.value != "") {
        document.getElementById("from").style.display = "none";
        submission.style.display = "block";
        document.getElementById("nav1").style.filter = "blur(4px)";
        document.getElementById("footer1").style.filter = "blur(4px)";
        // console.log(firstname.value)
    } else {
        alert("you have to fill all the requre data ");
    }


}