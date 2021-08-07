import { useContext, useRef, useState } from "react";
import { ServerContext } from "../../App";
import DateFormat from "../../contents/js/DateFormat";
import axios from 'axios';

const AdminAnswer = ({history, location}) => {
    // State
    const [data, setData] = useState(location?.state?.data);

    // Context
    const server = useContext(ServerContext);

    //Ref
    const answerRef = useRef("");

    const event = {
        save : async function(id, value) {
            if(value.length < 2 || value.length > 300 ) {
                window.alert("답변은 2~300자를 입력해야합니다.");
                return;
            }
            await axios({
                method : 'PATCH',
                url : server + '/qna',
                data : {
                    id : id,
                    answer : value
                },
                withCredentials : true,
                timeout: 5500
            }).then(response => {
                if(response.status === 200) {
                    const _d = JSON.parse(JSON.stringify(data));
                    _d.answer = value;
                    setData(_d);
                }
            }).catch(err => {
                switch(err?.response?.status) {
                    case 400 : {
                        window.alert("잘못된 요청입니다.")
                        break;
                    }
                    case 401 : {
                        window.alert("관리자 권한이 없습니다.")
                        break;
                    }
                    case 500 :
                    default : {
                        window.alert("문제가 발생했습니다.")
                    }
                }
            })
        }, // save(value)
        remove : async function(id) {
            if(!window.confirm("문의를 삭제할까요?")) return;
            await axios({
                method : 'DELETE',
                url : `${server}/qna/${id}`,
                withCredentials : true,
                timeout : 5500
            }).then(response => {
                if(response.status === 200) {
                    window.alert("삭제되었습니다.");
                    history.replace("/admin/qna");
                }
            }).catch(err => {
                switch(err?.response?.status) {
                    case 400 : {
                        window.alert("잘못된 요청입니다.")
                        break;
                    }
                    case 401 : {
                        window.alert("관리자 권한이 없습니다.")
                        break;
                    }
                    case 500 :
                    default : {
                        window.alert("문제가 발생했습니다.")
                    }
                }
            })
        }, // remove(id)
    }

    return (
        <section id="admin-answer">
            {
                data ? (
                    <>
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
                        <div className="input-wrapper">
                            <textarea placeholder="답변을 작성해주세요." onChange={(e) => answerRef.current = e.target.value}></textarea>
                            <div>
                                <button style={{color:"#ff0000"}} onClick={() => event.remove(data._id)}>문의 삭제</button>
                                <button style={{backgroundColor:"#00966B"}} onClick={() => event.save(data._id, answerRef.current)}>답변 저장</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <h1>잘못된 접근입니다.</h1>
                )
            }
        </section>
    )
}

export default AdminAnswer;