import { ProjectData } from "./project-data";

function Project() {
  return (
    <div className="row gap-1">
      {ProjectData.map(
        ({ id, image, title, description, stack, source, live }) => (
          <div className="col-6-sm col-4-md col-4-lg" key={id}>
            <div className="card p-0" style={{ height: "390px" }}>
              <div className="card-container">
                <img src={image} alt="ibnyahyah_project" />
              </div>
              <div className="p-1">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>
                  Stack:<b> {stack}</b>
                </p>
                <div className="mt-1">
                  <a
                    className="btn-outlined-green text-green p-0"
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIEW
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

function Projects() {
  return (
    <>
      <div className="container" id="project">
        <div className="mb-1">
          <h2 className="font-xxl" style={{ textShadow: "1px 3px gray" }}>
            Projects
          </h2>
          <p>Below are some website have worked on.</p>
        </div>
        <Project />
      </div>
      <div className="project-link text-center mt-2 text-blue">
        <a href="http://github.com/ibnyahyah" target="_blank" rel="noreferrer">
          View More
        </a>
      </div>
    </>
  );
}
export default Projects;
