import {
  IFirestoreDocument,
  useCreateBentoMutation,
  useCreateCakeMutation,
  useCreateCupcakeMutation,
  useDeleteBentoMutation,
  useDeleteCakeMutation,
  useDeleteCupcakeMutation,
  useFetchBentoQuery,
  useFetchCakesQuery,
  useFetchCupcakesQuery,
  useUpdateBentoMutation,
  useUpdateCakeMutation,
  useUpdateCupcakeMutation,
} from "../../../Slices/firebase-api-slice";
import { PrivateContent } from "../../Private/private-content";
import editText from "../../../assets/icons/write.png";
import editImg from "../../../assets/icons/photo-editing.png";
import deleteIcon from "../../../assets/icons/delete.png";
import createIcon from "../../../assets/icons/birthday-cake.png";
import { useEffect, useState } from "react";
import { extractDocumentId } from "../../../Utils/idCuter";
import { Footer } from "../../Footer/Footer";

type EditingParam = "isEditingText" | "isEditingImage" | "isEditingPrice";

interface INewData {
  Image: string;
  Price: number;
  Description: string;
}

export const AdminControlPanel: React.FC = () => {
  const [chosenDessert, setChosenDessert] = useState<string>("cakes");
  const [currentDessert, setCurrentDessert] = useState<IFirestoreDocument[]>(
    []
  );
  const [newData, setNewData] = useState<INewData>({
    Image: "",
    Price: 0,
    Description: "",
  });
  const [nowFetching, setNowFetching] = useState<boolean>(false);
  const [isCreatingNewDessert, setIsCreatingNewDessert] =
    useState<boolean>(false);
  const [deletingDessertId, setDeletingDessertId] = useState<string | null>(
    null
  );

  const { data: cakesData, isFetching: cakesFetching } = useFetchCakesQuery();
  const { data: bentoData, isFetching: bentoFetching } = useFetchBentoQuery();
  const { data: cupcakesData, isFetching: cupcakesFetching } =
    useFetchCupcakesQuery();

  const [updateCake] = useUpdateCakeMutation();
  const [updateBento] = useUpdateBentoMutation();
  const [updateCupcake] = useUpdateCupcakeMutation();

  const [deleteCake] = useDeleteCakeMutation();
  const [deleteBento] = useDeleteBentoMutation();
  const [deleteCupcake] = useDeleteCupcakeMutation();

  const [createCake] = useCreateCakeMutation();
  const [createBento] = useCreateBentoMutation();
  const [createCupcake] = useCreateCupcakeMutation();

  const isDescriptionInvalid =
    newData.Description.length === 0 || newData.Description.length > 130;
  // const isFormValid = newData.Description.length > 0 && newData.Description.length <= 130 && newData.Image && newData.Price;

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

    const updatedDocuments = documents.map((doc) => ({
      ...doc,
      isEditingText: false,
      isEditingImage: false,
      isEditingPrice: false,
    }));

    setCurrentDessert(updatedDocuments);
  }, [chosenDessert, cakesData, bentoData, cupcakesData, nowFetching]);

  const handleChoseDessert = (dessert: string) => {
    setChosenDessert(dessert);
  };

  const handleEditToggle = (id: string, isEditingParam: EditingParam) => {
    const updatedDessert = currentDessert.map((doc) => {
      if (doc.name === id) {
        return {
          ...doc,
          [isEditingParam]: !doc[isEditingParam],
        };
      }
      return doc;
    });

    setCurrentDessert(updatedDessert);
  };

  const handleUpdate = async (id: string, isEditingParam: EditingParam) => {
    const dessertToUpdate = currentDessert.find((doc) => doc.name === id);

    if (!dessertToUpdate) {
      console.error("Dessert not found.");
      return;
    }

    const documentId = extractDocumentId(dessertToUpdate.name);

    const updatedCake: { fields: IFirestoreDocument["fields"] } = {
      fields: {
        Image: {          
          stringValue: 
          //   думаю стоит так добавить
          newData.Image ||   
          dessertToUpdate?.fields.Image.stringValue,
        },
        Description: {
          stringValue:
            newData.Description ||
            dessertToUpdate?.fields.Description.stringValue,
        },
        Price: {
          integerValue:
            newData.Price !== 0
              ? newData.Price
              : dessertToUpdate?.fields.Price.integerValue,
        },
      },
    };

    const updatedDessert = currentDessert.map((doc) => {
      if (doc.name === id) {
        return {
          ...doc,
          [isEditingParam]: !doc[isEditingParam],
        };
      }

      // console.log(doc);
      
      return doc;
    });

    setCurrentDessert(updatedDessert);

    try {
      if (chosenDessert === "cakes")
        await updateCake({
          id: documentId,
          fields: updatedCake.fields,
        }).unwrap();
      if (chosenDessert === "bento")
        await updateBento({
          id: documentId,
          fields: updatedCake.fields,
        }).unwrap();
      if (chosenDessert === "cupcake")
        await updateCupcake({
          id: documentId,
          fields: updatedCake.fields,
        }).unwrap();
    } catch (error) {
      console.error("Failed to update cake:", error);
    }
  };

  const handleCreate = async () => {
    console.log("newData - ", newData);

    const newCreationDessert: IFirestoreDocument | any = {
      fields: {
        Description: {
          stringValue: newData.Description,
        },
        Image: {
          stringValue: newData.Image,
        },
        Price: {
          integerValue: newData.Price,
        },
      },
    };

    try {
      if (chosenDessert === "cakes")
        await createCake(newCreationDessert).unwrap();
      if (chosenDessert === "bento")
        await createBento(newCreationDessert).unwrap();
      if (chosenDessert === "cupcake")
        await createCupcake(newCreationDessert).unwrap();
      setCurrentDessert((prev) => [...prev, newCreationDessert]);
    } catch (error) {
      console.error("Failed to create cake:", error);
    }
  };

  const handleEditTextChange = (id: string, value: string) => {
    setNewData((prev) => ({
      ...prev,
      Description: value,
    }));

    setCurrentDessert((prev) =>
      prev.map((doc) =>
        doc.name === id
          ? {
              ...doc,
              fields: { ...doc.fields, Description: { stringValue: value } },
            }
          : doc
      )
    );
  };

  const handleEditImageChange = (id: string, value: string) => {
    setNewData((prev) => ({
      ...prev,
      Image: value,
      }));

      setCurrentDessert((prev) =>
        prev.map((doc) =>
          doc.name === id
            ? {
                ...doc,
                fields: { ...doc.fields, Image: { stringValue: value } },
              }
            : doc
        )
      );
  }

  const handleEditPriceChange = (id: string, value: string) => {
    setNewData((prev) => ({
      ...prev,
      Price: parseInt(value),
    }));

    setCurrentDessert((prev) =>
      prev.map((doc) =>
        doc.name === id
          ? {
              ...doc,
              fields: {
                ...doc.fields,
                Price: { integerValue: parseInt(value) },
              },
            }
          : doc
      )
    );
  };

  const handleDelete = async (id: string) => {
    const convertedId = extractDocumentId(id);
    try {
      if (chosenDessert === "cakes") await deleteCake(convertedId).unwrap();
      if (chosenDessert === "bento") await deleteBento(convertedId).unwrap();
      if (chosenDessert === "cupcake")
        await deleteCupcake(convertedId).unwrap();

      setCurrentDessert((prev) => prev.filter((doc) => doc.name !== id));
      setDeletingDessertId(null);
    } catch (error) {
      console.error("Failed to delete dessert:", error);
    }
  };
  

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
                    src={createIcon}
                    alt="create"
                    width={"30px"}
                    height={"auto"}
                    loading="lazy"
                    onClick={() =>
                      setIsCreatingNewDessert(!isCreatingNewDessert)
                    }
                  />
                </div>
                {isCreatingNewDessert && (
                  <form className="admin-control-panel-create-form">
                    <input
                      className="input"
                      style={{ marginBottom: "10px" }}
                      type="text"
                      placeholder="Описание"
                      value={newData.Description}
                      maxLength={130}
                      onChange={(e) =>
                        setNewData({ ...newData, Description: e.target.value })
                      }
                      required
                    />
                    <p>Текущая длинна: {newData.Description.length}</p>
                    {isDescriptionInvalid && (
                      <p style={{ color: "red" }}>
                        Описание не может быть пустым и должно быть короче 130
                        символов.
                      </p>
                    )}
                    <input
                      className="input"
                      style={{ marginBottom: "10px" }}
                      type="url"
                      placeholder="URL ссылка на изображение"
                      value={newData.Image}
                      onChange={(e) =>
                        setNewData({ ...newData, Image: e.target.value })
                      }
                      required
                    />
                    <input
                      className="input"
                      style={{ marginBottom: "10px" }}
                      type="number"
                      placeholder="Цена"
                      value={newData.Price}
                      onChange={(e) =>
                        setNewData({
                          ...newData,
                          Price: Number(e.target.value),
                        })
                      }
                      required
                    />
                    <div>
                      <button
                        className="save-button"
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          handleCreate();
                          setIsCreatingNewDessert(false);
                        }}
                        disabled={
                          !newData.Description ||
                          !newData.Image ||
                          !newData.Price
                        }
                      >
                        Создать
                      </button>
                      <button
                        className="cancel-button"
                        onClick={() => setIsCreatingNewDessert(false)}
                      >
                        Отменить
                      </button>
                    </div>
                  </form>
                )}
                <ul className="admin-control-panel-items">
                  <li
                    className={`admin-control-panel-item ${
                      chosenDessert === "cakes" ? "active" : ""
                    }`}
                    onClick={() => handleChoseDessert("cakes")}
                  >
                    Торт
                  </li>
                  <li
                    className={`admin-control-panel-item ${
                      chosenDessert === "bento" ? "active" : ""
                    }`}
                    onClick={() => handleChoseDessert("bento")}
                  >
                    Бенто торт
                  </li>
                  <li
                    className={`admin-control-panel-item ${
                      chosenDessert === "cupcake" ? "active" : ""
                    }`}
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
                      {deletingDessertId === doc.name ? (
                        <div className="admin-control-panel-delete-container">
                          <p className="admin-control-panel-delete-text">
                            Вы уверены, что хотите удалить десерт?
                          </p>
                          <button
                            className="save-button"
                            onClick={() => handleDelete(doc.name)}
                          >
                            Да
                          </button>
                          <button
                            className="cancel-button"
                            onClick={() => setDeletingDessertId(null)}
                          >
                            Отменить
                          </button>
                        </div>
                      ) : (
                        <img
                          className="admin-control-panel-edit-icon-delete"
                          title="Удалить десерт"
                          src={deleteIcon}
                          alt="delete"
                          width={"30px"}
                          height={"auto"}
                          loading="lazy"
                          onClick={() => setDeletingDessertId(doc.name)}
                        />
                      )}
                    </div>
                    <div className="admin-control-panel-chosen-dessert-name">
                      Описание:
                      <hr></hr>
                      {doc.isEditingText ? (
                        <>
                          <textarea
                            className="admin-control-panel-textarea"
                            defaultValue={doc.fields.Description.stringValue}
                            maxLength={130}
                            onChange={(e) =>
                              handleEditTextChange(doc.name, e.target.value)
                            }
                          />
                          <p>
                            Текущая длинна:{" "}
                            {doc.fields.Description.stringValue.length}
                          </p>
                          {isDescriptionInvalid && (
                            <p style={{ color: "red" }}>
                              Описание не может быть пустым и должно быть короче
                              130 символов.
                            </p>
                          )}
                        </>
                      ) : (
                        <p>{doc.fields.Description.stringValue}</p>
                      )}
                      <div className="admin-control-panel-edit-icon-container">
                        {doc.isEditingText ? (
                          <>
                            <button
                              className="save-button"
                              onClick={() =>
                                handleUpdate(doc.name, "isEditingText")
                              }
                            >
                              Сохранить
                            </button>
                            <button
                              className="cancel-button"
                              onClick={() =>
                                handleEditToggle(doc.name, "isEditingText")
                              }
                            >
                              Отменить
                            </button>
                          </>
                        ) : (
                          <img
                            className="admin-control-panel-edit-icon"
                            title="Редактировать описание"
                            src={editText}
                            alt="edit"
                            width={"30px"}
                            height={"auto"}
                            loading="lazy"
                            onClick={() =>
                              handleEditToggle(doc.name, "isEditingText")
                            }
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
                      {doc.isEditingImage && (
                        <input
                          className="input"
                          style={{ marginTop: "10px" }}
                          type="url"
                          defaultValue={doc.fields.Image.stringValue}
                          onChange={(e) =>
                            handleEditImageChange(doc.name, e.target.value)
                          }
                          required
                        />
                      )}
                      <div className="admin-control-panel-edit-icon-container">
                        {doc.isEditingImage ? (
                          <>
                            <button
                              className="save-button"
                              onClick={() =>
                                handleUpdate(doc.name, "isEditingImage")
                              }
                            >
                              Сохранить
                            </button>
                            <button
                              className="cancel-button"
                              onClick={() =>
                                handleEditToggle(doc.name, "isEditingImage")
                              }
                            >
                              Отменить
                            </button>
                          </>
                        ) : (
                          <img
                            className="admin-control-panel-edit-icon"
                            src={editImg}
                            title="Редактировать изображение"
                            alt="edit"
                            width={"30px"}
                            height={"auto"}
                            loading="lazy"
                            onClick={() =>
                              handleEditToggle(doc.name, "isEditingImage")
                            }
                          />
                        )}
                      </div>
                    </div>
                    <div className="admin-control-panel-chosen-dessert-price">
                      {doc.isEditingPrice ? (
                        <>
                          <input
                            className="input"
                            style={{ marginTop: "10px" }}
                            type="number"
                            defaultValue={doc.fields.Price.integerValue}
                            onChange={(e) =>
                              handleEditPriceChange(doc.name, e.target.value)
                            }
                            required
                          />
                          <button
                            className="save-button"
                            onClick={() =>
                              handleUpdate(doc.name, "isEditingPrice")
                            }
                          >
                            Сохранить
                          </button>
                          <button
                            className="cancel-button"
                            onClick={() =>
                              handleEditToggle(doc.name, "isEditingPrice")
                            }
                          >
                            Отменить
                          </button>
                        </>
                      ) : (
                        <>
                          {" "}
                          <div>
                            <strong>
                              Цена:&nbsp;
                              {Number(doc.fields.Price.integerValue)} руб.
                            </strong>
                          </div>
                          <img
                            className="admin-control-panel-edit-icon"
                            title="Редактировать цену"
                            src={editText}
                            alt="edit"
                            width={"30px"}
                            height={"auto"}
                            loading="lazy"
                            onClick={() =>
                              handleEditToggle(doc.name, "isEditingPrice")
                            }
                          />
                        </>
                      )}
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
        <Footer />
      </PrivateContent>
    </>
  );
};
