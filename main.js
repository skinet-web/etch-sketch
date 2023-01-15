import './style.css'

let gridSize = 0;

const grid = document.querySelector('#grid');

function addGrid (gridsNumber){
  for (let i = 0; i < gridsNumber; i++){
    const row = document.createElement('div');
    row.classList.add('grid-row');

    for(let j = 0; j < gridsNumber; j++){
      const widthAndHeight = 800 / gridSize;
      const gridBox = document.createElement('div')
      gridBox.classList.add('grid-box')
      gridBox.style.width = `${widthAndHeight}px`
      gridBox.style.height = `${widthAndHeight}px`

      gridBox.addEventListener("mouseenter", function(){
      gridBox.style.backgroundColor = 'black';
      });
      row.appendChild(gridBox)
    }
    grid.appendChild(row);
  }

}

// addGrid(gridSize);




//reset the square

const reset = document.querySelector('#reset');

reset.addEventListener("click", function(){
  
  reloadPage();
  });




//prompt for the grid size

const gridInsert = document.querySelector('#gridInsert');

gridInsert.addEventListener("click", function(){
  // gridSize = gridLength()
  // addGrid(gridSize)
  if(gridSize === 0){
    gridSize = gridLength()
    addGrid(gridSize)
  } else {
    // gridSize = 0;
    // addGrid(gridSize)
    reloadPage()
  }
  console.log(gridSize)
  });

  function reloadPage(){
    window.location.reload()
  }

  function gridLength(){
    let gridLength = Number(prompt("Please enter the grid size (max 100):", 20));
    if( gridLength <= 100){
      gridSize = gridLength;
      
      
    } else {
      gridLength = Number(prompt("The gridsize must be < 100"))
      reloadPage()
    }
    return gridLength;
  }