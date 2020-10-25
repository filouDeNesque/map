var mymap = L.map('mapid').setView([47.866667, 3.333333], 6);

L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 10,
    minZoom: 5,
    id: 'mapbox/streets-v11'
}).addTo(mymap);


var marker = L.marker([51.5, -0.09]).addTo(mymap);
var marker2 = L.marker([48.866667, 2.333333]).addTo(mymap);
var marker3 = L.marker([48.8637, 2.2769]).addTo(mymap);
var marker4 = L.marker([48.8973411921294, 2.1756197875976646]).addTo(mymap);
var marker5 = L.marker([48.866667, 2.333333]).addTo(mymap);
var marker6 = L.marker([48.8637, 2.1756197875976646]).addTo(mymap);
var marker7 = L.marker([48, 2.333333]).addTo(mymap);
var marker8 = L.marker([48.866667, 2.333333]).addTo(mymap);
var marker9 = L.marker([48.866667, 2.1756197875976646]).addTo(mymap);
var marker88 = L.marker([48.866667, 2.333333]).addTo(mymap);

marker.bindPopup("<h1>Didoune De Lacapsule</h1><img src=\"photo.jpg\"><br><P>06.75.73.64.39</p><br>Ivry sur Seine");
marker3.bindPopup("<h1>Didoune De Lacapsule</h1><img src=\"photo.jpg\"><br><P>06.75.73.64.39</p><br>Ivry sur Seine");
marker4.bindPopup("<h1>Didoune De Lacapsule</h1><img src=\"photo.jpg\"><br><P>06.75.73.64.39</p><br>Ivry sur Seine");
marker5.bindPopup("<h1>Didoune De Lacapsule</h1><img src=\"photo.jpg\"><br><P>06.75.73.64.39</p><br>Ivry sur Seine");
marker2.bindPopup("<h1>Didoune De Lacapsule</h1><img src=\"photo.jpg\"><br><P>06.75.73.64.39</p><br>Ivry sur Seine");
marker6.bindPopup("<h1>Didoune De Lacapsule</h1><img src=\"photo.jpg\"><br><P>06.75.73.64.39</p><br>Ivry sur Seine");
marker7.bindPopup("<h1>Didoune De Lacapsule</h1><img src=\"photo.jpg\"><br><P>06.75.73.64.39</p><br>Ivry sur Seine");
marker8.bindPopup("<h1>Didoune De Lacapsule</h1><img src=\"photo.jpg\"><br><P>06.75.73.64.39</p><br>Ivry sur Seine");
marker9.bindPopup("<h1>Didoune De Lacapsule</h1><img src=\"photo.jpg\"><br><P>06.75.73.64.39</p><br>Ivry sur Seine");
marker88.bindPopup("<h1>Didoune De Lacapsule</h1><img src=\"photo.jpg\"><br><P>06.75.73.64.39</p><br>Ivry sur Seine<input type=\"submit\" value=\"Go to my link location\" onclick=\"window.location=\'https:\/\/www.google.fr/maps/place/94200+Ivry-sur-Seine/@48.8125219,2.3696739,14z/data=!3m1!4b1!4m5!3m4!1s0x47e673b5023235ad:0x5dc8118d7cbf704f!8m2!3d48.813055!4d2.38822\';\"/>");


var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);