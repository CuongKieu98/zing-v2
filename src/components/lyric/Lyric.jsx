import React, { useRef } from "react";
import { useEffect } from "react";
import "./lyric.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Mousewheel,Autoplay } from "swiper";

const Lyric = ({ data, tracks }) => {
  const lrcRef = useRef([]);
  const ulRef = useRef(null);
  const swiperRef = useRef(null)

  return (
    <div className="lyric">
      <div className="column is-multiline">
        <div className="column is-full">
          <ul className="lyric__content" ref={ulRef}>
            {/* {data &&
              data.map((item, index, arr) => {
                const prevTime = arr[
                  index + 1 >= arr.length ? index : index + 1
                ][0].time.slice(0, -3);
                if (lrcRef.current[index + 2]?.className.includes("current")) {
                  lrcRef.current[index].scrollIntoView({
                    behavior: "smooth",
                  });
                }
                return (
                  <li
                    className={
                      "items " +
                      (item[0].time.slice(0, -3) <= tracks.currentTime &&
                      prevTime > tracks.currentTime
                        ? "current"
                        : "")
                    }
                    key={index}
                    ref={(ref) => (lrcRef.current[index] = ref)}
                  >
                    {item[0].lyric}
                  </li>
                );
              })} */}
            <Swiper
              ref={swiperRef}
              direction={"vertical"}
              slidesPerView={5}
              spaceBetween={5}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
      
              modules={[Mousewheel]}
              className="mySwiper"
            >
              {data &&
                data.map((item, index, arr) => {
                  const prevTime = arr[
                    index + 1 >= arr.length ? index : index + 1
                  ][0].time.slice(0, -3);
                  if (lrcRef.current[index + 2]?.className.includes("current")) {
                    swiperRef?.current?.swiper.slideTo(index)
                  }
                  return (
                    <SwiperSlide  key={index}>
                      <li
                        className={
                          "items " +
                          (item[0].time.slice(0, -3) <= tracks.currentTime &&
                          prevTime > tracks.currentTime
                            ? "current"
                            : "")
                        }
                        key={index}
                        ref={(ref) => (lrcRef.current[index] = ref)}
                      >
                        {item[0].lyric}
                      </li>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lyric;
