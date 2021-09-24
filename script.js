const countDown = function () {

  // function to return difference in days between now and the date passed
  const daysLeft = function (toDate) {
    dt1 = new Date();
    dt2 = new Date(toDate);
    return Math.abs((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
  };

  // create the html for the countdown digits
  const createDigits = function (toDate, dd, today) {


    let countHTML = "";
    const daysLeftInt = daysLeft(toDate);
    const digitsArr = (daysLeftInt + '').split('');
    const diz = daysLeftInt.toString().length;

    /* Countdown */
    const subclass = diz > 2 ? 'three' : '';
    digitsArr.forEach(function (digit, index) {
      countHTML += `<div class="countdown__digit ${subclass}">${digit}</div>`;
    });

    /* Messages */

    if(daysLeftInt === 0) {
      $('.countdown__message.primary').hide();
    } else {
      $('.countdown__message.primary').prepend(daysLeftInt > 1 ? 'days ': 'day ');

    }

    if(today === dd) {
      const party = daysLeftInt === 0 ? 'anniversary' : 'moisniversaire'
      $('.countdown-wrapper').append(`<div class="countdown__message moiniversaire">Today is our ${party} 🥳</div>`);
    }

    // inject the html
    $('.countdown').html(countHTML);
  };


  return {
    init: function (mm, dd) {
      const dt = new Date();
      const yy = dt.getFullYear();
      const today = dt.getDate().toString();
      createDigits(`${mm}/${dd}/${yy}`, dd, today);
    }
  };
}();


countDown.init('09', '26');


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
}, 1200);
