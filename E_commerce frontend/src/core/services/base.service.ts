import { ApiUrlService } from './api-ulr.service';
import { Observable } from 'rxjs';

import { type ApiResponse } from '@/stores/models/ApiResponse';
import  CommonHttpService  from '@/core/services/common-http.service';

export default class BaseService {
  public loader = false;
  private commonHttp = new CommonHttpService();
  
  // GET request
  get(endpoint: string): Observable<ApiResponse> {
    return this.commonHttp.get(endpoint);
  }

  // GET request
  // getWithPagination(endpoint: string, pageNo: number = 1, pageSize: number = 20): Observable<ApiResponse> {
  //   return this.commonHttp.getWithPagination(endpoint, pageNo, pageSize);
  // }

  // POST request
  post(endpoint: string, body: any): Observable<ApiResponse> {
    return this.commonHttp.post(endpoint, body);
  }

  // PUT request
  put(endpoint: string, id: number, body: any): Observable<ApiResponse> {
    return this.commonHttp.put(endpoint, id, body);
  }

  // DELETE request
  delete(endpoint: string, id: number): Observable<ApiResponse> {
    return this.commonHttp.delete(endpoint, id);
  }
}
