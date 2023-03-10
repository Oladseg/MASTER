const signUp = () => {
    const fistname = document.querySelector("#firstname").value;
    const surname = document.querySelector("#surname").value;
    const othernames = document.querySelector("#othernames").value;
    const birthdate = document.querySelector("#birthdate").value;
    const phonenumber = document.querySelector("#phonenumber").value;
    const emailaddress = document.querySelector("#emailaddress").value;
    const password = document.querySelector("#password").value;
    if (password.length < 8) {
        alert("password too short");
    }
    if (all.field) {
        alert("completed")
    }
    const valid = 
    console.table({firstname, surname, emailaddress, phonenumber, password, birthdate, valid});
    alert("You have successfully signed up")
}
// alert("You have successfully signed up")