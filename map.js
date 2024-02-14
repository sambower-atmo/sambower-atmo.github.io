var myMap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(myMap);

    // Specify the bounds for the image. Adjust these values based on your image's geographical coverage
    var bounds = [[51.49, -0.11], [51.51, -0.07]];
    // Add the raster image overlay
    L.imageOverlay('spatial-data/FM_data.tif', bounds).addTo(myMap);