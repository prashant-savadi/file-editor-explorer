import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.scss']
})
export class FileBrowserComponent implements OnInit {

allFiles: string[] = [];

constructor() { }

  ngOnInit() {
    this.allFiles = this.getAllFiles();
  }

  getAllFiles() {
    return ['file 1', 'file 2', 'file 3'];
  }



}
