import React from 'react'
import cross from '../assets/icons/icon-cross.svg';

import ListProps, {ThemeProps} from '../lib/types'

type ItemsListProps = ListProps & ThemeProps & {
  handleDeleteItem:(index: number) => void,
}

const ItemsList = ({TodoItems, handleDeleteItem, theme}: ItemsListProps) => {

  const handleCheck = (item:any, index:number):any => {
    TodoItems[index].checked=!item.checked
    console.log(TodoItems)
  }
  return (
    <ul className='flex flex-col justify-between h-max '>
      {TodoItems.length == 0 ? <p className={`text-center p-5 ${theme=="dark" ? "text-Light-Grayish-Blue" : "text-Very-Dark-Desaturated-Blue"}`}>Parabéns! <br /> Você concluiu suas tarefas!</p> : null}
        {TodoItems.map((item, index)=> (
        <>
          {index == 0 ? null: <hr style={{
            color: "hsl(236, 9%, 61%)",
          }} />}
          <li key={index} 
          className='p-5 itemList'>
            <input type="checkbox" 
            name="itemList" 
            id={`${index}`} 
            aria-label='Mark as concluded'
            onChange={() => handleCheck(item, index)}
            className='cursor-pointer bg-bright-blue'
            />
            <label htmlFor={`${index}`}  className={`self-start ${theme=="dark" ? "text-Light-Grayish-Blue" : "text-Very-Dark-Desaturated-Blue"} text-xs cursor-pointer font-medium flex items-center`}>
              {item.txt}
            </label>
            <img src={cross} alt="Delete" 
            onClick={() => handleDeleteItem(index)}
            className='Delete cursor-pointer'/>
          </li>
          {index == TodoItems.length-1 ? <hr style={{
            color: "hsl(236, 9%, 61%)",
          }}/> : null}
        </>
        ))}
    </ul>
  )
}

export default ItemsList