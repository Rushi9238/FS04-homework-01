var card = React.createElement('div',{style : {
    // border : "2px solid red",
    width : "35%",
    height : "70%",
    padding : "20px",
    marginLeft : "25%",
    marginTop : "5%",
    display : "flex",
    justifyContent : "center",
    flexDirection : "column",
    alignItems : "center",
    boxShadow : "0 0 20px black",
    borderRadius : "5px"

}},
React.createElement('div',{style : {
    // border : "2px solid red",
    marginTop : "10%",
    width : "100px",
    height : "100px",
    borderRadius : "50%",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center"



}},[
    React.createElement("img",{
        src :"./profile.jpg",alt:"Avatar",width : "100px",height : "100px"},null),

]),
React.createElement('div',{style : {
    // border : "2px solid red",
    height : "150px",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",



}},[
    React.createElement('h1',{style : {margin : "0px",padding : "0px"}},"Rushikesh Patil"),
    React.createElement('p',{style :{fontFamily:"Poppins"}},"I enjoy drinking a cup of coffee every day"),  
]),
React.createElement('div',{style : {
    // border : "2px solid red",
    width : "280px",
    display : "flex",
    justifyContent : "space-between",
    textAlign : "center",
    alignItems : "center",
    color : "#9b45e4",
    fontWeight : "800",
    fontSize : "800",
    margin : "0px",
    padding : "0px"

}},[
    React.createElement('p',{style : {margin : "0",padding : "0"}},"150"),
    React.createElement('p',{style : {margin : "0",padding : "0"}},"100"),
    React.createElement('p',{style : {margin : "0",padding : "0"}},"150k"),

]),
React.createElement('div',{style : {
    // border : "2px solid red",
    width : "295px",
    // height : "50px",
    display : 'flex',
    justifyContent : "space-between",
    textAlign : "center",

    fontSize : "100",
    fontWeight : "100",
    // textAlign : "center",
    alignItems : "center",
    // margin : "0px",
    // padding : "0px"
    
}},[
    React.createElement('p',{style : {margin : "0",padding : "0"}},"Posts"),
    React.createElement('p',{style : {margin : "0",padding : "0"}},"Followings"),
    React.createElement('p',{style : {margin : "0",padding : "0"}},"Followers"),

]),
React.createElement('div',{style : {
    // border : "2px solid red",
    width : "300px",
    height : "100px",
    display : 'flex',
    justifyContent : "space-between",
    alignItems : "center",
    

}},[
    
    React.createElement('button',{style : {width : "130px",height : "50px",backgroundColor : "#9b45e4",borderRadius : "5px",fontSize : "800",fontWeight : "800",color : "white",display : "flex",justifyContent : "center",alignItems : "center",border : "none"}},"FOLLOW"),
    React.createElement('button',{style : {width : "130px",height : "50px",backgroundColor : "#e13a9d",borderRadius : "5px",fontSize : "800",fontWeight : "800",color : "white",display : "flex",justifyContent : "center",alignItems : "center",border : "none"}},"MESSAGE"),

]),

)
ReactDOM.render(card,document.getElementById('root'))