const Data = [
    {
        icon:'fab fa-whatsapp',
        text:'+234-812-941-8741',
        url:'https://wa.me/+2348129418741',
        bg:'bg-green',
    },
    {
        icon:'far fa-envelope',
        text:'Yahyahridwan665@gmail.com',
        url:'mailto:yahyahridwan665@gmail.com',
        bg:'bg-red',
    },
    {
        icon:'fab fa-github',
        text:'Ibnyahyah',
        url:'https://www.github.com/Ibnyahyah',
        bg:'bg-black'
    }
]

const Contact =()=>{
    return(
        <div className="container mt-2">
            <h2 className="font-4 font-xl mb-1 text-blue">Contact Me:</h2>
            <div>
                <div className="col-sm-6">
                    {Data.map(({icon,url,bg, text})=>{
                        return (
                            <p className="mt-2" key={icon}>
                                <a href={url} target="_blank" rel="noreferrer">
                                    <i className={`${icon} ${bg} text-white p-1 br-full`}></i>
                                </a> : {text}
                            </p>
                        )
                    })}
                </div>
                <div className="col-sm-6"></div>
            </div>
        </div>
    )
}
export default Contact;