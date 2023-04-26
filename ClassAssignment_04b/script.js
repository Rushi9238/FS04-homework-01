function Card(){
    return <div style = {{border : "2px solid gray",width : "500px",height : "500px" ,marginLeft : '35%',background: 'rgb(238,174,202)' ,background: 'linear-gradient(326deg, rgba(241,150,191,1) 13%, rgba(217,177,209,0.9556197478991597) 37%, rgba(213,179,200,1) 71%, rgba(148,230,233,0.8995973389355743) 100%)',marginTop : "3%",borderRadius : "5px"}}>
        <div style = {{width : "80%",height:"90%",display : "flex",justifyContent : "center",flexDirection : "column",alignItems : "center",marginLeft : "10%",marginTop : "6%",border:'1px solid black',borderRadius : "15px"}}>
            <img src = "./profile.jpg" width = "400px" height = "52%" />
            <div style = {{display : "flex",justifyContent : "center",alignItems: "center",height:"12%"}}>
                <h1 style = {{margin : "5px",padding : "0px"}}>RUSHIKESH PATIL</h1>
            </div>
            <div style = {{display : "flex",height:"12%",justifyContent : "center",alignItems: "center",opacity:'.6',fontSize : "1.3rem"}}>
                <p>UI/UX Designer</p>
            </div>
            <div style = {{width : "100%",height:"9%",display : "flex",justifyContent : "space-around", flexDirection : "row",alignItems : "end",fontSize : "1.6rem"}}>
                <p style = {{margin : "0px",padding : "0px"}}>20</p>
                <p style = {{margin : "0px",paddingRight : "30px"}}>10</p>
                <p style = {{margin : "0px",padding : "0px"}}>10k</p>

            </div>
            <div style = {{width : "100%",height:"15%",display : "flex",justifyContent : "space-around", flexDirection : "row",alignItems : "start",fontSize : "1.3rem",fontWeight : "900",opacity:'.6'}}>
            <p style = {{margin : "0px",padding : "0px"}}>Posts</p>
            <p style = {{margin : "0px",padding : "0px"}}>Followings</p>
            <p style = {{margin : "0px",padding : "0px"}}>Followers</p>

            </div>

        </div>

    </div>
}

ReactDOM.render(<Card />,document.getElementById('root'))