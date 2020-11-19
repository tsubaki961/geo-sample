navigator.geolocation.getCurrentPosition((position) => {
    document.getElementById('geo-ido').innerText = position.coords.latitude;
    document.getElementById('geo-keido').innerText = position.coords.longitude;
});
