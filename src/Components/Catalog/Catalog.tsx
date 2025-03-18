import { useEffect, useState } from "react";
import { CakeCard } from "./Cake-card/Cake-card";
import {
  collection,
  getDocs,
  //  doc, getDoc
} from "firebase/firestore";
import { db } from "../../firebase";

export interface ICake {
  id: string;
  Image: string;
  Description: string;
  Price: number;
}

// const topSeller: ICake[] = [
//   {
//     id: "1",
//     Image:
//       "https://sun9-78.userapi.com/impg/JEJKCt0ssXqh4Yrk7YXNlBeG8Sg3dNMA-W30Jw/lz96jeRzbH8.jpg?size=1181x1581&quality=95&sign=d99737a23f6e984c41dce0d3ee0ec876&type=album",
//     Description:
//       "Цена указана за килограмм Большой выбор бисквитов и начинок Минимальный вес от 2 кг. Декор оплачивается отдельно",
//     Price: 2000,
//   },
// ];

export const Catalog = () => {
  const [cakes, setCakes] = useState<ICake[]>([]);
  const [bento, setBento] = useState<ICake[]>([]);
  const [cupcakes, setCupcakes] = useState<ICake[]>([]);
  const [activeItem, setActiveItem] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<
    "cakes" | "bento" | "cupcake"
  >("cakes");
  // const [topSellers, setTopSellers] = useState<ICake[]>([]);
  const [topSellers, setTopSellers] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchData = async () => {
    setLoading(true);

    try {
      const cakesCollection = collection(db, "cakes");
      const cakesSnapshot = await getDocs(cakesCollection);
      const cakesData = cakesSnapshot.docs.map((doc) => ({
        id: doc.id,
        Image: doc.data().Image,
        Description: doc.data().Description,
        Price: doc.data().Price,
      }));
      setCakes(cakesData as ICake[]);

      const bentoCollection = collection(db, "bento");
      const bentoSnapshot = await getDocs(bentoCollection);
      const bentoData = bentoSnapshot.docs.map((doc) => ({
        id: doc.id,
        Image: doc.data().Image,
        Description: doc.data().Description,
        Price: doc.data().Price,
      }));
      setBento(bentoData as ICake[]);

      const cupcakesCollection = collection(db, "cupcake");
      const cupcakesSnapshot = await getDocs(cupcakesCollection);
      const cupcakesData = cupcakesSnapshot.docs.map((doc) => ({
        id: doc.id,
        Image: doc.data().Image,
        Description: doc.data().Description,
        Price: doc.data().Price,
      }));
      setCupcakes(cupcakesData as ICake[]);
    } catch (error: any) {
      setError("Ошибка при загрузке данных: " + error.message);
      console.error("Ошибка при загрузке данных:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {

    fetchData();
  }, []);

  useEffect(() => {
    const updateTopSellers = () => {
      let items: ICake[] = [];
      if (selectedCategory === "cakes" && cakes.length > 0) {
        setTopSellers(3)
        // items = cakes;
      } else if (selectedCategory === "bento" && bento.length > 0) {
        setTopSellers(1)
        // items = bento;
      } else if (selectedCategory === "cupcake" && cupcakes.length > 0) {
        setTopSellers(0)
        // items = cupcakes;
      }
      
      // Получаем топ продавцов, например, первые 3 элемента
      // setTopSellers(items.slice(0, 3));
    };

    updateTopSellers();
  }, [selectedCategory, cakes, bento, cupcakes]);

  const handleCategoryChange = (category: "cakes" | "bento" | "cupcake") => {
    setSelectedCategory(category);
    setActiveItem(category);
  };

  if (loading) return <div>Загрузка...</div>;

  const displayedItems =
    selectedCategory === "cakes"
      ? cakes
      : selectedCategory === "bento"
      ? bento
      : selectedCategory === "cupcake"
      ? cupcakes
      : [];

  console.log("displayedItems", displayedItems);

  console.log("topSellers", topSellers);
  
  

  return (
    <div className="catalog-container">
      <div className="catalog-list">
        <h2 className="catalog-list-title">Catalog</h2>
        <ul className="catalog-list-items">
          <li
            className={`catalog-list-item ${
              activeItem === "cakes" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("cakes")}
          >
            Торты
          </li>
          <li
            className={`catalog-list-item ${
              activeItem === "bento" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("bento")}
          >
            Бенто торты
          </li>
          <li
            className={`catalog-list-item ${
              activeItem === "cupcake" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("cupcake")}
          >
            Капкейки
          </li>
        </ul>
        
      </div>
      {error && <p>{error}</p>}
      <div className="catalog-cards-container">
        <div className="catalog-cards">
          {displayedItems.length > 0 ? (
            displayedItems.map((item) => <CakeCard key={item.id} cake={item} />)
          ) : (
            <p>Нет доступных товаров в этой категории.</p>
          )}
        </div>
        <div className="catalog-cards-top">
          <p className="catalog-top-seller-title">Top seller</p>
          {/* <CakeCard cake={displayedItems[topSellers]} /> */}
          {displayedItems.length > 0 && (
            <CakeCard cake={displayedItems[topSellers]} />
          )}


        </div>
      </div>
    </div>
  );
};
