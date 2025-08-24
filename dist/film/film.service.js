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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let FilmService = class FilmService {
    httpService;
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getPhimMoiCapNhat(page) {
        const url = `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=${page}`;
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        return data;
    }
    async getPhimMoiCapNhatV2(page) {
        const url = `https://phimapi.com/danh-sach/phim-moi-cap-nhat-v2?page=${page}`;
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        return data;
    }
    async getPhimMoiCapNhatV3(page) {
        const url = `https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=${page}`;
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        return data;
    }
    async getThongTinPhim(slug) {
        const url = `https://phimapi.com/phim/${slug}`;
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        return data;
    }
    async getDanhSachPhim(query) {
        const { type_list, page = 1, sort_field = '_id', sort_type = 'asc', sort_lang, category, country, year, limit = 10, } = query;
        const url = `https://phimapi.com/v1/api/danh-sach/${type_list}?page=${page}&sort_field=${sort_field}&sort_type=${sort_type}` +
            (sort_lang ? `&sort_lang=${sort_lang}` : '') +
            (category ? `&category=${category}` : '') +
            (country ? `&country=${country}` : '') +
            (year ? `&year=${year}` : '') +
            (limit ? `&limit=${limit}` : '');
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        return data;
    }
    async timKiemPhim(query) {
        const { keyword, page = 1, sort_field = '_id', sort_type = 'asc', sort_lang, category, country, year, limit = 10, } = query;
        const url = `https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(keyword)}&page=${page}&sort_field=${sort_field}&sort_type=${sort_type}` +
            (sort_lang ? `&sort_lang=${sort_lang}` : '') +
            (category ? `&category=${category}` : '') +
            (country ? `&country=${country}` : '') +
            (year ? `&year=${year}` : '') +
            (limit ? `&limit=${limit}` : '');
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        return data;
    }
    async getTheLoai() {
        const url = 'https://phimapi.com/the-loai';
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        return data;
    }
    async getChiTietTheLoai(type_list, query) {
        const { page = 1, sort_field = '_id', sort_type = 'asc', sort_lang, country, year, limit = 10, } = query;
        const url = `https://phimapi.com/v1/api/the-loai/${type_list}?page=${page}&sort_field=${sort_field}&sort_type=${sort_type}` +
            (sort_lang ? `&sort_lang=${sort_lang}` : '') +
            (country ? `&country=${country}` : '') +
            (year ? `&year=${year}` : '') +
            (limit ? `&limit=${limit}` : '');
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        return data;
    }
    async getQuocGia() {
        const url = 'https://phimapi.com/quoc-gia';
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        return data;
    }
    async getChiTietQuocGia(type_list, query) {
        const { page = 1, sort_field = '_id', sort_type = 'asc', sort_lang, category, year, limit = 10, } = query;
        const url = `https://phimapi.com/v1/api/quoc-gia/${type_list}?page=${page}&sort_field=${sort_field}&sort_type=${sort_type}` +
            (sort_lang ? `&sort_lang=${sort_lang}` : '') +
            (category ? `&category=${category}` : '') +
            (year ? `&year=${year}` : '') +
            (limit ? `&limit=${limit}` : '');
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        return data;
    }
    async getPhimTheoNam(type_list, query) {
        const { page = 1, sort_field = '_id', sort_type = 'asc', sort_lang, category, country, limit = 10, } = query;
        const url = `https://phimapi.com/v1/api/nam/${type_list}?page=${page}&sort_field=${sort_field}&sort_type=${sort_type}` +
            (sort_lang ? `&sort_lang=${sort_lang}` : '') +
            (category ? `&category=${category}` : '') +
            (country ? `&country=${country}` : '') +
            (limit ? `&limit=${limit}` : '');
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        return data;
    }
    async convertImage(url) {
        const apiUrl = `https://phimapi.com/image.php?url=${encodeURIComponent(url)}`;
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(apiUrl, { responseType: 'arraybuffer' }));
        return data;
    }
};
exports.FilmService = FilmService;
exports.FilmService = FilmService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], FilmService);
//# sourceMappingURL=film.service.js.map