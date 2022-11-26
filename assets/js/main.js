/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    spaceBetween: 24,
    loop:true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576:{
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        }
    }
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    const sihir = document.querySelectorAll('.sihir');
    if(this.scrollY >= 50){
        header.classList.add('scroll-header');
        sihir[0].classList.add('sihir-opacity')
        sihir[1].classList.add('sihir-opacity')
    }
    else{
        sihir[0].classList.remove('sihir-opacity')
        sihir[1].classList.remove('sihir-opacity')
        header.classList.remove('scroll-header')
    }

}
window.addEventListener('scroll', scrollHeader)




/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close'),
      body = document.getElementById('body');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})

modalViews.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
})
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration:400
    }
});


/* Link active work */ 

const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l=> l.addEventListener('click', activeWork))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

  
/*=============== Change color with reload ===============*/
/*
document.documentElement.style.setProperty('--first-hue', Math.floor(Math.random() * 360));
document.documentElement.style.setProperty('--sat', Math.floor(Math.random() * 50)+30+'%');
document.documentElement.style.setProperty('--lig', Math.floor(Math.random() * 62)+35+'%');
*/



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '600px',
    duration: 1700,
    delay: 100,
    //reset: true,
})

sr.reveal('.home__data')
sr.reveal('.home__handle', {delay: 100})
sr.reveal('.home__scroll, .home__social', {delay: 200, origin:'bottom'})


/*=============== Fullscrenn ===============*/
if (!Element.prototype.requestFullscreen) {
	Element.prototype.requestFullscreen = Element.prototype.mozRequestFullscreen || Element.prototype.webkitRequestFullscreen || Element.prototype.msRequestFullscreen;
}
if (!document.exitFullscreen) {
	document.exitFullscreen = document.mozExitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
}
if (!document.fullscreenElement) {
	Object.defineProperty(document, 'fullscreenElement', {
		get: function() {
			return document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement;
		}
	});
	Object.defineProperty(document, 'fullscreenEnabled', {
		get: function() {
			return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled;
		}
	});
}
document.addEventListener('click', function (event) {
	if (!event.target.hasAttribute('data-toggle-fullscreen')) return;
	if (document.fullscreenElement) {
		document.exitFullscreen();
	} else {
		document.documentElement.requestFullscreen();
	}
}, false);








/*=============== Platform ===============*/
/*
text=navigator.platform.slice(0,5)
if (text=='Linux'){
    document.getElementById('sihir').style.display='none'
}*/



/*=============== Sihir AltKey ===============*/
var altkey=0
function altKey(event) {
    if (event.altKey) {
        if(altkey==0){
            document.getElementById('cursor').style.display='block';
            altkey=1
            
        }
        else if(altkey==1){
            document.getElementById('cursor').style.display='none';
            altkey=0
        }
    }
}
document.body.addEventListener('mousemove', function(e){
    if(altkey==1){
        this.style.setProperty('--x', e.pageX);
        this.style.setProperty('--y', e.pageY);
    }
});

/*=============== Sihir isPress ===============*/
function sihirPress(event){
    //ctrlKey(event);
    key();
}

/*=============== Sihir ===============*/
function key(){
    document.documentElement.style.setProperty('--first-hue', Math.floor(Math.random() * 360));
    document.documentElement.style.setProperty('--sat', Math.floor(Math.random() * 100)+'%');
    document.documentElement.style.setProperty('--lig', Math.floor(Math.random() * 70)+20+'%');
    if(localStorage.getItem("theme")=='light'){
        changeColor();
    }
}

/*async function kopyalandi(event){
    var copyText = document.getElementById(event.path[0].id);
    oldValue=copyText.innerText;
    copyText.innerText="Kopyalandı"
    await new Promise(resolve => setTimeout(resolve, 800));
    copyText.innerText=oldValue;    
    console.log(event.path[0].id)
}*/


  
async function copy(event){
    event.path[0].setAttribute("id", "copyDiv");
    var copyText = document.getElementById(event.path[0].id);
    if(copyText.innerText=="Bağlantıya tıklaa :D"){
        event.path[0].removeAttribute('id');
        return 0
    }
    else{
        oldValue=copyText.innerText;
        copyText.innerText="Bağlantıya tıklaa :D"
        await new Promise(resolve => setTimeout(resolve, 1000));
        copyText.innerText=oldValue;   
        event.path[0].removeAttribute('id');
    }
}



