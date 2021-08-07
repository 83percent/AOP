import { Route, Switch } from 'react-router-dom';
import { useContext, useEffect } from 'react';

//Context
import { AdminContext } from '../App';

// Component
import AdminLogin from '../component/Admin/AdminLogin';
import AdminMain from '../component/Admin/AdminMain';


const AdminRouter = ({history}) => {
    //Context
    const { admin } = useContext(AdminContext)
        useEffect(() => {
        if(!admin?._id) {
            history.replace("/admin/login");
        }
    }, [admin, history]);
    return (
        <article id="admin">
            <Switch>
                <Route path="/admin/login" component={AdminLogin}/>
                <Route path="/admin" component={AdminMain}/>
            </Switch>
        </article>
    )
}

export default AdminRouter;