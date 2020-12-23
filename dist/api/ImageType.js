"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageType = void 0;
const client_1 = require("../client/client");
//methods class
class ImageType {
    /**
     * Lists available image types along with their supported sizes.
     */
    static listImageTypes(parameters, options) {
        return client_1.request("/image_types", parameters, "GET", options);
    }
}
exports.ImageType = ImageType;
