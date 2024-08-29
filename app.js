const redLight = document.getElementById('red-light')
const yellowLight = document.getElementById('yellow-light')
const greenLight = document.getElementById('green-light')

const colorRed = document.querySelector('.color-red')
const colorYellow = document.querySelector('.color-yellow')
const colorGreen = document.querySelector('.color-green')

const timer = document.querySelector('.timer')

let isEnableButton = true

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

function addActiveClass(color) {
        color.classList.add('active')
}

function removeActiveClass(color) {
        color.classList.remove('active')
}

function redLightColor(time){
        return new Promise((resolve) => {
                setInterval(() => {
                        if(time === 0) resolve()
                        redLight.textContent = time <= 0 
                        ? clearInterval(time): time--
                }, 1000)          
                setTimeout(() => {
                        addActiveClass(colorRed)
                }, time)
                setTimeout(() => {
                        removeActiveClass(colorRed)
                }, 6000)                     
        })   
}

function yellowLightColor(time){
        return new Promise((resolve) => {
                setInterval(() => {
                        if(time === 0) resolve()
                        yellowLight.textContent = time <= 0 
                        ? clearInterval(time): time--      
                }, 1000)      
                setTimeout(() => {
                        addActiveClass(colorYellow)
                }, time)
                setTimeout(() => {removeActiveClass(colorYellow)

                }, 4000)                     
        })   
}

function greenLightColor(time){
        return new Promise((resolve) => {
                setInterval(() => {
                        if(time === 0) resolve()
                        greenLight.textContent = time <= 0 
                        ? clearInterval(time): time--    
                }, 1000) 
                setTimeout(() => {
                        addActiveClass(colorGreen)
                }, time)
                setTimeout(() => {
                        removeActiveClass(colorGreen)
                }, 11000)                     
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