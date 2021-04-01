var app = new Vue({
    el: '#app',
    data: {
        newTodo:'',
        todos:[
            {
                id:'123',
                title:'妳好',
                completed:false,
            }
          
        ],
        visibility:'all',

      },
      methods: {
        addTodo:function(){
           var value = this.newTodo.trim();
           var timesamp =Math.floor(Date.now()) ;
           if(!value){
               return;
           }
           this.todos.push({
               id:timesamp,
               title:value,
               completed:false,
           });
           this.newTodo='';
        },
        removeTodo:function(todo){
           var newIndex ='';
           var vm = this;
           vm.todos.forEach(function(item,key){
               if(todo.id === item.id){
                newIndex = key
               }
           })
           this.todos.splice(newIndex,1);
        }
      },
      computed:{
          filteredTodos:function(){
              if(this.visibility == 'all'){
                  return this.todos;
              }else if(this.visibility == 'active'){
                  var newTodos =[];
                  this.todos.forEach(item => {
                      if(!item.completed){
                          newTodos.push(item);
                      }
                  });
                  return newTodos;
              }else if(this.visibility == 'completed'){
                var newTodos =[];
                this.todos.forEach(item => {
                    if(item.completed){
                        newTodos.push(item);
                    }
                });
                return newTodos;
            }
              
          }
      }
    })