import ListProps, {ThemeProps} from "../lib/types"

type StatusProps = ListProps & ThemeProps & {
  handleClearAll:() => void
}

const Status = ({TodoItems, handleClearAll, theme}: StatusProps) => {

  
  return (
    <div className={`flex justify-between p-5 text-xs ${theme=="dark" ? "text-Light-Grayish-Blue" : "text-Very-Dark-Blue"} font-bold`}>
      <p>{TodoItems.length} itens restantes</p>
      <button onClick={handleClearAll}>Limpar concluídos</button>
    </div>
  )
}

export default Status