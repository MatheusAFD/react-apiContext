import { useEffect, useRef, useState } from "react";
import styles from "./assets/Slide.module.css";

export function Slide({ slides }) {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
    else setActive(slides.length - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
    else setActive(0);
  }

  return (
    <>
      <section className={styles.container}>
        <div
          ref={contentRef}
          className={styles.content}
          style={{ transform: `translateX(${position}px)` }}
        >
          {slides.map((slide) => {
            return (
              <div key={slide.id} className={styles.item}>
                {slide.text}
              </div>
            );
          })}
        </div>
        <nav className={styles.nav}>
          <button onClick={slidePrev}>Anterior</button>
          <button onClick={slideNext}>Proximo</button>
        </nav>
      </section>
    </>
  );
}
