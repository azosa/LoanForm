
    let isValidation = false;
    let checkAll = document.getElementById('zgody1');
    let consents = document.querySelectorAll('.second .checkAll');

    let checkAll2 = document.getElementById('zgody2');
    let consents2 = document.querySelectorAll('.third .checkAll');
    let submit = document.getElementById('submit');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    let psl = document.getElementById('PESEL');
    let idNumber = document.getElementById('NR_DOWOD_ODOBISTY');
    let birthCountry = document.getElementById('KRAJ_URODZENIA');
    let nationality = document.getElementById('OBYWATELSTWO');
    let nationalitybtns = document.querySelectorAll(".nationality");
    let incomeSource = document.getElementById('INCOME_SOURCE');
    let incomeNetto = document.getElementById('dochod_netto');
    let post = document.getElementById('STANOWISKO');
    let employerName = document.getElementById('EMPLOYER_NAME');
    let payment = document.getElementById('PAYMENT');
    let paymentbtns = document.querySelectorAll(".payment");
    let payment2btns = document.querySelectorAll(".payment2");
    let zrodlo = document.getElementById('ZRODLO_DOCHODU_INFO');
    let studentbtns = document.querySelectorAll(".student");
    let otherbtns = document.querySelectorAll(".alimenty");
    let unemployed = document.getElementById('STATUS_BEZROBOTNEGO');
    let unemployedbtns = document.querySelectorAll(".bezrobotny");
    let workStreet = document.getElementById('WORK_ADRESS_STREET');
    let workHouse = document.getElementById('WORK_ADRESS_HOUSE_NUMBER');
    let workHouseAppartment = document.getElementById('WORK_ADRESS_APPARTMENT_NUMBER');
    let workZip = document.getElementById('WORK_ADRESS_ZIP');
    let workCity = document.getElementById('WORK_ADRESS_CITY');
    let NIP = document.getElementById('NIP');
    let output = document.querySelectorAll(".slider__range--output");
    let slider = document.getElementsByClassName("slider__range");
    let sliderColor = document.getElementsByClassName("slider__range--color");
    let kwota = document.getElementById("kwota");
    let termin = document.getElementById("termin");
    let data = document.getElementById("data");

    var isOk = false;
    var isOk2 = false;
    let con = false;
    let con2 = false;
    let buttoninner = document.getElementsByClassName('button__inner')[0];
    let agreements = document.getElementsByClassName('form__inputs-agreements')[0];
    let inputs = document.querySelectorAll('.form__inputs-input input')
    var send = false;
    let send2 = false;
    let btn = document.getElementsByClassName("button__container")[0];
    let section1 = document.getElementsByClassName("first")[0];
    let section2 = document.getElementsByClassName("second")[0];
    let section3 = document.getElementsByClassName("third")[0];
    let section4 = document.getElementsByClassName("fourth")[0];
    let fullName = document.getElementById("name");
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let modal = document.getElementsByClassName("modal");
    var span = document.getElementsByClassName("close");

    let legalNoteLink = document.getElementsByClassName(
        "summary__link--legal-note"
    )[0];
    let countries = "Polska,Afganistan,Andora,Algieria,Albania,Angola,Antigua i Barbuda,Argentyna,Armenia,Australia,Austria,Azerbejdżan,Bahamy,Bahrajn,Bangladesz,Barbados,Białoruś,Belgia,Belize,Benin,Bhutan,Boliwia,Bośnia i Hercegowina,Botswana,Brazylia,Brunei,Bułgaria,Burkina Faso,Burundi,Kambodża,Kamerun,Kanada,Republika Zielonego Przylądka,Republika Środkowoafrykańska,Czad,Chile,Chiny,Kolumbia,Komory,Kongo,Demokratyczna Republika Konga,Kostaryka,Wybrzeże Kości Słoniowej,Chorwacja,Kuba,Cypr,Czechy,Dania,Dżibuti,Dominika,Dominikana,Ekwador,Egipt,Salwador,Gwinea Równikowa,Erytrea,Estonia,Etiopia,Fidżi,Finlandia,Francja,Gabon,Gambia,Gruzja,Niemcy,Ghana,Grecja,Grenada,Gwatemala,Gwinea,Gwinea Bissau,Gujana,Haiti,Honduras,Węgry,Islandia,Indie,Indonezja,Iran,Irak,Irlandia,Wyspa Man,Izrael,Włochy,Jamajka,Japonia,Jersey,Jordania,Kazachstan,Kenia,Kiribati,Kosowo,Kuwejt,Kirgistan,Laos,Łotwa,Liban,Lesotho,Liberia,Liban,Liechtenstein,Litwa,Luksemburg,Macedonia,Madagaskar,Malawi,Malezja,Malediwy,Mali,Malta,Wyspy Marschalla,Mauretania,Mauritius,Meksyk,Mikronezja,Mołdawia,Monako,Mongolia,Czarnogóra,Maroko,Mozambik,Mjanma(Birma),Namibia,Nauru,Nepal,Holandia,Antyle Holenderskie,Nowa Zelandia,Nikaragua,Niger,Nigeria,Korea Północna,Niger,Pakistan,Norwegia,Oman,Palau,Pakistan,Palestyna,Panama,Papua-Nowa Gwinea,Paragwaj,Peru,Filipiny,Portugalia,Katar,Rumunia,Rosja,Ruanda,Saint Kitts i Nevis,Saint Lucia,Saint Vincent i Grenadyny,Samoa,San Marino,Wyspy Świętego Tomasza i Książęca,Arabia Saudyjska,Senegal,Serbia,Seszele,Sierra Leone,Singapur,Słowacja,Słowenia,Wyspy Salomona,Somalia,Republika Południowej Afryki, Korea Południowa,Sudan Południowy,Hiszpania,Sri Lanka,Sudan,Surinam,Suazi,Szwecja,Szwajcaria,Syria,Tajwan,Tadżykistan,Tanzania,Tajlandia,Timor Wschodni,Togo,Tonga,Trynidad i Tobago,Tunezja,Turcja,Turkmenistan,Tuvalu,Uganda,Ukraina,Zjednoczone Emiraty Arabskie,Wielka Brytania,Stany Zjednoczone,Urugwaj,Uzbekistan,Vanuatu,Watykan,Wenezuela,Wietnam,Sahara Zachodnia,Jemen,Zambia,Zimbabwe,Bezpaństwowiec,Kraj nieustalony";
    let countriesArray = countries.split(',');
    let select = document.getElementById("Q3");
    let infoIcon = document.querySelectorAll('.info-img');
    var x, i, j, selElmnt, a, b, c;
    x = document.getElementsByClassName("custom-select");
    let icon = document.createElement('i');
    let addressCheckbox = document.getElementById('address');
    let street = document.getElementById('street');
    let streetMail = document.getElementById('MAIL_ADRESS_STREET');
    let house = document.getElementById('HOUSE_NUMBER');
    let houseMail = document.getElementById('MAIL_ADRESS_HOUSE_NUMBER');
    let appartament = document.getElementById('APPARTMENT_NUMBER');
    let appartamentMail = document.getElementById('MAIL_ADRESS_APPARTMENT_NUMBER');
    let zip = document.getElementById('zip');
    let zipMail = document.getElementById('MAIL_ADRESS_ZIP');
    let city = document.getElementById('city');
    let cityMail = document.getElementById('MAIL_ADRESS_CITY');
    let highPriceInfo = document.getElementsByClassName('high-price-info')[0];
    let totalLoanAmount = document.querySelectorAll('.totalLoanAmount');
    let repaymentDate = document.querySelectorAll('.repaymentDate');
    let numberOfDays = document.querySelectorAll('.numberOfDays');
    let totalAmountToBePaid = document.querySelectorAll('.totalAmountToBePaid');
    let commission = document.querySelectorAll('.commission'); //pola na prowizja
    let interest = document.querySelectorAll('.interest'); //pola na odsetki
    let modalRRSO = document.querySelectorAll('.modalRRSO'); //pola na RRSO
    let goBack1=document.getElementById('back1');
    let goBack2=document.getElementById('back2');
    beingWatched = {
        isError: 0,
        getError: function () {
            return this.isError;
        },
        count: 0,
    };
