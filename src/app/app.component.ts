import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    const jsonCollection = [
      {
        meine_frage: 'hier kommt die antwort',
        ne_andere_frage: 'ne andere antwort',
        was_willst_du: 'alles',
        mehr_zur_auswahl: ['einiges', 'vieles und', 'g\u00e4r nix'],
      },
      {
        meine_frage: 'tom & jerry',
        ne_andere_frage: 'mickey maus',
        was_willst_du: 'oder',
        mehr_zur_auswahl: ['manches', 'einiges', 'vieles und', 'g\u00e4r nix'],
      },
      {
        meine_frage: 'dick und doof',
        ne_andere_frage: 'minnie muas',
        was_willst_du: 'nichts',
        mehr_zur_auswahl: ['g\u00e4r nix'],
      },
    ];
    const result = jsonCollection.reduce((b, a) => {
      Object.keys(a).forEach((key) => {
        if (Object.keys(b).indexOf(key) > -1) {
          if (typeof a[key] === 'object') {
            b[key] = [...b[key], ...a[key]];
            b[key] = Array.from(new Set([...b[key]]));
          } else {
            b[key].push(a[key]);
          } 
        } else {
          if (typeof a[key] === 'object') {
            b[key] = [...a[key]];
            b[key] = Array.from(new Set([...b[key]]));
          } else {
            b[key] = [a[key]];
          }
        }
      });
      return b;
    }, {});
    console.log(result);
  }
}
