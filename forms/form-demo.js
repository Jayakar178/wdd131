function togglePaymentDetails() {
    // Get a reference to the form. We can access all the named form inputs through the form element.
    const theForm = document.getElementById("checkoutForm");

    // We will also need the creditCardContainer and paypalUsernameContainer
    const creditCardContainer = document.getElementById("creditCardNumberContainer");
    const paypalContainer = document.getElementById("paypalUsernameContainer");

    // Get input fields
    const creditCardInput = document.getElementById("creditCardNumber");
    const paypalInput = document.getElementById("paypalUsername");

    // Get the selected payment method
    const paymentMethod = document.getElementById("paymentMethod").value;

    // Hide payment containers by adding the '.hide' class to each of them
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");

    // Disable required for payment fields...if we hide a required field the browser will throw an error when we try to submit!
    creditCardInput.removeAttribute("required");
    paypalInput.removeAttribute("required");

    // Show the container based on the selected payment method, and add the required attribute back.
    if (paymentMethod === "creditCard") {
        creditCardContainer.classList.remove("hide");
        creditCardInput.setAttribute("required", "required");
    } else if (paymentMethod === "paypal") {
        paypalContainer.classList.remove("hide");
        paypalInput.setAttribute("required", "required");
    }
}

// Attach a change event handler to the paymentMethod input
document.getElementById("paymentMethod").addEventListener("change", togglePaymentDetails);

// Attach a submit event handler to the form
document.getElementById("checkoutForm").addEventListener("submit", function (event) {
    const paymentMethod = document.getElementById("paymentMethod").value;
    const creditCardInput = document.getElementById("creditCardNumber");
    const paypalInput = document.getElementById("paypalUsername");

    if (paymentMethod === "creditCard" && creditCardInput.value.length !== 16) {
        event.preventDefault();
        alert("Please enter a valid 16-digit credit card number.");
    } else if (paymentMethod === "paypal" && paypalInput.value.trim() === "") {
        event.preventDefault();
        alert("Please enter your PayPal username.");
    }
});
