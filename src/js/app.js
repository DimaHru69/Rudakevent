/*
!(i) 
Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
Или когда импортирован весь файл, например import "files/script.js";
Неиспользуемый (не вызванный) код в итоговый файл не попадает.

Если мы хотим добавить модуль следует его расскоментировать
*/
import "./libs/jquery";
import "./libs/slick";
import { sendingDataForms } from "./modules/sendingDataForms";
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit,
} from "./modules";
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'
/* Раскомментировать для использования */
import AOS from "aos";
// import { cli } from "webpack";
// Включить/выключить FLS (Full Logging System) (в работе)
window["FLS"] = true;
/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
! (i) необходимо для корректного отображения webp из css 
*/
isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
// menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
* Чтобы модальное окно открывалось и закрывалось
* На окно повешай атрибут data-type="<название окна>"
* И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

* На обертку(враппер) окна добавь класс _overlay-bg
* На кнопку для закрытия окна добавь класс button-close
*/
/* Раскомментировать для использования */
// togglePopupWindows()
// =======================================================================================================
//

$(".slider").slick({
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  cssEase: "linear",
  variableWidth: true,
  variableHeight: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
document.addEventListener("DOMContentLoaded", () => {
  sendingDataForms();
});

let links = document.getElementsByClassName("menu_link");
let toggler = document.getElementById("toggler");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    toggler.checked = false;
  });
}

var usedLang = document.documentElement.lang;

$("document").ready(function () {
  $("#form-question").on("submit", function (e) {
    e.preventDefault();
    var FormData = $("#form-question").serialize();
    $.ajax({
      type: "get",
      url: "http://rudakevent.com/static/mail.php",
      data: FormData,
      dataType: "json",
      encode: true,
      beforeSend: function () {
        $("#button-question")
          .html(usedLang == "en" ? "Sending" : "Odesílání")
          .css("background-color", "#bfbfbf");
      },
      success: function (response) {
        response = JSON.parse(JSON.stringify(response));
        if (response == "ok") {
          $("#button-question")
            .html(usedLang == "en" ? "Sending" : "Odesláno")
            .css("background-color", "#00B258");
        } else {
          $("#button-question").html(
            usedLang == "en" ? response : "Něco špatně..."
          );
        }
      },
      error: function () {},
    });
  });
});

$("document").ready(function () {
  $("#form-popup").on("submit", function (e) {
    e.preventDefault();
    var FormData = $("#form-popup").serialize();
    $.ajax({
      type: "get",
      url: "http://rudakevent.com/static/mail.php",
      data: FormData,
      dataType: "json",
      encode: true,
      beforeSend: function () {
        $("#button-popup")
          .html(usedLang == "en" ? "Sending" : "Odesílání")
          .css("background-color", "#bfbfbf");
      },
      success: function (response) {
        response = JSON.parse(JSON.stringify(response));
        if (response == "ok") {
          $("#button-popup")
            .html(usedLang == "en" ? "Sending" : "Odesláno")
            .css("background-color", "#00B258");
        } else {
          $("#button-popup").html(
            usedLang == "en" ? response : "Něco špatně..."
          );
        }
      },
      error: function () {},
    });
  });
});

const modal = document.querySelector(".modal");
const trigger = document.querySelectorAll(".trigger");
const closeButton = document.querySelector(".close-button");

for (let index = 0; index < trigger.length; index++) {
  const element = trigger[index];
  element.addEventListener("click", toggleModal);
}
function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

$(".open-popup").click(function (e) {
  e.preventDefault();
  $(".popup-bg").fadeIn(600);
});
$(".close-popup").click(function () {
  $(".popup-bg").fadeOut(600);
});

// document.querySelector("btn-serv1").addEventListener("click", (evt) => {
//   let clickedButton = evt.target;
//   let btnValue = clickedButton.value;
//   console.log(clickedButton);
// });
