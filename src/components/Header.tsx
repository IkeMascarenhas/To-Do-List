import moon from '../assets/icons/icon-moon.svg';
import sun from '../assets/icons/icon-sun.svg';
import { ThemeProps } from '../lib/types';

const icons = {
    moon,
    sun
}

const Header = ({theme, handleSwitchTheme}: ThemeProps) => {
  return (
    <header className={'flex justify-between items-top font-bold h-28 max-w-md mx-auto w-11/12'}>
        <h1 className='text-3xl text-Very-Light-Gray my-12'>T O D O</h1>
        <img src={theme=="dark" ? icons.sun : icons.moon} alt="Icone lua" className='icon mt-12 mx-4 mb-1 cursor-pointer' onClick={handleSwitchTheme}/>
    </header>
  )
}

export default Header