/*=============== Sihir CtrlKey ===============*/
/*
function ctrlKey(event) {
    if (event.ctrlKey) {
            document.documentElement.style.setProperty('--first-hue', Math.floor(Math.random() * 360));
            document.documentElement.style.setProperty('--sat', Math.floor(Math.random() * 100)+'%');
            document.documentElement.style.setProperty('--lig', Math.floor(Math.random() * 70)+20+'%');
    }
}*/



/*
//Notification
const img = 'assets/img/nihat.png';
function notifyMe(theBody,theIcon,theTitle) {
    if (!("Notification" in window)) {

        alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      const options = {
        body: theBody,
        icon: theIcon,
        image: theIcon,
        badge: theIcon
      }
      const n = new Notification(theTitle,options);

    } else if (Notification.permission !== "denied") {

      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            notifyMe("hi",img,"nihat")
        }
      });
    }
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }

  notifyMe("hi",img,"nihat")
*/


// SHARE DATA
/*
const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org'
  }
  

  // Share must be triggered by "user activation"
  body.addEventListener('click', async () => {
    try {
      await navigator.share(shareData);
    } catch (err) {
      alert(`Error: ${err}`)
    }
  });*/

var uriTypeHTMLB64 = 'data:application/pdf;charset=utf-8;base64,';
var doc64 = 'JVBERi0xLjQKJfbk/N8KMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovVmVyc2lvbiAvMS40Ci9QYWdlcyAyIDAgUgovVmlld2VyUHJlZmVyZW5jZXMgMyAwIFIKL0xhbmcgKHRyLVRSKQo+PgplbmRvYmoKNCAwIG9iago8PAovS2V5d29yZHMgKERBRTUxbnVZdWpFLEJBRWdfejgyTTlNKQovQXV0aG9yIChOaWhhdCBBbGl5ZXYpCi9DcmVhdG9yIChDYW52YSkKL1Byb2R1Y2VyIChDYW52YSkKL1RpdGxlIChOaWhhdCBBbGl5ZXYpCi9DcmVhdGlvbkRhdGUgKEQ6MjAyMjExMjYwNTI5MTcrMDAnMDAnKQo+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvUGFnZXMKL0tpZHMgWzUgMCBSXQovQ291bnQgMQo+PgplbmRvYmoKMyAwIG9iago8PAovRGlzcGxheURvY1RpdGxlIHRydWUKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1Jlc291cmNlcyA2IDAgUgovTWVkaWFCb3ggWzAuMCA3LjgyOTk4MTMgNTk1LjUgODUwLjA3OTk2XQovQ29udGVudHMgNyAwIFIKL1N0cnVjdFBhcmVudHMgMAovUGFyZW50IDIgMCBSCi9UYWJzIC9TCi9CbGVlZEJveCBbMC4wIDcuODI5OTgxMyA1OTUuNSA4NTAuMDc5OTZdCi9UcmltQm94IFswLjAgNy44Mjk5ODEzIDU5NS41IDg1MC4wNzk5Nl0KL0Nyb3BCb3ggWzAuMCA3LjgyOTk4MTMgNTk1LjUgODUwLjA3OTk2XQovUm90YXRlIDAKL0Fubm90cyBbXQo+PgplbmRvYmoKNiAwIG9iago8PAovUHJvY1NldCBbL1BERiAvVGV4dCAvSW1hZ2VCIC9JbWFnZUMgL0ltYWdlSV0KL0V4dEdTdGF0ZSA4IDAgUgovWE9iamVjdCA8PAovWDggOSAwIFIKPj4KL0ZvbnQgMTAgMCBSCj4+CmVuZG9iago3IDAgb2JqCjw8Ci9MZW5ndGggNjU4NwovRmlsdGVyIC9GbGF0ZURlY29kZQo+PgpzdHJlYW0NCnic7V1bjyW3cX6fX3GeA6jFW/ECCAJ2Z2eNPBjIZQHn1VBs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bnRzZXJyYXQtU2VtaUJvbGQKL0VuY29kaW5nIC9JZGVudGl0eS1ICi9EZXNjZW5kYW50Rm9udHMgWzE5IDAgUl0KL1RvVW5pY29kZSAyMCAwIFIKPj4KZW5kb2JqCjE0IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMAovQmFzZUZvbnQgL0NBQUFBQStNb250c2VycmF0LUV4dHJhTGlnaHQKL0VuY29kaW5nIC9JZGVudGl0eS1ICi9EZXNjZW5kYW50Rm9udHMgWzIxIDAgUl0KL1RvVW5pY29kZSAyMiAwIFIKPj4KZW5kb2JqCjE1IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMAovQmFzZUZvbnQgL0RBQUFBQStNb250c2VycmF0LUxpZ2h0Ci9FbmNvZGluZyAvSWRlbnRpdHktSAovRGVzY2VuZGFudEZvbnRzIFsyMyAwIFJdCi9Ub1VuaWNvZGUgMjQgMCBSCj4+CmVuZG9iagoxNiAwIG9iago8PAovVHlwZSAvRm9udAovU3VidHlwZSAvVHlwZTAKL0Jhc2VGb250IC9FQUFBQUErU3BhY2VNb25vLVJlZ3VsYXIKL0VuY29kaW5nIC9JZGVudGl0eS1ICi9EZXNjZW5kYW50Rm9udHMgWzI1IDAgUl0KL1RvVW5pY29kZSAyNiAwIFIKPj4KZW5kb2JqCjE3IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9Gb250RGVzY3JpcHRvciAyNyAwIFIKL0Jhc2VGb250IC9BQUFBQUErTW9udHNlcnJhdC1Cb2xkCi9TdWJ0eXBlIC9DSURGb250VHlwZTIKL0NJRFRvR0lETWFwIC9JZGVudGl0eQovQ0lEU3lzdGVtSW5mbyAyOCAwIFIKL1cgWzAgWzU4NyAwIDAgMjgzIDc2Nl0KIDMyIFs3NjUgNzMzIDAgMCA3MzMgMCAwIDAgODI2XQogNDggWzY3MV0KIDczIFs2MzkgNzcxIDc3MV0KIDgyIFs4MDhdCjg4IDk2IDMyOCAxMDcgWzc0MCAwIDAgNjA0XQogMTIwIFs5NTUgMCA4MDhdCiAxMzMgWzg0NF0KIDE2OApbNzMyIDAgMCA3MzVdCiAxNzkgMTg1IDYzOCAxOTMgWzYxOF0KIDIwMCAy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MjkgMCBvYmoKPDwKL1R5cGUgL0ZvbnREZXNjcmlwdG9yCi9Gb250TmFtZSAvQkFBQUFBK01vbnRzZXJyYXQtU2VtaUJvbGQKL0ZsYWdzIDQKL0FzY2VudCA5NjgKL0Rlc2NlbnQgLTI1MQovU3RlbVYgMTQxCi9DYXBIZWlnaHQgNzAwCi9JdGFsaWNBbmdsZSAwCi9Gb250QkJveCBbLTg2MSAtMjY1IDE2NDQgMTA2NF0KL0ZvbnRGaWxlMiAzOCAwIFIKPj4KZW5kb2JqCjMwIDAgb2JqCjw8Ci9SZWdpc3RyeSAoQWRvYmUpCi9PcmRlcmluZyAoSWRlbnRpdHkpCi9TdXBwbGVtZW50IDAKPj4KZW5kb2JqCjMxIDAgb2JqCjw8Ci9UeXBlIC9Gb250RGVzY3JpcHRvcgovRm9udE5hbWUgL0NBQUFBQStNb250c2VycmF0LUV4dHJhTGlnaHQKL0ZsYWdzIDQKL0FzY2VudCA5NjgKL0Rlc2NlbnQgLTI1MQovU3RlbVYgNDcKL0NhcEhlaWdodCA3MDAKL0l0YWxpY0FuZ2xlIDAKL0ZvbnRCQm94IFstNzk3IC0yNjAgMTU0MyAxMDI3XQovRm9udEZpbGUyIDM5IDAgUgo+PgplbmRvYmoKMzIgMCBvYmoKPDwKL1JlZ2lzdHJ5IChBZG9iZSkKL09yZGVyaW5nIChJZGVudGl0eSkKL1N1cHBsZW1lbnQgMAo+PgplbmRvYmoKMzMgMCBvYmoKPDwKL1R5cGUgL0ZvbnREZXNjcmlwdG9yCi9Gb250TmFtZSAvREFBQUFBK01vbnRzZXJyYXQtTGlnaHQKL0ZsYWdzIDQKL0FzY2VudCA5NjgKL0Rlc2NlbnQgLTI1MQovU3RlbVYgNzgKL0NhcEhlaWdodCA3MDAKL0l0YWxpY0FuZ2xlIDAKL0ZvbnRCQm94IFstODA5IC0yNjEgMTU2MiAxMDM0XQovRm9udEZpbGUyIDQwIDAgUgo+PgplbmRvYmoKMzQgMCBvYmoKPDwKL1JlZ2lzdHJ5IChBZG9iZSkKL09yZGVyaW5nIChJZGVudGl0eSkKL1N1cHBsZW1lbnQgMAo+PgplbmRvYmoKMzUgMCBvYmoKPDwKL1R5cGUgL0ZvbnREZXNjcmlwdG9yCi9Gb250TmFtZSAvRUFBQUFBK1Nw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MDAwIG4NCjAwMDAwMjU0NTAgMDAwMDAgbg0KMDAwMDAyNTYwMSAwMDAwMCBuDQowMDAwMDI1NzUzIDAwMDAwIG4NCjAwMDAwMjYyNzggMDAwMDAgbg0KMDAwMDAyNjc5NiAwMDAwMCBuDQowMDAwMDI3MjY3IDAwMDAwIG4NCjAwMDAwMjc3NDYgMDAwMDAgbg0KMDAwMDAyODMzMyAwMDAwMCBuDQowMDAwMDI4ODY2IDAwMDAwIG4NCjAwMDAwMjkyNjkgMDAwMDAgbg0KMDAwMDAyOTcxMSAwMDAwMCBuDQowMDAwMDI5ODkzIDAwMDAwIG4NCjAwMDAwMzAzMjEgMDAwMDAgbg0KMDAwMDAzMDUyNSAwMDAwMCBuDQowMDAwMDMwNjAwIDAwMDAwIG4NCjAwMDAwMzA4MDggMDAwMDAgbg0KMDAwMDAzMDg4MyAwMDAwMCBuDQowMDAwMDMxMDkyIDAwMDAwIG4NCjAwMDAwMzExNjcgMDAwMDAgbg0KMDAwMDAzMTM3MSAwMDAwMCBuDQowMDAwMDMxNDQ2IDAwMDAwIG4NCjAwMDAwMzE2NDkgMDAwMDAgbg0KMDAwMDAzMTcyNCAwMDAwMCBuDQowMDAwMDM4MTc2IDAwMDAwIG4NCjAwMDAwNDQxNjEgMDAwMDAgbg0KMDAwMDA1MTIzMiAwMDAwMCBuDQowMDAwMDU2NTA5IDAwMDAwIG4NCnRyYWlsZXIKPDwKL1Jvb3QgMSAwIFIKL0lEIFs8OUYzRUY0RUYwMTdBMzBERjY1NTQyOUI2QjFCNTRGQjg+IDw5RjNFRjRFRjAxN0EzMERGNjU1NDI5QjZCMUI1NEZCOD5dCi9TaXplIDQyCi9JbmZvIDQgMCBSCj4+CnN0YXJ0eHJlZgo2MTc5NwolJUVPRgo='
var url=uriTypeHTMLB64+doc64;


