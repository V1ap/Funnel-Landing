import styles from "./styles.module.scss";
import Video from "../../assets/video/video.mp4";
import QrCode from "../../assets/img/qr1.png";
import { useEffect, useState } from "react";

interface IPromoFrameProps {
  setNextPage: () => void;
}

const ProomoFrame: React.FC<IPromoFrameProps> = ({ setNextPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className={styles.promo}>
      <video
        autoPlay
        muted
        loop
        src={Video}
        className={styles.promo__video}
      ></video>
      <article
        className={styles.promo__card}
        style={isOpen ? {} : { transform: "translateX(250px)" }}
      >
        <h2 className={styles.promo__header}>
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
        </h2>
        <img src={QrCode} alt="Qr-код" className={styles.promo__img} />
        <p className={styles.promo__qrCodeText}>
          Сканируйте QR-код или нажмите ОК
        </p>
        <button className={styles.promo__btn} onClick={setNextPage}>
          ОК
        </button>
      </article>
    </section>
  );
};

export default ProomoFrame;
