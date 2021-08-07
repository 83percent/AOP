import { Link } from 'react-router-dom';
import { get } from '../../contents/js/DateFormat';
import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';

// Context
import { ServerContext } from '../../App';

// CSS
import '../../contents/css/etc/QnA.css';

// Image
import Logo from '../../contents/logo/logo.png';

// Icon
import NaverTalkTalk from '../../contents/icons/naver_talk.png';

const QnA = ({history}) => {
    // State
    const [data, setData] = useState([]);
    
    // Context
    const server = useContext(ServerContext);

    // Ref
    const searchValue = useRef("");

    const event = {
        fetchQnA : async function() {
            await axios({
                method : 'GET',
                url : `${server}/qna/${data.length}`,
                timeout: 7000
            }).then(response => {
                if(response.status === 200) setData([...data, ...response.data]);
            }).catch(err => {
                switch(err?.response?.status) {
                    case 500 :
                    default : {
                        
                    }
                }
            })
        }, // fetchQnA
        search : async function (value) {
            if(value.length < 2 || value.length > 10) {
                window.alert("검색하려는 이름을 2 ~ 10자 입력해주세요.");
            }
            await axios({
                method : 'GET',
                url : `${server}/qna/search/name/${value}`,
                timeout: 7000
            }).then(response => {
                if(response.status === 200) setData(response.data);
            }).catch(err => {
                switch(err?.response?.status) {
                    case 500 :
                    default : {
                        window.alert("검색에 실패했습니다.")
                    }
                }
            })
        }
    }
    console.log(data);
    useEffect(() => {
        event.fetchQnA();
    }, []);
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
                        {
                            data.map((element, index) => (
                                <tr key={index} onClick={() => history.push(`/help/detail/${element._id}`, {data : element})}>
                                    <td className="no">
                                        <p>{index+1}</p>
                                    </td>
                                    <td className="title">
                                        <p>{element.title}</p>
                                    </td>
                                    <td className="name">
                                        <p>{element.name}</p>
                                    </td>
                                    <td className="reg">
                                        <p>{get(element.reg_date)}</p>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {
                    data.length !== 0 && data.length % 15 === 0 ? (
                        <div className="more" onClick={() => event.fetchQnA()}>
                            <button>더 보기</button>
                        </div>
                    ) : null
                }
                <div className="search">
                    <input type="text" placeholder="이름 입력..." onChange={e => searchValue.current = e.target.value}/>
                    <button onClick={() => event.search(searchValue.current)}>
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