goBack1.addEventListener('click',function(){
document.getElementsByClassName("first")[0].style.display = "block";
document.getElementsByClassName("second")[0].style.display = "none";
})
goBack2.addEventListener('click',function(){
document.getElementsByClassName("second")[0].style.display = "block";
document.getElementsByClassName("third")[0].style.display = "none";
})
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
    //range 1
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
            kwota.innerHTML = price + " zł";

        } else {
            output[0].innerHTML = slider[0].value.toLocaleString("pl-PL") + " zł";
            kwota.innerHTML = slider[0].value.toLocaleString("pl-PL") + " zł";

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
        data.innerHTML = addDays(slider[1].value);
        for (let i = 0; i < repaymentDate.length; i++) {
            repaymentDate[i].innerHTML = addDays(slider[1].value);
        }

        output[1].innerHTML = slider[1].value.toLocaleString("pl-PL") + " dni";
   
        for (let i = 0; i < numberOfDays.length; i++) {
            numberOfDays[i].innerHTML = slider[1].value.toLocaleString("pl-PL");
        }
    }

    //rrso pop up




   
    legalNoteLink.addEventListener("click", function (event) {
        modal[2].style.display = "block";
    });

    for (let i = 0; i < span.length; i++) {
        span[i].addEventListener("click", function () {

            this.parentElement.parentElement.style.display = "none";
        });
    }

    window.onclick = function (event) {
        for (let i = 0; i < modal.length; i++) {
            if (event.target == modal[i]) {
modal[i].style.display = "none";
            }
        }
    };

    //button 'wez pozyczke'


    btn.addEventListener("click", function () {
        section1.style.display = "none";
        section2.style.display = "block";
        document.getElementById("wrapper__footer").classList.add("white-bg");
    });





    //countries loop

    for (let i = 0; i < countriesArray.length; i++) {
        let country = document.createElement("option");
        let countryName = document.createTextNode(countriesArray[i]);
        country.value = countriesArray[i];
        country.appendChild(countryName);
        select.appendChild(country);
    }


    //check all agreements

    checkAll.addEventListener('click', function () {
        if (checkAll.checked === true) {

for (let i = 0; i < consents.length; i++) {
if (consents[i].checked === false) {
    consents[i].click()
}

}
} else if (checkAll.checked === false) {
for (let i = 0; i < consents.length; i++) {
if (consents[i].checked === true) {
    consents[i].click()
}
}
}
    }
    );

    checkAll2.addEventListener('click', function () {
        if (checkAll2.checked === true) {

for (let i = 0; i < consents2.length; i++) {
if (consents2[i].checked === false) {
    consents2[i].click()
}

}
} else if (checkAll2.checked === false) {
for (let i = 0; i < consents2.length; i++) {
if (consents2[i].checked === true) {
    consents2[i].click()
}
}
}
     
    });

    // info boxes 



    for (let i = 0; i < infoIcon.length; i++) {
        infoIcon[i].parentElement.parentElement.getElementsByClassName('info')[0].style.display = "none";
        infoIcon[i].addEventListener('click', function () {
            infoIcon[i].parentElement.parentElement.getElementsByClassName('info')[0].style.display == "none" ? infoIcon[i].parentElement.parentElement.getElementsByClassName('info')[0].style.display = "block" : infoIcon[i].parentElement.parentElement.getElementsByClassName('info')[0].style.display = "none";

        })

    }





    //SELECT


    icon.setAttribute('class', "fas fa-search");

    for (i = 0; i < x.length; i++) {

        selElmnt = x[i].getElementsByTagName("select")[0];

        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML + '<i class="fas fa-search"></i>';

        x[i].appendChild(a);

        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < selElmnt.length; j++) {

            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {

var y, i, k, s, h;
s = this.parentNode.parentNode.getElementsByTagName("select")[0];

h = this.parentNode.previousSibling;
h.style.color = "black";

if (s.name == 'country') {
   birthCountry.value = this.innerHTML
   if (birthCountry.parentElement.getElementsByClassName('validation-img').length == 0) {
let div = document.createElement('div');
div.setAttribute('class', 'validation-img');
let img= document.createElement('img')
img.setAttribute('class', 'validation-img--img');
div.appendChild(img)
birthCountry.parentElement.appendChild(div);
div.style.display = "block";



            }



          
            birthCountry.parentElement.getElementsByClassName('validation-img--img')[0].src = "https://s3-eu-west-1.amazonaws.com/salesmanagoimg/36ah1dxt6fpehf53/bz0skjq3it4c2v3k/7wilvsrw2v7em1e8.PNG"
            beingWatched.isError++;
}
else if (s.name == 'income') {

   incomeSource.value = this.innerHTML
   if (incomeSource.parentElement.getElementsByClassName('validation-img').length == 0) {
let div = document.createElement('div');
div.setAttribute('class', 'validation-img');
let img= document.createElement('img')
img.setAttribute('class', 'validation-img--img');
div.appendChild(img)
incomeSource.parentElement.appendChild(div);
div.style.display = "block";



            }
   incomeSource.parentElement.getElementsByClassName('validation-img--img')[0].src = "https://s3-eu-west-1.amazonaws.com/salesmanagoimg/36ah1dxt6fpehf53/bz0skjq3it4c2v3k/7wilvsrw2v7em1e8.PNG"
   beingWatched.isError++;
}
for (i = 0; i < s.length; i++) {
   if (s.options[i].innerHTML == this.innerHTML) {
       s.selectedIndex = i;
       h.innerHTML = this.innerHTML;
       if (s.name == 'income') {

           if (s.selectedIndex == 1 || s.selectedIndex == 2) {
document.getElementById('umowa').style.display = "block";

document.getElementById('dzialalnosc').style.display = "none";
document.getElementById('student').style.display = "none";
document.getElementById('bezrobotny').style.display = "none";
document.getElementById('inne').style.display = "none";
post.required = true;
workStreet.required = true;
workHouse.required = true;
workZip.required = true;
workCity.required = true;
employerName.required = true;
NIP.required = false;
           }
           else if (s.selectedIndex == 3) {
document.getElementById('dzialalnosc').style.display = "block";
document.getElementById('umowa').style.display = "none";
document.getElementById('student').style.display = "none";
document.getElementById('bezrobotny').style.display = "none";
document.getElementById('inne').style.display = "none";
NIP.required = true;
post.required = false;
workStreet.required = true;
workHouse.required = true;
workZip.required = true;
workCity.required = true;
employerName.required = falseCount;
           }
           else if (s.selectedIndex == 5) {
document.getElementById('student').style.display = "block";
document.getElementById('umowa').style.display = "none";
document.getElementById('dzialalnosc').style.display = "none";
document.getElementById('bezrobotny').style.display = "none";
document.getElementById('inne').style.display = "none";
NIP.required = false;
post.required = false;
workStreet.required = false;
workHouse.required = false;
workZip.required = false;
workCity.required = false;
employerName.required = false;
           }
           else if (s.selectedIndex == 8) {
document.getElementById('bezrobotny').style.display = "block";
document.getElementById('umowa').style.display = "none";
document.getElementById('dzialalnosc').style.display = "none";
document.getElementById('student').style.display = "none";

document.getElementById('inne').style.display = "none";
NIP.required = false;
post.required = false;
workStreet.required = false;
workHouse.required = false;
workZip.required = false;
workCity.required = false;
employerName.required = false;
           }
           else if (s.selectedIndex == 9) {
document.getElementById('inne').style.display = "block";
document.getElementById('umowa').style.display = "none";
document.getElementById('dzialalnosc').style.display = "none";
document.getElementById('student').style.display = "none";
document.getElementById('bezrobotny').style.display = "none";
NIP.required = false;
post.required = false;
workStreet.required = false;
workHouse.required = false;
workZip.required = false;
workCity.required = false;
employerName.required = false;

           }
           else {
document.getElementById('umowa').style.display = "none";
document.getElementById('dzialalnosc').style.display = "none";
document.getElementById('student').style.display = "none";
document.getElementById('bezrobotny').style.display = "none";
document.getElementById('inne').style.display = "none";
NIP.required = false;
post.required = false;
workStreet.required = false;
workHouse.required = false;
workZip.required = false;
workCity.required = false;
employerName.required = false;
           }

       }
       y = this.parentNode.getElementsByClassName("same-as-selected");
       for (k = 0; k < y.length; k++) {
           y[k].removeAttribute("class");
       }
       this.setAttribute("class", "same-as-selected");
       break;
   }
}
h.click();
            });
            b.appendChild(c);

        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
