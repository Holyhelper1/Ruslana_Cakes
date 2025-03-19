import { useState } from "react";
import main_logo from "../../assets/2 logo Ruslana Cakes.png"
import { Modal } from "../Modal/Modal";
export const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <main className="main">
            <h1 className="visually-hidden">Торты на заказ в Нижнем Новгороде</h1>
            <img className="main-logo" src={main_logo} alt="Ruslana cakes" />
            <button className="main-button" onClick={() => setIsModalOpen(true)}>Сделать заказ</button>
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        </main>
    )
}