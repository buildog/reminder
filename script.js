const countDown = function () {

  // function to return difference in days between now and the date passed
  const daysLeft = function (toDate) {
    dt1 = new Date();
    dt2 = new Date(toDate);
    return Math.floor((Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) - Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate())) / (1000 * 60 * 60 * 24));
  };

  // create the html for the countdown digits
  const createDigits = function (toDate) {

    let countHTML = "";
    const daysLeftInt = daysLeft(toDate);
    const digitsArr = (daysLeftInt + '').split('');

    digitsArr.forEach(function (digit, index) {
      countHTML += `<div class="countdown__digit">${digit}</div>`;
    });

    // inject the html
    const countdownEl = document.querySelector('.countdown');
    countdownEl.innerHTML = countHTML;
  };


  return {
    init: function (date) {
      // put something here
      createDigits(date);
    } };


}();

const year = new Date().getFullYear();
// enter the date you're counting down to mm/dd/yyyy
countDown.init('09/26/2020');


/* Hearths */


var love = setInterval(function () {
  var r_num = Math.floor(Math.random() * 10) + 1;
  var r_size = Math.floor(Math.random() * 65) + 10;
  var r_left = Math.floor(Math.random() * 100) + 1;
  var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 25;

  $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

  $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

  $('.heart').each(function () {
    var top = $(this).css("top").replace(/[^-\d\.]/g, '');
    var width = $(this).css("width").replace(/[^-\d\.]/g, '');
    if (top <= -100 || width >= 150) {
      $(this).detach();
    }
  });
}, 500);