arrNo.push(i)
            } else {
y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
x[i].classList.add("select-hide");
            }
        }
    }
    document.addEventListener("click", closeAllSelect);



    //MAIL ADDRESS AUTO COMPLETE
    var event = document.createEvent('Event');
    event.initEvent('input', true, true);

    addressCheckbox.addEventListener('change', e => {

        if (e.target.checked) {
            streetMail.value = street.value;
            houseMail.value = house.value;
            appartamentMail.value = appartament.value;
            zipMail.value = zip.value;
            cityMail.value = city.value;
            streetMail.dispatchEvent(event);
            houseMail.dispatchEvent(event);
            appartamentMail.dispatchEvent(event);
            zipMail.dispatchEvent(event);
            cityMail.dispatchEvent(event);
        }
        else {
            streetMail.value = "";
            houseMail.value = "";
            appartamentMail.value = "";
            zipMail.value = "";
            cityMail.value = "";
            streetMail.dispatchEvent(event);
            houseMail.dispatchEvent(event);
            appartamentMail.dispatchEvent(event);
            zipMail.dispatchEvent(event);
            cityMail.dispatchEvent(event);
        }

    });
    function createCheck(){
let div = document.createElement('div');
div.setAttribute('class', 'validation-img');
let img= document.createElement('img')
img.setAttribute('class', 'validation-img--img padding-top');
div.appendChild(img)
return div;
    }

