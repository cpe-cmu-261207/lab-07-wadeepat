const Contact=()=>{
    return(
        <div style={{padding:20}}>
            <h2 align = "center">Contact</h2>
            <form>
                <p>
                    <label >First name:</label>
                    <input type="text"/>
                </p>
                <p>
                    <label >Last name:</label>
                    <input type="text"/>
                </p>
                <p>
                     <label >email:</label>
                    <input type="text"/>
                </p>
                <p>
                    <label >Message:</label>
                    <input type="text"/>
                </p>
                <button>submit</button>

            </form>
            <p align = "center">
                <a href="/portfolio">Back</a>    
            </p>
        </div>
    )
}
export default Contact