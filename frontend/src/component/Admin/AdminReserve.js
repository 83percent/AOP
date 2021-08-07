import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

// Context
import { ServerContext } from '../../App';

// CSS
import '../../contents/css/admin/AdminReserve.css';

const AdminReserve = () => {
    // State
    const [data, setData] = useState([]);

    // Context
    const server = useContext(ServerContext);
    
    const event = {
        getData : async function(count) {
            await axios({
                method : 'GET',
                url : `${server}/reserve/${count}`,
                withCredentials : true,
                timeout : 7000
            }).then(response => {
                if(response.status === 200) setData([...data, ... response.data]);
            }).catch(err => {
                switch(err?.response?.status) {
                    case 400 : {
                        window.alert("잘못된 요청입니다.");
                        return;
                    }
                    case 401 : {
                        window.alert("권한이 없습니다.");
                        return;
                    }
                    case 500 :
                    default : {
                        window.alert("문제가 발생했습니다.");
                        return;
                    }
                }
            })
        }, // getData(count)
        remove : async function(id) {
            if(!id) {
                window.alert("잘못된 요청입니다.");
                return;
            }
            if(!window.confirm("삭제할까요?")) return;
            await axios({
                method: "DELETE",
                url : `${server}/reserve/${id}`,
                withCredentials: true,
                timeout: 7000
            }).then(response => {
                if(response.status === 200) {
                    window.alert("삭제되었습니다. (새로고침 후 반영)");
                    return;
                }
            }).catch(err => {
                switch(err?.response?.status) {
                    case 400 : {
                        window.alert("잘못된 요청입니다.");
                        return;
                    }
                    case 401 : {
                        window.alert("권한이 없습니다.");
                        return;
                    }
                    case 500 :
                    default : {
                        window.alert("문제가 발생했습니다.");
                        return;
                    }
                }
            })
        }, // remove(id)
        changeCheck : async function(index, isCheck, id) {
            if(!window.confirm(`${isCheck ? "미처리" : "처리"} 상태로 변경할까요?`)) return;
            await axios({
                method : 'PATCH',
                url : `${server}/reserve/${id}`,
                withCredentials: true,
                timeout: 7000
            }).then(response => {
                if(response.status === 200) {
                    window.alert("변경되었습니다.");
                    const _d = JSON.parse(JSON.stringify(data));
                    _d[index].check = !isCheck;
                    setData(_d);
                }
            }).catch(err => {
                switch(err?.response?.status) {
                    case 400 : {
                        window.alert("잘못된 요청입니다.");
                        return;
                    }
                    case 401 : {
                        window.alert("권한이 없습니다.");
                        return;
                    }
                    case 500 :
                    default : {
                        window.alert("문제가 발생했습니다.");
                        return;
                    }
                }
            })
        }
    }
    useEffect(() => {
        if(data.length === 0) event.getData();
    }, [])
    return (
        <section id="admin-reserve">
            <div className="title">
                <h1>1:1 PT 무료 체험.</h1>
                
            </div>
            <ul>
                {
                    data.map((element, i1) => (
                        <li key={i1}>
                            <button>
                                <i className="material-icons" onClick={() => event.remove(element._id)} title="삭제">close</i>
                            </button>
                            <div className="check-frame" onClick={() => event.changeCheck(i1, element.check, element._id)}>
                                {
                                    element.check ?
                                       <i className="material-icons" style={{color: "#00966B"}} title="상태변경">check</i>
                                     : <i className="material-icons" style={{color: "#ff0000"}} title="상태변경">close</i>
                                }
                                
                            </div>
                            <div className="info-frame">
                                <ol>
                                    <li>
                                        <h2>이름</h2>
                                        <p>{element?.name}</p>
                                    </li>
                                    <li className="purpose">
                                        <h2>운동목적</h2>
                                        <p>{element?.purpose}</p>
                                    </li>
                                    <li>
                                        <h2>연락처</h2>
                                        <p className="en">{element?.tel}</p>
                                    </li>
                                </ol>
                                <div>
                                    <h2>요구사항</h2>
                                    <p>{element?.requirement}</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            {
                data.length !== 0 && data.length % 30 === 0 ? (
                    <button onClick={() => event.getData(data.length)}>더 보기</button>
                ) : <div style={{padding: "3rem 0"}}></div>
            }
        </section>
    )
}
export default AdminReserve;