console.log("Welcome To MusicPlayer");
// Intilize The Variable

let songIndex=0;
let audioElement=new Audio('1.mp3');
let myProgressBar = document.getElementById('myProgressBar');
let masterplay = document.getElementById('masterplay');
let gif = document.getElementById('gif');
let songs=[
    { songName: "Let Me Love You", filePath: "song/1.mp3", coverpath: "cover/1.jpg " },
    { songName: "Let Me Love You", filePath: "song/1.mp3", coverpath: "cover/1.jpg " },
    { songName: "Let Me Love You", filePath: "song/1.mp3", coverpath: "cover/1.jpg " },
    { songName: "Let Me Love You", filePath: "song/1.mp3", coverpath: "cover/1.jpg " },
    { songName: "Let Me Love You", filePath: "song/1.mp3", coverpath: "cover/1.jpg " },
    { songName: "Let Me Love You", filePath: "song/1.mp3", coverpath: "cover/1.jpg " },
    { songName: "Let Me Love You", filePath: "song/1.mp3", coverpath: "cover/1.jpg " },
    { songName: "Let Me Love You", filePath: "song/1.mp3", coverpath: "cover/1.jpg " },
    { songName: "Let Me Love You", filePath: "song/1.mp3", coverpath: "cover/1.jpg " },
    { songName: "Let Me Love You", filePath: "song/1.mp3", coverpath: "cover/1.jpg " },
]

//audioElememnt.play()

// Handle Play/pause click
masterplay.addEventListener('click',()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause;
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen To the Event
audioElement.addEventListener('timeupdate',()=>
{
    console.log('timeupdate');
    // Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})