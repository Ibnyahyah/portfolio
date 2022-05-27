import Link from "next/link";
import React from "react";
type PropsType = {
  data: {
    url: string;
    image: string;
    content?: string;
  }[];
};

export default function Portfolios(props: PropsType) {
  return (
    <div className="row gap-1 mt-3 mb-5">
      {props.data.map((data, index) => {
        return (
          <div
            className="col-6-sm col-6-md col-6-lg col-6-xl drop-down"
            key={index}
          >
            <div className="display-f align-items-center justify-content-space-between">
              <img src="./icons/Polygon.png" width="20px" alt="whitecoode" />
            </div>
            <img src={data.image} alt="whitecoode" className="mt-1 br-lg" />
            <div className="drop-content text-black">
              <img src={data.image} alt="whitecoode" className="mt-1" />
              <p className="p-1">
                {data.content}{" "}
                <a
                  href={"https://" + data.url}
                  target="_blank"
                  rel="noreferrer"
                  className="active"
                >
                  Go Live
                </a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
