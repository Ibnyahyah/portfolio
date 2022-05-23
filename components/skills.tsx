import React from "react";

type DataProps = {
  data: {
    header: string;
    performance: number;
  }[];
};

export default function Skills({ data }: DataProps) {
  return (
    <div className="row gap-1 mb-4">
      {data.map((datas) => {
        return (
          <div
            className="col-6-sm col-6-md col-6-lg col-6-xl mt-3 text-white skills-per-container"
            key={datas.header}
          >
            <div>
              <h3 className="mb-1">{datas.header}</h3>
              <div className="skills-per mb-1 bg-white text-center">
                <div className={datas.header}>
                  <p>{datas.performance}%</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
