var Center = new naver.maps.LatLng(35.8606, 127.7464);

function fetchLatLng() {
  var answer = "128.6540347795904;35.19453731254774;128.7121421556892;35.27564970081971"
  return (answer);
}

const LatLng = fetchLatLng();
var [Lng1, Lat1, Lng2, Lat2,] = LatLng.split(';');

var map = new naver.maps.Map('map', {
  center: Center,
  zoom: 8
});

function generateRandomCode() {
  var myRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return myRandomColor;
}

var rectangle = new naver.maps.Rectangle({
  strokeOpacity: 0,
  strokeWeight: 0,
  fillColor: generateRandomCode(),
  fillOpacity: 0.5,
  map: map,
  bounds: new naver.maps.LatLngBounds(
    new naver.maps.LatLng(Lat1, Lng1),
    new naver.maps.LatLng(Lat2, Lng2)
  )
});