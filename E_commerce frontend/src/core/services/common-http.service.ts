
import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { type ApiResponse } from '@/stores/models/ApiResponse';
import { environment } from '@/environments/environment';


export default class CommonHttpService {
  private apiUrl: string = environment.apiUrl;
  private pageNo: number = 1;
  private pageSize: number = 20;

  private httpOptions: AxiosRequestConfig = {
  //   headers: { 
  //     'Content-Type': 'application/json' 
  // },
  // params: {
  //   pageNumber: this.pageNo,
  //   pageSize: this.pageSize
  // }
};

 

  // GET request
  get(endpoint: string): Observable<ApiResponse> {
    return new Observable<ApiResponse>(observer => {
      axios.get<ApiResponse>(`${this.apiUrl}${endpoint}`, this.httpOptions)
        .then((response: AxiosResponse<ApiResponse>) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error: AxiosError) => {
          observer.error(error);
        });
    });
  
  }

  // GET request
  // getWithPagination(endpoint: string, pageNo: number = 1, pageSize: number = 20): Observable<ApiResponse> {
  //   this.httpOptions.params = new HttpParams()
  //     .set('pageNumber', pageNo)
  //     .set('pageSize', pageSize);
  //   return this.http.get<ApiResponse>(`${this.apiUrl}${endpoint}`, this.httpOptions);
  // }

  // POST request
  post(endpoint: string, body: any): Observable<ApiResponse> {
    return new Observable<ApiResponse>(observer => {
      axios.post<ApiResponse>(`${this.apiUrl}${endpoint}`, body, this.httpOptions)
        .then((response: AxiosResponse<ApiResponse>) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error: AxiosError) => {
          observer.error(error);
        });
    });
   
  }

  // PUT request
   put(endpoint: string, id:number, body: any): Observable<ApiResponse> {
    return new Observable<ApiResponse>(observer => {
      axios.put<ApiResponse>(`${this.apiUrl}${endpoint}/${id}`, body, this.httpOptions)
        .then((response: AxiosResponse<ApiResponse>) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error: AxiosError) => {
          observer.error(error);
        });
    });

  }

  // DELETE request
   delete(endpoint: string, id: number): Observable<ApiResponse> {
    return new Observable<ApiResponse>(observer => {
      axios.delete<ApiResponse>(`${this.apiUrl}${endpoint}/${id}`, this.httpOptions)
        .then((response: AxiosResponse<ApiResponse>) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error: AxiosError) => {
          observer.error(error);
        });
    });
  }
}
