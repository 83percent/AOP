import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Context
import { ServerContext } from '../../App';

import '../../contents/css/etc/QnAWrite.css';

// Image
import Logo from '../../contents/logo/logo.png';

const QnAWrite = ({history}) => {
    // Context
    const server = useContext(ServerContext);

    // Ref
    const cautionRef = useRef(null);
    const sendData = useRef({
        title : "",
        name : "",
        content : ""
    });

    const event = {
        setCaution : function(msg, toggle) {
            if(toggle !== false) {
                cautionRef.current.innerHTML = msg;
            } else {
                cautionRef.current.innerHTML = "";
            }
        }, // setCaution(msg, toggle)
        send : async function(data) {
            const {title, name, content, password} = data;
            
            if(name.length < 2 || name.length > 10) {
                this.setCaution("이름은 2~10자로 입력해주세요.");
                return;
            }
            if(password !== undefined && password !== "") {
                if(password.length < 4 || password.length > 20) {
                    this.setCaution("비밀번호는 4~20자로 입력해주세요.");
                    return;
                }
            }
            if(title.length < 2 || title.length > 30) {
                this.setCaution("제목은 2~30자로 입력해주세요.");
                return;
            }
            if(content.length < 10 || content.length > 300) {
                this.setCaution("문의내용은 10~300자로 입력해주세요.");
                return;
            }
            this.setCaution("",false);
            
            await axios({
                method : 'POST',
                url : server + "/qna",
                data : data,
                timeout: 5500
            }).then(response => {
                if(response.status === 200) {
                    window.alert("문의글을 저장했습니다.");
                    history.push("/help");
                }
            }).catch(err => {
                switch(err?.response?.status) {
                    case 500 : 
                    default : {
                        this.setCaution("문제가 발생했습니다.");
                        break;
                    }
                }
            });
        } // async send(data)
    }
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
                        <p>이름*</p>
                        <input type="text" placeholder="..." onChange={(e) => sendData.current.name = e.target.value}/>
                    </div>
                    <div>
                        <p>비밀번호</p>
                        <input type="password" placeholder="..." onChange={(e) => sendData.current.password = e.target.value}/>
                    </div>
                </div>
                <div>
                    <div>
                        <p>제목*</p>
                        <input type="text" placeholder="2 ~ 30자의 제목을 입력해주세요."  onChange={(e) => sendData.current.title = e.target.value}/>
                    </div>
                </div>
                <div>
                    <div>
                        <p>문의 내용*</p>
                        <textarea placeholder="10 ~ 300자 입력 가능합니다."  onChange={(e) => sendData.current.content = e.target.value}></textarea>
                    </div>
                </div>
                <p ref={cautionRef} style={{color:"#ff0000"}}></p>
            </section>
            <button onClick={() => event.send(sendData.current)}>
                <i className="material-icons">check</i>
            </button>
        </article>
    )
}

export default QnAWrite;