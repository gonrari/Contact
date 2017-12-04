import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import * as esLocale from 'date-fns/locale/es';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {
    options: DatepickerOptions = {
        minYear: 1970,
        maxYear: 1999,
        displayFormat: 'DD/MM/YYYY',
        barTitleFormat: 'DD/MM/YYYY',
        firstCalendarDay: 1, // 0 - Sunday, 1 - Monday
        locale: esLocale
    };
    log(x) {
        console.log(x);
    }
    submit(x) {
        console.log(x);
    }
}
