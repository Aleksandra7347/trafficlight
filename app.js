let redLight = document.getElementById('red-light')
let yellowLight = document.getElementById('yellow-light')
let greenLight = document.getElementById('green-light')

const colorRed = document.querySelector('.color-red')
const colorYellow = document.querySelector('.color-yellow')
const colorGreen = document.querySelector('.color-green')

const timer = document.querySelector('.timer')
let isEnableButton = true

function addActiveClassRed() {
        colorRed.classList.add('active')
}
function removeActiveClassRed() {
        colorRed.classList.remove('active')
}
function addActiveClassYellow() {
        colorYellow.classList.add('active')
}
function removeActiveClassYellow() {
        colorYellow.classList.remove('active')
}
function addActiveClassGreen() {
        colorGreen.classList.add('active')
}
function removeActiveClassGreen() {
        colorGreen.classList.remove('active')
}

timer.addEventListener('click', function() {
        if(isEnableButton) {
                isEnableButton = false
                redLightColor(5)
                .then(()=> {
                        yellowLightColor(3)
                        .then(()=> {
                                greenLightColor(10)
                                        .then(()=> {
                                                isEnableButton = true
                        })
                })
                })
        }
                                                           
})




function redLightColor(time){
        return new Promise((resolve) => {
                setInterval(() => {
                        if(time === 0) resolve()
                        redLight.textContent = time <= 0 
                        ? clearInterval(time): time--
                }, 1000)          
                setTimeout(addActiveClassRed, time)
                setTimeout(removeActiveClassRed, 6000)                     
        })   
}

function yellowLightColor(time){
        return new Promise((resolve) => {
                setInterval(() => {
                        if(time === 0) resolve()
                        yellowLight.textContent = time <= 0 
                        ? clearInterval(time): time--      
                }, 1000)      
                setTimeout(addActiveClassYellow, time)
                setTimeout(removeActiveClassYellow, 4000)                     
        })   
}

function greenLightColor(time){
        return new Promise((resolve) => {
                setInterval(() => {
                        if(time === 0) resolve()
                        greenLight.textContent = time <= 0 
                        ? clearInterval(time): time--    
                }, 1000) 
                setTimeout(addActiveClassGreen, time)
                setTimeout(removeActiveClassGreen, 11000)                     
        })   
}




// function timerColorRed(time) {
//               setInterval(() => {
//                             // redLight.style.backgroundColor = time <= 0 ? `gray`: `green`
//                             redLight.textContent = time <= 0 
//                             ? clearInterval(time): time--                            
//               }, 1000);
// }

// function timerColorYellow(time) {
//               setInterval(() => {
                            
//                             yellowLight.textContent = time <= 0 
//                             ? clearInterval(time): time--                            
//               }, 1000);
// }

// function timerColorGreen(time) {
//               setInterval(() => {
                            
//                             greenLight.textContent = time <= 0 
//                             ? clearInterval(time): time--                            
//               }, 1000);
// }

//  Ссылка на addEventListener
// https://www.yourtodo.ru/posts/obrabotka-sobyitij-v-javascript/

// Ссылка на classList.add('active')
// https://doka.guide/js/element-classlist/