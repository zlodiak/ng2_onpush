import { Component, OnInit, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent implements OnInit, OnChanges {

  @Input() public data: string;

  constructor() { 
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log('change');
  }  
  
  get rowData(): string {
    console.log('getting row data');
    return this.data;
  }

}
