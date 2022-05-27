import Link from "next/link";
import React from "react";
type PropsType = {
  data: {
    url: string;
    image: string;
    header: string;
  }[];
};

export default function Portfolios(props: PropsType) {
  return (
    <div className="row gap-1 mt-3">
      {props.data.map((data, index) => {
        return (
          <div className="col-6-sm col-6-md col-6-lg col-6-xl" key={index}>
            <div className="card bg-white p-0 pt-0 br-sm text-black">
              <img src={data.image} alt="whitecoode" />
              <div className="content p-1 pb-3">
                <h4 className="font-regular">{data.header}</h4>
                <p className="mt-1">
                  By <i>whitecoode</i>
                </p>
                <Link
                  href={"blog/" + data.url}
                  title={`Continue reading ${data.header}`}
                >
                  <div
                    className="display-f align-items-center"
                    style={{ float: "right", cursor: "pointer" }}
                  >
                    Continue Reading{" "}
                    <img
                      src="./icons/arrow-right.png"
                      alt="whitecoode"
                      width={20}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
