import { Link } from 'react-router-dom';
import '../../contents/css/etc/QnAWrite.css';

// Image
import Logo from '../../contents/logo/logo.png';

const QnAWrite = () => {
    return (
        <article id="write">
            <div className="logo">
                <Link to="/">   
                    <img src={Logo} alt="logo" />
                </Link>
            </div>
            <section className="title">
                <h1>문의하기.</h1>
            </section>
            <section className="input-wrapper">
                <div className="row">
                    <div>
                        <p>이름</p>
                        <input type="text" placeholder="..."/>
                    </div>
                    <div>
                        <p>비밀번호</p>
                        <input type="password" placeholder="..."/>
                    </div>
                </div>
                <div>
                    <div>
                        <p>제목</p>
                        <input type="text" placeholder="..."/>
                    </div>
                </div>
                <div>
                    <div>
                        <p>문의 내용</p>
                        <textarea placeholder="..."></textarea>
                    </div>
                </div>
            </section>
            <button>
                <i className="material-icons">check</i>
            </button>
        </article>
    )
}

export default QnAWrite;