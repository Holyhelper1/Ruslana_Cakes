import { useState } from "react";
import MaskedInput from "react-text-mask";

export const Modal = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dessert, setDessert] = useState("DEFAULT");
  const [comments, setComments] = useState("");

  const handleSubmit = () => {
    // Формируем текст сообщения для отправки в Telegram
    const message = `
        Добрый день! Хочу оставить заказ.
        Меня зовут: ${name}
        Мой контактный телефон: ${phone}
        Вид десерта: ${dessert}
        Комментарии: ${comments}
    `;

    navigator.clipboard.writeText(message).then(() => {
      console.log("Сообщение скопировано в буфер обмена:", message);
    });

    if (name !== "" && phone !== "" && dessert !== "") {
      const telegramUsername = "alexeevaruslana";
      const telegramUrl = `https://t.me/${telegramUsername}?text=${encodeURIComponent(
        message.trim()
      )}`;

      // Переход по ссылке
      window.open(telegramUrl, "_blank");
    } else {
      alert("Пожалуйста, заполните все поля!");
    }

    // Закрываем модальное окно
    onClose();
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <p className="modal-title">Внесите данные для заказа</p>
        <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
          <input
            className="modal-input input"
            type="text"
            placeholder="Имя"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <MaskedInput
            className="modal-input input"
            mask={[
              "+",
              "7",
              "(",
              /[0-9]/,
              /[0-9]/,
              /[0-9]/,
              ")",
              " ",
              /[0-9]/,
              /[0-9]/,
              /[0-9]/,
              "-",
              /[0-9]/,
              /[0-9]/,
              "-",
              /[0-9]/,
              /[0-9]/,
            ]}
            placeholder="Тел.: +7(___) ___-__-__"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <select
            className="modal-select input"
            onChange={(e) => setDessert(e.target.value)}
            required
            defaultValue="Вид десерта"
          >
            <option defaultValue="DEFAULT" disabled>
              Вид десерта
            </option>
            <option value="Торт">Торт</option>
            <option value="Бенто торт">Бенто торт</option>
            <option value="Капкейки">Капкейки</option>
          </select>
          <textarea
            className="modal-textarea input"
            placeholder="Комментарии"
            onChange={(e) => setComments(e.target.value)}
            wrap="soft"
            required
          ></textarea>
          <div className="modal-button-container">
            <button className="modal-button" onClick={onClose}>
              Закрыть
            </button>
            <button
              className="modal-button"
               onClick={handleSubmit}
              type="submit"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
