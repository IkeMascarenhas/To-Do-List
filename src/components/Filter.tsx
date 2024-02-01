import ListProps from "../lib/types"

type FilterProps = ListProps & {
    setTodoItems:React.Dispatch<React.SetStateAction<{
        id: number;
        txt: string;
        checked: boolean;
    }[]>>;
}



const Filter = ({TodoItems, setTodoItems}:FilterProps) => {
    

      
    const FilterActive = () => {
        let copyTodosItems = [...TodoItems]
        let updateTodoItems = TodoItems.filter((item)=>{
          return item.checked == false
        })
        setTodoItems(updateTodoItems)
        console.log(updateTodoItems)
        return copyTodosItems
      }

      const handleShowAll = () => {
        let updateTodoItems = TodoItems
        setTodoItems(updateTodoItems)
      }

  return (
    <div className='p-5  bg-Very-Dark-Desaturated-Blue  rounded-md flex justify-around mt-5 text-Light-Grayish-Blue '>
        <button className="cursor-pointer hover:text-bright-blue focus:text-bright-blue">All</button>
        <button className="cursor-pointer hover:text-bright-blue focus:text-bright-blue" onClick={FilterActive}>Active</button>
        <button className="cursor-pointer hover:text-bright-blue focus:text-bright-blue">Completed</button>
    </div>
  )
}

export default Filter