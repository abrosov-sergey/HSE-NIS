const appCode = "gamli";
const cellSize = 10;
const delaySeconds = 0.1;


let canvas, context, width, height, matrix, matrixTransitional,
    cellCountX, cellCountY, timer, 
    isEvolution = false, isTransitionalState = false;

start();

function start() 
{
    console.log("start()");

    prepareField();
    matrix = getLastState();
    showState();
    
    // level--;
}

//
function getLastState()
{
    console.log("getLastState()");

  return getEmptyState();
}

function getEmptyState()
{
    console.log("getEmptyState()");
  
 
//   level--;
  
  return new Array(cellCountY).fill("").map( () => new Array(cellCountX).fill(0) );
}

function showState()
{
    console.log("showState()");
  
  let matrixTMP = matrix;
  
  if (isTransitionalState)
  {
    matrixTMP = matrixTransitional;
  }
  
  for(let cellY = 0; cellY < matrixTMP.length; cellY++)
  {
    for(let cellX = 0; cellX < matrixTMP[cellY].length; cellX++)
    {
      drawCell(cellX, cellY, matrixTMP[cellY][cellX]);
    }      
  }
 
//   level--;
}

function drawPixel(x, y)
{
    console.log("getPixel(x, y)");
  
  //log(event);
  
  context.fillStyle = "black";
  context.fillRect(x, y, 1, 1);
 
  //level--;
}


function getCellX(event)
{
    console.log("getCellX(event)");
  
  let x = event.pageX;
  let innerX = event.offsetX; //x - event.explicitOriginalTarget.offsetLeft;
  let cellX = Math.floor(innerX / cellSize);
  
//   level--;
  
  return cellX;
}

function getCellY(event)
{
    console.log("getCellY(event)");
  
  let y = event.pageY;
  let innerY = event.offsetY; //y - event.explicitOriginalTarget.offsetTop;
  let cellY = Math.floor(innerY / cellSize);
  
//   level--;
  
  return cellY;
}

function changeCellState(cellX, cellY)
{
    console.log("changeCellState(cellX, cellY)");
  
  matrix[cellY][cellX] = matrix[cellY][cellX] ? 0 : 1;
  drawCell(cellX, cellY, matrix[cellY][cellX]);
 
  //level--;
}


function drawCell(cellX, cellY, cellState)
{
    console.log("drawCell(cellX, cellY, cellState)");
  
  //matrix[cellY][cellX] = matrix[cellY][cellX] ? 0 : 1;
  if (isTransitionalState)
  {
    let color = "white";
    switch (cellState)
    {
      case 1: color = "#C1C71B"; break; //live  #DDD568
      case 2: color = "#3BB03F"; break; //born
      case 3: color = "#B0182C"; break; //die
    }
    context.fillStyle = color;
  }
  else
  {
    context.fillStyle = cellState ? "black" : "white";
  }
  context.fillRect(cellX * cellSize + 1, cellY * cellSize + 1, cellSize - 2, cellSize - 2);
  
 
  //level--;
}



function prepareField()
{
    console.log("prepareField()");

  canvas = document.getElementById("field");
  context = canvas.getContext("2d");
//   context.drawImage(document.getElementById("mainImage"), 0, 0)
  width = Number(canvas.getAttribute("width"));
  height = Number(canvas.getAttribute("height"));
  cellCountX = width / cellSize;
  cellCountY = height / cellSize;
  
  //matrix = new Array(cellCountY).fill("").map( () => new Array(cellCountX).fill(0) );
  //log("matrix =", matrix);
     
  canvas.onclick = 
    function(event)
    {
      console.log("button.save.onclick");
      
      if (!isEvolution)
      {
        let x = getCellX(event);
        let y = getCellY(event);
        changeCellState(x, y);
      }
      
      level--;
    };
  drawGrid();

  context.drawImage(document.getElementById("mainImage"), 0, 0);
  
//   level--;
}


function drawGrid()
{
    console.log("drawGrid()")
  let colCount = width / cellSize;
  let rowCount = height / cellSize;

  for(let x = 0; x <= width; x += cellSize)
  {
    drawLine(x, 0, x, height); 
  }
  for(let y = 0; y <= height; y += cellSize)
  {
    drawLine(0, y, width, y); 
  }
}

function drawLine(xFrom, yFrom, xTo, yTo)
{
    console.log("drawLine()")
  context.beginPath();
  context.moveTo(xFrom, yFrom);
  context.lineTo(xTo, yTo);
  context.lineWidth = 1;
  context.stroke();
  context.closePath();
}
