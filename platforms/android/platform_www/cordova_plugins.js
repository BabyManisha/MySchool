cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-photo-library.PhotoLibrary",
        "file": "plugins/cordova-plugin-photo-library/www/PhotoLibrary.js",
        "pluginId": "cordova-plugin-photo-library",
        "clobbers": [
            "cordova.plugins.photoLibrary"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "cordova-plugin-photo-library": "1.2.1"
};
// BOTTOM OF METADATA
});