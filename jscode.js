let inputs=document.getElementById("input");
let list=document.querySelector(".showitem");

function Add(){
    if (inputs.value == ""){
        alert("Please Enter Text");
    }else{
        let newitem = document.createElement("div");
        newitem.className='listitem';
        newitem.style.border= "1px solid gray";
        newitem.style.backgroundColor = "rgb(180, 177, 177)";
        newitem.innerHTML = `<span>${inputs.value} </span>
        <Button class="edit" onclick="Edit(this)">Edit</Button> 
        <Button class="btn" onclick="Delete(this.parentNode)">Delete</Button>`;
        list.appendChild(newitem);
        inputs.value = "";

    }
}
function Edit(newitemedit){
    let spanElement = newitemedit.parentNode.querySelector('span');
    let newText = prompt("Edit the task:", spanElement.innerText);
    if (newText !== null ){
        spanElement.innerText = newText;
    }else{
        alert("Please Do Changes or Else Same Output");
    }
}
function Delete(newitem){
    list.removeChild(newitem);
}
