import { Link } from 'react-router-dom';


// CSS
import '../../contents/css/etc/FAQ.css';

// Image
import Logo from '../../contents/logo/logo.png';

const FAQ = () => {
    const event = {
        faqToggle : function(target) {
            for(let i=0; i<4; i++) {
                if(target.nodeName !== "LI") {
                    target = target.parentElement;
                } else break;
            }
            if(target.nodeName !== "LI") return;
            target.classList.toggle("on");
        }
    }
    return (
        <article id="faq">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
            </div>
            <section className="title">
                <h1>자주 묻는 질문</h1>
            </section>
            <section className="faq-frame">
                <ul>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="title">
                            <h1>위치가 어디인가요?</h1>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>지하철 분당선 수내역 2,3번출구 나와서 30m 농협보고 좌회전하시면 됩니다. (GS25시 편의점 건물)</p>
                        </div>
                    </li>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="title">
                            <h1>수업은 꼭 1:1로만 가능한가요?</h1>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>만약 두분 혹은 세분이서 오신다면 트레이너와 협의하에 조정된 가격으로 수업이 가능하십니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="title">
                            <h1>PT수업 외에 운동이 가능한가요?</h1>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>PT수업 외에도 개인운동이 가능합니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="title">
                            <h1>사회적 거리두기는 어떻게 대처하고 있나요?</h1>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>AOP 방문 시 손소독제 사용, 명확한 출입명부 작성, 열 체크를 하고 있으며, 수업 시 마스크를 필수로 착용하고 있습니다.</p>
                            <p>또한 매일 소독을 12시, 22시 총 2번 진행되고 있습니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="title">
                            <h1>남은 세션 환불은 가능한가요?</h1>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>환불 시 진행된 수업 수 X 세션 회당 가격을 제외하고 환불을 도와드리고 있습니다.</p>
                            <p>고객의 요청으로 환불 발생 시 등록하신 계약금액의 10%가 수수료 발생합니다.</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="help">
                <h1>궁금한게 더 있다면.</h1>
                <Link to="/help">
                    <p>온라인 문의하기</p>
                    <i className="material-icons">chevron_right</i>
                </Link>
            </section>
        </article>
    )
}

export default FAQ;