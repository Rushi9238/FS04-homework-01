var card = React.createElement('div',{style : {
    // border:'2px solid red',
    width :'350px',
    heigth : "300px",
    padding : '20px',
    display:'flex',
    flexDirection : 'column',
    justifyContent:'center',
    alignItems:'center',
    textAlign : 'center',
    marginLeft:'35%',
    marginTop:'3%',
    borderRadius : '8px',
    boxShadow:'0 0 10px black',
    backgroundColor : "#e3e2e0"

}},
React.createElement('div',{style : {
    width : "300px",
    heigth : "300px",
    // border : "2px solid red",
    backgroundColor : "white",
    borderRadius : "8px"
}},[
React.createElement(
"img",
{src : "./profile.jpg",width : "100%",heigth : "100%"},null),
React.createElement('h1',null,"RISHAV JAIN"),
React.createElement('p',null,"UI/UX Deginer"),
React.createElement('div',{style : {
    // border : "2px solid red",
    width : "100%",
    display : "flex",
    justifyContent : "space-around",
    alignItems : "center",
    // borderRadius : "8px"

}},[
React.createElement('p',null,"26"),
React.createElement('p',null,"10"),
React.createElement('p',null,"100k"),
]),
React.createElement('div',{style : {
    width : "100%",
    // heigth : "60px",
    display : "flex",
    justifyContent : "space-around",
    // border : "2px solid red",
    alignItems : "center",
    // borderRadius : "8px"

}},[
React.createElement('p',null,"Shoot"),
React.createElement('p',null,"Folowing"),
React.createElement('p',null,"Followers"),
])


])
)
ReactDOM.render(card,document.getElementById('root'))