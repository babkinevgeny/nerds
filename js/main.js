ymaps.ready(init);

function init () {
  myMap = new ymaps.Map('map', {
    center:[59.852842, 30.134000],
    zoom:16
  });

  myMap.controls
    .add('zoomControl', { left: 15, top: 15 });

  myPlacemark = new ymaps.Placemark([59.851842, 30.137993], {
  }, {
    iconImageHref: 'img/marker.png',
    iconImageSize: [231, 190],
    iconImageOffset: [-60, -200]
  });

  myMap.geoObjects.add(myPlacemark);
};
