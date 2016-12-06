cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-photo-library.PhotoLibrary",
        "file": "plugins/cordova-plugin-photo-library/www/PhotoLibrary.js",
        "pluginId": "cordova-plugin-photo-library",
        "clobbers": [
            "cordova.plugins.photoLibrary"
        ]
    },
    {
        "id": "cordova-plugin-datepicker.DatePicker",
        "file": "plugins/cordova-plugin-datepicker/www/android/DatePicker.js",
        "pluginId": "cordova-plugin-datepicker",
        "clobbers": [
            "datePicker"
        ]
    },
    {
        "id": "com.okaybmd.cordova.plugin.datepicker.DatePicker",
        "file": "plugins/com.okaybmd.cordova.plugin.datepicker/www/android/DatePicker.js",
        "pluginId": "com.okaybmd.cordova.plugin.datepicker",
        "clobbers": [
            "datePicker"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "cordova-plugin-photo-library": "1.2.1",
    "cordova-plugin-datepicker": "0.9.3",
    "com.okaybmd.cordova.plugin.datepicker": "1.3.7"
};
// BOTTOM OF METADATA
});