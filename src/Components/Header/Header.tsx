import flag from "../../assets/BG flag.jpg"
export const Header = () => {
    return (
        <header className="header">
            <ul className="header-menu-list">
                <li className="header-menu-item header-menu-item-language">Language <img src={flag} alt="flag" /></li>
                <li className="header-menu-item">About</li>
                <li className="header-menu-item">RUSLANA CAKES</li>
                <li className="header-menu-item">Order</li>
                <li className="header-menu-item"><button className="header-menu-button">Sign in</button></li>
            </ul>
            
        </header>
    )
}