import Avatar from "../../assets/About/Avatar.png";
import aboutCake from "../../assets/About/About-cake.png";
export const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-tittle">Обо мне</h2>
      <div className="about-content">
        <div className="about-content-wrapper">
          <div className="about-text-container">
            <h4>Привет, меня зовут Руслана!</h4>
            <p>
              Вот уже два года я создаю авторские торты, наполненные любовью к
              кулинарному искусству.
            </p>
            <p>
              Я внимательно учитываю все ваши пожелания и особенности праздника,
              чтобы торт стал его вкусным центром. В работе использую только
              лучшие ингредиенты: свежие ягоды, натуральные сливки, отборный
              шоколад. Каждое изделие оформляется вручную – с любовью, креативом
              и вниманием к деталям, ведь я верю, что именно мелочи создают
              совершенство.
            </p>
            <p>
              Мои десерты – это не просто работа, а частичка душевного тепла,
              которую я вкладываю в каждую приготовленную сладость. Я постоянно
              совершенствую свои навыки, чтобы дарить вам не просто десерты, а
              маленькие произведения вкуса и красоты.
            </p>

            <p className="about-text-last-tittle">
              Готова воплотить ваши сладкие мечты <br></br> в реальность!
            </p>
          </div>
          <img src={Avatar} alt="Avatar" 
          // width={267} 
          // height={370} 
          />
        </div>
        <div className="about-image-container">
          {/* <img src={Avatar} alt="Avatar" width={267} height={370} /> */}
          <div className="about-image-cake-container">
            <img src={aboutCake} alt="aboutCacke" 
            // width={265} 
            // height={250} 
            />
            <p>
              Подписывайся в соцсетях – <br></br> @ruslanacakes
            </p>
            <a href="https://t.me/alexeevaruslana" target="_blank">
              <button className="more-button">Написать </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
