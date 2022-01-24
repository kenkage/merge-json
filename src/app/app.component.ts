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
        BusinessEntity: ['Quote', 'Submission'],
        Location: [''],
        Tabs: ['Summary'],
        SubTabs: ['Risk'],
      },
      {
        BusinessEntity: ['Quote', 'Submission'],
        Location: [''],
        Tabs: ['Details'],
        SubTabs: [''],
      },
      {
        BusinessEntity: ['Party'],
        Location: [''],
        Tabs: ['Details'],
        SubTabs: [''],
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