// Download/Share Button
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

a=0
  document.getElementById('download').addEventListener("dblclick", () =>{
    durum=true
    if(a==0){
        document.getElementById('download').innerText="CV Paylaş";
        a++;
        sleep(240).then(() => { 
            durum=false;
        });
    }
    else{
        document.getElementById('download').innerText="CV İndir";
        a--;
        sleep(240).then(() => { 
            durum=false;
        });


    }    
})
durum=false
document.getElementById('download').addEventListener("click", () =>{
    if(document.getElementById('download').innerText=="CV Paylaş"){
        sleep(240).then(() => { 
            if (durum==false){
                shareCV()
            }            
        });
    }
    else if (document.getElementById('download').innerText=="CV İndir"){
        sleep(240).then(() => { 
            if (durum==false){
                downloadCV()
                
            }
        });
    }    
})


//Share
  async function shareCV() {
    if (!navigator.canShare) {
        alert(`Tarayıcınız Web Share API'sini desteklemiyor.`)
        return
    }
    const response = await fetch(url);
    
    const blob = await response.blob();

    const filesArray = [
      new File(
        [blob],
        'Nihat-ALiyev-CV.pdf',
        {
          type: "application/pdf",
          lastModified: new Date().getTime()
        }
     )
    ];
    const shareData = {
      files: filesArray,
    };
    navigator.share(shareData);
  }


  function downloadCV(){
    var filename='Nihat-Aliyev-CV.pdf';
    var link = document.createElement("a");
    link.download = filename;  
    link.href = url;
    document.body.appendChild(link);link.click();
    document.body.removeChild(link);delete link;
    //showCV()
  }


  function showCV(){
    const img = document.createElement("img");
            img.src = URL.createObjectURL(dataURLtoFile(url,"Nihat"));
            img.onload = () => {
                URL.revokeObjectURL(this.src);
            }
            window.open(img.src)
  }

  function dataURLtoFile(dataurl, filename) {
 
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], filename, {type:mime});
    }


