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
import Trainer7 from './component/Profile/Trainer7';


import ScrollToTop from "./router/ScrollTop";
import SeongHyun from './component/Profile/SeongHyun';

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
                    <Route path="/seonghyun" component={SeongHyun} />
                    <Route path="/seunghwan" component={Trainer7} />
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
                            <p>사이트 맵</p>
                            <ul>
                                <li>
                                    <Link to="/studio">스튜디오 시설</Link>
                                </li>
                                <li>
                                    <Link to="/program">프로그램</Link>
                                </li>
                                <li>
                                    <Link to="/faq">자주 묻는 질문</Link>
                                </li>
                                <li>
                                    <Link to="/help">문의하기</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p>트레이너</p>
                            <ul>
                                <li>
                                    <Link to="/seungbin">안승빈</Link>
                                </li>
                                <li>
                                    <Link to="/hyeongseong">전형성</Link>
                                </li>
                                <li>
                                    <Link to="/susan">원수산</Link>
                                </li>
                                <li>
                                    <Link to="/seonghyun">김성현</Link>
                                </li>
                                <li>
                                    <Link to="/seunghwan">윤승환</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <address>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <p>에이오피</p>
                        <p>사업자 등록번호: 614-53-00713 | 대표: 안승빈</p>
                        <p>경기도 성남시 분당구 황새울로200번길 34 Ko Fo Mo 빌딩 205, 206호</p>
                        <h2 className="en">Copyright © AOP All Rights Reserved.<br/>Made By 83percent.</h2>
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
