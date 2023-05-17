const ROOT = document.getElementById('root')

const night = document.createElement('button')
ROOT.append(night)
night.style.cssText = `
background: url(/imagis/sleep_FILL0_wght400_GRAD0_opsz48.png) no-repeat;
width: 50px;
height: 50px;
border: none;
top: 50px;
    right: 100px;
    position: absolute;
`



const btn = document.createElement('button')
ROOT.append(btn)
btn.textContent = 'SHOW MODAL'
btn.style.cssText = `
font-size: 45px;  
    font-weight: 500;
    border-color: black;
    border-radius: 27px;
    margin: 40px ;
    padding: 10px 15px;
    // background-color: red;
    cursor: pointer;  
    `
    // btn.addEventListener('mouseover', () => {
    //     btn.style.backgroundColor = 'green'
    // })
    // btn.addEventListener('mouseout', () => {
    //     btn.style.backgroundColor = 'red'
    // })



const modalWin = document.createElement('div')
modalWin.style.cssText= `
width: 970px;
height: 460px;
border-radius: 30px;
display: flex;
flex-direction: column-reverse;
justify-content: center;
font-size: 40px;
gap:40px;
padding-left: 45px;

box-shadow: black 5px 5px 17px 7px;
position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50% ,-50%);


`


modalWin.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti numquam ratione neque atque est debitis impedit harum doloribus quasi! Aperiam impedit necessitatibus tempore eos ratione perferendis dolorem iste asperiores ullam!'

const h3 = document.createElement('h3')
h3.textContent = 'Warning !'
modalWin.append(h3)
h3.style.cssText= `
font-size: 40px;
margin: 0;
`



const winfon = document.createElement('div')
winfon.style.cssText = `
position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
`
winfon.append(modalWin)

// ROOT.append(modalWin)


    btn.addEventListener('click', () => {
        // ROOT.append(modalWin)
        ROOT.append(winfon)
        console.log('click');
    })

    const closbtn = document.createElement('button')
    closbtn.textContent = 'x'
    modalWin.append(closbtn)
    closbtn.style.cssText = `
    position: absolute;
    top: 0;
   right: 0;
   width: 90px;
   height: 90px;
  
   border: none;
   font-size: 40px;
   background-color: #fff;
    `

    closbtn.addEventListener('click' , () => {
       winfon.remove()
    })
   winfon.addEventListener('click', (event) => {
        if(event.target === winfon){
            winfon.remove()
        }
    })
