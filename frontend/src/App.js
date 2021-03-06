import './App.css';

// Font
import './contents/fonts/AppleSDGothicNeo.css';
import './contents/fonts/Montserrat_use.css';

import { Link } from 'react-router-dom';
import logo from './contents/logo/logo.png';
import instagram from './contents/icons/instagram.png';
import blog from './contents/icons/naver_blog.png';
import { createContext, useState } from "react";
import { Switch, Route } from "react-router-dom";

// Component
import MainRouter from "./router/MainRouter";
import FreeRouter from "./router/FreeRouter";
import StudioRouter from "./router/StudioRouter";
import HelpRouter from "./router/HelpRouter";
import HyeongSeong from "./component/Profile/HyeongSeong";
import SeungBin from "./component/Profile/SeungBin";
import AdminRouter from './router/AdminRouter';
import SuSan from './component/Profile/SuSan';

import ScrollToTop from "./router/ScrollTop";

export const ServerContext = createContext(null);
export const AdminContext = createContext(null);
function App() {
    const [admin, __setAdmin] = useState(() => JSON.parse(sessionStorage.getItem("authAOP")));
    function setAdmin(data) {
        sessionStorage.setItem("authAOP",JSON.stringify(data));
        __setAdmin(data);
    }
    //const __server = 'http://localhost:3004';
    const __server = 'https://server.aopstudio.com';
  
    return (
        <AdminContext.Provider value={{admin, setAdmin}}>
            <ServerContext.Provider value={__server}>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/" component={MainRouter} />
                    <Route path="/program" component={MainRouter} />
                    <Route path="/studio" component={StudioRouter} />
                    <Route path="/free" component={FreeRouter} />
                    <Route path={["/help","/faq"]} component={HelpRouter} />
                    <Route path="/hyeongseong" component={HyeongSeong} />
                    <Route path="/seungbin" component={SeungBin} />
                    <Route path="/susan" component={SuSan} />
                    <Route path="/admin" component={AdminRouter}/>
                </Switch>
                <footer>
                    <div className="SNS">
                        <a href="https://www.instagram.com/aoppt_sunae/">
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a href="https://blog.naver.com/hyenggoo1 ">
                            <img src={blog} alt="blog" />
                        </a>
                    </div>
                
                    <div className="map">
                        <div>
                            <p>????????? ???</p>
                            <ul>
                                <li>
                                    <Link to="/studio">???????????? ??????</Link>
                                </li>
                                <li>
                                    <Link to="/program">????????????</Link>
                                </li>
                                <li>
                                    <Link to="/faq">?????? ?????? ??????</Link>
                                </li>
                                <li>
                                    <Link to="/help">????????????</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p>????????????</p>
                            <ul>
                                <li>
                                    <Link to="/seungbin">?????????</Link>
                                </li>
                                <li>
                                    <Link to="/hyeongseong">?????????</Link>
                                </li>
                                <li>
                                    <Link to="/susan">?????????</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <address>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <p>????????????</p>
                        <p>????????? ????????????: 614-53-00713 | ??????: ?????????</p>
                        <p>????????? ????????? ????????? ????????????200?????? 34 Ko Fo Mo ?????? 205, 206???</p>
                        <h2 className="en">Copyright ?? AOP All Rights Reserved.<br/>Made By 83percent.</h2>
                    </address>
                </footer>
                <nav className="top-button" onClick={() => window.scrollTo(0, 0)}>
                    <i className="material-icons">keyboard_arrow_up</i>
                    <p>TOP</p>
                </nav>
            </ServerContext.Provider>
        </AdminContext.Provider>
    );
}

export default App;
