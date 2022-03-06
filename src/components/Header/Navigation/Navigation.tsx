import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { RootState } from "../../../store/store";
import { setUserAction } from "../../../store/userReducer";
import './Navigation.css'


function Navigation() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user)

  const navItemsArray = [
    {navItemName: "Клиенты", navItemLink: `/${currentUser}/clients`},
    {navItemName: "Тренеры", navItemLink: `/${currentUser}/trainers`},
    {navItemName: "Группы", navItemLink: `/${currentUser}/groups`},
    {navItemName: "Оплата", navItemLink: `/${currentUser}/payment`},
    {navItemName: "Расписание", navItemLink: `/${currentUser}/schedule`},
  ]
  const navItems = navItemsArray.map((navItem, index) => {
    return <NavLink key={index} to={navItem.navItemLink} className="NavItem">{navItem.navItemName}</NavLink>
  })
  return ( 
    <>
      <div className="Navigation">
        {navItems}
        <Link to="/" className="retutnToEntryForm" onClick={() => dispatch(setUserAction('none'))}>Выйти</Link>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;