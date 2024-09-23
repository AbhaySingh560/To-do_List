const item=document.querySelector('.task');
const todo=document.querySelector('.to-do');

item.addEventListener(
    'keyup',
    function(event){
        if(event.key  == "Enter"){
            
            addtodo(this.value)
            this.value= " "
        }
    }
)
const addtodo=(item) =>{
    const list=document.createElement("li")
    list.innerHTML=`
      
    ${item}
      <i><img src="del-icon.png" alt="" height="20px" width="20px"></i>
    `;
    list.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
        list.querySelector("i").addEventListener(
            "click",
            function(){
                list.remove();
            }
        )
    
    todo.appendChild(list)

}

