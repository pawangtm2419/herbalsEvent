import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface LoginData {
  success: boolean;
  serect: string;
}

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(public http: HttpClient) { }
  setFile(file, filename, timestamp) {
    console.log(file);
    return this.http.post<LoginData>('http://chetanherbals.com/admin/api/fileupload.php', {
      file, filename, timestamp
    });
  }
}
