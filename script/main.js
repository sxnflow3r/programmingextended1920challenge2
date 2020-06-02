
function initEarthClock() {
	var eclock = document.getElementById('earthTime');
	var time  = getCurrentEarthTime(new Date());
	// display time
	eclock.innerHTML = time['hours']+':'+ time['minutes']+':'+ time['seconds']; // !! your code here
}
/**
 * Parse the time
 * @param date object - current time 
 * @return date array
 */

function getCurrentEarthTime(date) {
	var time = [];

	time['seconds'] = date.getUTCSeconds();
	time['minutes'] = date.getUTCMinutes();
	time['hours'] = date.getUTCHours();
	if(time['seconds']<10){
		time['seconds'] = '0'+time['seconds'];
	}

	if(time['minutes']<10){
		time['minutes'] = '0'+time['minutes'];
	}
	if(time['hours']<10){
		time['hours'] = '0'+time['hours'];
	}

	if(time['hours']>= 0){
		//document.getElementsByClassName('container')[0].style.backgroundColor = 'rgba(255,143,0,0.7)';
	}
	return time;

}
initEarthClock();

setInterval(initEarthClock,1000);

// start
initEarthClock();

//Mars Clock using the 2.7% faster Method 
/**
 * Start clock
 */

function initMarsClock() {
	var clock = document.getElementById('timeText');
	var etime  = getCurrentMarsTime(new Date());
	// display time
	clock.innerHTML = etime['hours']+':'+ etime['minutes']+':'+ etime['seconds']; // !! your code here
}

function getCurrentMarsTime(date) {
	var jdate = date;  // a new date

	var jtime = jdate.getTime(); // the timestamp, not neccessarely using UTC as current time

	var julian_day = (jtime / 86400000) - (jdate.getTimezoneOffset()/1440) + 2440587.5;

	// t = epoch-based time stamp 
	var t = (julian_day - 2440587.5)*86400;

	//MSD = Mars Sol Date
	var MSD = (t+37)/(88775.244147+34127.2954262);

	//Fh means taking the fractional (remainder).
	var Fh = MSD - Math.floor(MSD);
	var marsHours =(Fh*24);

	var Fm = marsHours - Math.floor(marsHours);
	var marsMinutes = (Fm*60);

	var marsSeconds = 60 * (marsMinutes - Math.floor(marsMinutes));

	var etime = [];

	etime['seconds'] = Math.round(marsSeconds);
	etime['minutes'] = Math.round(marsMinutes);
	etime['hours'] = Math.round(marsHours);

	if(etime['seconds']<10){
		etime['seconds'] = '0'+etime['seconds'];
	}

	if(etime['minutes']<10){
		etime['minutes'] = '0'+etime['minutes'];
	}
	if(etime['hours']<10){
		etime['hours'] = '0'+etime['hours'];
	}
	return etime;
	if(etime['seconds']===60){
		etime['seconds']= '0';
	}
	if(etime['minutes']===60){
		earthTime['minutes']='0';
	}

}
initMarsClock();

setInterval(initMarsClock,1000);

// start
initMarsClock();

var container1 = document.getElementsByClassName('container')[0];
var container2 = document.getElementsByClassName('container')[1];
var background = document.getElementsByClassName('timeImage')[0];
var earthBackground =document.getElementById('earthsClock');
var marsBackground = document.getElementById('marsClock');
//This is to change the images and colors on the mars/earth clock depending on if it is night or day. 
function dayChange(){
	container1.classList.add('changeColor');
	background.classList.remove('changeImage');
	marsBackground.classList.remove('changeColor');
	return container1;
}
function nightChange(){
	container1.classList.remove('changeColor');
	background.classList.add('changeImage');
	marsBackground.classList.add('changeColor');
	return container1;
}
document.getElementById('earthDay').onclick = function(){
	container2.classList.add('changeColor');
	background.classList.remove('changeImage');
	earthBackground.classList.remove('changeColor');
};

document.getElementById('earthNight').onclick = function(){
	container2.classList.remove('changeColor');
	background.classList.add('changeImage');
	earthBackground.classList.add('changeColor');
};

//This are for rotating the season image when clicking on it. 
function fallTime(){
	document.getElementsByClassName('season')[2].style.transform = "rotateY(180deg)";
	document.getElementsByClassName('season')[2].style.transitionDuration = "2s";
	document.getElementById('seasonDate').innerHTML = "April 08 2020";

}
function winterTime(){
	document.getElementsByClassName('season')[3].style.transform = "rotateY(180deg)";
	document.getElementsByClassName('season')[3].style.transitionDuration = "2s";
	document.getElementById('seasonDate').innerHTML = "September 02 2020";
}
function summerTime(){
	document.getElementsByClassName('season')[0].style.transform = "rotateY(180deg)";
	document.getElementsByClassName('season')[0].style.transitionDuration = "2s";
	document.getElementById('seasonDate').innerHTML = "October 08 2019";
}
function springTime(){
	document.getElementsByClassName('season')[1].style.transform = "rotateY(180deg)";
	document.getElementsByClassName('season')[1].style.transitionDuration = "2s";
	document.getElementById('seasonDate').innerHTML = "March 23 2019";
}
