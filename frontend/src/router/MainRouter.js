import { useContext, useEffect, useRef } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { ServerContext } from '../App';
import axios from 'axios';

// Component
import Main from '../component/Main/Main';
import ProgramRouter from './ProgramRouter';

// CSS
import '../contents/css/main/Main.css';
const MainRouter = () => {

    // Ref
    const botNav = useRef(null);
    const inputNav = useRef(null);
    const reserveRef = useRef({
        name : "",
        tel : "",
        purpose : "",
        requirement : ""
    });

    const server = useContext(ServerContext)
    
    const event = {
        toggleInput : function(bool) {
            if(inputNav.current !== null) {
                if(bool !== undefined) inputNav.current.classList.toggle("on");
                else inputNav.current.classList.toggle("on", bool);
            }
        }, //toggleInput()
        sendReserve : async function(data) {
            const { name, tel, purpose, requirement } = data;
            if(name.length < 2 || name.length > 10) {
                window.alert("이름은 2~10자를 입력해야합니다.");
                return;
            }
            if(tel.length !== 11) {
                window.alert("휴대폰 번호 11자를 입력해주세요. (- 제외)");
                return;
            }
            if(purpose.length < 2 || purpose.length > 200) {
                window.alert("운동목적은 2~200자를 입력해야합니다.");
                return;
            }
            if(requirement.length !== 0 && (requirement.length < 5 || requirement.length > 300)) {
                window.alert("요구사항은 5~300자를 입력해야합니다.");
                return;
            }
            await axios({
                method : "POST",
                url: server + "/reserve",
                data : data,
                timeout : 7000
            }).then(response => {
                if(response.status === 200) {
                    window.alert("신청이 완료되었습니다.");
                    this.toggleInput(false);
                }
            }).catch(err => {
                switch(err?.response?.status) {
                    case 419 : {
                        window.alert("이미 신청되었습니다.");
                        break;
                    }
                    case 500 :
                    default : {
                        window.alert("문제가 발생했습니다. 잠시후 다시 시도해주세요.")
                        break;
                    }
                }
            })

        }, //sendReserve()
    }

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
                            <p>이름*</p>
                            <input type="text" onChange={e => reserveRef.current.name = e.target.value} />
                        </div>
                        <div>
                            <p>전화번호*</p>
                            <input type="text" placeholder="'-' 제외한 휴대폰 번호 11자리" onChange={e => reserveRef.current.tel = e.target.value} />
                        </div>  
                        <div>
                            <p>운동목적*</p>
                            <input type="text" onChange={e => reserveRef.current.purpose = e.target.value} />
                        </div>
                        <div>
                            <p>요구사항</p>
                            <input type="text" onChange={e => reserveRef.current.requirement = e.target.value}/>
                        </div>
                        <p>입력하신 정보는 상담을 위한 정보로, 상담이 종료되는 시점에 바로 파기됩니다.</p>
                        <button onClick={() => event.sendReserve(reserveRef.current)}>무료 체험 신청</button>
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