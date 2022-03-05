import Navigation from "./Navigation/Navigation";
import './Header.css'


function Header() {
  return ( 
    <div className="Header">
      <div className="headerTitle">Спортивный клуб "Восточные единоборства"</div>
      <Navigation />
    </div>
  );
}

export default Header;