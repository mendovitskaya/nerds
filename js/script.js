
    ymaps.ready(function() {
        var myMap = new ymaps.Map('map', {
                center: [45.0443, 38.9410], //координаты карты
                zoom: 16 //приближение карты
            }),
            myPlacemark = new ymaps.Placemark([45.0433, 38.9442], {
                hintContent: 'Nёrds'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'https://copy.com/7zTcw02xZP9X0DyM', //  путь до картинки
                iconImageSize: [231, 190], //размер картинки
                iconImageOffset: [-49, -195] //смещение ножки балуна относительно левого верхнего угла. 
            });

        myMap.geoObjects.add(myPlacemark);
    });
