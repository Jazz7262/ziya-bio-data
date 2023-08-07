import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent {
  birthDate = Date.parse('1999-05-28T19:10:00');
  birthYear = 1999;
  birthMonth = 5;
  birthDay = 28;

  years: number = 0;
  months: number = 0;
  days: number = 0;
  hours: string = '0';
  minutes: string = '0';
  seconds: string = '0';

  numberFormatter = Intl.NumberFormat('en-US', {
    minimumIntegerDigits: 2,
  });

  twoSpaces = '  ';

  ngOnInit(): void {
    setInterval(() => {
      let currentDate = Date.now();
      let diff = currentDate - this.birthDate;

      let currentYear = new Date().getFullYear();
      let currentMonth = new Date().getMonth() + 1;
      let currentDay = new Date().getDate();

      this.years = currentYear - this.birthYear;

      if (currentMonth >= this.birthMonth) {
        this.months = currentMonth - this.birthMonth;
      } else {
        this.years--;
        this.months = 12 + currentMonth - this.birthMonth;
      }

      if (currentDay >= this.birthDay) {
        this.days = currentDay - this.birthDay;
      } else {
        this.months--;
        this.days = 31 + currentDay - this.birthDay;

        if (this.months < 0) {
          this.months = 11;
          this.years--;
        }
      }

      this.hours = this.numberFormatter.format(
        Math.floor(diff / (1000 * 60 * 60)) % 24
      );
      this.minutes = this.numberFormatter.format(
        Math.floor(diff / (1000 * 60)) % 60
      );
      this.seconds = this.numberFormatter.format(Math.floor(diff / 1000) % 60);
    }, 1000);
  }
}
