import axios from 'axios';
import { useContext, useRef } from 'react';
import { ServerContext } from '../../App';

import '../../contents/css/admin/AdminLogin.css';

const AdminLogin = () => {
    // Ref
    const sendData = useRef({id : undefined, password: undefined})
    const cautionRef = useRef(null);

    // Context
    const server = useContext(ServerContext);

    const event = {
        submit : function(data) {
            console.log(data);
        }, // submit(data)
        send : async function(data) {
            await axios({
                method : 'POST',
                url : server + '/login',
                data : data,
                timeout: 5500
            }).then(response => {
    
            }).catch(err => {
    
            });
        }, // send(data)
    }
    
    return (
        <section id="login">
            <div>
                <label>
                    <p>ID</p>
                    <input type="text" onChange={(e) => sendData.current.id = e.target.value}/>
                </label>
                <label>
                    <p>PASSWORD</p>
                    <input type="password" onChange={(e) => sendData.current.password = e.target.value}/>
                </label>
                <button onClick={() => event.submit(sendData.current)}>로그인</button>
                <p ref={cautionRef}>asdfasf</p>
            </div>
        </section>
    )
}

export default AdminLogin;