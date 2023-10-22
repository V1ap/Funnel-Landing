import styles from "./App.module.scss";
import { Suspense } from "react";
import ProomoFrame from "./frames/PromoFrame/PromoFrame";
import { useState } from "react";
import PhoneFrame from "./frames/PhoneFrame/PhoneFrame";

type TFrames = "promo" | "tel" | "end";

function App() {
  const [frame, setFrame] = useState<TFrames>("tel");

  switch (frame) {
    case "promo":
      return (
        <main className={styles.main}>
          <Suspense fallback={"Loading"}>
            <ProomoFrame setNextPage={() => setFrame("tel")} />
          </Suspense>
        </main>
      );

    case "tel":
      return (
        <main className={styles.main}>
          <PhoneFrame
            onSuccess={() => setFrame("end")}
            onCancel={() => setFrame("promo")}
          />
        </main>
      );
  }
}

export default App;
