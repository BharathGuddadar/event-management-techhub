import '../css/footer.css'
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
interface footprobs{
    eventname:string;
    venuetime:string;
}
function Footer({eventname,venuetime}:footprobs) {
  return (
    <div className="footer">
        <div className="foothead">
            <div>
                <h4>{venuetime}</h4>
            <h3>{eventname}</h3>
            </div>
            
            <button><span >share</span></button>
           
        </div>
            
        <div className="footbody">
          <div className="mail">
            <div className="logo"></div>
            <h3>Email:</h3>
            <Link to="url">sample@gmail.com</Link>
          </div>  
          <div className="link">  
            <div className="link1">
                <h3>Website Index And Links</h3>
                <ul>
                    <Link to="url">Home</Link><br></br>
                    <Link to="url">About us</Link><br></br>
                    <Link to="url">Upcomming Events</Link><br></br>
                    
                </ul>
            </div>
            <div className="link2">
                <h3>Our Social Network</h3>
                <div className="imag">
                <Link to="https://www.twitter.com/_techhub/">
                <FaSquareXTwitter /></Link><br></br>
                    <Link to="https://www.instagram.com/codeshack_community?igsh=MzRvcmN0a2JnNWI=">
                    <FaInstagramSquare /> </Link><br></br>
                    <Link to="https://discord.gg/9C5r3Yb4">
                    <FaDiscord /> </Link><br></br>
                    <Link to="https://www.linkedin.com/company/techhub-community">
                    <FaLinkedin /></Link><br></br>
                  </div>    

                
            </div>
          </div>
        </div>
        <div className="foottail">
            <a href="url" >@copyright</a>
            <p> CODESHACK All right Reserved</p>
        </div>
    </div>
  )
}

export default Footer