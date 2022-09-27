import { memo } from "react";
import { Parallax } from "react-parallax";

import { Navigation } from "../../components/Navigation";
import { Destach } from "../../components/Destach";
import { ParallaxPage } from "../../components/Parallax";

import styles from "./styles.module.scss";

const image1 = "/image/bg_header.jpg";
const image4 = "/image/orquidea_bg.jpg";

export function Home() {
   return (
      <section>
         <Navigation />

         <section style={{ textAlign: "center" }}>
            <Parallax bgImage={image1} strength={400}>
               <div style={{ height: 600 }}>
                  <div className={styles.hero__parallax}>
                     <h2>Orquidário Iara</h2>
                  </div>
               </div>
            </Parallax>
            <Destach />
            <div style={{ height: "50vh" }}></div>
         </section>

         <ParallaxPage />
      </section>
   );
}

export default memo(Home);
