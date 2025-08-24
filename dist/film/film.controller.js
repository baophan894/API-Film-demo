"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const film_service_1 = require("./film.service");
let FilmController = class FilmController {
    filmService;
    constructor(filmService) {
        this.filmService = filmService;
    }
    async getPhimMoiCapNhat(page = 1) {
        return this.filmService.getPhimMoiCapNhat(page);
    }
    async getPhimMoiCapNhatV2(page = 1) {
        return this.filmService.getPhimMoiCapNhatV2(page);
    }
    async getPhimMoiCapNhatV3(page = 1) {
        return this.filmService.getPhimMoiCapNhatV3(page);
    }
    async getThongTinPhim(slug) {
        return this.filmService.getThongTinPhim(slug);
    }
    async getDanhSachPhim(query) {
        return this.filmService.getDanhSachPhim(query);
    }
    async timKiemPhim(query) {
        return this.filmService.timKiemPhim(query);
    }
    async getTheLoai() {
        return this.filmService.getTheLoai();
    }
    async getChiTietTheLoai(type_list, query) {
        return this.filmService.getChiTietTheLoai(type_list, query);
    }
    async getQuocGia() {
        return this.filmService.getQuocGia();
    }
    async getChiTietQuocGia(type_list, query) {
        return this.filmService.getChiTietQuocGia(type_list, query);
    }
    async getPhimTheoNam(type_list, query) {
        return this.filmService.getPhimTheoNam(type_list, query);
    }
    async convertImage(url) {
        return this.filmService.convertImage(url);
    }
};
exports.FilmController = FilmController;
__decorate([
    (0, common_1.Get)('moi-cap-nhat'),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    __param(0, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilmController.prototype, "getPhimMoiCapNhat", null);
__decorate([
    (0, common_1.Get)('moi-cap-nhat-v2'),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    __param(0, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilmController.prototype, "getPhimMoiCapNhatV2", null);
__decorate([
    (0, common_1.Get)('moi-cap-nhat-v3'),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    __param(0, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilmController.prototype, "getPhimMoiCapNhatV3", null);
__decorate([
    (0, common_1.Get)('thong-tin/:slug'),
    (0, swagger_1.ApiParam)({ name: 'slug', required: true }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilmController.prototype, "getThongTinPhim", null);
__decorate([
    (0, common_1.Get)('danh-sach'),
    (0, swagger_1.ApiQuery)({ name: 'type_list', required: true }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'sort_field', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'sort_type', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'sort_lang', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'category', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'country', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'year', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilmController.prototype, "getDanhSachPhim", null);
__decorate([
    (0, common_1.Get)('tim-kiem'),
    (0, swagger_1.ApiQuery)({ name: 'keyword', required: true }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'sort_field', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'sort_type', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'sort_lang', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'category', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'country', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'year', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilmController.prototype, "timKiemPhim", null);
__decorate([
    (0, common_1.Get)('the-loai'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FilmController.prototype, "getTheLoai", null);
__decorate([
    (0, common_1.Get)('the-loai/:type_list'),
    (0, swagger_1.ApiParam)({ name: 'type_list', required: true }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'sort_field', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'sort_type', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'sort_lang', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'country', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'year', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    __param(0, (0, common_1.Param)('type_list')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FilmController.prototype, "getChiTietTheLoai", null);
__decorate([
    (0, common_1.Get)('quoc-gia'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FilmController.prototype, "getQuocGia", null);
__decorate([
    (0, common_1.Get)('quoc-gia/:type_list'),
    (0, swagger_1.ApiParam)({ name: 'type_list', required: true }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'sort_field', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'sort_type', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'sort_lang', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'category', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'country', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'year', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    __param(0, (0, common_1.Param)('type_list')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FilmController.prototype, "getChiTietQuocGia", null);
__decorate([
    (0, common_1.Get)('nam/:type_list'),
    (0, swagger_1.ApiParam)({ name: 'type_list', required: true }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'sort_field', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'sort_type', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'sort_lang', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'category', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'country', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    __param(0, (0, common_1.Param)('type_list')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FilmController.prototype, "getPhimTheoNam", null);
__decorate([
    (0, common_1.Get)('image'),
    (0, swagger_1.ApiQuery)({ name: 'url', required: true }),
    __param(0, (0, common_1.Query)('url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilmController.prototype, "convertImage", null);
exports.FilmController = FilmController = __decorate([
    (0, swagger_1.ApiTags)('Film'),
    (0, common_1.Controller)('film'),
    __metadata("design:paramtypes", [film_service_1.FilmService])
], FilmController);
//# sourceMappingURL=film.controller.js.map