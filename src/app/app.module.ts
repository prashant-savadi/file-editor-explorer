import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FileBrowserComponent } from './file-browser/file-browser.component';
import { FileEditorComponent } from './file-editor/file-editor.component';
import { MenuButtonsComponent } from './menu-buttons/menu-buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    FileBrowserComponent,
    FileEditorComponent,
    MenuButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MenuButtonsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
