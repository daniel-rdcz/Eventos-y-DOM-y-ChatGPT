document.addEventListener("mousemove", mostrarPosicion);
function mostrarPosicion(event) {
    const mousePosition = document.getElementById("mousePosition");
    mousePosition.textContent = `Posición del mouse: X:${event.clientX}, Y:${event.clientY}`;
}


function getNombreCompleto() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const nombreCompleto = document.getElementById("nombreCompleto");
    nombreCompleto.textContent = `${nombre} ${apellido}`;
}

function addRow() {
    var table = document.getElementById("sampleTable");
    var numRows = table.rows.length;
    var numCols = table.rows[0].cells.length;
    var newRow = table.insertRow(numRows);
    for (var i = 0; i < numCols; i++) {
      var cell = newRow.insertCell(i);
      cell.innerHTML = "Row " + (numRows + 1) + " column " + (i + 1);
    }
}
  
function addColumn() {
    var table = document.getElementById("sampleTable");
    var numRows = table.rows.length;
    for (var i = 0; i < numRows; i++) {
        var numCols = table.rows[i].cells.length;
        var newCell = table.rows[i].insertCell(numCols);
        newCell.innerHTML = "Row " + (i + 1) + " column " + (numCols + 1);
    }
}

function changeContent() {
    var rowIndex = parseInt(document.getElementById("rowIndex").value);
    var colIndex = parseInt(document.getElementById("colIndex").value);
    var newValue = document.getElementById("newValue").value;
    var table = document.getElementById("myTable");
    if (rowIndex > 0 && rowIndex <= table.rows.length && colIndex > 0 && colIndex <= table.rows[0].cells.length) {
        table.rows[rowIndex-1].cells[colIndex-1].innerHTML = newValue;
    } else {
        alert("Invalid row or column index");
    }
}

function addColor() {
    var colorSelect = document.getElementById("colorSelect");
    var newColor = prompt("Enter a new color:");
    if (newColor !== null && newColor !== "") {
      var option = document.createElement("option");
      option.text = newColor;
      colorSelect.add(option);
    }
  }
  
  function removeColor() {
    var colorSelect = document.getElementById("colorSelect");
    var selectedIndex = colorSelect.selectedIndex;
    if (selectedIndex >= 0) {
      colorSelect.remove(selectedIndex);
    }
  }

  // Obtenemos la imagen y le agregamos un evento para detectar el hover
const imagen = document.getElementById('imagenGato');
imagen.addEventListener('mouseover', function() {
  // Generamos dos números aleatorios entre 300 y 600
  const width = Math.floor(Math.random() * (600 - 300 + 1) + 300);
  const height = Math.floor(Math.random() * (600 - 300 + 1) + 300);
  // Creamos una nueva imagen con la misma fuente, pero con el nuevo tamaño
  const nuevaImagen = new Image(width, height);
  nuevaImagen.src = imagen.src;
  // Reemplazamos la imagen de placeholder por la nueva imagen
  imagen.src = nuevaImagen.src;
});

function cambiarTamanoImagen() {
    let width = Math.floor(Math.random() * (600 - 300 + 1) + 300);
    let height = Math.floor(Math.random() * (600 - 300 + 1) + 300);
  
    let imagen = document.getElementById('imagenGato');
    imagen.src = `http://placekitten.com/${width}/${height}`;
  }
  
  
  
  
  
  


