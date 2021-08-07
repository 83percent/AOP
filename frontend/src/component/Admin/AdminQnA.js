import { useContext, useEffect, useState } from 'react';
import axios from 'axios'; 
import DateFormat from '../../contents/js/DateFormat';

// CSS
import '../../contents/css/admin/AdminQnA.css';

// Context
import { ServerContext } from '../../App';

const AdminQnA = ({history}) => {
    // State
    const [data, setData] = useState([]);
    
    // Context
    const server = useContext(ServerContext);

    const event = {
        getQnA : async function(count=0) {
            await axios({
                method : 'GET',
                url : `${server}/qna/${count}`,
                withCredentials : true,
                timeout : 5500
            }).then(response => {
                if(response.status === 200) setData([...data, ...response.data]);
            }).catch(err => {
                
            })
        }, // send(count)
    }
    console.log(data);
    useEffect(() => {
        if(data.length === 0) event.getQnA(0);
    }, [])

    return (
        <section id="admin-qna">
            <div className="title">
                <h1>문의.</h1>
            </div>
            <ul>
                {
                    data.map((element, index) => (
                        <li key={index} onClick={() => {history.push("/admin/answer", {data : element})}}>
                            <div className="question-wrapper">
                                <div className="info-frame">
                                    <div>
                                    {
                                        element.answer ? (
                                            <i className="material-icons" style={{color:"#00966B"}}>check</i>
                                        ) : (
                                            <i className="material-icons" style={{color:"#dd1818"}}>close</i>
                                        )
                                    }
                                    </div>
                                    <h1>{element.title}</h1>
                                    <p>{element.name}</p>
                                    <p>{DateFormat.get(element.reg_date)}</p>
                                </div>
                                <div className="question-frame">
                                    {
                                        element.content.split("\n").map((line,i2) => (
                                            <p key={i2}>{line}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            {
                data.length !== 0 && data.length % 15 === 0 ? (
                    <button onClick={() => event.getQnA(data.length)}>더 보기</button>
                ) : null
            }
        </section>
    )
}
export default AdminQnA;