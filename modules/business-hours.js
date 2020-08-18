// Class to check the business hours and compare with current time.

// --- Parameters ---
// businessHours: class or id selector of the hours. ie: '[data-weekday]',
// default: none, can't be empty

export default class BusinessHours {
  constructor(businessHours) {
    this.businessHours = document.querySelector(businessHours);
  }

  dataBusinessHours() {
    this.weekDay = this.businessHours.dataset.week.split(",").map(Number);
    this.weekHour = this.businessHours.dataset.hours.split(",").map(Number);
  }

  dataCurrentTime() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    // Using system time, for a specific timeZone use:
    // getUTCHours() and (subtract 3 for a brazilian time ie).
    this.hourNow = this.dateNow.getHours();
  }

  compareHours() {
    this.dataBusinessHours();
    this.dataCurrentTime();
    const openWeekDays = this.weekDay.indexOf(this.dayNow) !== -1;
    const openHours =
      this.hourNow >= this.weekHour[0] && this.hourNow < this.weekHour[1];
    return openWeekDays && openHours;
  }

  activeOpen() {
    if (this.compareHours()) {
      this.businessHours.classList.add("open");
    }
  }

  init() {
    if (this.businessHours) {
      this.activeOpen();
    }
  }
}
