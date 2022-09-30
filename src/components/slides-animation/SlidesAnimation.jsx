import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { SECTION_1 } from "../../assets/fake-data/db";
import "./slideanimation.scss";

const SlidesAnimation = () => {
  const itemRef = useRef();
  const [indexSilde, setIndexSlide] = useState(0);
  const ItemSlide = SECTION_1;

  useEffect(() => {
    const itemFirst = document.getElementsByClassName("slide-item first");
    const itemSecond = document.getElementsByClassName("slide-item second");
    const itemThird = document.getElementsByClassName("slide-item third");

    setTimeout(() => {
      itemRef[indexSilde].classList.replace("first", "second");
      itemRef[indexSilde + 1].classList.replace("second", "third");
      itemRef[indexSilde + 2].classList.replace("third", "first");
      setIndexSlide(indexSilde++)
    }, 2000);
    console.log(itemThird[0].classList);
  }, [indexSilde]);
  //   useEffect(() => {
  //     setTimeout(
  //       () =>
  //       setIndexSlide((prevIndex) =>
  //           prevIndex === SECTION_1.length - 1 ? 0 : prevIndex + 1
  //         ),
  //       2500
  //     );

  //     return () => {};
  //   }, [indexSilde]);
  return (
    <>
      <ul className="slide-animate">
        {/* <li className="slide-item third" >
          <figure>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/2/3/5/b23523f74ca4b55e1774fd8a7b468977.jpg"
              alt=""
            />
          </figure>
        </li> */}
        {SECTION_1.map((item, index) => (
          <li
            className={
              "slide-item " +
              (index + indexSilde === 0
                ? "first"
                : index + indexSilde === 1
                ? "second"
                : "third")
            }
            ref={(ref) => (itemRef[index] = ref)}
            key={index}
          >
            <figure>
              <img src={item.img} alt="" />
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SlidesAnimation;
