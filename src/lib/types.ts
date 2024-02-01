interface TodoList {
    id: number;
    txt:string;
    checked:boolean;
  }
  
  type ListProps = {
    TodoItems: Array<TodoList>;
    setTodoItems?:React.Dispatch<any>;
  }

  export default ListProps

  export type ThemeProps = {
    theme: string;
    setTheme?:React.Dispatch<React.SetStateAction<string>>;
    handleSwitchTheme?: () => void;
  }