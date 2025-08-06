// paypal.js
paypal.HostedButtons({
    hostedButtonId: "NRJWCKABZXM2N",
    onError: function(err) {
        console.error('Fehler beim Laden des PayPal Buttons:', err);
    }
}).render("#paypal-container");
