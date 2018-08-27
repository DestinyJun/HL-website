import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  // 获取头部导航
  public getNavs(): Observable<any> {
    return this.http.get('http://192.168.28.151/red-bird/navigation/navigation');
  }
  // 获取公司信息
  public getAbouts(params): Observable<any> {
    return this.http.get('http://192.168.28.151/red-bird/organization/queryByPaging', {params});
  }
  // 获取问题咨询
  public getRefer(params): Observable<any> {
    return this.http.get('http://192.168.28.151/red-bird/answer/queryByPaging', {params});
  }

  // 获取公司案例
  public getCase(params): Observable<any> {
    return this.http.get('http://192.168.28.151/red-bird/caseInfo/queryByPaging', {params});
  }
  // 获取公司新闻
  public getNews(params): Observable<any> {
    return this.http.get('http://192.168.28.151/red-bird/news/queryByPaging', {params});
  }
  // 获取公司指定案例
  public getCases(params): Observable<any> {
    return this.http.get('http://192.168.28.151/red-bird/caseInfo/findOne', {params});
  }
  // 获取轮播图
  public getPhoto(params): Observable<any> {
    return this.http.get('http://192.168.28.151/red-bird/photo/queryByPaging', {params});
  }

  // 指定新闻信息
  public getOnlyNew(params): Observable<any> {
    return this.http.get('http://192.168.28.151/red-bird/news/findOne', {params});
  }

  // 获取友情链接
  public getLink(params): Observable<any> {
    return this.http.get('http://192.168.28.151/red-bird/partner/queryByPaging', {params});
  }
  // 获取主要人员
  public getPersons(params): Observable<any> {
    return this.http.get('http://192.168.28.151/red-bird/staff/queryByPaging', {params});
  }
//  获取主要设计实施的项目
  public getProject(params): Observable<any> {
    return this.http.get('http://192.168.28.151/red-bird/caseInfo/queryByPaging', {params});
  }
//  获取未来规划
  public getProgramme(params): Observable<any> {
    return this.http.get('http://192.168.28.151/red-bird/organization/queryByPaging', {params});
  }
//  获取banner图
  public getBanner(params): Observable<any> {
    return this.http.get('http://192.168.28.151/red-bird/subpage/queryByPaging', {params});
  }
  //  增加新闻阅读量
  public addNewsCount(params) {
    console.log(params);
    this.http.get('http://192.168.28.151/red-bird/news/readCount', {params}).subscribe();
  }

  // 新闻关键字搜索
  public getNewsSearch(params): Observable<any> {
    return this.http.get('http://192.168.28.151/red-bird/news/seach-news', {params});
  }

  // 案例关键字搜索
  public getCaseSearch(params): Observable<any> {
    return this.http.get('http://192.168.28.151/red-bird/caseInfo/seachCase', {params});
  }
  // 新闻推荐
  public getNewsRecommend(): Observable<any> {
    return this.http.get('http://192.168.28.151/red-bird/news/queryHotNews');
  }
}
