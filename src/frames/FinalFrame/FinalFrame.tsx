import CloseIcon from "src/assets/icons/CloseIcon";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

interface IFinalFrameProps {
  onClose: () => void;
}

const FinalFrame: React.FC<IFinalFrameProps> = ({ onClose }) => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsOpened(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.final}>
      <article
        className={`${styles.final__card} ${
          isOpened ? styles._isOpened : null
        }`}
      >
        <h1 className={styles.final__header}>ЗАЯВКА ПРИНЯТА</h1>
        <p className={styles.final__text}>
          Держите телефон под рукой. <br /> Скоро с Вами свяжется наш менеджер.
        </p>
      </article>
      <button className={styles.final__btnClose} onClick={onClose}>
        <CloseIcon />
      </button>
    </section>
  );
};

export default FinalFrame;
