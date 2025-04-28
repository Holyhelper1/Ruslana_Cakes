
import { Catalog } from "../Catalog/Catalog";
import { Footer } from "../Footer/Footer";
import { Location } from "../Location/Location";
export const Main: React.FC = () => {
  return (
    <>
      <main className="main">
        <h1 className="visually-hidden">Торты на заказ в Нижнем Новгороде</h1>
        <div className="main-title-container">
          <h2 className="main-title">Кондитерские шедевры</h2>
          <p className="main-description">ручной работы с любовью</p>
          <p className="main-description-text">Десерты на заказ в Нижнем Новгороде</p>
        </div>
      </main>
      <Catalog />
      <Location />
      <Footer />
    </>
  );
};
