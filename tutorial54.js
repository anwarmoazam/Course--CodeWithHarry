console.log('Welcome in tutorial 54');

let time = new Date("2021-12-16 21:16:01");
console.log(time);

let audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');



let alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click',setAlarm);

function ringBell(){
    audio.play();
}

function setAlarm(e){
    e.preventDefault();
    console.log('Setting Alarm....');
    const alarm = document.getElementById('alarm');
    let alarmDate = new Date(alarm.value);
    console.log(`Setting alarm for ${alarmDate}...`);
    let now = new Date();
    let timeToAlarm = alarmDate-now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(()=>{
            ringBell();
        },timeToAlarm);
    } else{
        alert('Given time is less than now. Please enter future Date/Time for set an Alarm')
    }
}