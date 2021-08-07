import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';

// Context
import { ServerContext } from '../../App';

// CSS
import '../../contents/css/admin/AdminPost.css';

const AdminPost = () => {
    // State
    const [postData, setPostData] = useState([]);

    // Context
    const server = useContext(ServerContext);

    // Ref
    const sendData = useRef({name : "", content : ""})

    const event = {
        save : async function(data) {
            const { name, content } = data;
            if(name.length < 2 || name.length > 10) {
                window.alert("이름은 2~10자를 입력해주세요.");
                return;
            }
            if(content.length < 10 || content.length > 300) {
                window.alert("후기 내용은 10~300자를 입력해주세요.");
                return;
            }
            await axios({
                method : 'POST',
                url : server + "/post",
                data : data,
                withCredentials : true,
                timeout : 5500
            }).then(response => {
                if(response.status === 200) {
                    window.alert("저장되었습니다.");
                    setPostData([...postData, data]);
                }
            }).catch(err => {
                switch(err?.response?.status) {
                    case 400 : {
                        window.alert("잘못된 요청입니다.");
                        break;
                    }
                    case 401 : {
                        window.alert("권한이 없습니다.");
                        break;
                    }
                    case 500 :
                    default : {
                        window.alert("문제가 발생했습니다.");
                    }
                }
            })
        }, // save(data)
        getPost : async function() {
            await axios({
                method : 'GET',
                url : server + "/post",
                timeout : 5500
            }).then(response => {
                if(response.status === 200) {
                    setPostData(response.data);
                }
            }).catch(err => {
                switch(err?.response?.status) {
                    case 500 :
                    default : {
                        console.error(err);
                        window.alert("후기 데이터를 불러오는데 실패하였습니다.");    
                    }
                }
            })
        }, // getPost()
        remove : async function(id) {
            if(!window.confirm("후기를 삭제할까요?")) return;

            await axios({
                method : 'DELETE',
                url : `${server}/post/${id}`,
                withCredentials : true,
                timeout: 5500
            }).then(response => {
                if(response.status === 200) {
                    window.alert("삭제되었습니다. (새로고침 후 반영)");
                }
            }).catch(err => {
                switch(err?.response?.status) {
                    case 400 : {
                        window.alert("잘못된 요청입니다.");
                        break;
                    }
                    case 401 : {
                        window.alert("권한이 없습니다.");
                        break;
                    }
                    case 500 :
                    default : {
                        console.error(err);
                        window.alert("후기 데이터를 불러오는데 실패하였습니다.");    
                    }
                }
            })
        }
    }
    useEffect(() => {
        event.getPost();
    }, [])
    return (
        <section id="admin-post">
            <div className="title">
                <h1>후기.</h1>
            </div>
            <ul>
            {
                postData.map((element,index) => (
                    <li key={index}>
                        <p>{index+1}</p>
                        <div>
                            <h1>{element.name}</h1>
                            {
                                element.content.split("\n").map((line,i2) => (
                                    <p key={i2}>{line}</p>
                                ))
                            }
                        </div>
                        <button onClick={() => event.remove(element._id)}>
                            <i className="material-icons">close</i>
                        </button>
                    </li>
                ))
            }
            </ul>
            <div className="input-frame">
                <input type="text" placeholder="이름" onChange={e => sendData.current.name = e.target.value}/>
                <textarea placeholder="후기 내용" onChange={e => sendData.current.content = e.target.value}></textarea>
                <button onClick={() => event.save(sendData.current)}>저장</button>
            </div>
        </section>
    )
}
export default AdminPost;