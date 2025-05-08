
import { About } from "../About/About";
import { Catalog } from "../Catalog/Catalog";
import { Feedback } from "../Feedback/Feedback";
import { HowToOrder } from "../HowToOrder/HowToOrder";
import { MainFooter } from "./Main-footer/Main-footer";
export const Main: React.FC = () => {
  return (
    <>
      <main className="main" id="main">
        <h1 className="visually-hidden">Торты на заказ в Нижнем Новгороде</h1>
        <div className="main-title-container">
          <h2 className="main-title">Кондитерские шедевры</h2>
          <p className="main-description">ручной работы с любовью</p>
          <p className="main-description-text">Десерты на заказ в Нижнем Новгороде</p>
        </div>
      </main>
      <Catalog />
      <HowToOrder/>
      <About/>
      <Feedback/>
      <MainFooter/>
    </>
  );
};
