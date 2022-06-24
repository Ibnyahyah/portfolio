import React from "react";

type DataProps = {
  data: {
    header: string;
    image: string;
    content: string;
    margin?: string;
  }[];
};

export default function Skills({ data }: DataProps) {
  return (
    <div className="row gap-1 mb-4 mt-2">
      {data.map((datas) => {
        return (
          <div
            className="col-6-sm col-4-md col-4-lg col-4-xl text-white skills-per-container"
            key={datas.header}
          >
            <div className={`card ${datas.header}`}>
              <h3 className="mb-1 text-center">{datas.header}</h3>
              <div className="mb-1 text-center">
                <div className={datas.margin}>
                  <img
                    src={datas.image}
                    alt="whitecoode stacks"
                    className="skills-image"
                  />
                </div>
                <p className="text-left ml-1">{datas.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
