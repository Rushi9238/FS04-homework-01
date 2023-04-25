function Homepage(){
    return <div style = {{border : "2px solid black",width : "700px",height : "290px" ,backgroundColor : "white",marginLeft : "25%",marginTop : "10%",boxShadow : "0 0 20px black"}}>
        <div style = {{border : "2px solid red",color : "white",marginTop : "20px",height : "60px",backgroundColor : "#cc0000"}}>
            <h2 style = {{width : "250px",display : "flex",justifyContent : "center",alignItems : "center"}}>Koding Made Simple</h2>
            <div style = {{fontSize : "600",fontWeight : "600",width : "300px",marginTop : "-58px",marginLeft : "350px",display : "flex",justifyContent : "space-between",flexDirection : "row",alignItems  :"center"}}>
                <button style = {{ fontSize : "800",fontWeight : "800",border : "none",width : "100px", height : "62px",marginTop : "-10px" ,display : "flex",justifyContent : "center",alignItems : "center",color : "white",backgroundColor :"#aa0000"}}>Bootstrap</button>
                <p>Themes</p>
                <p>Blog</p>

            </div>

        </div>
        <div style = {{border : "none",width : "700px",height :"150px",display : "flex",justifyContent : "center",alignItems : "center",flexDirection : "column",backgroundColor : "#eeeeee",marginTop : "30px"}}>
            <h1 style = {{margin : "0px",marginLeft : "-120px",padding : "0px"}}>Customize Bootstrap Navbar</h1>
             <p style = {{margin : "0px",padding : "0px"}}>Easy way to change navbar background,text and hover link color in bootstrap...</p>
             <p style = {{marginLeft : "430px",paddingTop : "-300px",fontFamily : "Josefin Slab",fontSize : "600",fontWeight : "600"}}>www.kodingmadesimple.com</p>
        </div>

    </div>

}
ReactDOM.render(<Homepage />,document.getElementById('root'))