import { Link } from "react-router"
import cart from "../../assets/icons/trolley.png"
import { scrollToSection } from "../../Utils/scroll"
export const Header = () => {
    return (
        <header className="header">
            <ul className="header-menu-list">
            <Link to="/" onClick={() => scrollToSection("location")}>
                <li className="header-menu-item header-menu-item-language">Контакты</li>
            </Link>
            <Link to="/" onClick={() => scrollToSection("catalog")}>
                <li className="header-menu-item">Каталог</li>
            </Link>
                {/* <li className="header-menu-item"><img src={logo} alt="logo" width={"180px"} height={"auto"} /></li> */}
                <li className="header-menu-item">Мой заказ</li>
                <li className="header-menu-item"><a><img className="header-menu-cart" src={cart} alt="cart" /></a></li>
            </ul>            
        </header>
    )
}
