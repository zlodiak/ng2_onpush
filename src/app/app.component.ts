import { Component } from '@angular/core';
import { RowComponent } from './components/row/row.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private rows: Array<any> = [];
  
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.rows.push(Math.random().toString(30).substring(2, 10));
    }
    
    setInterval(() => {      
      const ind = Math.ceil(Math.random()*10);
      this.rows[ind] = '--------';
      // console.log('interval', ind);
    }, 2500)
  }

}
