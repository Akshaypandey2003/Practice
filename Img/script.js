console.log("This is spotify clone tutorial");
// ---------------------------- Code to toggle play button ---------------------------------
var playBtnBottom = document.getElementById("PlayButton");
let toggle1 = true;
playBtnBottom.addEventListener('click',function(){
   if(toggle1)
   {
    playBtnBottom.src = "Img/pauseButton.png";
    toggle1 = false;
   }
   else
   {
    playBtnBottom.src = "Img/play-button.svg";
    toggle1 = true;
   }
});
// -------------------------- Code for expanding & shrinking left panel (library portion) --------------------------
var expandListBtn = document.getElementById("expand-list-btn");
let isSmall = true;
expandListBtn.addEventListener('click',function(){
    if(isSmall)
    {
        document.getElementById("songList").style.minWidth = "500px";
        document.getElementById("songNav").style.minWidth = "500px";
        expandListBtn.src = "Img/collapse.png";
        isSmall = false;
    }
    else{
        document.getElementById("songList").style.minWidth = "10vw";
        document.getElementById("songNav").style.minWidth = "10vw";
        expandListBtn.src = "Img/nextIcon.png";
        isSmall = true;
    }
});
// ---------------------------- Code for displaying tooltip -----------------------------
const addSongs = document.getElementById('create-List');
addSongs.addEventListener('mouseover', function(){
    const tooltip = document.querySelector(".tooltip");
         tooltip.style.visibility = "visible";
});
addSongs.addEventListener('mouseout', function(){
    const tooltip = document.querySelector(".tooltip");
         tooltip.style.visibility = "hidden";
});
let songs = [
    {songName:'perfect',filePath:'music/perfect.mp3', coverPath:'cover/perfect.jpg'},
    {songName:'perfect',filePath:'music/perfect.mp3', coverPath:'cover/perfect.jpg'},
    {songName:'perfect',filePath:'music/perfect.mp3', coverPath:'cover/perfect.jpg'},
    {songName:'perfect',filePath:'music/perfect.mp3', coverPath:'cover/perfect.jpg'},
    {songName:'perfect',filePath:'music/perfect.mp3', coverPath:'cover/perfect.jpg'},
    {songName:'perfect',filePath:'music/perfect.mp3', coverPath:'cover/perfect.jpg'},
    {songName:'perfect',filePath:'music/perfect.mp3', coverPath:'cover/perfect.jpg'},
    {songName:'perfect',filePath:'music/perfect.mp3', coverPath:'cover/perfect.jpg'},
    {songName:'perfect',filePath:'music/perfect.mp3', coverPath:'cover/perfect.jpg'},
    {songName:'perfect',filePath:'music/perfect.mp3', coverPath:'cover/perfect.jpg'},
]


// let audioElement = new Audio("perfect.mp3");