import { gsap } from "gsap";
import { useEffect } from "react";

function Header() {
  const style = {
    liStyle: {
      color:"red",
      fontSize:"1.5rem",
      cursor:"pointer"
    },
    ulStyle:{
        textDecoration:"none",
        display:"flex",
        listStyle:"none",
        gap:"2rem"
    },
    logo:{
      color:"white"
    },
    nav:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"0rem 2rem",
        backgroundColor:"#000" ,
        maxWidth:"100%"
    }
  };
  useEffect(()=>{
gsap.from(".nav",{
    y:100,
    opacity:0,
    duration:1,
})
  })
  return (
    <>
      <nav style={style.nav}>
        <h1 className="logo" style={style.logo}>Some Image</h1>
        <ul style={style.ulStyle}>
          <li className="list1" style={style.liStyle}>Home</li>
          <li className="list2" style={style.liStyle}>Contact</li>
          <li className="list3" style={style.liStyle}>Gallery</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
