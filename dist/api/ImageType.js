"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageType = void 0;
//methods class
class ImageType {
    constructor(client) {
        this.client = client;
    }
    /**
     * Lists available image types along with their supported sizes.
     */
    listImageTypes(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/image_types', parameters, 'GET', options);
        });
    }
}
exports.ImageType = ImageType;
