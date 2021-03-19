import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  size: any;
  width: number;
  height: number;
  constructor(private service: AppService) { }

  ngOnInit(): void {
  }
  onselectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const filename = file.name;
      const filesize = file.size / 1024;
      const timestamp = new Date().toDateString();
      if ( filesize <= 1024) {
        this.service.setFile(file, filename, timestamp).subscribe(data => {
          if (data.success) {
            window.alert(data.serect);
          } else {
            window.alert(data.serect);
          }
        });
      } else {
        console.log('File Size is Big');
      }
    }
}
}