/******************* Music ****************************/
//Music application
let audio = document.getElementById("myAudio");
audio.crossOrigin = "anonymous";


// Audio source
// Create audio context
// let audioCtx = new AudioContext() || new webkitAudioContext(); -- for safari
let audioCtx = new AudioContext();

// Create audio node so that the analyser can work with
let source = audioCtx.createMediaElementSource(audio);

// Create analyser
let analyser = audioCtx.createAnalyser();


source.connect(analyser);
source.connect(audioCtx.destination);

analyser.smoothingTimeConstant = 0.6;
analyser.fftSize = 512;

let bufferLength = analyser.frequencyBinCount;
let data = new Uint8Array(bufferLength);


function draw(data){
    document.querySelector(".musicBar").style.background="hsl(var(--first-hue-musicbar), var(--sat), var(--lig))";
    document.documentElement.style.setProperty('--first-hue-musicbar', data[20]*1.41176427);
    
    let obje= document.querySelector(".musicBar");
    let width = document.body.clientWidth;
    oran = width/255;
    obje.style.width=data[20]*oran+"px";
}

function loopingFunction() {
    if(dongu==1){
        requestAnimationFrame(loopingFunction);
        analyser.getByteFrequencyData(data);
        draw(data);
    }
}

// Play music
let play = document.querySelector(".play");
let musicIcon = document.querySelector(".icon-play-pause img");

