import styles from "./social_links.module.css";

export const SocialLinks = () => {
  return (
    <div className={styles.links}>
      <a href="https://www.instagram.com/ruslanacakes/" target="blank">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
          alt="Instagram"
        />
        <span></span>
      </a>
      <a href="https://t.me/ruslanacakes" target="blank">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png"
          alt="Telegram"
        />
        <span></span>
      </a>
    </div>
  );
};
