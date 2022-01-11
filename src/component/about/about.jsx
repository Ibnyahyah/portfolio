import {JourneyData} from './journey-data';

function About(){
    return(
        <div className="container mt-5 mb-3" id="about">
            <div>
                <h3 className="font-xxl" style={{textShadow:"1px 3px gray"}}>About</h3>
                <p className="mt-2">I started my journey the tech industry lately around Q4 2019 where I learn my first stack (Html,css).
                    Its has been a tough time but the tough time was over come. I got admitted into to <a href="/">Malhub</a> where i did my first Job as a developer.
                    I Started learning React js at Q1 2021 which i did alot of awesome projects.
                </p>
                <div className="row mt-3  gap-1">
                    {JourneyData.map(({id,year,content})=>(
                        <div className="col-6-xs col-3-md col-3-lg" key={id}>
                            <div className="card bg-gray-light-8">
                                <div className="p-1">
                                    <h3>{year}</h3>
                                    <p>{content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default About;