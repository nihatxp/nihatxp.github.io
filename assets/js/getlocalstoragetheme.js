/*=============== Hsl to RGB ===============*/
const HSLToRGB = (h, s, l) => {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [255 * f(0), 255 * f(8), 255 * f(4)];
  };


/*=============== LIGHT DARK THEME AND WRITE LOCAL STORAGE===============*/ 
const themeButton=document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'
try{
    const selectedTheme = localStorage.getItem('selectedTheme')
    const selectedIcon = localStorage.getItem('selected-icon')

    const getCurrentTheme= () => document.body.classList.contains(lightTheme) ? 'light' : 'dark'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-sun' : 'bx bx-moon'

    if(selectedTheme){
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
        themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
    }


    if(localStorage.getItem("theme")=='light'){
        document.body.classList.toggle(lightTheme)
        themeButton.classList.toggle(iconTheme)
        changeColor();
    }

    themeButton.addEventListener('click', ()=>{
        document.body.classList.toggle(lightTheme)
        themeButton.classList.toggle(iconTheme)
        if(themeButton.classList[3]=='bx-sun'==true){
            localStorage.setItem("theme", "light");
            changeColor()
        }
        else if(themeButton.classList[3]=='bx-sun'==false){
            localStorage.setItem("theme", "dark");
            document.querySelector('meta[name="theme-color"]').setAttribute("content", '#0B111E');
            

        }
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
        
    })
}
catch{
    alert("Site Doğru Çalışmıyor. Hata: 01 Tanımlama bilgileri erişimi yok")
    
    const selectedTheme = 'light'
    const selectedIcon = 'bx bx-sun'

    if(selectedTheme){
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
        themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
    }

    themeButton.addEventListener('click', ()=>{
        document.body.classList.toggle(lightTheme)
        themeButton.classList.toggle(iconTheme)
        if(themeButton.classList[3]=='bx-sun'==true){
            changeColor()
        }
        else if(themeButton.classList[3]=='bx-sun'==false){
            document.querySelector('meta[name="theme-color"]').setAttribute("content", '#0B111E');
            

        }
    })
}


/*=============== RGB value and Change Color ===============*/
r = 0
g = 0
b = 0

function changeColor(){
    var firstHue = getComputedStyle(document.documentElement).getPropertyValue('--first-hue')
    var sat = getComputedStyle(document.documentElement).getPropertyValue('--sat')
    var lig = getComputedStyle(document.documentElement).getPropertyValue('--lig')
    sat = sat.slice(0,-1)
    lig = lig .slice(0,-1)

    let a =HSLToRGB(firstHue,sat,lig)
    for(i=0; i < a.length ; i++){
        var noktaKonumu=a[i].toString().indexOf('.')
        if(i==0){
            r = a[i].toString().slice(0,noktaKonumu)
        }
        else if(i==1){
            g = a[i].toString().slice(0,noktaKonumu)
        }
        else if(i==2){
            b = a[i].toString().slice(0,noktaKonumu)
        }
    }
    document.querySelector('meta[name="theme-color"]').setAttribute("content", 'rgb('+r+','+g+','+b+')');
}




