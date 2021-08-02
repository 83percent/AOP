import './App.css';

// Font
import './contents/fonts/AppleSDGothicNeo.css';
import './contents/fonts/Montserrat_use.css';

import { Link } from 'react-router-dom';
import logo from './contents/logo/logo.png';
import { createContext } from "react";
import { Switch, Route } from "react-router-dom";

// Component
import MainRouter from "./router/MainRouter";
import FreeRouter from "./router/FreeRouter";
import StudioRouter from "./router/StudioRouter";
import HelpRouter from "./router/HelpRouter";
import HyeongSeong from "./component/Profile/HyeongSeong";
import SeungBin from "./component/Profile/SeungBin";

import ScrollToTop from "./router/ScrollTop";
export const ServerContext = createContext(null);

function App() {
  const __server = 'http://localhost:3002';
  
  return (
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
        </Switch>
        <footer>
            <div className="SNS">
                <a href="/">
                    <i className='fab fa-instagram'></i>
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
                            <Link to="/help">상담문의</Link>
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
                    </ul>
                </div>
            </div>
            <address>
                <img src={logo} alt="logo" />
                <p>에이오피</p>
                <p>사업자 등록번호: 614-53-00713 | 대표: 안승빈</p>
                <p>경기도 성남시 분당구 황새울로200번길 34 Ko Fo Mo 빌딩 205, 206호</p>
                <h2 className="en">Copyright © AOP All Rights Reserved.<br/>Made By 83percent.</h2>
            </address>
        </footer>
    </ServerContext.Provider>
  );
}

export default App;
