import {TestimonyData} from './testimony-data';

function Testimony(){
    return(
        <div className="mt-3 mb-3 bg-gray-light-9 pt-3 pb-3">
            <div className='container'>
                <h3 className="font-xxl" style={{textShadow:"1px 3px gray"}}>Testimony</h3>
                <p className="mt-1">Among what people talk about me:</p>
                <div className="row mt-3  gap-1">
                    {TestimonyData.map(({id,name,content})=>(
                        <div className="col-12-xs col-3-md col-3-lg" key={id}>
                            <div className="card bg-white" style={{height:'100px'}}>
                                <div className="p-1">
                                    <i>"{content}"</i>
                                    <h3 className="font-1 font-sm text-gray mt-1" style={{float:'right'}}>_{name}_</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Testimony;