class ExtendedDate extends Date {
  constructor(
    year,
    month,
    day,
    b,
    currentSecond,
    yearString,
    monthString,
    dayString
  ) {
    super();
    this._year = year;
    this._month = month;
    this._day = day;
    this._b = b;
    this._currentSecond = currentSecond;
    this._yearString = yearString;
    this._monthString = monthString;
    this._dayString = dayString;
  }

  getDateStr() {
    let monthResult;
    switch (this._month) {
      case 1:
        monthResult = "January";
        break;
      case 2:
        monthResult = "February";
        break;
      case 3:
        monthResult = "March";
        break;
      case 4:
        monthResult = "April";
        break;
      case 5:
        monthResult = "May";
        break;
      case 6:
        monthResult = "June";
        break;
      case 7:
        monthResult = "July";
        break;
      case 8:
        monthResult = "August";
        break;
      case 9:
        monthResult = "September";
        break;
      case 10:
        monthResult = "October";
        break;
      case 11:
        monthResult = "November";
        break;
      case 12:
        monthResult = "December";
        break;
    }

    let arrMonth = [
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      "sixth",
      "seventh",
      "eighth",
      "ninth",
      "tenth",
      "eleventh",
      "twelfth",
      "thirteenth",
      "fourteenth",
      "fifteenth",
      "sixteenth",
      "seventeenth",
      "eighteenth",
      "nineteenth",
      "twentieth",
      "twenty-first",
      "twenty-second",
      "twenty-third",
      "twenty-fourth",
      "twenty-fifth",
      "twenty-sixth",
      "twenty-seventh",
      "twenty-eighth",
      "twenty-ninth",
      "thirtieth",
      "thirty-first",
    ];

    let dayResult = arrMonth[this._day - 1];

    return `${monthResult}, ${dayResult}`;
  }

  getLastFuture() {
    let getSecond = Date.parse(
      this._yearString + "-" + this._monthString + "-" + this._dayString
    );
    if (this._currentSecond <= getSecond) {
      return `Date: true`;
    } else {
      return `Date: false`;
    }
  }

  getYear() {
    return `Year is ${b}`;
  }

  getNextDate() {
    let nextDate = new Date(year, month - 1, day);
    nextDate.setDate(nextDate.getDate() + 1);
    day = nextDate.getDate().toString();
    month = (nextDate.getMonth() + 1).toString();
    year = nextDate.getFullYear();
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return `Next date: ${day}.${month}.${year}`;
  }
}

let date;
let yearString;
let year;
let dayString;
let day;
let monthString;
let month;
let b;
let currentSecond = Date.parse(new Date());

massege();

function massege() {
  date = prompt("Enter date: DD.MM.YYYY");
  yearString =
    date.charAt(6) + date.charAt(7) + date.charAt(8) + date.charAt(9);
  year = parseInt(yearString);
  dayString = date.charAt(0) + date.charAt(1);
  day = parseInt(dayString);
  monthString = date.charAt(3) + date.charAt(4);
  month = parseInt(monthString);
}

while (date.length !== 10 || date.charAt(2) !== "." || date.charAt(5) !== ".") {
  alert("Date is not correct");
  massege();
}

while (year < 1000 || isNaN(year)) {
  alert("Year is not correct");
  massege();
}

while (month < 1 || month > 12 || isNaN(month)) {
  alert("Month is not correct");
  massege();
}

while (day < 1 || day > 31 || isNaN(day)) {
  alert("Day is not correct");
  massege();
}

if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
  b = "leap";
} else {
  b = "normal";
}

if (month === 2 && b === "normal" && day > 28) {
  alert("Day is not correct - max 28");
  massege();
}

if (month === 2 && b === "leap" && day > 29) {
  alert("Day is not correct - year is leap. max 29");
  massege();
}

let dateClass = new ExtendedDate(
  year,
  month,
  day,
  b,
  currentSecond,
  yearString,
  monthString,
  dayString
);

document.write(
  `${dateClass.getDateStr()}<br>${dateClass.getLastFuture()}<br>${dateClass.getYear()}<br>${dateClass.getNextDate()}`
);
