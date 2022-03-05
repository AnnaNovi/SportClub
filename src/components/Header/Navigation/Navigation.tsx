import { Link, NavLink, Outlet } from "react-router-dom";
import './Navigation.css'


function Navigation() {

  const navItemsArray = ["Клиенты", "Тренеры", "Оплата", "Расписание"]
  const navItems = navItemsArray.map(navItem => {
    return <NavLink to="/clients" className="NavItem">{navItem}</NavLink>
  })
  return ( 
    <>
      <div className="Navigation">
        {navItems}
        <Link to="/" className="retutnToEntryForm">Выйти</Link>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;