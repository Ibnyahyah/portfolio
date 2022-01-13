function TopSection(){
    return(
        <div className="container mt-5" style={{marginTop:"250px", height:'60vh'}}>
            <div>
                <h1 className="font-5 font-xxl text-blue" style={{textShadow:"1px 3px gray"}}>Hi!</h1>
                <p className="font-lg">My name is Ridwanullahi Yahyah.</p>
            </div>
            <div className="mt-2">
                <p>I am here to satisfy your needs in <b>Front-End</b> development.</p>
                <p>Below are some tips about my Stacks and Projects. Download My <a href="https://docs.google.com/document/d/1xxhSJffJCym8ZaGXSBUcnOwgNAnav3ZOhQeH_aRNmpo/edit?usp=sharing" target="_blank" rel="noreferrer" className="text-blue">Resume</a>.</p>
            </div>
            <a href="#project" className="btn-outlined-blue mt-3 text-blue">Learn more</a>
        </div>
    )
}
export default TopSection;