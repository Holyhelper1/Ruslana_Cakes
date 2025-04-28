import { useEffect, useState } from "react";
import { CakeCard } from "./Cake-card/Cake-card";
import {
  ICake,
  IFirestoreDocument,
  useFetchBentoQuery,
  useFetchCakesQuery,
  useFetchCupcakesQuery,
} from "../../Slices/firebase-api-slice";

enum DessertType {
  cakes = "Торты",
  bento = "Бенто-торты",
  cupcakes = "Капкейки",
  meringue = "Меринговый рулет",
}

export const Catalog = () => {
  // const [activeItem, setActiveItem] = useState<string>("");
  // const [selectedCategory, setSelectedCategory] = useState<
  //   "cakes" | "bento" | "cupcake"
  // >("cakes");
  const [topSellers, setTopSellers] = useState<number>(3);
  const [currentCake, setCurrentCake] = useState<ICake[]>([]);
  const [currentBento, setCurrentBento] = useState<ICake[]>([]);
  const [currentCupcake, setCurrentCupcake] = useState<ICake[]>([]);
  // const [currentDessert, setCurrentDessert] = useState<ICake[]>([]);
  const [nowFetching, setNowFetching] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const {
    data: cakes,
    isFetching: cakesFetching,
    error: cakesError,
  } = useFetchCakesQuery();
  
  const {
    data: bento,
    isFetching: bentoFetching,
    error: bentoError,
  } = useFetchBentoQuery();
  const {
    data: cupcakes,
    isFetching: cupcakesFetching,
    error: cupcakesError,
  } = useFetchCupcakesQuery();

  useEffect(() => {
    let documents: IFirestoreDocument[] = [];
    setNowFetching(true);
    setError("");

    if (cakesError) {
      handleFetchError(cakesError, "тортов");
      setNowFetching(false);
      return;
    } else if (bentoError) {
      handleFetchError(bentoError, "бенто");
      setNowFetching(false);
      return;
    } else if (cupcakesError) {
      handleFetchError(cupcakesError, "капкейков");
      setNowFetching(false);
      return;
    }

    if (cakes !== null) {
    // if (selectedCategory === "cakes") {
      documents = Array.isArray(cakes?.documents) ? cakes.documents : [];
      setNowFetching(cakesFetching);

      const updatedDesserts = documents.map((doc) => ({
        id: doc.name,
        Image: doc.fields.Image.stringValue,
        Description: doc.fields.Description.stringValue,
        Price: doc.fields.Price.integerValue,
      }));
      setCurrentCake(updatedDesserts);
    } if (bento !== null) {
      documents = Array.isArray(bento?.documents) ? bento.documents : [];
      setNowFetching(bentoFetching);

      const updatedDesserts = documents.map((doc) => ({
        id: doc.name,
        Image: doc.fields.Image.stringValue,
        Description: doc.fields.Description.stringValue,
        Price: doc.fields.Price.integerValue,
      }));

      setCurrentBento(updatedDesserts);
    } if (cupcakes !== null) {
      documents = Array.isArray(cupcakes?.documents) ? cupcakes.documents : [];
      setNowFetching(cupcakesFetching);

      const updatedDesserts = documents.map((doc) => ({
        id: doc.name,
        Image: doc.fields.Image.stringValue,
        Description: doc.fields.Description.stringValue,
        Price: doc.fields.Price.integerValue,
      }));

      setCurrentCupcake(updatedDesserts);
      setNowFetching(false);
    }

    // const updatedDesserts = documents.map((doc) => ({
    //   id: doc.name,
    //   Image: doc.fields.Image.stringValue,
    //   Description: doc.fields.Description.stringValue,
    //   Price: doc.fields.Price.integerValue,
    // }));

    // setCurrentDessert(updatedDesserts);
  }, [
    // selectedCategory,
    cakes,
    bento,
    cupcakes,
    cakesFetching,
    bentoFetching,
    cupcakesFetching,
    cakesError,
    bentoError,
    cupcakesError,
  ]);

  console.log("currentCake - ", currentCake);
  console.log("currentCake - ", Math.floor(Math.random() * currentCake.length));
  // console.log("currentDessert - ", currentDessert[0]);
  

  const handleFetchError = (error: any, type: string) => {
    if ("status" in error) {
      setError(
        `Ошибка при загрузке ${type}: статус ${
          error.status
        }, данные: ${JSON.stringify(error.data)}`
      );
    } else {
      setError(
        `Ошибка при загрузке ${type}: ${error.message || "Неизвестная ошибка"}`
      );
    }
  };

  // useEffect(() => {
  //   const updateTopSellers = () => {
  //     if (selectedCategory === "cakes" && cakes !== null) {
  //       setTopSellers(3);
  //     } else if (selectedCategory === "bento" && bento !== null) {
  //       setTopSellers(1);
  //     } else if (selectedCategory === "cupcake" && cupcakes !== null) {
  //       setTopSellers(0);
  //     }
  //   };

  //   updateTopSellers();
  // }, [selectedCategory, cakes, bento, cupcakes]);

  // const handleCategoryChange = (category: "cakes" | "bento" | "cupcake") => {
  //   setSelectedCategory(category);
  //   setActiveItem(category);
  // };

  if (nowFetching) return <div>Загрузка...</div>;

  return (
    <div className="catalog-container" id="catalog">
      <div className="catalog-list">
        <h2 className="catalog-list-title">Превращаю ваши желания в нежные десерты</h2>
        {/* <ul className="catalog-list-items">
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
        </ul> */}
      </div>
      {error && <p>{error}</p>}
      <div className="catalog-cards-container">
        <div className="catalog-cards">

          <CakeCard cake={currentCake[Math.floor(Math.random() * currentCake.length)]} typeOfDessert={DessertType.cakes}/>
          <CakeCard cake={currentCupcake[Math.floor(Math.random() * currentCupcake.length)]} typeOfDessert={DessertType.cupcakes}/>
          <CakeCard cake={currentBento[Math.floor(Math.random() * currentBento.length)]} typeOfDessert={DessertType.bento}/>
          <CakeCard cake={currentCake[topSellers]} typeOfDessert="Меренговый рулет"/>

        </div>

        <div className="catalog-cards-wide">

          <CakeCard cake={currentCupcake[0]} typeOfDessert="Бенто+Капкейки"/>

        </div>

        {/* <div className="catalog-cards">
          {currentDessert.length > 0 ? (
            currentDessert.map((item) => <CakeCard key={item.id} cake={item} />)
          ) : (
            <p>Нет доступных товаров в этой категории.</p>
          )}
        </div>
        <div className="catalog-cards-top">
          <p className="catalog-top-seller-title">Top seller</p>
          {currentDessert.length > 0 && (
            <CakeCard cake={currentDessert[topSellers]} />
          )}
        </div> */}



      </div>
    </div>
  );
};
