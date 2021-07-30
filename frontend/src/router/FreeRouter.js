import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../contents/css/etc/Free.css';

const FreeRouter = () => {
    // Ref
    const botNav = useRef(null);
    const inputNav = useRef(null);
    const event = {
        faqToggle : function(target) {
            for(let i=0; i<4; i++) {
                if(target.nodeName !== "LI") {
                    target = target.parentElement;
                } else break;
            }
            if(target.nodeName !== "LI") return;
            target.classList.toggle("on");
        },
        toggleInput : function(bool) {
            console.log(bool)
            if(inputNav.current !== null) {
                if(bool !== undefined) inputNav.current.classList.toggle("on");
                else inputNav.current.classList.toggle("on", bool);
            }
        }
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
        <article className="free">
            <nav className="fixed-button">
                <div ref={botNav} className="on btn" onClick={() => event.toggleInput(true)}>
                    <button>1:1 PT 무료 체험하기</button>
                </div>
                <div ref={inputNav} className="form-wrapper">
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
            <header>
                <h1>먼저 <strong>체험</strong>해보고, <strong>등록</strong>하세요.</h1>
                <p>전에 받던 PT가 맘에 들지 않아 고민되신다구요?</p>
                <p>고객님을 위해 준비한 1:1 맞춤 프로그램,</p>
                <p>AOP에서 먼저 체험해보고 등록하세요.</p>
            </header>
            <section className="faq">
                <ul>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="title">
                            <h1>어떻게 신청하는 건가요?</h1>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>양식에 맞게 이름, 전화번호, 운동목적, 요구사항을 작성한 뒤 '신청'을 눌러주시면 됩니다.</p>
                            
                        </div>
                    </li>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="title">
                            <h1>체험이 종료되면 어떻게 해야하죠?</h1>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>체험 기간 동안 만족하셨다면, 트레이너 분에게 추가 요청을 하시면 등록을 친절하게 안내해 드립니다.</p>
                            <p>만약 불만족 하셨다면, 체험 기간이 종료된 뒤 짧은 설문조사를 진행한 뒤 프로그램이 자동종료됩니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="title">
                            <h1>이전에 등록한 적이 있는데, 그래도 무료 체험이 가능한가요?</h1>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>해당 체험은 1:1 트레이닝을 경험해 본적이 없거나, 트레이너 분들을 경험하고 등록하고 싶은 고객님에게 체험 뒤 선택하실 수 있는 기회를 제공해 드리는 프로그램으로 이미 AOP 트레이너 분들에게 트레이닝을 받아본 고객님은 해당사항이 안됩니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="title">
                            <h1>무료 체험이 끝나고 등록 강요하시는거 아닌가요?</h1>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>절대 아닙니다. 고객님에게 최고의 경험을 선사하는 AOP는 고객님의 의사를 최대한 반영하여 운영됩니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="title">
                            <h1>친구와 같이 체험해보고 싶어요.</h1>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>가능합니다. 신청서 작성 시 요구사항에 같이 진행하고 싶은 고객님의 이름을 작성해주세요.</p>
                            <p>같이 진행하실 고객님 또한 신청서 요구사항에 같이 진행할 고객님을 서로 기재해주셔야합니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="title">
                            <h1>무료 체험은 정해진 시간에만 받을 수 있나요?</h1>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>신청서에 기재하신 전화번호를 통해 고객님과의 일정 조율 후 결정하게 됩니다. </p>
                        </div>
                    </li>
                </ul>
            </section>
        </article>
    )
}
export default FreeRouter;