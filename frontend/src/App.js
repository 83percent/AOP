import './App.css';

// Font
import './contents/fonts/AppleSDGothicNeo.css';
import './contents/fonts/Montserrat_use.css';

import { Link } from 'react-router-dom';
import logo from './contents/logo/logo.png';
import { createContext } from "react";
import { Switch, Route } from "react-router-dom";

import MainRouter from "./router/MainRouter";
import HyeongSeong from "./component/Profile/HyeongSeong";
import SeungBin from "./component/Profile/SeungBin";

export const ServerContext = createContext(null);

function App() {
  const __server = 'http://localhost:3002';
  return (
    <ServerContext.Provider value={__server}>
        <Switch>
            <Route exact path="/" component={MainRouter} />
            <Route path="/hyeongseong" component={HyeongSeong} />
            <Route path="/seungbin" component={SeungBin} />
        </Switch>
        <footer>
            <div className="SNS">
                <a href="/">
                    <i class='fab fa-instagram'></i>
                </a>
            </div>
        
            <div className="map">
                <div>
                    <p>사이트 맵</p>
                    <ul>
                        <li>
                            <Link>스튜디오 소개</Link>
                        </li>
                        <li>
                            <Link>스튜디오 시설</Link>
                        </li>
                        <li>
                            <Link>프로그램</Link>
                        </li>
                        <li>
                            <Link>자주 묻는 질문</Link>
                        </li>
                        <li>
                            <Link>문의하기</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>트레이너</p>
                    <ul>
                        <li>
                            <Link>안승빈</Link>
                        </li>
                        <li>
                            <Link>전형성</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <address>
                <img src={logo} alt="logo" />
                <p>에이오피</p>
                <p>사업자 등록번호: 120-88-01280 | 대표: 안승빈</p>
                <p>경기도 성남시 분당구 황새울로200번길 34 Ko Fo Mo 빌딩 205, 206호</p>
                <h2 className="en">Copyright © AOP All Rights Reserved.</h2>
            </address>
        </footer>
    </ServerContext.Provider>
  );
}

export default App;
