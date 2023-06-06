if (navigator.geolocation) {
    console.log("geolocation supported");

    function handleGeolocation(data) {
        console.log('Geolocation data received', data);
        data.coords.latitude;
        data.coords.longitude;
    }
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    console.log('rest of the code..');
}

/* store geolocationdinates*/