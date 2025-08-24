import { HttpService } from '@nestjs/axios';
export declare class FilmService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getPhimMoiCapNhat(page: number): Promise<any>;
    getPhimMoiCapNhatV2(page: number): Promise<any>;
    getPhimMoiCapNhatV3(page: number): Promise<any>;
    getThongTinPhim(slug: string): Promise<any>;
    getDanhSachPhim(query: any): Promise<any>;
    timKiemPhim(query: any): Promise<any>;
    getTheLoai(): Promise<any>;
    getChiTietTheLoai(type_list: string, query: any): Promise<any>;
    getQuocGia(): Promise<any>;
    getChiTietQuocGia(type_list: string, query: any): Promise<any>;
    getPhimTheoNam(type_list: string, query: any): Promise<any>;
    convertImage(url: string): Promise<any>;
}
