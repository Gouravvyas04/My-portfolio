import Mode from "./Mode"
const Nav = () => {
    return(
        <div className="nav">
           <div className="nav-main">
                <div className="elements">
                        <li className="resume"><img src="./assets/resume.png"></img></li>
                        <li className="linkedin"><img src="./assets/linkedin.png"></img></li>
                    <li className="git"><img src="./assets/github.png"></img></li>
                    <li className="mode"><Mode></Mode></li>
                </div>
           </div>
        </div>
    )
}
export default Nav