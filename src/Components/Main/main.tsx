import main_logo from "../../assets/main-logo.png"
export const Main = () => {
    return (
        <main className="main">
            <h1 className="visually-hidden">Торты на заказ в Нижнем Новгороде</h1>
            <img className="main-logo" src={main_logo} alt="Ruslana cakes" />
            <button className="main-button">Сделать заказ</button>
        </main>
    )
}