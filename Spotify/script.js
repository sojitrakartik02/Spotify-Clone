
let songIndex=0;
let masterPlay=document.getElementById( "masterPlay" );
let audioElement =new Audio('songs/1.mp3');
let myProgressBar=document.getElementById("myProgressBar");
let masterSongName=document.getElementById("masterSongName");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songItem"));

let songs=[
    {songname:"Salam1",filePath:"songs/1.mp3 ",coverPath:"covers/1.jpeg"},
    {songname:"Salam2",filePath:"songs/2.mp3",coverPath:"covers/2.jpeg"},
    {songname:"Salam3",filePath:"songs/3.mp3",coverPath:"covers/3.jpeg"},
    {songname:"Salam4",filePath:"songs/4.mp3",coverPath:"covers/4.jpeg"},
    {songname:"Salam5",filePath:"songs/5.mp3",coverPath:"covers/5.jpeg"},
    {songname:"Salam6",filePath:"songs/6.mp3",coverPath:"covers/6.jpeg"}
]
songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songname;
});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();  
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)

myProgressBar.value=progress;
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
});
const makeAllPlays= () =>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach ((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllPlays();
    index=parseInt(e.target.id);
    e.target.classList.remove('fa-paly-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src=`songs/${index+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songname; 
    audioElement.currentTime=0;
    audioElement.play();

    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
  })  
})
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