function checkRadioButtons(el, detail){

if (this.checked == true) {
detail.value = this.value;

if (this.parentElement.parentElement.getElementsByClassName('validation-img').length == 0) {
let newElement=createCheck()
this.parentElement.parentElement.appendChild(newElement);
newElement.style.display = "block";

            }

this.parentElement.parentElement.getElementsByClassName('validation-img--img')[0].src = "https://s3-eu-west-1.amazonaws.com/salesmanagoimg/36ah1dxt6fpehf53/bz0skjq3it4c2v3k/7wilvsrw2v7em1e8.PNG";
beingWatched.isError++;
            }
}

    //check radio btns
    for (let i = 0; i < nationalitybtns.length; i++) {
        nationalitybtns[i].addEventListener('change', checkRadioButtons.bind(nationalitybtns[i], nationality))
        }

    //check radio btns
    for (let i = 0; i < paymentbtns.length; i++) {
        paymentbtns[i].addEventListener('change',  checkRadioButtons.bind(paymentbtns[i], payment))
        }
    //check radio btns
    for (let i = 0; i < payment2btns.length; i++) {
        payment2btns[i].addEventListener('change',  checkRadioButtons.bind(payment2btns[i], payment))
        }
    //check radio btns
    for (let i = 0; i < studentbtns.length; i++) {
        studentbtns[i].addEventListener('change',  checkRadioButtons.bind(studentbtns[i], zrodlo))
        }
    //check radio btns
    for (let i = 0; i < otherbtns.length; i++) {
        otherbtns[i].addEventListener('change',  checkRadioButtons.bind(otherbtns[i], zrodlo))
        }
    //check radio btns
    for (let i = 0; i < unemployedbtns.length; i++) {
        unemployedbtns[i].addEventListener('change',  checkRadioButtons.bind(unemployedbtns[i], unemployed))
        }
    


