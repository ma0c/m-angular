import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';

// Utils
import { openSnackBarWithTranslate } from './common/utils/general';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public items = [];
  private StorageName = 'items';
  constructor(
    private dbService: NgxIndexedDBService,
    private snackBar: MatSnackBar,
    private translateService: TranslateService){
  }

  ngOnInit(){
    this.dbService.getAllByIndex(this.StorageName, 'status', IDBKeyRange.only('pending')).then(items => {
      this.items = items;
    });
  }

  public addItem(eventData) {
    const item = { name: eventData.name, description: eventData.description, status: 'pending'};
    this.dbService.add(this.StorageName, item).then(() => {
      this.items.push(item);
    },
    async (error) => {
      await openSnackBarWithTranslate('ERROR.ADD_ITEM', 'GENERAL.OK', this.snackBar, this.translateService);
    });
  }

  /**
   * markAsDone
   */
  public markAsDone(e, item) {
    this.dbService.update(this.StorageName, { id: item.id, name: item.name, description: item.description, status: 'done'}).then(
      () => {
        this.items = this.items.filter((value, index, arr) => {
          return value.id !== item.id;
        });
      },
      async (error) => {
        await openSnackBarWithTranslate('ERROR.UPDATE_ITEM', 'GENERAL.OK', this.snackBar, this.translateService);
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
