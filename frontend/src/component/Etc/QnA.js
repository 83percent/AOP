import { Link } from 'react-router-dom';
import { get } from '../../contents/js/DateFormat';

// CSS
import '../../contents/css/etc/QnA.css';

// Image
import Logo from '../../contents/logo/logo.png';

// Icon
import NaverTalkTalk from '../../contents/icons/naver_talk.png';

const QnA = () => {
    return (
        <article id="qna">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
            </div>
            <section className="title">
                <h1>문의하기.</h1>
            </section>
            <section className="talk">
                <p>무엇이든 궁금한게 있으면 물어보세요.</p>
                <p>네이버 톡톡 문의를 통해 빠르게 문의할 수 있습니다.</p>
                <a href="http://talk.naver.com/w4psge?frm=mnmb&frm=nmb_detail">
                    <img src={NaverTalkTalk} alt="talk" />
                </a>
            </section>
            <section className="table">
                <table>
                    <thead>
                        <tr>
                            <th className="no">번호</th>
                            <th className="title">제목</th>
                            <th className="name">글쓴이</th>
                            <th className="reg">등록일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="no">
                                <p>1</p>
                            </td>
                            <td className="title">
                                <p>문의한다</p>
                            </td>
                            <td className="name">
                                <p>재충이</p>
                            </td>
                            <td className="reg">
                                <p>{get(new Date())}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="no">
                                <p>1</p>
                            </td>
                            <td className="title">
                                <p>문의한다</p>
                            </td>
                            <td className="name">
                                <p>재충이</p>
                            </td>
                            <td className="reg">
                                <p>{get(new Date())}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="no">
                                <p>1</p>
                            </td>
                            <td className="title">
                                <p>문의한다</p>
                            </td>
                            <td className="name">
                                <p>재충이</p>
                            </td>
                            <td className="reg">
                                <p>{get(new Date())}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="no">
                                <p>1</p>
                            </td>
                            <td className="title">
                                <p>문의한다</p>
                            </td>
                            <td className="name">
                                <p>재충이</p>
                            </td>
                            <td className="reg">
                                <p>{get(new Date())}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="more">
                    <button>더 보기</button>
                </div>
                <div className="search">
                    <input type="text" placeholder="이름 입력..."/>
                    <button>
                        <i className="material-icons">search</i>
                    </button>
                </div>
                <div className="btn">
                    <Link to="/help/write">문의 글쓰기</Link>
                </div>
            </section>
        </article>
    )
}

export default QnA;