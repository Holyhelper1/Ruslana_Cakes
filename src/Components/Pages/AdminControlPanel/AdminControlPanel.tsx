export const AdminControlPanel: React.FC = () => {
  return (
    <>
      <div className="admin-control-panel-container">
        <div className="admin-control-panel-header"></div>
        <div className="admin-control-panel-wrapper">
          <h1>AdminControlPanel</h1>
        </div>
      </div>


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
