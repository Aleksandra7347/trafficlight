let redLight = document.getElementById('red-light')
let yellowLight = document.getElementById('yellow-light')
let greenLight = document.getElementById('green-light')
// const timer = document.getElementById('timer')
const color = document.querySelector('.color')
const timer = document.querySelector('.timer')



const promiseTimerColor = (time) => {
  const promise = new Promise((resolve, reject) => {
              setInterval(() => {
                            resolve(redLight.textContent = time <= 0 
                                    ? clearInterval(time): time--
                            )        
              }, 1000) 

              setTimeout(addActiveClass, time)
              setTimeout(removeActiveClass, 6000)                     
})
              return promise   
}

timer.addEventListener('click', function(event) {
              promiseTimerColor(5).then(() => {console.log('promise')})                                            
})

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