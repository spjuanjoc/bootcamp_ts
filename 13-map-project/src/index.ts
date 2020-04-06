console.log('13. Project 2: A Map app');

const hform = document.querySelector('form')!;
const haddress = document.getElementById('address')! as HTMLInputElement;

hform.addEventListener('submit', search);

// function search(event) {
//     event.preventDefault();
//     console.log('Searching...');
//     const addressInfo = haddress.value;
//
//     //Call maps API
// }

//openlayers maps
declare var ol: any;

function search(event: Event) {
    event.preventDefault();

    const coordinates = {latitude: 40.41, longitude: -73.99}; // Can't fetch coordinates from Google API, use dummy ones

    document.getElementById('map')!.innerHTML = ''; // clear <p> from <div id="map">
    new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([coordinates.longitude, coordinates.latitude]),
            zoom: 16
        })
    });
}
