import { Link } from "react-router-dom";

// CSS
import '../../contents/css/main/QnA.css';

const QnA = () => {
    return (
        <section className="QnA">
            <div className="title">
                <h1>더 궁금한게 있다면.</h1>
            </div>
            <Link to="/faq">
                <p>자주 묻는 질문</p>
                <i className="material-icons">chevron_right</i>
            </Link>
            <Link to="/help">
                <p>온라인 문의하기</p>
                <i className="material-icons">chevron_right</i>
            </Link>
        </section>
    )
}
export default QnA;