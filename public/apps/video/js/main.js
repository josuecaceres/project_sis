(function(){
let container = document.querySelector(".container");
let video = document.querySelector(".mi_video");
let playPauseBtn = document.querySelector(".playPauseBtn");
let fullScreenBtn = document.querySelector(".full_screen");
let volume_btn = document.querySelector(".volume_btn");
let slider = document.querySelector(".volume_range");
let bar = document.querySelector(".bar");
let progress = document.querySelector(".progress");
let controls = document.querySelector(".controls");

let current_time = document.querySelector(".current_time");
let full_duration = document.querySelector(".full_duration");

function bindEvents(){
    
    playPauseBtn.addEventListener("click", playPause);
    //expandBtn.addEventListener("click", expandToggle);
    fullScreenBtn.addEventListener("click", enterFullScreen);
    volume_btn.addEventListener("click", toggleVolume);
    slider.addEventListener("input", updateVolume);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("click", playPause);
    video.addEventListener("click", playPause);
    video.addEventListener("dblclick", enterFullScreen);

    container.addEventListener("mouseover", showControls);
    container.addEventListener("mouseout", hideControls);

    progress.addEventListener("click", skipVideo );
}
bindEvents();

function playPause(){
    if(video.paused){
        video.play();
        playPauseBtn.classList.remove("fa-play");
        playPauseBtn.classList.add("fa-pause");
    }
    else{
        video.pause();
        playPauseBtn.classList.add("fa-play");
        playPauseBtn.classList.remove("fa-pause");
    }
}

function expandToggle(){
    container.classList.toggle("wide");
}
/*funcion para ampliar de acuerdo a los navegadores*/
function enterFullScreen(){
    if(video.requestFullscreen){
        video.requestFullscreen();

    }
    else if(video.mozRequestFullScreen){
video.mozRequestFullScreen();
    }
    else if(video.webkitRequestFullscreen){
video.webkitRequestFullscreen();
    }
    else if(VideoTrackList.msRequestFullscreen){
        video.msRequestFullscreen();
    }
    
}

function toggleVolume(){
    slider.classList.toggle("active");
    volume_btn.classList.toggle("active");
}

function updateVolume(){
    video.volume = slider.value;
}

function updateTime(){
    let curTime = video.currentTime;
    let duration = video.duration;

    //Actulizar Barra

    let percentage = (curTime * 100) / duration;
    bar.style.width = percentage + "%";
    //duraction es 100
    //curtime *

    let minutes = parseInt(duration / 60, 10);
    let seconds = parseInt(duration % 60);

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }
    full_duration.innerHTML = minutes + ":" + seconds;
   //Progreso Actual

   let minutesCur = parseInt(curTime / 60, 10);
    let secondsCur = parseInt(curTime % 60);

    if(minutesCur < 10){
        minutesCur = "0" + minutesCur;
    }

    if(secondsCur < 10){
        secondsCur = "0" + secondsCur;
    }
    current_time.innerHTML = minutesCur + ":" + secondsCur;
}


function skipVideo(e){
    let coords = getRelativeCoordinates(e);
    let conWidth = container.offsetWidth;

    let percentage = (coords.x * 100) / conWidth;
    bar.style.width = percentage + "%";

    let time = video.duration * (percentage / 100);
    video.currentTime = time;

}

function showControls(){
    controls.style.display = "inherit";
}

function hideControls(){
    controls.style.display = "none";
}

function endedVideo(){
    playPauseBtn.classList.remove("fa-pause");
    playPauseBtn.classList.add("fa-play");
}
function getRelativeCoordinates (e){
    var pos = {}, offset = {}, ref;

    ref = container.offsetParent;

    pos.x = !! e.touches ? e.touches[0].pageX : e.pageX;
    pos.y = !! e.touches ? e.touches[0].pageY : e.pageY;

    offset.left = container.offsetLeft;
    offset.top = container.offsetTop;

    while (ref){
        offset.left += ref.offsetLeft;
        offset.top += ref.offsetTop;

        ref = ref.offsetParent;
        
    }

    return{
        x : pos.x - offset.left,
        y : pos.y - offset.top, 
    };
}
})();

