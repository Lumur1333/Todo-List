let map;
let infoWindow;
let mapSpot = document.getElementById("map");

function initMap() {
  map = new google.maps.Map(mapSpot, {
    center: {
      lat: -79.722940,
      lng: 44.404123
    },
    zoom: 6
  });
  infoWindow = new google.maps.InfoWindow;

  //try geolocation

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent("Location found.");
        infoWindow.open(map);
        map.setCenter(pos);
      },
      function () {
        handleLocationError(true, infoWindow, map.getCenter());
      });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation ?
    "Error: The Geolocation service has failed this city!" :
    "Error: Your browser hurped the derp"
  );
  infoWindow.open(map);
}