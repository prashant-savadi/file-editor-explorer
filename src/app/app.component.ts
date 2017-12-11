import { Component } from '@angular/core';
// import {FileBrowserComponent} from './file-browser/file-browser.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  fileNames = ['File Name 1', 'File Name 2'];
  myArray = ['Folder 1', 'Folder 2', this.fileNames, 'Folder 3'];
  isArray (value) {
    return value && typeof value === 'object' && value.constructor === Array;

    }
}
