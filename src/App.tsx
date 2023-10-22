import styles from "./App.module.scss";
import { Suspense } from "react";
import ProomoFrame from "./frames/PromoFrame/PromoFrame";
import { useState } from "react";
import PhoneFrame from "./frames/PhoneFrame/PhoneFrame";
import FinalFrame from "./frames/FinalFrame/FinalFrame";
import Loader from "./components/Loader/Loader";

type TFrames = "promo" | "tel" | "final";

function App() {
  const [frame, setFrame] = useState<TFrames>("promo");

  const handleToPromoFrame = () => setFrame("promo");
  const handleToPhoneFrame = () => setFrame("tel");
  const handleToFinalFrame = () => setFrame("final");

  switch (frame) {
    case "promo":
      return (
        <main className={styles.main}>
          <Suspense
            fallback={
              <main className={styles.main}>
                <Loader />
              </main>
            }
          >
            <ProomoFrame setNextPage={handleToPhoneFrame} />
          </Suspense>
        </main>
      );

    case "tel":
      return (
        <main className={styles.main}>
          <PhoneFrame
            onSuccess={handleToFinalFrame}
            onCancel={handleToPromoFrame}
          />
        </main>
      );

    case "final":
      return (
        <main className={styles.main}>
          <FinalFrame onClose={handleToPromoFrame} />
        </main>
      );
  }
}

export default App;
