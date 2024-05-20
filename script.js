const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
    e.preventDefault();
    const email = document.getElementById("email-address").value;
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    
    let handler = PaystackPop.setup({
        key: 'pk_live_792b824977a5b9f329259a56318e449532bf79fd', // Replace with your public key
        email: document.getElementById("email-address").value,
        amount: 80 * 100,
        currency: 'ZAR',
        ref: ''+Math.floor((Math.random() * 1000000000) + 1),
        first_name: firstName,
        last_name: lastName,
        onClose: function(){
          alert('Window closed.');
    },
    callback: function(response){
        let message = 'Payment complete!. Book will be sent via email. Thank You! Reference: ' + response.reference;
        alert(message);
    }
  });

    handler.openIframe();
}
