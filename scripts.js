document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector("form > button");
    var message = document.getElementsByClassName("message");
    

    button.onclick = function(event) {
        address = document.querySelector("input").value;
        if(address.length <= 0 || address.includes("@") == false || address.includes(".") == false) {
            message[0].innerHTML = "<p>Please enter a valid email address.</p>";
            event.preventDefault();
        } else {
            message[0].innerHTML = "<p>Thank you! Your email address " + address + " has been added to our mailing list!</p>"
            event.preventDefault();
        }
    };
})