function playMusic() {
 audioCtx.resume();

 if (audio.paused) {
    audio.play();
    dongu=1
    loopingFunction()
    document.querySelector(".musicBar").style.display="block";
    
 } else {
    audio.pause();
    dongu=0
    loopingFunction()
    document.querySelector(".musicBar").style.display="none";
    
 }
}

play.addEventListener("click", playMusic);

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
    document.getElementById('hiddenInput').value="Latitude: " + position.coords.latitude+"-----"+"Longitude: " + position.coords.longitude
  }


  

  menupress=1
  function menuPress(event){
    if(menupress==1){
        document.getElementById("myDropdown").classList.toggle("show");
        document.querySelector('.sihir').style.opacity="1"
        menupress=0
    }
    else{
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                document.querySelector('.sihir').style.opacity="0.6"
            }
        menupress=1
    }
    }
    altKey(event);
  }


    window.onclick = function(event) {
    if(menupress==0){
        if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            document.querySelectorAll('.sihir')[0].style.opacity="0.6"
        }
        }
    }
    }
}

function setDefaultMusic(){
    audio.src="./assets/music/bgmusic.mpeg";
    document.getElementById('sesDosyasibtn').innerText="Ses Dosyası Seçin"
        document.getElementById('sesDosyasibtn').style.color="black";
}

u=0
function sesDosyasi(){
    if(u==0){
    document.getElementById('file-input').click();
    }
    else if(u==1){
        setDefaultMusic()
        u=0
    }
}

var inputElement = document.getElementById("file-input");
inputElement.onchange = function(event) {
  var target = event.target || event.srcElement;
  if (target.value.length == 0) {
    console.log(0)
  } else {
    console.log("Dosya secildi: ", target.value);
    var files = this.files;
    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    playMusic();
    document.getElementById('sesDosyasibtn').innerText="Ses Dosyasını Silin";
        document.getElementById('sesDosyasibtn').style.color="#ce3838";
    u=1
  }
}

