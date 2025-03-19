import cart from "../../assets/icons/shopping-cart.png"
import { scrollToSection } from "../../Utils/scroll"
export const Header = () => {
    return (
        <header className="header">
            <ul className="header-menu-list">
                <li className="header-menu-item header-menu-item-language"><a onClick={() => scrollToSection("location")}>Контакты</a></li>
                <li className="header-menu-item"><a onClick={() => scrollToSection("catalog")}>Каталог</a></li>
                <li className="header-menu-item"></li>
                <li className="header-menu-item">Order</li>
                {/* <li className="header-menu-item"><button className="header-menu-button">Корзина</button></li> */}
                <li className="header-menu-item"><a><img className="header-menu-cart" src={cart} alt="cart" /></a></li>
            </ul>            
        </header>
    )
}
