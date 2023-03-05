import "./Header.css"
import Navigation from "./Navigation"
import Banner from "./Banner"



export default function Header(){
    return (
        <div className="header">
          <h1>LILOVEVE</h1>
          <Navigation/>
          <Banner/>
        </div>
    )
}


