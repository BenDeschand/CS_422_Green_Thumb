function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
  }

  function onDragOver(event) {
    event.preventDefault();
  }
  
  function onDragEnd(event){
    document.getElementById("trash").style.borderStyle = "none"
  }

  function onDrop(event) {
    var id = event.dataTransfer.getData('text');
    if(id.substring(0,3)=="pic"){
      id = id.substring(3);
    }
    console.log(id)
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    var newPlant = draggableElement.cloneNode(true);
    newPlant.id = 'plotPlant'
    newPlant.ondragstart = function(event){
      event.dataTransfer.setData('text/plain', event.target.id);
      event.currentTarget.style.backgroundColor = 'yellow';
      document.getElementById("trash").style.borderColor = "red";
      document.getElementById("trash").style.borderStyle = "solid";
    }
    dropzone.appendChild(newPlant);
    event.dataTransfer.clearData();
  }

//make the table
  var tableBody = document.getElementById('gameTable');
  for (var i = 0; i < 3; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (var j = 0; j < 3; j++) {
      var td = document.createElement('TD');
      // td.appendChild(document.createTextNode("Cell " + i + "," + j));
      td.width = "100"
      td.height = "100"
      td.classList.add("plotTile");
      td.style.backgroundColor = 'brown';
      td.ondrop = onDrop;
      td.ondragover = onDragOver;
      tr.appendChild(td);
    }
  }

  function deleteOnDrop(event) {
    const id = event.dataTransfer.getData('text');
    const dropzone = event.target;
    console.log(document.getElementById(id).parentElement)
    
    //if dragging over picture for deletion
    if (document.getElementById(id).parentElement.id == "plotPlant"){
      const draggableElement = document.getElementById(id).parentElement;
      dropzone.appendChild(draggableElement)
      dropzone.removeChild(draggableElement)
    }
    if(id == "plotPlant"){
      console.log("ran")
    const draggableElement = document.getElementById(id);
    dropzone.appendChild(draggableElement)
    dropzone.removeChild(draggableElement)
    // dropzone.appendChild(draggableElement.cloneNode(true));
    event.dataTransfer.clearData();
    }
  }