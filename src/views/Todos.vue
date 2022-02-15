<template>
  <div>
   <h2>TODO APPLICATION</h2>
   <Addtodo 
      @add-todo="addTodo"
   />
   <hr>
   <TodoList 
   v-bind:todos='todos'
   @remove-todo="removeTodo"
   />
  </div>
</template>


<script>
import TodoList from '@/components/TodoList'
import Addtodo from '@/components/Addtodo'

export default{
  name: 'app',
  data(){
    return {
      todos:[
          {id:1, title:'купить хлеб', completed: false},
          {id:2, title:'купить молоко', completed: false},
          {id:3, title:'купить воду', completed: false},
      ]
    }
  },
  mounted(){
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json =>{
        this.todos=json
      })
  },
  methods:{
    removeTodo(id){
      this.todos=this.todos.filter(t => t.id !== id)
    },
    addTodo(todo){
        this.todos.push(todo)
    }
  },
  components:{
    TodoList,Addtodo
  }
}


</script>