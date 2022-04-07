function Footer(){
    return(
        <div className="container mt-2 pt-5 pb-2">
            <footer>
                <hr/>
                <p className="text-center mt-1 mb-2">&copy;Copyright {new Date().getFullYear()}</p>
            </footer>
        </div>
    )
}
export default Footer