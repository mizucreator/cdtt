import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  addEvent: FormGroup;
  type = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        let url = e.urlAfterRedirects;
        url = url.replace('/', '');
        const params = url.split('?');
        if (params.length > 0) {
          this.type = params[1].replace('t=', '');
        }
      }
    });
  }

  ngOnInit(): void {
    this.formInit(this.type);
  }

  // tslint:disable-next-line:typedef
  formInit(type) {
    switch (type) {
      case 'worship':
        this.addEvent = this.formBuilder.group({
          worshipType: [
            {value: ''},
            Validators.compose([Validators.required])
          ],
          eventName: [
            {value: ''},
            Validators.compose([Validators.required])
          ],
        });
        break;
      case 'event':
    }
  }
}
