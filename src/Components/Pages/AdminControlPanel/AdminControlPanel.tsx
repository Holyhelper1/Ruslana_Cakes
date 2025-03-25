import {
  IFirestoreDocument,
  useFetchBentoQuery,
  useFetchCakesQuery,
  useFetchCupcakesQuery,
} from "../../../Slices/firebase-api-slice";
import { PrivateContent } from "../../Private/private-content";
import edit from "../../../assets/icons/write.png";
import editImg from "../../../assets/icons/photo-editing.png";
import deleteImg from "../../../assets/icons/delete.png";
import createImg from "../../../assets/icons/birthday-cake.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setEditingText } from "../../../Slices/dessertSlice";

// interface FirestoreDocument {
//   name: string;
//   fields: {
//     Image: { stringValue: string };
//     Description: { stringValue: string };
//     Price: { integerValue: string };
//   };
// }

export const AdminControlPanel: React.FC = () => {
  const [chosenDessert, setChosenDessert] = useState<string>("cakes");
  const [currentDessert, setCurrentDessert] = useState<IFirestoreDocument[]>([]);
  const [nowFetching, setNowFetching] = useState<boolean>(false);
  // const [isEditingText, setIsEditingText] = useState<boolean>(false);
  // const [isEditingImage, setIsEditingImage] = useState<boolean>(false);
  // const [isEditingPrice, setIsEditingPrice] = useState<boolean>(false);

  const [editedValue, setEditedValue] = useState<{ [key: string]: string }>({});

  const dispatch = useDispatch();

  const { data: cakesData, isFetching: cakesFetching } = useFetchCakesQuery();
  const { data: bentoData, isFetching: bentoFetching } = useFetchBentoQuery();
  const { data: cupcakesData, isFetching: cupcakesFetching } =
    useFetchCupcakesQuery();

  console.log("cakesData:", cakesData);

  useEffect(() => {
    let documents: IFirestoreDocument[] = [];
    setNowFetching(true);

    if (chosenDessert === "cakes") {
      documents = Array.isArray(cakesData?.documents)
        ? cakesData.documents
        : [];
      setNowFetching(cakesFetching);
    } else if (chosenDessert === "bento") {
      documents = Array.isArray(bentoData?.documents)
        ? bentoData.documents
        : [];
      setNowFetching(bentoFetching);
    } else if (chosenDessert === "cupcake") {
      documents = Array.isArray(cupcakesData?.documents)
        ? cupcakesData.documents
        : [];
      setNowFetching(cupcakesFetching);
    }

    setCurrentDessert(documents);
  }, [chosenDessert, cakesData, bentoData, cupcakesData]);

  const handleChoseDessert = (dessert: string) => {
    setChosenDessert(dessert);
  };


  // const handleEditTextToggle = (id: string) => {
  //   // const isEditing = currentDessert.find(doc => doc.name === id)?.isEditingText;
  //   const isEditing = currentDessert.find(doc => doc.name === id);

  //   console.log("isEditing:", isEditing?.name);
  //   // console.log("currentDessert:", currentDessert.find(doc => doc.name === id));
  //   console.log("id:", id);
    

  //   // Устанавливаем состояние редактирования в противоположное
  //   dispatch(setEditingText({ id, isEditing: !isEditing }));

  //   console.log("!isEditing:", isEditing);
    
  // };



  const handleEditTextToggle = (id: string) => {
    // Найдем десерт по id и получим его состояние редактирования
    const dessertEditingState = currentDessert.find(doc => doc.name === id);
    
    // Установка состояния редактирования
    if (dessertEditingState) {
      const isEditing = dessertEditingState.isEditingText;

      console.log("isEditing:", isEditing);
      console.log("dessertEditingState.isEditingText:", dessertEditingState.isEditingText);
      
      dispatch(setEditingText({ id, isEditing: !isEditing }));
    } else {
      console.error(`Десерт с id ${id} не найден.`);
    }
  };


  // const handleSave = (id: string) => {
  //   const description = editedValue[id]; // Получаем измененное значение
  //   // Отправьте это значение на сервер или в хранилище
  //   // Например, тут может быть dispatch для сохранения

  //   // Устанавливаем состояние редактирования в false после сохранения
  //   dispatch(setEditingText({ id, isEditing: false }));
  // };

  return (
    <>
      <PrivateContent>
        {currentDessert.length > 0 ? (
          <div className="admin-control-panel-container">
            <div className="admin-control-panel-header"></div>
            <div className="admin-control-panel-wrapper">
              <div className="admin-control-panel-list-container">
                <h1 className="admin-control-panel-title">
                  Ruslana Cakes Desserts:{" "}
                </h1>
                <div className="admin-control-panel-create-icon-container">
                  <h3 className="admin-control-panel-create-icon-title">
                    Создать новый десерт:
                  </h3>
                  <img
                    className="admin-control-panel-create-icon"
                    title="Создать новый десерт"
                    src={createImg}
                    alt="create"
                    width={"30px"}
                    height={"auto"}
                    loading="lazy"
                  />
                </div>
                <ul className="admin-control-panel-items">
                  <li
                    className="admin-control-panel-item"
                    onClick={() => handleChoseDessert("cakes")}
                  >
                    Торт
                  </li>
                  <li
                    className="admin-control-panel-item"
                    onClick={() => handleChoseDessert("bento")}
                  >
                    Бенто торт
                  </li>
                  <li
                    className="admin-control-panel-item"
                    onClick={() => handleChoseDessert("cupcake")}
                  >
                    Капкейки
                  </li>
                </ul>
              </div>
              <div className="admin-control-panel-chosen-desserts-container">
                {nowFetching && <div>Загрузка информации...</div>}
                {currentDessert.map((doc: IFirestoreDocument) => (
                  <div
                    key={doc.name}
                    className="admin-control-panel-chosen-dessert"
                  >
                    <div className="admin-control-panel-edit-icon-container">
                      <img
                        className="admin-control-panel-edit-icon-delete"
                        title="Удалить десерт"
                        src={deleteImg}
                        alt="delete"
                        width={"30px"}
                        height={"auto"}
                        loading="lazy"
                      />
                    </div>
                    <div className="admin-control-panel-chosen-dessert-name">
                      Описание:
                      <hr></hr>
                      {doc.isEditingText ? (
                        <textarea
                        className="admin-control-panel-textarea"
                          defaultValue={doc.fields.Description.stringValue}
                        ></textarea>
                      ) : (
                        <p>{doc.fields.Description.stringValue}</p>
                      )}
                      <div className="admin-control-panel-edit-icon-container">
                        {doc.isEditingText ? (<>
                        
                          <button className="admin-control-panel-save-button" onClick={() => { handleEditTextToggle(doc.name ) }}>
                            Сохранить
                          </button>
                          <button className="admin-control-panel-cancel-button" onClick={() => { handleEditTextToggle(doc.name ) }}>
                            Отменить
                          </button>
                        </>
                        ) : (
                          <img
                            className="admin-control-panel-edit-icon"
                            title="Редактировать описание"
                            src={edit}
                            alt="edit"
                            width={"30px"}
                            height={"auto"}
                            loading="lazy"
                            onClick={() => handleEditTextToggle(doc.name)}
                          />
                        )}
                      </div>
                    </div>
                    <div className="admin-control-panel-chosen-dessert-image">
                      <img
                        src={doc.fields.Image.stringValue}
                        alt={doc.fields.Description.stringValue || "dessert"}
                        width={"250px"}
                        height={"auto"}
                        loading="lazy"
                      />
                      <div className="admin-control-panel-edit-icon-container">
                        <img
                          className="admin-control-panel-edit-icon"
                          src={editImg}
                          title="Редактировать изображение"
                          alt="edit"
                          width={"30px"}
                          height={"auto"}
                          loading="lazy"
                          onClick={() => {}}
                        />
                      </div>
                    </div>
                    <div className="admin-control-panel-chosen-dessert-price">
                      <div>
                        <strong>
                          Цена:&nbsp;
                          {Number(doc.fields.Price.integerValue)} руб.
                        </strong>
                      </div>
                      <img
                        className="admin-control-panel-edit-icon"
                        title="Редактировать цену"
                        src={edit}
                        alt="edit"
                        width={"30px"}
                        height={"auto"}
                        loading="lazy"
                        onClick={() => {}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="admin-control-panel-empty">
            Нет активных десертов на продажу 😔
          </div>
        )}
      </PrivateContent>

      {/* <PrivateContent>
        {orders.length > 0 ? (
          <div className={styles.admin_control_container}>
            <h2 className={styles.admin_control_tittle}>Активные заказы</h2>
            {isLoading && <div>Загрузка заказов...</div>}
            <Button
              className={styles.check_new_orders}
              onClick={() => setGetNewOrders(!getNewOrders)}
            >
              Обновить заказы ↩
            </Button>
            <ul className={styles.order_list}>
              {orders.map((order) => (
                <li key={order.id} className={styles.order_item}>
                  <div className={styles.order_details}>
                    <div className={styles.order_date_container}>
                      <div>
                        {convertTimestampToDate(order.timestamp)} - обращения
                      </div>
                      <button
                        className={styles.delete_button}
                        onClick={() => confirmDelete(order)}
                      >
                        Удалить заказ
                      </button>
                    </div>
                    <hr></hr>
                    <div>Имя клиента: {order.customerName}</div>
                    <div>
                      Контактные данные клиента:
                      <a
                        className={styles.order_phone}
                        href={"tel:" + order.customerPhone}
                      >
                        {`${order.customerPhone}`}
                      </a>
                      <br></br>
                      Почта: {order.customerEmail ? order.customerEmail : "почта не указана"}
                    </div>
                    <div>Описание проблемы: {order.customerMessage}</div>
                  </div>
                  <div className={styles.order_images}>
                    {order.customerImages.map((imageUrl, index) => (
                      <img
                        key={index}
                        src={imageUrl}
                        alt={`Customer ${index}`}
                        className={styles.order_image}
                        onClick={() => openModal(imageUrl)}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            {isModalOpen && (
              <div className={styles.modal} onClick={closeModal}>
                <img
                  src={selectedImage}
                  alt="Large View"
                  className={styles.modal_image}
                />
                <button className={styles.close_button} onClick={closeModal}>
                  ×
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.admin_control_empty}>
            К сожалению на данный момент нет активных заказов 😔
          </div>
        )}
      </PrivateContent> */}
    </>
  );
};
