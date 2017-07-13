"use strict";
exports.__esModule = true;
var EnvVer = (function () {
    function EnvVer(id, envVerName, url, enabled, version) {
        if (version === void 0) { version = 0; }
        this.id = id;
        this.envVerName = envVerName;
        this.url = url;
        this.enabled = enabled;
        this.version = version;
    }
    return EnvVer;
}());
exports.EnvVer = EnvVer;
