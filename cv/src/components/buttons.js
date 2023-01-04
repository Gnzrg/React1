export default function Button({text, status, func}){
    const styleObj = {
        padding : "15px",
        borderRadius: "10px",
        backgroundColor: status ? "green" : "red",
        color:"white",
        border:"none"
    }
    return(
      <button style={styleObj} onClick={func}>
        {text}
        </button>
    )
}