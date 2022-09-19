import React, { useRef } from "react";
import { useEffect } from "react";
import "./lyric.scss";

const Lyric = ({ data, tracks }) => {
  const lrcRef = useRef([]);

  return (
    <div className="lyric">
      <div className="column is-multiline">
        <div className="column is-full">
          <ul className="lyric__content">
            {data &&
              data.map((item, index, arr) => {
                const prevTime = arr[
                  index + 1 >= arr.length ? index : index + 1
                ][0].time.slice(0, -3);
                if (
                    lrcRef.current[index + 2]?.className.includes(
                      "current"
                    )
                  ) {
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
              })}
            {/* {data && data.reduce((reduced,item,i) =>{
                i && (reduced[i-1]) 
              },[])} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lyric;
