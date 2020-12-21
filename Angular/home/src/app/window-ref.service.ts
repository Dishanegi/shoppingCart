import { Injectable } from '@angular/core';



export interface ICustomWindow extends Window{
   __custom_global_stuff:string;

}
function getWindow() : any {
  // return the global native browser window object
  return window;
}


@Injectable()
export class WindowRef {
   get nativeWindow() : ICustomWindow {
      return getWindow();
   }
  }
