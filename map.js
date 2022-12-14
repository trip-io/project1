

var Center = new naver.maps.LatLng(35.8606, 127.7464);

var coordinatesList =
  ["128.3229674725843;36.01813601410183;128.44895347103;36.19209396230971;", "128.4473293427298;35.678338218263875;128.4677929417478;35.70674146764674;"]

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

      var result = response.result, // 검색 결과의 컨테이너
        items = result.items; // 검색 결과의 배열

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