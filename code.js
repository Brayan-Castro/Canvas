let gridCreator = document.querySelector('.gridCreator')
let gridContainer = document.querySelector('.gridContainer')
gridCreator.addEventListener('click', ()=>{
    gridContainer.style.cssText = 'height: auto; width: 1000px; display: flex; flex-direction: row; flex-wrap: wrap; border: 1px solid black;'
    for(let i = 0; i < 8000; i++){
        let newDiv = document.createElement('div')
        newDiv.setAttribute('class', `b`)
        gridContainer.appendChild(newDiv)
        newDiv.addEventListener(`mouseover`, ()=>{
            let pencilColor = document.querySelector('.pencilColor').value
            newDiv.setAttribute('class', 'gridBlocksUnhover')
            newDiv.style.cssText = `background-color: ${pencilColor}`
        })
    }
})