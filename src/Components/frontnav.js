
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./frontNav1";
import Blog from "./frontNav2";
import About from "./frontNav3";
import Contact from "./frontNav4";
import TextMe from "./frontContact";
import { makeStyles } from "@material-ui/core";
import BlogMe from "./frontBlogs";
import HomeMe from "./frontHome";
import AboutMe from "./frontAbout";
//npm install react-bootstrap@next bootstrap@5.1.1



const useStyles = makeStyles({
    nav: {
        display: "flex",
        flexDirection: 'row',
        justifyContent:'space-between',
        fontSize: "x-large",
        backgroundColor: '',
        height: "8vh",
        alignItems: "center",
        background: "lightblue",
        boxShadow: "inset 0 0 15px #000060",
        padding: "10px",


export default function Nav() {
    const classes = useStyles()
    return (
        <Router>

            <div className={classes.nav}>
                <div>
                    <img src="logo512.png" style={{ height: 40,marginLeft:20 }} />
                </div>
                <div style={{display:'flex'}}>
                    <div>
                        <Link to="/" className="navContent"  >Home</Link>
                    </div>


                    <div>
                        <Link to="/blog" className="navContent" >Blog</Link>
                    </div>
                    <div>
                        <Link to="/about" className="navContent" >About</Link>
                    </div>
                    <div>
                        <Link to="/contact" className="navContent" >Contact</Link>
                    </div>
                </div>
            </div>


            <Switch>
                <Route exact path="/">
                    <Home />
                    <HomeMe />
                </Route>
                <Route path="/blog">
                    <Blog />
                    <BlogMe />
                </Route>
                <Route path="/about">
                    <About />
                    <AboutMe />
                </Route>
                <Route path="/contact">
                    <Contact />
                    <TextMe />
                </Route>
            </Switch>
        </Router>
    );
}

