let isValidation = false;
let submit = document.getElementById('sm-form-submit');
let phone = document.getElementById('sm-form-phone');
let email = document.getElementById('sm-form-email');
let psl = document.getElementById('sm-cst.PESEL');
let idNumber = document.getElementById('sm-cst.NR_DOWOD_ODOBISTY');
let birthCountry = document.getElementById('sm-cst.KRAJ_URODZENIA');
let nationality = document.getElementById('sm-cst.OBYWATELSTWO');
let nationalitybtns = document.querySelectorAll(".nationality");
let incomeSource = document.getElementById('sm-cst.INCOME_SOURCE');
let incomeNetto = document.getElementById('sm-cst.dochod_netto');
let post = document.getElementById('sm-cst.STANOWISKO');
let employerName = document.getElementById('sm-cst.EMPLOYER_NAME');
let payment = document.getElementById('sm-cst.PAYMENT');
let paymentbtns = document.querySelectorAll(".payment");
let payment2btns = document.querySelectorAll(".payment2");
let zrodlo = document.getElementById('sm-cst.ZRODLO_DOCHODU_INFO');
let studentbtns = document.querySelectorAll(".student");
let otherbtns = document.querySelectorAll(".alimenty");
let unemployed = document.getElementById('sm-cst.STATUS_BEZROBOTNEGO');
let unemployedbtns = document.querySelectorAll(".bezrobotny");
let workStreet = document.getElementById('sm-cst.WORK_ADRESS_STREET');
let workHouse = document.getElementById('sm-cst.WORK_ADRESS_HOUSE_NUMBER');
let workHouseAppartment = document.getElementById('sm-cst.WORK_ADRESS_APPARTMENT_NUMBER');
let workZip = document.getElementById('sm-cst.WORK_ADRESS_ZIP');
let workCity = document.getElementById('sm-cst.WORK_ADRESS_CITY');
let NIP = document.getElementById('sm-cst.NIP');
//range
let output = document.querySelectorAll(".slider__range--output");
let slider = document.getElementsByClassName("slider__range");
let sliderColor = document.getElementsByClassName("slider__range--color");
let kwota = document.getElementById("kwota");
let termin = document.getElementById("termin");
let data = document.getElementById("data");

var isOk = false;
let highPriceInfo = document.getElementsByClassName('high-price-info')[0];
let totalLoanAmount = document.querySelectorAll('.totalLoanAmount');
let repaymentDate = document.querySelectorAll('.repaymentDate');
let numberOfDays = document.querySelectorAll('.numberOfDays');
let totalAmountToBePaid = document.querySelectorAll('.totalAmountToBePaid');
let commission = document.querySelectorAll('.commission'); //pola na prowizja
let interest = document.querySelectorAll('.interest'); //pola na odsetki
let modalRRSO = document.querySelectorAll('.modalRRSO'); //pola na RRSO

  beingWatched = {
            isError: 0,
            getError: function () {
                return this.isError;
            },
            count: 0,
        };
        document.addEventListener("DOMContentLoaded", function (event) {
            document.querySelectorAll('img').forEach(function (img) {
                img.onerror = function () { this.style.display = 'none'; };
            })
        });

        function addDays(days) {
            var theDate = new Date();
            var result = new Date();
            result.setTime(theDate.getTime() + days * 24 * 60 * 60 * 1000); //


            var dd = result.getDate();

            var mm = result.getMonth() + 1; //January is 0!
            var yyyy = result.getFullYear();
            if (dd < 10) {
                dd = "0" + dd;
            }
            if (mm < 10) {
                mm = "0" + mm;
            }
            result = dd + "/" + mm + "/" + yyyy;

            return result;
        }
 
        data.innerHTML = addDays(30);
        sliderColor[0].style.width = 100 + "%";
        output[0].innerHTML = "3 000 zł";
        sliderColor[1].style.width = 60 + "%";
        output[1].innerHTML = "30 dni";
           slider[0].addEventListener("mousemove", changeValueRangeAmount, false);
        slider[0].addEventListener("change", changeValueRangeAmount, false);
        function changeValueRangeAmount(event) {
            if (slider[0].value > 3000) {
                highPriceInfo.style.display = "block";
                document.getElementsByClassName("container__box--slider")[0].style.marginTop = "5%";
            }
            else if (slider[0].value <= 3000) {
                highPriceInfo.style.display = "none";
                document.getElementsByClassName("container__box--slider")[0].style.marginTop = "10%";
            }
            sliderColor[0].style.width = slider[0].value / 30 + "%";
            let x = slider[0].value.split("");
            if (x.length === 4) {
                x.splice(1, 0, " ");
                let price = x.join("");
                output[0].innerHTML = price + " zł";
             

            } else {
                output[0].innerHTML = slider[0].value.toLocaleString("pl-PL") + " zł";
              

            }
            kwota2.value = slider[0].value;
            for (let i = 0; i < totalLoanAmount.length; i++) {
                totalLoanAmount[i].innerHTML = slider[0].value.toLocaleString("pl-PL") + ".00"
            }
            for (let i = 0; i < totalAmountToBePaid.length; i++) {
                totalAmountToBePaid[i].innerHTML = slider[0].value.toLocaleString("pl-PL") + ".00"
            }
        }


         //range 2
         slider[1].addEventListener("mousemove", changeValueRangeDays, false);
         slider[1].addEventListener("change", changeValueRangeDays, false);
         function changeValueRangeDays(event) {
             if (slider[1].value == 5 || slider[1].value == 10) {
                 sliderColor[1].style.width = slider[1].value * 1.8 + "%";
             } else {
                 sliderColor[1].style.width = slider[1].value * 2.1 + "%";
             }
           
             for (let i = 0; i < repaymentDate.length; i++) {
                 repaymentDate[i].innerHTML = addDays(slider[1].value);
             }
 
             output[1].innerHTML = slider[1].value.toLocaleString("pl-PL") + " dni";
            
             for (let i = 0; i < numberOfDays.length; i++) {
                 numberOfDays[i].innerHTML = slider[1].value.toLocaleString("pl-PL");
             }
         }
    //button 'wez pozyczke'
    let btn = document.getElementsByClassName("button__container")[0];
    let section1 = document.getElementsByClassName("first")[0];
    let section2 = document.getElementsByClassName("second")[0];

    btn.addEventListener("click", function () {
        section1.style.display = "none";
        section2.style.display = "block";
        document.getElementById("wrapper__footer").classList.add("white-bg");
    });
