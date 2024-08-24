let redLight = document.getElementById('red-light')
let yellowLight = document.getElementById('yellow-light')
let greenLight = document.getElementById('green-light')

const color = document.querySelector('.color')
const timer = document.querySelector('.timer')

timer.addEventListener('click', function() {
        redLightColor(10)
                .then(()=>yellowLightColor(5))
                .then(()=>greenLightColor(30))                                           
})

function redLightColor(time){
        return new Promise((resolve, reject) => {
                setInterval(() => {
                        resolve(redLight.textContent = time <= 0 
                        ? clearInterval(time): time--
                        )        
                }, 1000) 
              
        setTimeout(addActiveClass, time)
        setTimeout(removeActiveClass, 6000)                     
              })   
}


function yellowLightColor(time){
        return new Promise((resolve, reject) => {
                setInterval(() => {
                        resolve(yellowLight.textContent = time <= 0 
                        ? clearInterval(time): time--
                )        
                }, 1000) 
              
                setTimeout(addActiveClass, time)
                setTimeout(removeActiveClass, 6000)                     
              })   
}

function greenLightColor(time){
        return new Promise((resolve, reject) => {
                setInterval(() => {
                        resolve(greenLight.textContent = time <= 0 
                                ? clearInterval(time): time--
                        )        
                        }, 1000) 
              
                setTimeout(addActiveClass, time)
                setTimeout(removeActiveClass, 6000)                     
              })   
}


function addActiveClass() {
              color.classList.add('active')
}

function removeActiveClass() {
              color.classList.remove('active')
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