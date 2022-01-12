function createNewElement() {
      
    var txtNewInputBox = document.createElement('div');
  
    txtNewInputBox.innerHTML = "<input class='form-control me-2' type= 'text' placeholder= 'ADD HOBBIES' style='margin-bottom: 3px;'>";
  
    document.getElementById("newElementId").appendChild(txtNewInputBox);

  }

  function createNewElement1() {
      
    var txtNewInputBox = document.createElement('div');
  
    txtNewInputBox.innerHTML = "<input class='form-control me-2' type= 'text' placeholder= 'ADD MOVIE INTERESTS' style='margin-bottom: 3px;'>";
  
    document.getElementById("newElementId1").appendChild(txtNewInputBox);
    
  }

  function createNewElement2() {
      
    var txtNewInputBox = document.createElement('div');
  
    txtNewInputBox.innerHTML = "<input class='form-control me-2' type= 'text' placeholder= 'ADD FOOD INTERESTS' style='margin-bottom: 3px;'>";
  
    document.getElementById("newElementId2").appendChild(txtNewInputBox);
 
  }