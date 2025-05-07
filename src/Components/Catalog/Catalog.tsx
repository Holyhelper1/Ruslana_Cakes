import { useEffect, useState } from "react";
import { CakeCard } from "./Cake-card/Cake-card";
import {
  ICake,
  IFirestoreDocument,
  useFetchBentoPlusQuery,
  useFetchBentoQuery,
  useFetchCakesQuery,
  useFetchCupcakesQuery,
  useFetchMeringueQuery,
} from "../../Slices/firebase-api-slice";

enum DessertType {
  cakes = "Торты",
  bento = "Бенто-торты",
  cupcakes = "Капкейки",
  meringue = "Меринговый рулет",
}

export const Catalog = () => {
  const [currentCake, setCurrentCake] = useState<ICake[]>([]);
  const [currentBento, setCurrentBento] = useState<ICake[]>([]);
  const [currentCupcake, setCurrentCupcake] = useState<ICake[]>([]);
  const [currentMeringue, setCurrentMeringue] = useState<ICake[]>([]);
  const [currentBentoPlus, setCurrentBentoPlus] = useState<ICake[]>([]);
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
  const {
    data: meringue,
    isFetching: meringueFetching,
    error: meringueError,
  } = useFetchMeringueQuery();
  const {
    data: bentoPlus,
    isFetching: bentoPlusFetching,
    error: bentoPlusError,
  } = useFetchBentoPlusQuery();

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
    } else if (meringueError) {
      handleFetchError(meringueError, "Меренги");
      setNowFetching(false);
      return;
    } else if (bentoPlusError) {
      handleFetchError(bentoPlusError, "Бенто+капкейков");
      setNowFetching(false);
      return;
    }

    if (cakes !== null) {
      documents = Array.isArray(cakes?.documents) ? cakes.documents : [];
      setNowFetching(cakesFetching);

      const updatedDesserts = documents.map((doc) => ({
        id: doc.name,
        Image: doc.fields.Image.stringValue,
        Description: doc.fields.Description.stringValue,
        Price: doc.fields.Price.integerValue,
      }));
      setCurrentCake(updatedDesserts);
    }
    if (bento !== null) {
      documents = Array.isArray(bento?.documents) ? bento.documents : [];
      setNowFetching(bentoFetching);

      const updatedDesserts = documents.map((doc) => ({
        id: doc.name,
        Image: doc.fields.Image.stringValue,
        Description: doc.fields.Description.stringValue,
        Price: doc.fields.Price.integerValue,
      }));

      setCurrentBento(updatedDesserts);
    }

    if (cupcakes !== null) {
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
    if (meringue !== null) {
      documents = Array.isArray(meringue?.documents) ? meringue.documents : [];
      setNowFetching(meringueFetching);

      const updatedDesserts = documents.map((doc) => ({
        id: doc.name,
        Image: doc.fields.Image.stringValue,
        Description: doc.fields.Description.stringValue,
        Price: doc.fields.Price.integerValue,
      }));

      setCurrentMeringue(updatedDesserts);
      setNowFetching(false);
    }
    if (bentoPlus !== null) {
      documents = Array.isArray(bentoPlus?.documents)
        ? bentoPlus.documents
        : [];
      setNowFetching(bentoPlusFetching);

      const updatedDesserts = documents.map((doc) => ({
        id: doc.name,
        Image: doc.fields.Image.stringValue,
        Description: doc.fields.Description.stringValue,
        Price: doc.fields.Price.integerValue,
      }));

      setCurrentBentoPlus(updatedDesserts);
      setNowFetching(false);
    }
  }, [
    cakes,
    bento,
    cupcakes,
    meringue,
    cakesFetching,
    bentoFetching,
    cupcakesFetching,
    meringueFetching,
    cakesError,
    bentoError,
    cupcakesError,
    meringueError,
  ]);

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

  if (nowFetching) return <div>Загрузка...</div>;
  return (
    <div className="catalog-container" id="catalog">
      <div className="catalog-list">
        <h2 className="catalog-list-title">
          Превращаю ваши желания в нежные десерты
        </h2>
      </div>
      {error && <p>{error}</p>}
      <div className="catalog-cards-container">
        <div className="catalog-cards">
          <CakeCard
            cake={currentCake[Math.floor(Math.random() * currentCake.length)]}
            typeOfDessert={DessertType.cakes}
          />
          <CakeCard
            cake={
              currentCupcake[Math.floor(Math.random() * currentCupcake.length)]
            }
            typeOfDessert={DessertType.cupcakes}
          />
          <CakeCard
            cake={currentBento[Math.floor(Math.random() * currentBento.length)]}
            typeOfDessert={DessertType.bento}
          />
          <CakeCard
            cake={currentMeringue[Math.floor(Math.random() * 2)]}
            typeOfDessert="Меренговый рулет"
          />
        </div>

        <div className="catalog-cards-wide">
          <CakeCard cake={currentBentoPlus[0]} typeOfDessert="Бенто+Капкейки" />
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
