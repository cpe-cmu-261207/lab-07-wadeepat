const Home = () => { 
    return (
        <div style={{padding:20}}>
            <h2 align ="center">My Profile</h2>
            <div id ='block'>  
                
                <h3>Wadeepat Lertwatanawanich</h3>
                <h4>Student at CMU</h4>
                <p>wadeepas_l@cmu.ac.th</p>

                <p><b>Nickname:</b> Liw</p>
                <p><b>Date of Birth:</b> 25 July 2001</p>
                <p><b>Blood Group:</b> A</p>
                <p><b>Faculty:</b> Engineering</p>
            </div>
            <p align = "center">
                    <a style={{padding:20}}href="/portfolio/gallery">Gallery</a>   
                    <a style={{padding:20}}href="/portfolio/contact">Contact</a>
                    <a style={{padding:20}}href="/">HomePage</a> 
            </p>
        </div>
    )
}

export default  Home
