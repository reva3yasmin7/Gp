var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasAadministrasi_1 = new ol.format.GeoJSON();
var features_BatasAadministrasi_1 = format_BatasAadministrasi_1.readFeatures(json_BatasAadministrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAadministrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAadministrasi_1.addFeatures(features_BatasAadministrasi_1);
var lyr_BatasAadministrasi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAadministrasi_1, 
                style: style_BatasAadministrasi_1,
                popuplayertitle: "BatasAadministrasi",
                interactive: true,
                title: '<img src="styles/legend/BatasAadministrasi_1.png" /> BatasAadministrasi'
            });
var format_Agrikebun_2 = new ol.format.GeoJSON();
var features_Agrikebun_2 = format_Agrikebun_2.readFeatures(json_Agrikebun_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agrikebun_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agrikebun_2.addFeatures(features_Agrikebun_2);
var lyr_Agrikebun_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agrikebun_2, 
                style: style_Agrikebun_2,
                popuplayertitle: "Agrikebun",
                interactive: true,
                title: '<img src="styles/legend/Agrikebun_2.png" /> Agrikebun'
            });
var format_Agriladang_3 = new ol.format.GeoJSON();
var features_Agriladang_3 = format_Agriladang_3.readFeatures(json_Agriladang_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agriladang_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agriladang_3.addFeatures(features_Agriladang_3);
var lyr_Agriladang_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agriladang_3, 
                style: style_Agriladang_3,
                popuplayertitle: "Agriladang",
                interactive: true,
                title: '<img src="styles/legend/Agriladang_3.png" /> Agriladang'
            });
var format_Agrisawah_4 = new ol.format.GeoJSON();
var features_Agrisawah_4 = format_Agrisawah_4.readFeatures(json_Agrisawah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agrisawah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agrisawah_4.addFeatures(features_Agrisawah_4);
var lyr_Agrisawah_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agrisawah_4, 
                style: style_Agrisawah_4,
                popuplayertitle: "Agrisawah",
                interactive: true,
                title: '<img src="styles/legend/Agrisawah_4.png" /> Agrisawah'
            });
var format_Agritanamcampur_5 = new ol.format.GeoJSON();
var features_Agritanamcampur_5 = format_Agritanamcampur_5.readFeatures(json_Agritanamcampur_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agritanamcampur_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agritanamcampur_5.addFeatures(features_Agritanamcampur_5);
var lyr_Agritanamcampur_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agritanamcampur_5, 
                style: style_Agritanamcampur_5,
                popuplayertitle: "Agritanamcampur",
                interactive: true,
                title: '<img src="styles/legend/Agritanamcampur_5.png" /> Agritanamcampur'
            });
var format_Bangunan_6 = new ol.format.GeoJSON();
var features_Bangunan_6 = format_Bangunan_6.readFeatures(json_Bangunan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_6.addFeatures(features_Bangunan_6);
var lyr_Bangunan_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bangunan_6, 
                style: style_Bangunan_6,
                popuplayertitle: "Bangunan",
                interactive: true,
                title: '<img src="styles/legend/Bangunan_6.png" /> Bangunan'
            });
var format_AdministrasiDesa_7 = new ol.format.GeoJSON();
var features_AdministrasiDesa_7 = format_AdministrasiDesa_7.readFeatures(json_AdministrasiDesa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiDesa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiDesa_7.addFeatures(features_AdministrasiDesa_7);
var lyr_AdministrasiDesa_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdministrasiDesa_7, 
                style: style_AdministrasiDesa_7,
                popuplayertitle: "Administrasi Desa",
                interactive: true,
    title: 'Administrasi Desa<br />\
    <img src="styles/legend/AdministrasiDesa_7_0.png" /> Banguntapan<br />\
    <img src="styles/legend/AdministrasiDesa_7_1.png" /> Berbah<br />\
    <img src="styles/legend/AdministrasiDesa_7_2.png" /> Cangkringan<br />\
    <img src="styles/legend/AdministrasiDesa_7_3.png" /> Danurejan<br />\
    <img src="styles/legend/AdministrasiDesa_7_4.png" /> Dlingo<br />\
    <img src="styles/legend/AdministrasiDesa_7_5.png" /> Gamping<br />\
    <img src="styles/legend/AdministrasiDesa_7_6.png" /> Gantiwarno<br />\
    <img src="styles/legend/AdministrasiDesa_7_7.png" /> Goden<br />\
    <img src="styles/legend/AdministrasiDesa_7_8.png" /> Gondokusuman<br />\
    <img src="styles/legend/AdministrasiDesa_7_9.png" /> Kalasan<br />\
    <img src="styles/legend/AdministrasiDesa_7_10.png" /> Kalibawang<br />\
    <img src="styles/legend/AdministrasiDesa_7_11.png" /> Mantrijeron<br />\
    <img src="styles/legend/AdministrasiDesa_7_12.png" /> Minggir<br />\
    <img src="styles/legend/AdministrasiDesa_7_13.png" /> Mlati<br />\
    <img src="styles/legend/AdministrasiDesa_7_14.png" /> Moyudan<br />\
    <img src="styles/legend/AdministrasiDesa_7_15.png" /> Nanggulan<br />\
    <img src="styles/legend/AdministrasiDesa_7_16.png" /> Ngaglik<br />\
    <img src="styles/legend/AdministrasiDesa_7_17.png" /> Ngluwar<br />\
    <img src="styles/legend/AdministrasiDesa_7_18.png" /> Pinyungan<br />\
    <img src="styles/legend/AdministrasiDesa_7_19.png" /> Prambanan<br />\
    <img src="styles/legend/AdministrasiDesa_7_20.png" /> Sedayu<br />\
    <img src="styles/legend/AdministrasiDesa_7_21.png" /> Selo<br />\
    <img src="styles/legend/AdministrasiDesa_7_22.png" /> Sentolo<br />\
    <img src="styles/legend/AdministrasiDesa_7_23.png" /> Seyegan<br />\
    <img src="styles/legend/AdministrasiDesa_7_24.png" /> Srumbung<br />\
    <img src="styles/legend/AdministrasiDesa_7_25.png" /> Tegalrejo<br />\
    <img src="styles/legend/AdministrasiDesa_7_26.png" /> Tempel<br />\
    <img src="styles/legend/AdministrasiDesa_7_27.png" /> Umbulharjo<br />\
    <img src="styles/legend/AdministrasiDesa_7_28.png" /> <br />'
        });
