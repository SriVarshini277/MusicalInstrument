var buttonList = document.getElementsByClassName("instrument");
var instrument_name;

for(var i=0;i<buttonList.length;i++){
    buttonList[i].addEventListener("click",selectInstrument);
}

function setBorder(){
    for(i=0;i<buttonList.length;i++){
        document.getElementsByClassName("instrument")[i].style.border = null;
    }
}
function setBG(){
    document.getElementsByName("dr")[0].style.backgroundImage= "url('./images/1-Drum.png')";
    document.getElementsByName("ta")[0].style.backgroundImage= "url('./images/2-Tabla.png')";
    document.getElementsByName("pi")[0].style.backgroundImage= "url('./images/3-keyboard.png')";
    document.getElementsByName("sa")[0].style.backgroundImage= "url('./images/4-Saxophone.png')";
    document.getElementsByName("tr")[0].style.backgroundImage= "url('./images/5-Trumpet.png')";
    document.getElementsByName("gu")[0].style.backgroundImage= "url('./images/6-guitar.png')";
    document.getElementsByName("eg")[0].style.backgroundImage= "url('./images/7-Eguitar.png')";
}
function hideButton(){
    document.getElementsByName("c")[0].style.visibility="hidden";
    document.getElementsByName("d")[0].style.visibility="hidden";
    document.getElementsByName("b")[0].style.visibility="hidden";
    document.getElementsByName("C")[0].style.visibility="hidden";

    document.getElementsByName("e")[0].innerHTML="na";
    document.getElementsByName("f")[0].innerHTML="tun";
    document.getElementsByName("g")[0].innerHTML="geh";
    document.getElementsByName("a")[0].innerHTML="gliss";

    document.getElementsByClassName("instruction1")[0].innerHTML=document.getElementsByClassName("instruction2")[0].innerHTML;
}
function unhideButton(){
    document.getElementsByName("c")[0].style.visibility="visible";
    document.getElementsByName("d")[0].style.visibility="visible";
    document.getElementsByName("b")[0].style.visibility="visible";
    document.getElementsByName("C")[0].style.visibility="visible";

    document.getElementsByName("e")[0].innerHTML="E";
    document.getElementsByName("f")[0].innerHTML="F";
    document.getElementsByName("g")[0].innerHTML="G";
    document.getElementsByName("a")[0].innerHTML="A";

    document.getElementsByClassName("instruction1")[0].innerHTML="<p><b>Note: </b>Press <b>Ctrl</b> for C2</p>";       
}
function selectInstrument(){
    var buttonName = this.name;
    instrument_name=buttonName;
    //var bg = (window.getComputedStyle(this).getPropertyValue("background-image")).match(/url\(([^)]+)\)/i); 
    setBorder();
    setBG();
    unhideButton();
    this.style.border="10px solid yellow";
    switch(buttonName){
        case "dr":
            this.style.backgroundImage= "url('./images/1-Drumm.png')";
        break;
        case "ta":
            this.style.backgroundImage= "url('./images/2-Tablaa.png')";
            hideButton();
        break;
        case "pi":
            this.style.backgroundImage= "url('./images/3-keyboardd.png')";
        break;
        case "sa":
            this.style.backgroundImage= "url('./images/4-Saxophonee.png')";
        break;
        case "tr":
            this.style.backgroundImage= "url('./images/5-Trumpett.png')";
        break;
        case "gu":
            this.style.backgroundImage= "url('./images/6-guitarr.png')";
        break;
        case "eg":
            this.style.backgroundImage= "url('./images/7-Eguitarr.png')";
        break;
        default:
            setBorder()
            console.log(buttonName);
    }  
}
document.getElementsByName("c")[0].addEventListener("click",noteC);
function noteC(){
    var buttonName = instrument_name;
    var delayInMilliseconds=10000;
    switch(instrument_name){
        case "dr":
            playAudio('./sounds/Drums/crash.mp3',buttonName,"#E57163","#E61902","c");
        break;
        case "pi":
            playAudio('./sounds/Piano/C.wav',buttonName,"#E57163","#E61902","c");
        break;
        case "sa":
            playAudio('./sounds/Saxophone/C Sax.wav',buttonName,"#E57163","#E61902","c");
        break;
        case "tr":
            playAudio('./sounds/Trumpet/C Trumpet.wav',buttonName,"#E57163","#E61902","c");
        break;
        case "gu":
            playAudio('./sounds/Guitar/C Guitar.wav',buttonName,"#E57163","#E61902","c"); 
        break;
        case "eg":
            playAudio('./sounds/EGuitar/C E Guitar.wav',buttonName,"#E57163","#E61902","c"); 
        break;
        default:
            alert("Please Select Instrument");
            console.log(buttonName);
    }  
}
document.getElementsByName("d")[0].addEventListener("click",noteD);
function noteD(){
    var buttonName = instrument_name;
    switch(instrument_name){
        case "dr":
            playAudio('./sounds/Drums/kick-bass.mp3',buttonName,"#EBB36A","#E6803E","d");
        break;
        case "pi":
            playAudio('./sounds/Piano/D.wav',buttonName,"#EBB36A","#E6803E","d");
        break;
        case "sa":
            playAudio('./sounds/Saxophone/D Sax.wav',buttonName,"#EBB36A","#E6803E","d");
        break;
        case "tr":
            playAudio('./sounds/Trumpet/D Trumpet.wav',buttonName,"#EBB36A","#E6803E","d");
        break;
        case "gu":
            playAudio('./sounds/Guitar/D Guitar.wav',buttonName,"#EBB36A","#E6803E","d"); 
        break;
        case "eg":
            playAudio('./sounds/EGuitar/D E Guitar.wav',buttonName,"#EBB36A","#E6803E","d"); 
        break;
        default:
            alert("Please Select Instrument");
            console.log(buttonName);
    }
}
document.getElementsByName("e")[0].addEventListener("click",noteE);
function noteE(){
    var buttonName = instrument_name;
    switch(instrument_name){
        case "dr":
            playAudio('./sounds/Drums/snare.mp3',buttonName,"#E6C63E","#EBDE28","e");
        break;
        case "ta":
            playAudio('./sounds/Tabla/Hi Na Tabla.wav',buttonName,"#E6C63E","#EBDE28","e");
        break;
        case "pi":
            playAudio('./sounds/Piano/E.wav',buttonName,"#E6C63E","#EBDE28","e");
        break;
        case "sa":
            playAudio('./sounds/Saxophone/E Sax.wav',buttonName,"#E6C63E","#EBDE28","e");
        break;
        case "tr":
            playAudio('./sounds/Trumpet/E Trumpet.wav',buttonName,"#E6C63E","#EBDE28","e");
        break;
        case "gu":
            playAudio('./sounds/Guitar/E Guitar.wav',buttonName,"#E6C63E","#EBDE28","e"); 
        break;
        case "eg":
            playAudio('./sounds/EGuitar/E E Guitar.wav',buttonName,"#E6C63E","#EBDE28","e"); 
        break;
        default:
            alert("Please Select Instrument");
            console.log(buttonName);
    }
}
document.getElementsByName("f")[0].addEventListener("click",noteF);
function noteF(){
    var buttonName = instrument_name;
    switch(instrument_name){
        case "dr":
            playAudio('./sounds/Drums/tom-1.mp3',buttonName,"#8BE56B","#26EB3E","f");
        break;
        case "ta":
            playAudio('./sounds/Tabla/Hi Tun Tabla.wav',buttonName,"#8BE56B","#26EB3E","f");
        break;
        case "pi":
            playAudio('./sounds/Piano/F.wav',buttonName,"#8BE56B","#26EB3E","f");
        break;
        case "sa":
            playAudio('./sounds/Saxophone/F Sax.wav',buttonName,"#8BE56B","#26EB3E","f");
        break;
        case "tr":
            playAudio('./sounds/Trumpet/F Trumpet.wav',buttonName,"#8BE56B","#26EB3E","f");
        break;
        case "gu":
            playAudio('./sounds/Guitar/F Guitar.wav',buttonName,"#8BE56B","#26EB3E","f"); 
        break;
        case "eg":
            playAudio('./sounds/EGuitar/F E Guitar.wav',buttonName,"#8BE56B","#26EB3E","f"); 
        break;
        default:
            alert("Please Select Instrument");
            console.log(buttonName);
    }
}
document.getElementsByName("g")[0].addEventListener("click",noteG);
function noteG(){
    var buttonName = instrument_name;
    switch(instrument_name){
        case "dr":
            playAudio('./sounds/Drums/tom-2.mp3',buttonName,"#7BDFEB","#00CFEA","g");
        break;
        case "ta":
            playAudio('./sounds/Tabla/Lo Geh Tabla.wav',buttonName,"#7BDFEB","#00CFEA","g");
        break;
        case "pi":
            playAudio('./sounds/Piano/G.wav',buttonName,"#7BDFEB","#00CFEA","g");
        break;
        case "sa":
            playAudio('./sounds/Saxophone/G Sax.wav',buttonName,"#7BDFEB","#00CFEA","g");
        break;
        case "tr":
            playAudio('./sounds/Trumpet/G Trumpet.wav',buttonName,"#7BDFEB","#00CFEA","g");
        break;
        case "gu":
            playAudio('./sounds/Guitar/G Guitar.wav',buttonName,"#7BDFEB","#00CFEA","g"); 
        break;
        case "eg":
            playAudio('./sounds/EGuitar/G E Guitar.wav',buttonName,"#7BDFEB","#00CFEA","g"); 
        break;
        default:
            alert("Please Select Instrument");
            console.log(buttonName);
    }
}
document.getElementsByName("a")[0].addEventListener("click",noteA);
function noteA(){
    var buttonName = instrument_name;
    switch(instrument_name){
        case "dr":
            playAudio('./sounds/Drums/tom-3.mp3',buttonName,"#35B3E6","#1194EB","a");
        break;
        case "ta":
            playAudio('./sounds/Tabla/Lo Gliss Tabla.wav',buttonName,"#35B3E6","#1194EB","a");
        break;
        case "pi":
            playAudio('./sounds/Piano/A.wav',buttonName,"#35B3E6","#1194EB","a");
        break;
        case "sa":
            playAudio('./sounds/Saxophone/A Sax.wav',buttonName,"#35B3E6","#1194EB","a");
        break;
        case "tr":
            playAudio('./sounds/Trumpet/A Trumpet.wav',buttonName,"#35B3E6","#1194EB","a");
        break;
        case "gu":
            playAudio('./sounds/Guitar/A Guitar.wav',buttonName,"#35B3E6","#1194EB","a"); 
        break;
        case "eg":
            playAudio('./sounds/EGuitar/A E Guitar.wav',buttonName,"#35B3E6","#1194EB","a"); 
        break;
        default:
            alert("Please Select Instrument");
            console.log(buttonName);
    }
}
document.getElementsByName("b")[0].addEventListener("click",noteB);
function noteB(){
    var buttonName = instrument_name;
    switch(instrument_name){
        case "dr":
            playAudio('./sounds/Drums/tom-4.mp3',buttonName,"#AEA2E5","#8707EB","b");
        break;
        case "pi":
            playAudio('./sounds/Piano/B.wav',buttonName,"#AEA2E5","#8707EB","b");
        break;
        case "sa":
            playAudio('./sounds/Saxophone/B Sax.wav',buttonName,"#AEA2E5","#8707EB","b");
        break;
        case "tr":
            playAudio('./sounds/Trumpet/B Trumpet.wav',buttonName,"#AEA2E5","#8707EB","b");
        break;
        case "gu":
            playAudio('./sounds/Guitar/B Guitar.wav',buttonName,"#AEA2E5","#8707EB","b"); 
        break;
        case "eg":
            playAudio('./sounds/EGuitar/B E Guitar.wav',buttonName,"#AEA2E5","#8707EB","b"); 
        break;
        default:
            alert("Please Select Instrument");
            console.log(buttonName);
    }
}
document.getElementsByName("C")[0].addEventListener("click",noteC2);
function noteC2(){
    var buttonName = instrument_name;
    switch(instrument_name){
        case "dr":
            playAudio('./sounds/Drums/crash.mp3',buttonName,"#E6A1DD","#EB1EDA","C");
        break;
        case "pi":
            playAudio('./sounds/Piano/C2.wav',buttonName,"#E6A1DD","#EB1EDA","C");
        break;
        case "sa":
            playAudio('./sounds/Saxophone/C2 Sax.wav',buttonName,"#E6A1DD","#EB1EDA","C");
        break;
        case "tr":
            playAudio('./sounds/Trumpet/C2 Trumpet.wav',buttonName,"#E6A1DD","#EB1EDA","C");
        break;
        case "gu":
            playAudio('./sounds/Guitar/C2 Guitar.wav',buttonName,"#E6A1DD","#EB1EDA","C"); 
        break;
        case "eg":
            playAudio('./sounds/EGuitar/C2 E Guitar.wav',buttonName,"#E6A1DD","#EB1EDA","C"); 
        break;
        default:
            alert("Please Select Instrument");
            console.log(buttonName);
    }
}

function playAudio(fileName,buttonName,color,hcolor,key){
    var audio = new Audio(fileName);
    var delayInMilliseconds=500;
    audio.play();

    document.getElementsByName(key)[0].style.background= hcolor;
    
    setTimeout(function() {
         document.getElementsByName(key)[0].style.background= color;
    }, delayInMilliseconds);
}

document.addEventListener("keydown",function(event){
    var playkey;
    if (event.ctrlKey) {
        playkey="noteC2";
    }
    else if(event.key=="n"){
        playkey="noteE";
    }
    else if(event.key=="t"){
        playkey="noteF";
    }
    else if(event.key=="g"){
        playkey="noteG";
    }
    else if(event.key=="l"){
        playkey="noteA";
    }
    else{
        var key=event.key;
        playkey="note"+key.toUpperCase();
    }
    eval(playkey + "()");
})

document.addEventListener("keydown", function(event) {
    
  });
