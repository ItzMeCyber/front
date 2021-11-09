
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./frontNav1";
import Service from "./frontNav2";
import About from "./frontNav3";
import Contact from "./frontNav4";
import TextMe from "./frontContact";
import ServiceMe from "./frontServices";
import HomeMe from "./frontHome";
import AboutMe from "./frontAbout";
//npm install react-bootstrap@next bootstrap@5.1.1





export default function Nav() {

    return (
        <Router>
            {/*
            <div className="nav">
                <div>
                    <img src="logo512.png" style={{ height: 40, marginLeft: 20 }} />
                </div>
                <div style={{ display: 'flex' }}>
                    <div>
                        <Link to="/" className="navContent"  >Home</Link>
                    </div>


                    <div>
                        <Link to="/service" className="navContent" >Service</Link>
                    </div>
                    <div>
                        <Link to="/about" className="navContent" >About</Link>
                    </div>
                    <div>
                        <Link to="/contact" className="navContent" >Contact</Link>
                    </div>
                </div>
</div>*/}
            <nav className='main-nav'>
                <div class="logo">Cybers</div>
                <label for="btn" class="icon">
                    <span><i class="fas fa-plus" ></i></span>
                </label>
                <input type="checkbox" id="btn" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <label for="btn-1" class="show">Features+</label>
                        <a href="#">Features</a>
                        <input type="checkbox" id="btn-1" />
                        <ul>
                            <li><a href="#">Feature1</a></li>
                            <li><a href="#">Feature2</a></li>
                            <li><a href="#">Feature3</a></li>
                        </ul>
                    </li>
                    <li>
                        <label for="btn-2" class="show">Services+ </label>
                        <a href="#">Services</a>
                        <input type="checkbox" id="btn-2" />
                        <ul>
                            <li> <Link to="/service">Service</Link></li>
                            <li><a href="#">Service2</a></li>
                            <li>
                                <label for="btn-3" class="show">More+</label>
                                <a href="#">More <span class="fa fa-plus"></span></a>
                                <input type="checkbox" id="btn-3" />
                                <ul>
                                    <li><a href="#">Submenu1</a></li>
                                    <li><a href="#">Submenu2</a></li>
                                    <li><a href="#">Submenu3</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>


            <Switch>
                <Route exact path="/">
                    <Home />
                    <HomeMe />
                </Route>
                <Route path="/service">
                    <Service />
                    <ServiceMe />
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

