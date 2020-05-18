import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

  public toggle = true;
  public name = '';
  public description = '';

  constructor() { }

  @Output()
  public saveData = new EventEmitter<any>();

  ngOnInit(): void {
  }

  /**
   * save
   */
  public save(e) {
    this.saveData.emit({name: this.name, description: this.description});
    this.toggle = false;
  }

  /**
   * close
   */
  public close(e) {
    this.toggle = false;
  }

}
