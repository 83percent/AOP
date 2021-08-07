import axios from 'axios';
import { useContext, useEffect, useRef } from 'react';
import { ServerContext, AdminContext } from '../../App';

import '../../contents/css/admin/AdminLogin.css';

const AdminLogin = ({history}) => {
    // Ref
    const sendData = useRef({username : "", password: ""})
    const cautionRef = useRef(null);

    // Context
    const server = useContext(ServerContext);
    const {admin, setAdmin} = useContext(AdminContext);

    useEffect(() => {
        if(admin?._id) {
            history.replace("/admin");
        }
    }, []); 
    

    const event = {
        setCaution : function(msg, toggle) {
            if(toggle !== false) {
                cautionRef.current.innerHTML = msg;
            } else {
                cautionRef.current.innerHTML = "";
            }
        },
        submit : function(data) {
            const { username, password } = data;
            if(username.length <= 12) {
                this.setCaution("아이디를 정확하게 입력해주세요.");
                return;
            }
            if(password.length < 8 || password.length > 20) {
                this.setCaution("비밀번호는 8~20자리 입니다.");
                return;
            }
            this.send(data);
        }, // submit(data)
        send : async function(data) {
            this.setCaution("",false);
            await axios({
                method : 'POST',
                url : server + '/login',
                data : data,
                withCredentials: true,
                timeout: 5500
            }).then(response => {
                if(response.status === 200) setAdmin(response.data);
                history.replace("/admin");
            }).catch(err => {
                switch(err?.response?.status) {
                    case 400 : {
                        this.setCaution("잘못된 요청입니다.")
                        break;
                    }
                    case 401 : {
                        this.setCaution("아이디 또는 비밀번호가 일치하지 않습니다.")
                        break;
                    }
                    case 500 :
                    default : {
                        this.setCaution("서버에 문제가 발생했습니다.")
                    }
                }
            });
        }, // send(data)
    }
    
    return (
        <section id="login">
            <div>
                <label>
                    <p>ID</p>
                    <input type="text" onChange={(e) => sendData.current.username = e.target.value}/>
                </label>
                <label>
                    <p>PASSWORD</p>
                    <input type="password" onChange={(e) => sendData.current.password = e.target.value}/>
                </label>
                <button onClick={() => event.submit(sendData.current)}>로그인</button>
                <p ref={cautionRef}></p>
            </div>
        </section>
    )
}

export default AdminLogin;