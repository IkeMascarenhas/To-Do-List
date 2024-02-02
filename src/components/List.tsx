import Status from './Status'
import { useState } from 'react';
import { ThemeProps } from '../lib/types';
import ItemsList from './ItemsList';
import DeleteAll from './DeleteAll';

const List = ({theme}:ThemeProps) => {

  const dadosArmazenados = localStorage.getItem("TodoList");
  const [TodoItems, setTodoItems] = useState(dadosArmazenados ? JSON.parse(dadosArmazenados) : [{id:0, txt:"Adicione itens a sua lista!", checked:true}])


  const [itemList, setItemList] = useState("");

  const handleSetItemList = (e: any) => {
    setItemList(e.target.value)
  }

  const handleClearAll = () => {
    let updateTodoItems = new Array
    TodoItems.map((item:any, index:number)=>{
      if (item.checked == false) updateTodoItems.push(item)
      if(item.checked == true) {
        TodoItems.splice(index, 1)
      }
    })
    setTodoItems(updateTodoItems)
    console.log(TodoItems)
    localStorage.setItem("TodoList", JSON.stringify(updateTodoItems))
  }

  const handleAddItem = (txtNewItem:string) => {
    if (txtNewItem != ""){
      const newItem = {
      id: TodoItems.length,
      txt: txtNewItem,
      checked:false,
    }

    let updateTodoItems = [...TodoItems, newItem]
    setTodoItems(updateTodoItems)
    }

    setItemList("")
    
    localStorage.setItem("TodoList", JSON.stringify(TodoItems))
  }

  const handleDeleteItem = (index:number) => {
    let updateTodoItems = [...TodoItems]

    if(index >=0 && index < updateTodoItems.length){
      updateTodoItems.splice(index, 1)

      setTodoItems(updateTodoItems)
      localStorage.setItem("TodoList", JSON.stringify(updateTodoItems))
    }}


    const handleDeleteAll = () => {
      if(TodoItems.length != 0){
        if(confirm("Tem certeza?")){
          setTodoItems([])
      }
      } else {
        alert("Sua lista está vazia!")
      }
      
      localStorage.setItem("TodoList", JSON.stringify([]))
  }


  return (
    <main className='flex flex-col w-11/12 mx-auto my-0 max-w-md '>
      <div className={`p-5 inputList ${theme=="dark" ? "bg-Very-Dark-Desaturated-Blue" : "bg-Very-Light-Gray"} m-auto rounded-md flex justify-between`}>
        <input type="text" value={itemList} onInput={(e)=>{handleSetItemList(e)}} className={`${theme=="dark" ? "bg-Very-Dark-Desaturated-Blue" : "bg-Very-Light-Gray"} ${theme=="dark" ? "text-Very-Light-Gray" : "text-Very-Dark-Desaturated-Blue"} text-xs`} placeholder='Adicione uma tarefa'/>
        <button className='text-bright-blue font-semibold' onClick={() => {handleAddItem(itemList);}}>Add</button>
      </div>
      
      <section className={`${theme=="dark" ? "bg-Very-Dark-Desaturated-Blue" : "bg-Very-Light-Gray"} mt-3 rounded-md`}>
        <ItemsList TodoItems={TodoItems} handleDeleteItem={handleDeleteItem} theme={theme}/>
        <Status TodoItems={TodoItems} handleClearAll={handleClearAll} theme={theme}/>
      </section>

      <DeleteAll theme={theme} handleDeleteAll={handleDeleteAll}/>

    </main>
  )
}

export default List