import { useEffect, useRef } from 'react';
import { Route, Switch } from 'react-router';

// Component
import Main from '../component/Main/Main';
import ProgramRouter from './ProgramRouter';

// CSS
import '../contents/css/main/Main.css';
import { Link } from 'react-router-dom';
const MainRouter = () => {
    const botNav = useRef(null);
    const inputNav = useRef(null);
    useEffect(() => {
        window.addEventListener('scroll', function(e) {
            if(this.scrollY < 100 && botNav.current) {
                try {
                    botNav.current.classList.add("on");
                } catch{}
                
            } else {
                try {
                    botNav.current.classList.remove("on");
                } catch{}
            }
        });
    }, []);
    const event = {
        toggleInput : function(bool) {
            if(inputNav.current !== null) {
                if(bool !== undefined) inputNav.current.classList.toggle("on");
                else inputNav.current.classList.toggle("on", bool);
            }
        }
    }
    useEffect(() => {
        window.scrollTo(0,0);
    });
    return (
        <div className="main-wrapper">
            <nav className="fixed-button">
                <div ref={botNav} className="on btn" onClick={() => event.toggleInput(true)}>
                    <button>1:1 PT 무료 체험하기</button>
                </div>
                <div ref={inputNav}className="form-wrapper">
                    <button onClick={() => event.toggleInput(false)}>
                        <i className="material-icons">close</i>
                    </button>
                    <div>
                        <div>
                            <p>이름</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>전화번호</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>운동목적</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>요구사항</p>
                            <input type="text" />
                        </div>
                        <p>입력하신 정보는 상담을 위한 정보로, 상담이 종료되는 시점에 바로 파기됩니다.</p>
                        <button>무료 체험 신청</button>
                        <Link to="/free">
                            <p>무료 체험 더 알아보기</p>
                            <i className="material-icons">chevron_right</i>
                        </Link>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path={["/program/:id","/program"]} component={ProgramRouter} />
            </Switch>
            
        </div>
    )
}

export default MainRouter;