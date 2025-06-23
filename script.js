const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const countDownFun = () => {
    let currentDate = new Date();
    let giveAwayDate = new Date(2025, 4, 10, 19, 30, 0, 0);
  
    let hours = giveAwayDate.getHours();
    let ampm = "AM";
    if (hours >= 12) {
      ampm = "PM";
    }
    if (hours > 12) {
      hours = hours - 12;
    }
    let giveawaybox = document.querySelector(".giveaway");
    giveawaybox.innerHTML = `giveaway ends on ${
      day[giveAwayDate.getDay()]
    }, ${giveAwayDate.getDate()} ${
      month[giveAwayDate.getMonth()]
    } ${giveAwayDate.getFullYear()} ${String(hours).padStart(2, '0')}:${giveAwayDate.getMinutes()} ${ampm}`;
    let timeDiff = giveAwayDate - currentDate;
    let daysLeft = Math.floor(timeDiff/(24*60*60*1000))
    document.querySelector('#days').innerHTML= String(daysLeft).padStart(2,'0')
    let hoursLeft = Math.floor((timeDiff % (24*60*60*1000)) / (60*60*1000))
    document.querySelector('#hours').innerHTML=String(hoursLeft).padStart(2,'0')
    let minutesLeft = Math.floor((timeDiff % (60*60*1000)) / (60*1000))
    document.querySelector('#mins').innerHTML=String(minutesLeft).padStart(2,'0')
    let secondsLeft = Math.floor((timeDiff % (60*1000)) / 1000)
    document.querySelector('#seconds').innerHTML=String(secondsLeft).padStart(2,'0')
  };
  
  window.addEventListener("load", countDownFun);
  setInterval( countDownFun , 1000)  
  