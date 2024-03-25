const inputDay = document.getElementById("input-day");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-year");
const errorDay = document.getElementById("day-error");
const errorMonth = document.getElementById("month-error");
const errorYear = document.getElementById("year-error");
const displayDay = document.getElementById("display-day");
const displayMonth = document.getElementById("display-month");
const displayYear = document.getElementById("display-year");
const submitButtom = document.getElementById("submit-button");
const labelDay = document.getElementById("label-day");
const labelMonth = document.getElementById("label-month");
const labelYear = document.getElementById("label-year");

const date = new Date
const newDate = date.getDate();
const newMonth = date.getMonth() + 1;
const newYear = date.getFullYear();

let exactDay;
let exactMonth;
let exactYear;

let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const calculateAge = () => {
    exactDay = newDate - inputDay.value;
    exactMonth = newMonth - inputMonth.value;
    exactYear = newYear - inputYear.value;
    if (inputDay.value > newDate) {
        exactDay = newDate - inputDay.value + 30;
        exactMonth = newMonth - inputMonth.value - (1);
        if(inputMonth.value > newMonth) {
            exactMonth = newMonth - inputMonth.value + (12);
        }
    }
    else if (inputMonth.value > newMonth) {
        exactMonth = newMonth - inputMonth.value + (12);
        exactYear = newYear - inputYear.value - 1;
    }
    errorDay.textContent = "";
    errorMonth.textContent = "";
    errorYear.textContent = "";
    labelDay.style.color = "black";
    labelMonth.style.color = "black";
    labelYear.style.color = "black";
    displayDay.textContent = exactDay;
    displayMonth.textContent = exactMonth;
    displayYear.textContent = exactYear;
    findError();
    dayError();
}

const findError = () => {
    if(inputDay.value == "" && inputMonth.value == "" && inputYear.value == "" ) {
        errorDay.textContent = "this field is required";
        errorMonth.textContent = "this field is required";
        errorYear.textContent = "this field is required";
        labelDay.style.color = "red";
        labelMonth.style.color = "red";
        labelYear.style.color = "red";
        displayDay.textContent = "--";
        displayMonth.textContent = "--";
        displayYear.textContent = "--";
    }

    else if(inputDay.value == "" && inputMonth.value == "" && inputYear.value) {
        errorDay.textContent = "this field is required";
        errorMonth.textContent = "this field is required";
        labelDay.style.color = "red";
        labelMonth.style.color = "red";
        displayDay.textContent = "--";
        displayMonth.textContent = "--";
        displayYear.textContent = "--";
    }

    else if(inputDay.value == "" && inputMonth.value && inputYear.value) {
        errorDay.textContent = "this field is required";
        labelDay.style.color = "red";
        displayDay.textContent = "--";
        displayMonth.textContent = "--";
        displayYear.textContent = "--";
    }

    else if(inputDay.value && inputMonth.value == "" && inputYear.value == "") {
        errorYear.textContent = "this field is required";
        errorMonth.textContent = "this field is required";
        labelYear.style.color = "red";
        labelMonth.style.color = "red";
        displayDay.textContent = "--";
        displayMonth.textContent = "--";
        displayYear.textContent = "--";
    }

    else if(inputDay.value && inputMonth.value == "" && inputYear.value) {
        errorMonth.textContent = "this field is required";
        labelMonth.style.color = "red";
        displayDay.textContent = "--";
        displayMonth.textContent = "--";
        displayYear.textContent = "--";
    }

    else if(inputDay.value && inputMonth.value && inputYear.value == "") {
        errorYear.textContent = "this field is required";
        labelYear.style.color = "red";
        displayDay.textContent = "--";
        displayMonth.textContent = "--";
        displayYear.textContent = "--";
    }

    if(inputDay.value > 31) {
        errorDay.textContent = "must be valid day";
        labelDay.style.color = "red";
        displayDay.textContent = "--";
        displayMonth.textContent = "--";
        displayYear.textContent = "--";
    }

    if(inputMonth.value > 12) {
        errorMonth.textContent = "must be valid month";
        labelMonth.style.color = "red";
        displayDay.textContent = "--";
        displayMonth.textContent = "--";
        displayYear.textContent = "--";
    }

    if(inputYear.value > newYear) {
        labelYear.style.color = "red"
        errorYear.textContent = "must be in the past"
    }

    if(inputMonth.value > newMonth && inputYear.value == newYear) {
        labelYear.style.color = "red"
        labelDay.style.color = "red"
        labelMonth.style.color = "red"
        errorYear.textContent = "must be in the past"
        displayDay.textContent = "--";
        displayMonth.textContent = "--";
        displayYear.textContent = "--";
    }

    if(inputDay.value > newDate && inputMonth.value == newMonth && inputYear.value == newYear) {
        labelYear.style.color = "red"
        labelDay.style.color = "red"
        labelMonth.style.color = "red"
        errorYear.textContent = "must be in the past"
        displayDay.textContent = "--";
        displayMonth.textContent = "--";
        displayYear.textContent = "--";
    }
    
}

const dayError = () => {
    if(inputDay.value > 28 && inputMonth.value == 2 && inputYear.value % 4 != 0) {
        errorDay.textContent = "must be valid date"
        labelDay.style.color = "red";
        labelMonth.style.color = "red";
        labelYear.style.color = "red";
        displayDay.textContent = "--";
        displayMonth.textContent = "--";
        displayYear.textContent = "--";
    }

    if(inputDay.value > 29 && inputMonth.value == 2) {
        errorDay.textContent = "must be valid date"
        labelDay.style.color = "red";
        labelMonth.style.color = "red";
        labelYear.style.color = "red";
        displayDay.textContent = "--";
        displayMonth.textContent = "--";
        displayYear.textContent = "--";
    }
    if((inputMonth.value == 4 || inputMonth.value == 6 || inputMonth.value == 9 || inputMonth.value == 11) && inputDay.value > 30) {
        errorDay.textContent = "must be valid date"
        labelDay.style.color = "red";
        labelMonth.style.color = "red";
        labelYear.style.color = "red";
        displayDay.textContent = "--";
        displayMonth.textContent = "--";
        displayYear.textContent = "--";
    }
    if((inputMonth.value == 1 || inputMonth.value == 3 || inputMonth.value == 5 || inputMonth.value == 7 || inputMonth.value == 8 || inputMonth.value == 10 || inputMonth.value == 12) && inputDay.value > 31) {
        errorDay.textContent = "must be valid date"
        labelDay.style.color = "red";
        labelMonth.style.color = "red";
        labelYear.style.color = "red";
        displayDay.textContent = "--";
        displayMonth.textContent = "--";
        displayYear.textContent = "--";
    }
}

submitButtom.addEventListener("click", calculateAge);
