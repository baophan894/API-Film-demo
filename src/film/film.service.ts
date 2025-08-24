import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class FilmService {
  constructor(private readonly httpService: HttpService) {}

  async getPhimMoiCapNhat(page: number) {
    const url = `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=${page}`;
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }

  async getPhimMoiCapNhatV2(page: number) {
    const url = `https://phimapi.com/danh-sach/phim-moi-cap-nhat-v2?page=${page}`;
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }

  async getPhimMoiCapNhatV3(page: number) {
    const url = `https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=${page}`;
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }

  async getThongTinPhim(slug: string) {
    const url = `https://phimapi.com/phim/${slug}`;
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }


  async getDanhSachPhim(query: any) {
    const {
      type_list,
      page = 1,
      sort_field = '_id',
      sort_type = 'asc',
      sort_lang,
      category,
      country,
      year,
      limit = 10,
    } = query;
    const url = `https://phimapi.com/v1/api/danh-sach/${type_list}?page=${page}&sort_field=${sort_field}&sort_type=${sort_type}` +
      (sort_lang ? `&sort_lang=${sort_lang}` : '') +
      (category ? `&category=${category}` : '') +
      (country ? `&country=${country}` : '') +
      (year ? `&year=${year}` : '') +
      (limit ? `&limit=${limit}` : '');
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }

  async timKiemPhim(query: any) {
    const {
      keyword,
      page = 1,
      sort_field = '_id',
      sort_type = 'asc',
      sort_lang,
      category,
      country,
      year,
      limit = 10,
    } = query;
    const url = `https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(keyword)}&page=${page}&sort_field=${sort_field}&sort_type=${sort_type}` +
      (sort_lang ? `&sort_lang=${sort_lang}` : '') +
      (category ? `&category=${category}` : '') +
      (country ? `&country=${country}` : '') +
      (year ? `&year=${year}` : '') +
      (limit ? `&limit=${limit}` : '');
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }

  async getTheLoai() {
    const url = 'https://phimapi.com/the-loai';
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }

  async getChiTietTheLoai(type_list: string, query: any) {
    const {
      page = 1,
      sort_field = '_id',
      sort_type = 'asc',
      sort_lang,
      country,
      year,
      limit = 10,
    } = query;
    const url = `https://phimapi.com/v1/api/the-loai/${type_list}?page=${page}&sort_field=${sort_field}&sort_type=${sort_type}` +
      (sort_lang ? `&sort_lang=${sort_lang}` : '') +
      (country ? `&country=${country}` : '') +
      (year ? `&year=${year}` : '') +
      (limit ? `&limit=${limit}` : '');
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }

  async getQuocGia() {
    const url = 'https://phimapi.com/quoc-gia';
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }

  async getChiTietQuocGia(type_list: string, query: any) {
    const {
      page = 1,
      sort_field = '_id',
      sort_type = 'asc',
      sort_lang,
      category,
      year,
      limit = 10,
    } = query;
    const url = `https://phimapi.com/v1/api/quoc-gia/${type_list}?page=${page}&sort_field=${sort_field}&sort_type=${sort_type}` +
      (sort_lang ? `&sort_lang=${sort_lang}` : '') +
      (category ? `&category=${category}` : '') +
      (year ? `&year=${year}` : '') +
      (limit ? `&limit=${limit}` : '');
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }

  async getPhimTheoNam(type_list: string, query: any) {
    const {
      page = 1,
      sort_field = '_id',
      sort_type = 'asc',
      sort_lang,
      category,
      country,
      limit = 10,
    } = query;
    const url = `https://phimapi.com/v1/api/nam/${type_list}?page=${page}&sort_field=${sort_field}&sort_type=${sort_type}` +
      (sort_lang ? `&sort_lang=${sort_lang}` : '') +
      (category ? `&category=${category}` : '') +
      (country ? `&country=${country}` : '') +
      (limit ? `&limit=${limit}` : '');
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }

  async convertImage(url: string) {
    const apiUrl = `https://phimapi.com/image.php?url=${encodeURIComponent(url)}`;
    const { data } = await firstValueFrom(this.httpService.get(apiUrl, { responseType: 'arraybuffer' }));
    return data;
  }
}
