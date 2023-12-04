var wms_layers = [];


        var lyr_GoogleMap_0 = new ol.layer.Tile({
            'title': 'Google Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_UPVIIWonokromo_1 = new ol.format.GeoJSON();
var features_UPVIIWonokromo_1 = format_UPVIIWonokromo_1.readFeatures(json_UPVIIWonokromo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPVIIWonokromo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPVIIWonokromo_1.addFeatures(features_UPVIIWonokromo_1);
var lyr_UPVIIWonokromo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UPVIIWonokromo_1, 
                style: style_UPVIIWonokromo_1,
                interactive: true,
                title: '<img src="styles/legend/UPVIIWonokromo_1.png" /> UP VII Wonokromo'
            });
var format_Clipped_2 = new ol.format.GeoJSON();
var features_Clipped_2 = format_Clipped_2.readFeatures(json_Clipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_2.addFeatures(features_Clipped_2);
var lyr_Clipped_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clipped_2, 
                style: style_Clipped_2,
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_2_0.png" /> 500.0000000<br />\
    <img src="styles/legend/Clipped_2_1.png" /> 1000.0000000<br />\
    <img src="styles/legend/Clipped_2_2.png" /> 1500.0000000<br />\
    <img src="styles/legend/Clipped_2_3.png" /> 2000.0000000<br />\
    <img src="styles/legend/Clipped_2_4.png" /> 2500.0000000<br />\
    <img src="styles/legend/Clipped_2_5.png" /> 3000.0000000<br />\
    <img src="styles/legend/Clipped_2_6.png" /> 3500.0000000<br />\
    <img src="styles/legend/Clipped_2_7.png" /> 4000.0000000<br />\
    <img src="styles/legend/Clipped_2_8.png" /> 4500.0000000<br />\
    <img src="styles/legend/Clipped_2_9.png" /> 5000.0000000<br />\
    <img src="styles/legend/Clipped_2_10.png" /> <br />'
        });
var format_PointKesehatan_3 = new ol.format.GeoJSON();
var features_PointKesehatan_3 = format_PointKesehatan_3.readFeatures(json_PointKesehatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointKesehatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointKesehatan_3.addFeatures(features_PointKesehatan_3);
var lyr_PointKesehatan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PointKesehatan_3, 
                style: style_PointKesehatan_3,
                interactive: true,
                title: '<img src="styles/legend/PointKesehatan_3.png" /> Point Kesehatan'
            });
var format_JaringanJalanUPVIIWonokromo_4 = new ol.format.GeoJSON();
var features_JaringanJalanUPVIIWonokromo_4 = format_JaringanJalanUPVIIWonokromo_4.readFeatures(json_JaringanJalanUPVIIWonokromo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalanUPVIIWonokromo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalanUPVIIWonokromo_4.addFeatures(features_JaringanJalanUPVIIWonokromo_4);
var lyr_JaringanJalanUPVIIWonokromo_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanJalanUPVIIWonokromo_4, 
                style: style_JaringanJalanUPVIIWonokromo_4,
                interactive: true,
                title: '<img src="styles/legend/JaringanJalanUPVIIWonokromo_4.png" /> Jaringan Jalan UP VII Wonokromo'
            });
var format_Servicearealines_5 = new ol.format.GeoJSON();
var features_Servicearealines_5 = format_Servicearealines_5.readFeatures(json_Servicearealines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearealines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearealines_5.addFeatures(features_Servicearealines_5);
var lyr_Servicearealines_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Servicearealines_5, 
                style: style_Servicearealines_5,
                interactive: true,
                title: '<img src="styles/legend/Servicearealines_5.png" /> Service area (lines)'
            });

lyr_GoogleMap_0.setVisible(true);lyr_UPVIIWonokromo_1.setVisible(true);lyr_Clipped_2.setVisible(true);lyr_PointKesehatan_3.setVisible(true);lyr_JaringanJalanUPVIIWonokromo_4.setVisible(true);lyr_Servicearealines_5.setVisible(true);
var layersList = [lyr_GoogleMap_0,lyr_UPVIIWonokromo_1,lyr_Clipped_2,lyr_PointKesehatan_3,lyr_JaringanJalanUPVIIWonokromo_4,lyr_Servicearealines_5];
lyr_UPVIIWonokromo_1.set('fieldAliases', {'Kode': 'Kode', 'Keterangan': 'Keterangan', 'Zona': 'Zona', 'Sub_Zona': 'Sub_Zona', 'Kawasan': 'Kawasan', 'Sub_UP': 'Sub_UP', 'UP': 'UP', 'Blok': 'Blok', 'Luas': 'Luas', });
lyr_Clipped_2.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_PointKesehatan_3.set('fieldAliases', {'id': 'id', 'Status': 'Status', 'Jangkauan': 'Jangkauan', });
lyr_JaringanJalanUPVIIWonokromo_4.set('fieldAliases', {'Status': 'Status', 'Nama': 'Nama', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Panjang': 'Panjang', 'UP': 'UP', });
lyr_Servicearealines_5.set('fieldAliases', {'id': 'id', 'Status': 'Status', 'Jangkauan': 'Jangkauan', 'type': 'type', 'start': 'start', });
lyr_UPVIIWonokromo_1.set('fieldImages', {'Kode': '', 'Keterangan': '', 'Zona': '', 'Sub_Zona': '', 'Kawasan': '', 'Sub_UP': '', 'UP': '', 'Blok': '', 'Luas': '', });
lyr_Clipped_2.set('fieldImages', {'id': 'Range', 'cost_level': 'TextEdit', });
lyr_PointKesehatan_3.set('fieldImages', {'id': '', 'Status': '', 'Jangkauan': '', });
lyr_JaringanJalanUPVIIWonokromo_4.set('fieldImages', {'Status': '', 'Nama': '', 'Keterangan': '', 'Sumber': '', 'Panjang': '', 'UP': '', });
lyr_Servicearealines_5.set('fieldImages', {'id': '', 'Status': '', 'Jangkauan': '', 'type': '', 'start': '', });
lyr_UPVIIWonokromo_1.set('fieldLabels', {'Kode': 'no label', 'Keterangan': 'no label', 'Zona': 'no label', 'Sub_Zona': 'no label', 'Kawasan': 'no label', 'Sub_UP': 'no label', 'UP': 'no label', 'Blok': 'no label', 'Luas': 'no label', });
lyr_Clipped_2.set('fieldLabels', {'id': 'inline label', 'cost_level': 'inline label', });
lyr_PointKesehatan_3.set('fieldLabels', {'id': 'no label', 'Status': 'inline label', 'Jangkauan': 'inline label', });
lyr_JaringanJalanUPVIIWonokromo_4.set('fieldLabels', {'Status': 'inline label', 'Nama': 'inline label', 'Keterangan': 'inline label', 'Sumber': 'no label', 'Panjang': 'no label', 'UP': 'no label', });
lyr_Servicearealines_5.set('fieldLabels', {'id': 'no label', 'Status': 'inline label', 'Jangkauan': 'inline label', 'type': 'no label', 'start': 'no label', });
lyr_Servicearealines_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});