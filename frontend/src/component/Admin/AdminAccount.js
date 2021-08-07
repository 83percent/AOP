import { useContext, useRef } from 'react';
import axios from 'axios';

// Context
import { ServerContext } from '../../App';

// CSS
import '../../contents/css/admin/AdminAccount.css';

const AdminAccount = ({history}) => {

    // Context
    const server = useContext(ServerContext);

    // Ref
    const password = useRef({now : "", pwd : "", repwd : ""});
    const cautionRef = useRef(null);

    const event = {
        setCaution : function(msg, toggle) {
            if(toggle !== false) {
                cautionRef.current.innerHTML = msg;
            } else {
                cautionRef.current.innerHTML = "";
            }
        }, // setCaution(msg, toggle)
        send : async function(value) {
            if(value.now.length < 8 || value.now.length > 20) {
                this.setCaution("비밀번호 입력을 확인해주세요. (8~20)");
                return;
            }
            if(value.pwd.length < 8 || value.pwd.length > 20) {
                this.setCaution("비밀번호 입력을 확인해주세요. (8~20)");
                return;
            }
            if(value.pwd !== value.repwd) {
                this.setCaution("비밀번호가 일치하지 않습니다.");
                return;
            }
            
            await axios({
                method: 'POST',
                url : server + '/account',
                withCredentials: true,
                data : {
                    now : value.now,
                    password : value.pwd
                },
                timeout: 5500
            }).then(response => {
                if(response.status === 200) {
                    window.alert("변경되었습니다.");
                    history.push("/admin");
                }
            }).catch(err => {
                switch(err?.response?.status) {
                    case 401 : {
                        this.setCaution("현재 비밀번호가 일치하지 않습니다.");
                        break;
                    }
                    case 500 :
                    default : {
                        this.setCaution("서버에 문제가 발생했습니다.");
                    }
                }
            });
        }
    }

    return (
        <section id="admin-account">
            <div className="title">
                <h1>비밀번호를 수정합니다.</h1>
                
            </div>
            <div className="input-pass">
                <p>현재 비밀번호</p>
                <input type="password" onChange={(e) => password.current.now = e.target.value} placeholder="현재 비밀번호"/>

                <p>변경할 비밀번호를 입력해주세요.</p>
                <input type="password" onChange={(e) => password.current.pwd = e.target.value} placeholder="비밀번호"/>
                <input type="password" onChange={(e) => password.current.repwd = e.target.value} placeholder="비밀번호 확인"/>

                <button onClick={() => event.send(password.current)}>변경</button>
                <p ref={cautionRef} style={{color: "#ff0000"}}></p>
            </div>
        </section>
    )
}
export default AdminAccount;