var secondStep=false;
var secondValidation=false;

    document.getElementsByClassName("error2")[0].style.display = "none";
    document.getElementsByClassName("error2")[1].style.display = "none";
    // VALIDATION
    let newArray=[];
    let newArray1=[];
    var isFinalValidation = false;
    var formIsValidated = false;
    class FormValidate {
        constructor(form, options) {
           

            const defaultOptions = {
classError: 'error'
            };

            this.form = form;
          
            this.options = Object.assign({}, defaultOptions, options);

            this.form.setAttribute('novalidate', 'novalidate');

            this.prepareElements();
            this.bindButton();
            if(secondStep){
           this.bindSubmit();
           }
        }

        getFields(str) {

            return this.form.querySelectorAll(str);



        }

        getTestMethod(inputType) {
            const inputsData = {
"text": { event: "input", method: this.testInputText.bind(this) },
"tel": { event: "input", method: this.testInputTel.bind(this) },
"email": { event: "input", method: this.testInputEmail.bind(this) },
"checkbox": { event: "change", method: this.testInputCheckbox.bind(this) },
"radio": { event: "input", method: this.testInputRadio.bind(this) },
"textarea": { event: "input", method: this.testInputText.bind(this) },
"select": { event: "change", method: this.testInputSelect.bind(this) }
            }
            return inputsData[inputType];
        }
        prepareElements() {
            var elements = this.getFields(".input1[required]");
            if(secondStep){
elements = this.getFields(".input2[required]");

for (let i = 0; i < elements.length; i++) {

if (elements[i].className == "checkbox__input checkAll input2") {
newArray1.push(elements[i]);


}
elements[i].addEventListener('change', function(){
                beingWatched.count=0;

           for(let j=0;j<document.getElementsByClassName('validation-img-img').length;j++){

                if(document.getElementsByClassName('validation-img-img')[j]
            .src=="https://s3-eu-west-1.amazonaws.com/salesmanagoimg/36ah1dxt6fpehf53/bz0skjq3it4c2v3k/uaqd5akj0948rq1u.png"){
                beingWatched.count=1
                }
                if(newArray1[0].checked==true&&newArray1[1].checked==true&&newArray1[2].checked==true&&newArray1[3].checked==true&&newArray1[4].checked==true&&newArray1[5].checked==true)
          {
            beingWatched.count=0;
          }
           }



           if(beingWatched.isError>=3&&beingWatched.count==0&&newArray1[0].checked==true&&newArray1[1].checked==true&&newArray1[2].checked==true&&newArray1[3].checked==true&&newArray1[4].checked==true&&newArray1[5].checked==true){ 
   
document.getElementsByClassName("button__inner--submit")[0].style.backgroundColor="#c21081"
document.getElementById("submit").style.backgroundColor="#c21081"
document.getElementsByClassName("error2")[0].style.display = "none";
document.getElementsByClassName("error2")[1].style.display = "none";
}
else{

document.getElementsByClassName("button__inner--submit")[0].style.backgroundColor="#5d5d5d"
document.getElementById("submit").style.backgroundColor="#5d5d5d"

}

            })
elements[i].addEventListener('blur', function () {
beingWatched.count = 0;

for (let j = 0; j < document.getElementsByClassName('validation-img-img').length; j++) {

    if (document.getElementsByClassName('validation-img-img')[j]
        .src == "https://s3-eu-west-1.amazonaws.com/salesmanagoimg/36ah1dxt6fpehf53/bz0skjq3it4c2v3k/uaqd5akj0948rq1u.png"||(newArray1[0].checked==false&&newArray1[1].checked==false&&newArray1[2].checked==false&&newArray1[3].checked==false&&newArray1[4].checked==false&&newArray1[5].checked==false)) {
        beingWatched.count = 1
    }

}



if (beingWatched.isError>=3&&beingWatched.count == 0 && newArray1[0].checked == true&&newArray1[1].checked==true&&newArray1[2].checked==true&&newArray1[3].checked==true&&newArray1[4].checked==true &&newArray1[5].checked==true) {
 
    document.getElementsByClassName("button__inner--submit")[0].style.backgroundColor = "#c21081"
    document.getElementById("submit").style.backgroundColor= "#c21081"
    document.getElementsByClassName("error2")[0].style.display = "none";
document.getElementsByClassName("error2")[1].style.display = "none";
}
else {
  
    document.getElementsByClassName("button__inner--submit")[0].style.backgroundColor = "#5d5d5d"
    document.getElementById("submit").style.backgroundColor = "#5d5d5d"
   

}

})

     

}
            }

            elements.forEach(el => {
let inputType = this.getInputType(el);

const methodData = this.getTestMethod(inputType);


el.addEventListener(methodData.event, e => {
   methodData.method(el);
});
            });
          
for (let i = 0; i < elements.length; i++) {

if (elements[i].className == "checkbox__input checkAll input1") {
newArray.push(elements[i]);

}
elements[i].addEventListener('change', function(){
                beingWatched.count=0;

           for(let j=0;j<document.getElementsByClassName('validation-img-img').length;j++){

                if(document.getElementsByClassName('validation-img-img')[j]
            .src=="https://s3-eu-west-1.amazonaws.com/salesmanagoimg/36ah1dxt6fpehf53/bz0skjq3it4c2v3k/uaqd5akj0948rq1u.png"){
                beingWatched.count=1
                }
                if(newArray[0].checked==true)
          {
            beingWatched.count=0;
          }
           }



           if(beingWatched.count==0&&newArray[0].checked==true){ 
   
document.getElementsByClassName("button__inner")[0].style.backgroundColor="#c21081"
document.getElementsByClassName("error2")[0].style.display = "none";
document.getElementsByClassName("error2")[1].style.display = "none";
}
else{

document.getElementsByClassName("button__inner")[0].style.backgroundColor="#5d5d5d"

}

            })
elements[i].addEventListener('blur', function () {
beingWatched.count = 0;

for (let j = 0; j < document.getElementsByClassName('validation-img-img').length; j++) {

    if (document.getElementsByClassName('validation-img-img')[j]
        .src == "https://s3-eu-west-1.amazonaws.com/salesmanagoimg/36ah1dxt6fpehf53/bz0skjq3it4c2v3k/uaqd5akj0948rq1u.png"||(newArray[0].checked==false)) {
        beingWatched.count = 1
    }

}



if (beingWatched.count == 0 && newArray[0].checked == true ) {
 
    document.getElementsByClassName("button__inner")[0].style.backgroundColor = "#c21081"
    document.getElementsByClassName("error2")[0].style.display = "none";
document.getElementsByClassName("error2")[1].style.display = "none";
}
else {
  
    document.getElementsByClassName("button__inner")[0].style.backgroundColor = "#5d5d5d"
   

}

})

     

}
            
        }
        getInputType(el) {
            if (el.tagName.toLowerCase() === "input") {
return el.type.toLowerCase();
            } else {
return el.tagName.toLowerCase();
            }
        }
        testInputText(input) {
            let inputIsValid = true;
            const pattern = input.getAttribute('pattern');

            let d;
            let c;


            if (pattern !== null) {

const reg = new RegExp(pattern, 'gi');

if (input.name === "PESEL") {



   let a = input.value[0];
   let b = input.value[1];
   if (a == 0 || a == 1 || a == 2 || a == 3) {
       d = "20" + a + b;
   }
   else {
       c = "19" + a + b;
   }

   let data = new Date().getFullYear();

   if ((data - c > 20 && data - c < 76) || (data - d > 20 && data - d < 76)) {
       inputIsValid = true;
   }
   else { inputIsValid = false; }
}

if (!reg.test(input.value)) {
   inputIsValid = false;
}
            }


            else {
if (input.value === '') {
   inputIsValid = false;
}
            }

            if (inputIsValid) {

this.showFieldValidation(input, true);
return true;
            } else {
this.showFieldValidation(input, false);
return false;
            }
        }
        showFieldValidation(input, inputIsValid) {
            if (input.name === "DOCHOD_NETTO") {
if (input.parentElement.childElementCount < 5) {
   let div = document.createElement('div')
   div.setAttribute("class", "validation-img")
   let img = document.createElement("img")
   img.setAttribute("class", "validation-img-img")
   div.appendChild(img)
   input.parentElement.appendChild(div)
}

            }
            if (input.parentElement.childElementCount < 4) {
let div = document.createElement('div')
div.setAttribute("class", "validation-img")
let img = document.createElement("img")
img.setAttribute("class", "validation-img-img")
div.appendChild(img)
input.parentElement.appendChild(div)
            }

            if (!inputIsValid) {
if (isFinalValidation) {
   showErrors(input)

}
input.parentElement.getElementsByClassName("validation-img-img")[0].src = "https://s3-eu-west-1.amazonaws.com/salesmanagoimg/36ah1dxt6fpehf53/bz0skjq3it4c2v3k/uaqd5akj0948rq1u.png";


            } else {
if (input.parentElement.getElementsByClassName("error").length > 0) {
   input.parentElement.getElementsByClassName("error")[0].style.display = "none";
}
input.parentElement.getElementsByClassName("validation-img-img")[0].src = "https://s3-eu-west-1.amazonaws.com/salesmanagoimg/36ah1dxt6fpehf53/bz0skjq3it4c2v3k/7wilvsrw2v7em1e8.PNG"


            }


        }
        showGroupValidation(input, inputIsValid) {

            if (input.parentElement.getElementsByClassName('consents-validation-img').length == 0) {
let div = document.createElement('div')
div.setAttribute("class", "consents-validation-img")
let img = document.createElement("img")
img.setAttribute("class", "validation-img-img")
div.appendChild(img)
input.parentElement.appendChild(div)
            }



            if (!inputIsValid) {
if (isFinalValidation) {
   showErrors(input)
   document.getElementsByClassName("error2")[0].style.display = "block";
   document.getElementsByClassName("error2")[1].style.display = "block";
if(secondValidation){  document.getElementsByClassName("error2")[2].style.display = "block";
   document.getElementsByClassName("error2")[3].style.display = "block";}
  

}
input.parentElement.getElementsByClassName("validation-img-img")[0].src = "https://s3-eu-west-1.amazonaws.com/salesmanagoimg/36ah1dxt6fpehf53/bz0skjq3it4c2v3k/uaqd5akj0948rq1u.png";


            } else {
if (input.parentElement.getElementsByClassName("error").length > 0) {
   input.parentElement.getElementsByClassName("error")[0].style.display = "none";
}
input.parentElement.getElementsByClassName("validation-img-img")[0].src = "https://s3-eu-west-1.amazonaws.com/salesmanagoimg/36ah1dxt6fpehf53/bz0skjq3it4c2v3k/7wilvsrw2v7em1e8.PNG"

            }
        }
        testInputEmail(input) {
            const mailReg = new RegExp('^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$', 'gi');

            if (!mailReg.test(input.value)) {
this.showFieldValidation(input, false);
return false;
            } else {
this.showFieldValidation(input, true);
return true;
            }
        }
        testInputTel(input) {
            const telReg = new RegExp('^[0-9\+]{9}$');

            if (!telReg.test(input.value)) {
this.showFieldValidation(input, false);
return false;
            } else {
this.showFieldValidation(input, true);
return true;
            }
        }
        testInputSelect(select) {
            if (select.value === '' || select.value === '-1') {
this.showFieldValidation(select, false);
return false;
            } else {
this.showFieldValidation(select, true);
console.log(select.value)
return true;
            }
        }
        testInputCheckbox(input) {
            const name = input.getAttribute('name');

            const group = document.querySelectorAll(`input[name="${name}"]:checked`);



            if (group.length) {
this.showGroupValidation(input, true);
return true;
            } else {
this.showGroupValidation(input, false);
return false;
            }
        }
        testInputRadio(input) {
            const name = input.getAttribute('name');

            const group = document.querySelectorAll(`input[name="${name}"]:checked`);



            if (group.length) {
this.showFieldValidation(input, true);
return true;
            } else {
this.showFieldValidation(input, false);
return false;
            }


        }


        bindButton() {
         
            this.form.getElementsByClassName("button")[0].addEventListener('click', e => {
e.preventDefault();
isFinalValidation = true;

const elements = this.getFields(".input1[required]");
formIsValidated = true;


elements.forEach(el => {
   const inputType = this.getInputType(el);
   const methodData = this.getTestMethod(inputType);
   if (!methodData.method(el)) {
       formIsValidated = false;
   }
});

if (formIsValidated) {
   document.getElementsByClassName("second")[0].style.display = "none";
   document.getElementsByClassName("third")[0].style.display = "block";
   secondStep=true;
   secondValidation=true;
   const cfg = {};
   const form = new FormValidate(document.querySelector('#form2'), cfg);
   isFinalValidation = false;

} else {
   return false;
}
            });
        }
        bindSubmit() {
          


            this.form.getElementsByClassName("submit")[0].addEventListener('click', e => {
e.preventDefault();
isFinalValidation = true;

const elements = this.getFields(".input2[required]");
formIsValidated = true;


elements.forEach(el => {
   const inputType = this.getInputType(el);
   const methodData = this.getTestMethod(inputType);
   if (!methodData.method(el)) {
       formIsValidated = false;
   }
});

if (formIsValidated) {

  
    section4.style.display = "block";
  section3.style.display = "none";
  

} else {
   return false;
}
            });



        
}

    }

    document.addEventListener("DOMContentLoaded", function () {
        const cfg = {};
        const form = new FormValidate(document.querySelector('#form1'), cfg);
    });

    function showErrors(input) {

        if (input.value == "") {
            if (input.parentElement.getElementsByClassName('error').length == 0) {
let div = document.createElement('div');
div.setAttribute('class', 'error error3');
div.innerHTML = 'UZUPEŁNIJ DANE';
input.parentElement.appendChild(div);
div.style.display = "block";
if (input.parentElement.classList.contains('small')) {
   div.setAttribute('class', 'error error3 error4');
}

            }
            else {
input.parentElement.getElementsByClassName('error')[0].innerHTML = 'UZUPEŁNIJ DANE';
            }

        }
        else {
            if (input.parentElement.getElementsByClassName('error').length == 0) {
let div = document.createElement('div');
div.setAttribute('class', 'error error3');
div.innerHTML = 'NIEPRAWIDŁOWA WARTOŚĆ';
input.parentElement.appendChild(div);
div.style.display = "block";
if (input.parentElement.classList.contains('small')) {
    div.setAttribute('class', 'error error3 error4');
}
}
else {
input.parentElement.getElementsByClassName('error')[0].innerHTML = 'NIEPRAWIDŁOWA WARTOŚĆ';
}
        }


    }

