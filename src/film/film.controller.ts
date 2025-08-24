import { Controller, Get, Query, Param } from '@nestjs/common';
import { ApiTags, ApiQuery, ApiParam } from '@nestjs/swagger';
import { FilmService } from './film.service';

@ApiTags('Film')
@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get('moi-cap-nhat')
  @ApiQuery({ name: 'page', required: false, type: Number })
  async getPhimMoiCapNhat(@Query('page') page = 1) {
    return this.filmService.getPhimMoiCapNhat(page);
  }

  @Get('moi-cap-nhat-v2')
  @ApiQuery({ name: 'page', required: false, type: Number })
  async getPhimMoiCapNhatV2(@Query('page') page = 1) {
    return this.filmService.getPhimMoiCapNhatV2(page);
  }

  @Get('moi-cap-nhat-v3')
  @ApiQuery({ name: 'page', required: false, type: Number })
  async getPhimMoiCapNhatV3(@Query('page') page = 1) {
    return this.filmService.getPhimMoiCapNhatV3(page);
  }

  @Get('thong-tin/:slug')
  @ApiParam({ name: 'slug', required: true })
  async getThongTinPhim(@Param('slug') slug: string) {
    return this.filmService.getThongTinPhim(slug);
  }


  @Get('danh-sach')
  @ApiQuery({ name: 'type_list', required: true })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'sort_field', required: false })
  @ApiQuery({ name: 'sort_type', required: false })
  @ApiQuery({ name: 'sort_lang', required: false })
  @ApiQuery({ name: 'category', required: false })
  @ApiQuery({ name: 'country', required: false })
  @ApiQuery({ name: 'year', required: false })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async getDanhSachPhim(@Query() query) {
    return this.filmService.getDanhSachPhim(query);
  }

  @Get('tim-kiem')
  @ApiQuery({ name: 'keyword', required: true })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'sort_field', required: false })
  @ApiQuery({ name: 'sort_type', required: false })
  @ApiQuery({ name: 'sort_lang', required: false })
  @ApiQuery({ name: 'category', required: false })
  @ApiQuery({ name: 'country', required: false })
  @ApiQuery({ name: 'year', required: false })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async timKiemPhim(@Query() query) {
    return this.filmService.timKiemPhim(query);
  }

  @Get('the-loai')
  async getTheLoai() {
    return this.filmService.getTheLoai();
  }

  @Get('the-loai/:type_list')
  @ApiParam({ name: 'type_list', required: true })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'sort_field', required: false })
  @ApiQuery({ name: 'sort_type', required: false })
  @ApiQuery({ name: 'sort_lang', required: false })
  @ApiQuery({ name: 'country', required: false })
  @ApiQuery({ name: 'year', required: false })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async getChiTietTheLoai(@Param('type_list') type_list: string, @Query() query) {
    return this.filmService.getChiTietTheLoai(type_list, query);
  }

  @Get('quoc-gia')
  async getQuocGia() {
    return this.filmService.getQuocGia();
  }

  @Get('quoc-gia/:type_list')
  @ApiParam({ name: 'type_list', required: true })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'sort_field', required: false })
  @ApiQuery({ name: 'sort_type', required: false })
  @ApiQuery({ name: 'sort_lang', required: false })
  @ApiQuery({ name: 'category', required: false })
  @ApiQuery({ name: 'country', required: false })
  @ApiQuery({ name: 'year', required: false })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async getChiTietQuocGia(@Param('type_list') type_list: string, @Query() query) {
    return this.filmService.getChiTietQuocGia(type_list, query);
  }

  @Get('nam/:type_list')
  @ApiParam({ name: 'type_list', required: true })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'sort_field', required: false })
  @ApiQuery({ name: 'sort_type', required: false })
  @ApiQuery({ name: 'sort_lang', required: false })
  @ApiQuery({ name: 'category', required: false })
  @ApiQuery({ name: 'country', required: false })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async getPhimTheoNam(@Param('type_list') type_list: string, @Query() query) {
    return this.filmService.getPhimTheoNam(type_list, query);
  }

  @Get('image')
  @ApiQuery({ name: 'url', required: true })
  async convertImage(@Query('url') url: string) {
    return this.filmService.convertImage(url);
  }
}
