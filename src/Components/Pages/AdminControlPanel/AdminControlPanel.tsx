import { useFetchCakesQuery } from "../../../Slices/firebase-api-slice";
import { PrivateContent } from "../../Private/private-content";
import edit from "../../../assets/icons/write.png";
import editImg from "../../../assets/icons/photo-editing.png";

interface FirestoreDocument {
  name: string;
  fields: {
    Image: { stringValue: string };
    Description: { stringValue: string };
    Price: { integerValue: string };
  };
}

export const AdminControlPanel: React.FC = () => {
  const { data = { documents: [] }, isFetching } = useFetchCakesQuery();

  console.log("data:", data);

  
  const documents = Array.isArray(data) ? [] : data.documents;

  return (
    <>
      <PrivateContent>
        {documents.length > 0 ? (
          <div className="admin-control-panel-container">
            <div className="admin-control-panel-header"></div>
            <div className="admin-control-panel-wrapper">
              <div className="admin-control-panel-list-container">
                <h1 className="admin-control-panel-title">
                  Ruslana Cakes Desserts:{" "}
                </h1>
                <ul className="admin-control-panel-items">
                  <li className="admin-control-panel-item">Торт</li>
                  <li className="admin-control-panel-item">Бенто торт</li>
                  <li className="admin-control-panel-item">Капкейки</li>
                </ul>
              </div>
              <div className="admin-control-panel-chosen-desserts-container">
                {isFetching && <div>Загрузка информации...</div>}
                {documents.map((doc: FirestoreDocument) => (
                  <div
                    key={doc.name}
                    className="admin-control-panel-chosen-dessert"
                  >
                    <div className="admin-control-panel-chosen-dessert-name">
                      Описание:
                      <hr></hr>
                      <p>{doc.fields.Description.stringValue}</p>
                      <img className="admin-control-panel-edit-icon" src={edit} alt="edit" width={"30px"} height={"auto"} loading="lazy" />
                    </div>
                    <div className="admin-control-panel-chosen-dessert-image">
                      <img
                        src={doc.fields.Image.stringValue}
                        alt={doc.fields.Description.stringValue}
                        width={"250px"}
                        height={"auto"}
                        loading="lazy"
                      />
                      <img className="admin-control-panel-edit-icon" src={editImg} alt="edit" width={"30px"} height={"auto"} loading="lazy" />
                    </div>
                    <div className="admin-control-panel-chosen-dessert-price">
                      <div>
                      <strong>
                        Цена:&nbsp;
                        {/* <hr></hr> */}
                        {Number(doc.fields.Price.integerValue)} руб.
                      </strong>

                      </div>
                      <img className="admin-control-panel-edit-icon" src={edit} alt="edit" width={"30px"} height={"auto"} loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>Нет активных десертов на продажу 😔</div>
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
