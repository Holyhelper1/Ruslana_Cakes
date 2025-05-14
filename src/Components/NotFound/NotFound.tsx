export const NotFound: React.FC = () => {
  return (
    <>
      <div className="not-found-container">
        <div className="not-found-header-color"></div>
        <hr className="not-found-hr"></hr>
        <h1 className="not-found-title">404 - Страница не найдена</h1>
        <p className="not-found-message">
          Извините, но запрашиваемая вами страница не существует.
        </p>
        <a className="not-found-link" href="/">
          Вернуться на главную
        </a>
        <hr className="not-found-hr"></hr>
      </div>
    </>
  );
};
