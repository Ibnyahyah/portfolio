import React from "react";

type DataProps = {
  data: {
    image: string;
    header: string;
    content: string;
  }[];
};

export default function Services({ data }: DataProps) {
  return (
    <div className="row">
      {data.map((datas) => {
        return (
          <div
            className="col-6-sm col-6-md col-6-lg col-6-xl mt-3"
            key={datas.header}
          >
            <div className="card text-center bg-white pt-4 pb-4">
              <div className="services-avatar mb-1">
                <img src={datas.image} alt="Whitecoode" width="50px" />
              </div>
              <h3 className="mb-1">{datas.header}</h3>
              <p>{datas.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
