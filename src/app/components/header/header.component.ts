import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public _flagIcons = "../../../assets/images/flag-icons/";

  constructor(public translate: TranslateService) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
    const BrowserLang = translate.getBrowserLang();
    translate.use(BrowserLang.match(/en|es/) ? BrowserLang : 'en');
  }

  ngOnInit(): void {
  }

  public handleLanguageSelection(event: MatSelectChange): void {
    this.translate.use(event.value);
  }

}
