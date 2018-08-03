import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';


@Injectable()
export class TranslationService {
  lang = new BehaviorSubject<string>('');
  lang$: Observable<string>;

  constructor(
    private _translate: TranslateService
  ) {}

  public initTranslate(): Observable<any> {
    this._translate.addLangs(['de', 'en', 'es', 'fr', 'nl']);
    this._translate.setDefaultLang('en');
    this.lang.next(this._translate.currentLang);
    this.lang$ = of(this._translate.currentLang);

    const browserLang = this._translate.getBrowserLang();
    return this._translate.use(browserLang.match(/de|en|es|fr|nl/) ? browserLang : 'en');
  }

  public use(value: string): Observable<any> {
    console.log(value);
    this.lang.next(value);
    return this._translate.use(value);
  }

  public getLangs(): string[] {
    return this._translate.getLangs();
  }

  public currentLang(): string {
    return this._translate.currentLang;
  }
}