var format_Jalan_8 = new ol.format.GeoJSON();
var features_Jalan_8 = format_Jalan_8.readFeatures(json_Jalan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_8.addFeatures(features_Jalan_8);
var lyr_Jalan_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_8, 
                style: style_Jalan_8,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_8.png" /> Jalan'
            });
var format_Sungai_9 = new ol.format.GeoJSON();
var features_Sungai_9 = format_Sungai_9.readFeatures(json_Sungai_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_9.addFeatures(features_Sungai_9);
var lyr_Sungai_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_9, 
                style: style_Sungai_9,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_9.png" /> Sungai'
            });
var format_CagarBudaya_10 = new ol.format.GeoJSON();
var features_CagarBudaya_10 = format_CagarBudaya_10.readFeatures(json_CagarBudaya_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CagarBudaya_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CagarBudaya_10.addFeatures(features_CagarBudaya_10);
var lyr_CagarBudaya_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CagarBudaya_10, 
                style: style_CagarBudaya_10,
                popuplayertitle: "Cagar Budaya",
                interactive: true,
                title: '<img src="styles/legend/CagarBudaya_10.png" /> Cagar Budaya'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BatasAadministrasi_1.setVisible(true);lyr_Agrikebun_2.setVisible(true);lyr_Agriladang_3.setVisible(true);lyr_Agrisawah_4.setVisible(true);lyr_Agritanamcampur_5.setVisible(true);lyr_Bangunan_6.setVisible(true);lyr_AdministrasiDesa_7.setVisible(true);lyr_Jalan_8.setVisible(true);lyr_Sungai_9.setVisible(true);lyr_CagarBudaya_10.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BatasAadministrasi_1,lyr_Agrikebun_2,lyr_Agriladang_3,lyr_Agrisawah_4,lyr_Agritanamcampur_5,lyr_Bangunan_6,lyr_AdministrasiDesa_7,lyr_Jalan_8,lyr_Sungai_9,lyr_CagarBudaya_10];
lyr_BatasAadministrasi_1.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Agrikebun_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Agriladang_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Agrisawah_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Agritanamcampur_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'FCODE': 'FCODE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSSWH': 'JNSSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Bangunan_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_AdministrasiDesa_7.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_8.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Sungai_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_CagarBudaya_10.set('fieldAliases', {'Katagori': 'Katagori', 'NAMA_': 'NAMA_', 'DSR_HUKUM1': 'DSR_HUKUM1', });
lyr_BatasAadministrasi_1.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_Agrikebun_2.set('fieldImages', {'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Agriladang_3.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSLDG': '', 'TNMLDG': '', 'TIPLDG': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Agrisawah_4.set('fieldImages', {'NAMOBJ': '', 'JNSSWH': '', 'FCODE': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TNMSWH': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Agritanamcampur_5.set('fieldImages', {'NAMOBJ': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'FCODE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSSWH': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Bangunan_6.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_AdministrasiDesa_7.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jalan_8.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Sungai_9.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_CagarBudaya_10.set('fieldImages', {'Katagori': 'TextEdit', 'NAMA_': 'TextEdit', 'DSR_HUKUM1': 'TextEdit', });
lyr_BatasAadministrasi_1.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Agrikebun_2.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Agriladang_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Agrisawah_4.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Agritanamcampur_5.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'FCODE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Bangunan_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_AdministrasiDesa_7.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_8.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Sungai_9.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_CagarBudaya_10.set('fieldLabels', {'Katagori': 'no label', 'NAMA_': 'no label', 'DSR_HUKUM1': 'no label', });
lyr_CagarBudaya_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});