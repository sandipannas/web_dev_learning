let global_id=0;

let todo_list=[
    {
      "id":1,
      "title":"go to gym",
      "description":"go to the gym at 7pm"
    },
    {
      "id":2,
      "title":"go to gym",
      "description":"go to the gym at 9pm"
    }
]

function markAsDone(todo_id){
    const todo_element=document.getElementById(todo_id);
    todo_element.children[1].innerHTML="done";
    todo_element.children[2].remove();
    todo_element.children[1].onclick=null;
}

function deleteTodo(todo_id){
    document.getElementById(todo_id).remove();
}

function createChild(todo_name,todo_id){
    const parent_div=document.createElement("div");
    
    const first_child=document.createElement("span");
    first_child.innerHTML=todo_name;

    const second_child=document.createElement("input");
    //second_child.innerHTML="mark as done";
    //second_child.setAttribute("onclick",`markAsDone('${todo_id}')`);
    second_child.setAttribute("type","checkbox");

    const third_child=document.createElement("button");
    third_child.innerHTML="delete";
    third_child.setAttribute("onclick",`deleteTodo('${todo_id}')`);

    parent_div.appendChild(first_child);
    parent_div.appendChild(second_child);
    parent_div.appendChild(third_child);
    parent_div.setAttribute("id",todo_id)

    return parent_div;
}

function make_todo(){
    const input_todo=document.getElementById("name_of_todo").value;
    const todo_id=`todo_id_${global_id++}`
    document.getElementById("container_for_todo").appendChild(createChild(input_todo,todo_id));
    
}

function makeTodoFromArray(){
    const element_div=document.getElementById("container_for_todo");
    element_div.innerHTML="";
    for(let i=0;i<todo_list.length;i++)
    {
             const parent_div=document.createElement("div");
             parent_div.setAttribute("id",todo_list[i]["id"]);

             const first_child_div=document.createElement("div");
             first_child_div.innerHTML=todo_list[i]["title"];
             
             const second_child_div=document.createElement("div");
             second_child_div.innerHTML=todo_list[i]["description"];
            
             const third_child_div=document.createElement("button");
             third_child_div.innerHTML="mark as done"
             third_child_div.setAttribute("onclick",`markAsDone(${todo_list[i]["id"]})`);

             const fourth_child_div=document.createElement("button");
             fourth_child_div.innerHTML="delete the todo";
             fourth_child_div.setAttribute("onclick",`deleteTodo(${todo_list[i]["id"]})`);

             parent_div.appendChild(first_child_div);
             parent_div.appendChild(second_child_div);
             parent_div.appendChild(third_child_div);
             parent_div.appendChild(fourth_child_div);

             element_div.appendChild(parent_div);
             

    }
}