console.log("Welcome To ")

// Initialise the variable
let songIndex=0;
let audioElement = new Audio('1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let songItems =Array.from(document.getElementsByClassName('songItem'));
let gif = document.getElementById('gif')
let songs =[

 
           {songName: "Dandelions-Ruth B", filepath:"1.mp3", coverPath: "cover1.jpg" },

           {songName: "MockingBird-Emma", filepath:"2.mp3", coverPath: "cover2.jpg" }, 

           {songName: "Gasolina-Daddy Yankee", filepath:"3.mp3", coverPath: "cover3.jpg" },

           {songName: "Till Forever Falls Apart-Ashe FINNEAS", filepath:"4.mp3", coverPath: "cover4.jpg" }, 

           {songName: "Mi Amor-The Paul", filepath:"5.mp3", coverPath: "cover5.jpg" }, 

           {songName: "Cheques-Shubh", filepath:"6.mp3", coverPath: "cover6.jpg" },

           {songName: "Chorni-Sidhu_Moose_Walla,DIVINE", filepath:"7.mp3", coverPath: "cover7.jpg" },

           {songName: "Check It Out-Parmish Verma", filepath:"8.mp3", coverPath: "cover8.jpg" }, 

           {songName: "Bella Ciao-Manu Pilas", filepath:"9.mp3", coverPath: "imagemain.png" }, 

           {songName: "Rihaayi-Paradox", filepath:"10.mp3", coverPath: "cover10.jpg" } 

]

songItems.forEach((element, i)=>{
            element.getElementsByTagName("img")[0].src= songs[i].coverPath;
            element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
// audioElement.play();


// Handle play/pause click
masterPlay.addEventListener('click',()=>
{
                        if(audioElement.paused || audioElement.currentTime<=0)
                        {
                                 audioElement.play
                                 ();   
                                 masterPlay.classList.remove('fa-play')
                                 masterPlay.classList.add('fa-pause')
                                 gif.style.opacity =1;
                        }
                        else{
                                    audioElement.pause
                                    ();   
                                    masterPlay.classList.add('fa-play')
                                    masterPlay.classList.remove('fa-pause')
                                 gif.style.opacity =0  ;


                        }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>
{
             // Update Seekbar
             progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
             console.log(progress);
             myProgressBar.value = progress;          
})

myProgressBar.addEventListener('change', ()=>{
            audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100
})
const makeAllPlays = ()=>{
            Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
                        element.classList.remove('fa-pause-circle')
                        element.classList.add('fa-play-circle')

            })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.addEventListener('click',(e) =>{
                        makeAllPlays();
                        songIndex = parseInt(e.target.id)
                        e.target.classList.remove('fa-play-circle')
                        e.target.classList.add('fa-pause-circle')
                        mastersongName.innerText = songs[songIndex].songName;
                        audioElement.src = `${songIndex+1}.mp3`;
                        audioElement.currentTime = 0
                        audioElement.play();
                        gif.style.opacity =1
                        masterPlay.classList.remove("fa-play-circle")
                        masterPlay.classList.add("fa-pause-circle")

            })

            
})
document.getElementById('next').addEventListener('click', ()=>{
            if(songIndex>=15){
                        songIndex=0
            }
            else{
                        songIndex +=1;
            }
            audioElement.src = `${songIndex+1}.mp3`;
            mastersongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0
            audioElement.play();
            masterPlay.classList.remove("fa-play-circle")
            masterPlay.classList.add("fa-pause-circle")
})
document.getElementById('previous').addEventListener('click', ()=>{
            if(songIndex<=0){
                        songIndex=0
            }
            else{
                        songIndex -= 1;
            }
            audioElement.src = `${songIndex+1}.mp3`;
            mastersongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0
            audioElement.play();
            masterPlay.classList.remove("fa-play-circle")
            masterPlay.classList.add("fa-pause-circle")
})

