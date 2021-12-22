import { ProjectData } from "./project-data";

function Project(){
    return(
        <div className="row gap-1">
            {ProjectData.map(({id,image,title,description,stack,source,live})=>(
                <div className="col-6-sm col-4-md col-4-lg" key={id}>
                    <div className="card p-0" style={{height:'390px'}}>
                        <div className="">
                            <img src={image} alt="ibnyahyah_project"/>
                        </div>
                        <div className="p-1">
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <p>Stack:<b> {stack}</b></p>
                            <div className="mt-1">
                                <a className="btn-outlined-green text-green p-0" href={live} target="_blank" rel="noreferrer">Live</a>
                                <a className="btn-outlined-info text-info p-0 ml-1" href={source} target="_blank" rel="noreferrer">Source</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function Projects(){
    return(
        <div className="container" id="project">
            <div className="mb-1">
                <h2 className="font-xxl" style={{textShadow:"1px 3px gray"}}>Projects</h2>
                <p>Below are some website have worked on.</p>
            </div>
            <Project/>
        </div>
    )
}
export default Projects;