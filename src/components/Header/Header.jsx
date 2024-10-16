
import { Link, NavLink } from 'react-router-dom'
import { Btn } from '../Btn/Btn'
import s from './Header.module.css'
export function Header(){
    return(
        <header className={s.header}>
            <div className="container">
                <div className={s.header__inner}>
                    <p className={s.logo}>LOGO</p>
                    <nav className={s.nav}>
                        <NavLink to="/">главная</NavLink>
                        <NavLink to="/catalog">каталог</NavLink>
                        <NavLink to="/users">пользователи</NavLink>
                    </nav>
                    <Btn/>
                </div>
            </div>
        </header>
    )
}