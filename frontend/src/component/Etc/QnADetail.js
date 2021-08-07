import { useContext, useEffect, useRef, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import DateFormat from '../../contents/js/DateFormat';


// Context
import { ServerContext } from '../../App';

// CSS
import '../../contents/css/etc/QnADetail.css';

// Image
import Logo from '../../contents/logo/logo.png';

const QnADetail = ({location, match}) => {
    // State
    const [data, _setData] = useState(location.state?.data);
    const [lock, setLock] = useState(location.state?.data.password ? true : false);

    console.log(data);

    // Ref
    const openLockValue = useRef("");
    const cautionRef = useRef(null);

    // Context
    const server = useContext(ServerContext);

    const event = {
        setCaution : function(msg, toggle) {
            if(toggle !== false) {
                cautionRef.current.innerHTML = msg;
            } else {
                cautionRef.current.innerHTML = "";
            }
        }, // setCaution(msg, toggle)
        openLock : function(value) {
            console.log(value, data.password);
            if(data.password === value) setLock(false);
            else {
                this.setCaution("비밀번호가 일치하지 않습니다.")
            }
        }, //openLock(value)
    }
    useEffect(() => {
        if(!data && match.params?.id) {
            axios({
                method : 'GET',
                url : `${server}/qna/search/id/${match.params.id}`,
                timeout: 5500
            }).then(response => {
                if(response.status === 200) _setData(response.data);
            }).catch(err => {
                return null;
            })
        }
    })
    return (
        <section id="qna-detail">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
            </div>
            {
                data ? (
                    lock ? (
                        <div className="lock-wrapper">
                            <h1>비밀번호를 입력해주세요.</h1>
                            <input type="password" onChange={(e) => openLockValue.current = e.target.value}/>
                            <p ref={cautionRef} style={{color:"#ff0000", marginTop : "0.5rem"}}></p>
                            <button onClick={() => event.openLock(openLockValue.current)}>
                                <i className="material-icons">check</i>
                            </button>
                        </div>
                    ) : (
                        <div className="content-wrapper">
                            <div className="question-wrapper">
                                <h2>{data.name}</h2>
                                <div className="question-frame">
                                    <h2>{data.title}</h2>
                                    {
                                        data.content.split("\n").map((line,index) => (
                                            <p key={index}>{line}</p>
                                        ))
                                    }
                                    <h4>{DateFormat.get(data.reg_date)}</h4>
                                </div>
                                
                            </div>
                            <div className="answer-wrapper">
                                <h2 className="en">AOP</h2>
                                <div className="answer-frame">
                                    {
                                        data.answer !== undefined ? (
                                            data.answer.split("\n").map((line,index) => (
                                                <p key={index}>{line}</p>
                                            ))
                                        ) : (
                                            <>
                                                <p>아직 답변이 달리지 않았어요.</p>
                                                <p>잠시만 기다려주세요.</p>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    )
                ) : (
                    <div className="none-wrapper">
                        없음
                    </div>
                )
            }
        </section>
    )
}

export default QnADetail;