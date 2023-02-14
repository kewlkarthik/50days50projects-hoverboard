const conatiner = document.getElementById('container')
const colors = ['#DFFF00','#FFBF00','#FF7F50','#DE3163','#9FE2BF','#40E0D0','#6495ED','#CCCCFF']
const squares = 401

for(let i=1; i<squares; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    conatiner.appendChild(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    
}

function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}