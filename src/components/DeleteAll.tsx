import {ThemeProps} from "../lib/types"

type DeleteAllProps = ThemeProps & {
    handleDeleteAll: () => void;
}

const DeleteAll = ({theme, handleDeleteAll}:DeleteAllProps) => {

  return (
    <div className={`p-5 inputList ${theme=="dark" ? "bg-Very-Dark-Desaturated-Blue" : "bg-Very-Light-Gray"} m-auto rounded-md flex justify-center mt-3`}>
        <button className="text-center text-red" onClick={handleDeleteAll}>Deletar todos os itens</button>
    </div>
  )
}

export default DeleteAll