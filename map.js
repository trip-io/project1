

var Center = new naver.maps.LatLng(35.8606, 127.7464);

var coordinatesList =
  ["128.3229674725843;36.01813601410183;128.44895347103;36.19209396230971;", "129.40319253931955;36.192061426501894;129.415947487531;36.2102812161006;"]

var map = new naver.maps.Map('map', {
  center: Center,
  zoom: 8
});

function generateRandomCode() {
  var myRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return myRandomColor;
}


for (let i = 0; i < coordinatesList.length; i++) {
  var arr = [, , , ,] = coordinatesList[i].split(';');

  for (let j = 0; j < 4; j++) {
    naver.maps.Service.reverseGeocode({
      location: new naver.maps.LatLng(arr),
    }, function (status, response) {

      if (status !== naver.maps.Service.Status.OK) {
        return console.log('바다인가봐');
      }

      if (status == naver.maps.Service.Status.OK) { return console.log('육지인가봐') }

      var result = response.result,
        items = result.items;

    });
  }


  var rectangle = new naver.maps.Rectangle({
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: generateRandomCode(),
    fillOpacity: 0.5,
    map: map,
    bounds: new naver.maps.LatLngBounds(
      new naver.maps.LatLng(arr[1], arr[0]),
      new naver.maps.LatLng(arr[3], arr[2])
    )
  });
}