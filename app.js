const redLight = document.getElementById('red-light')
const yellowLight = document.getElementById('yellow-light')
const greenLight = document.getElementById('green-light')

const colorRed = document.querySelector('.color-red')
const colorYellow = document.querySelector('.color-yellow')
const colorGreen = document.querySelector('.color-green')

const timer = document.querySelector('.timer')

let isEnableButton = true

class Traffic {
        constructor(color, interval, colorInterval, addTime, removeTime) {
                this.color = color;
                this.interval = interval;
                this.colorInterval = colorInterval;
                this.addTime = addTime;
                this.removeTime = removeTime;
        }    
    
        lightColor(){
                return new Promise((resolve) => {
                        setInterval(() => {
                                if(this.interval === 0) resolve()
                                        this.colorInterval.textContent = this.interval <= 0 
                                ? clearInterval(this.interval): this.interval--
                        }, 1000)          
                        setTimeout(() => {
                                this.color.classList.add('active')
                                }, this.addTime)

                        setTimeout(() => {
                                this.color.classList.remove('active')
                                }, this.removeTime)                     
                })   
        }      
}

timer.addEventListener('click', function() {
        if(isEnableButton) {
                isEnableButton = false

                console.log(red.color)

                red.lightColor()
                .then(()=> {
                        yellow.lightColor()
                        .then(()=> {
                                green.lightColor()
                                        .then(()=> {
                                                isEnableButton = true
                        })
                })
                })
        }
                                                           
})

const red = new Traffic (colorRed, 5, redLight, 1000, 6000)
const yellow = new Traffic (colorYellow, 3, yellowLight, 1000, 4000)
const green = new Traffic (colorGreen, 10, greenLight, 1000, 11000)

console.log(red.color)
console.log(red.interval)
console.log(red.addTime)
console.log(red.removeTime)



// function redLightColor(time){
//         return new Promise((resolve) => {
//                 setInterval(() => {
//                         if(time === 0) resolve()
//                         redLight.textContent = time <= 0 
//                         ? clearInterval(time): time--
//                 }, 1000)          
//                 setTimeout(() => {
//                         addActiveClass(colorRed)
//                 }, time)
//                 setTimeout(() => {
//                         removeActiveClass(colorRed)
//                 }, 6000)                     
//         })   
// }

// function yellowLightColor(time){
//         return new Promise((resolve) => {
//                 setInterval(() => {
//                         if(time === 0) resolve()
//                         yellowLight.textContent = time <= 0 
//                         ? clearInterval(time): time--      
//                 }, 1000)      
//                 setTimeout(() => {
//                         addActiveClass(colorYellow)
//                 }, time)
//                 setTimeout(() => {removeActiveClass(colorYellow)

//                 }, 4000)                     
//         })   
// }

// function greenLightColor(time){
//         return new Promise((resolve) => {
//                 setInterval(() => {
//                         if(time === 0) resolve()
//                         greenLight.textContent = time <= 0 
//                         ? clearInterval(time): time--    
//                 }, 1000) 
//                 setTimeout(() => {
//                         addActiveClass(colorGreen)
//                 }, time)
//                 setTimeout(() => {
//                         removeActiveClass(colorGreen)
//                 }, 11000)                     
//         })   
// }










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