import styles from "./App.module.scss";
import { Suspense } from "react";
import ProomoFrame from "./frames/PromoFrame/PromoFrame";
import { useState } from "react";

type TFrames = "promo" | "tel" | "end";

function App() {
  const [frame, setFrame] = useState<TFrames>("promo");

  switch (frame) {
    case "promo":
      return (
        <main className={styles.main}>
          <Suspense fallback={"Loading"}>
            <ProomoFrame setNextPage={() => setFrame("tel")} />
          </Suspense>
        </main>
      );

    // default:
    //   return (
    //     <main className={styles.main}>
    //       <Suspense fallback={"Loading"}>
    //         <ProomoFrame setNextPage={() => setFrame("tel")} />
    //       </Suspense>
    //     </main>
    //   );
  }
}

export default App;
