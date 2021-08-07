import { Route, Switch } from "react-router-dom"

import QnA from '../component/Etc/QnA';
import FAQ from '../component/Etc/FAQ';
import QnAWrite from "../component/Etc/QnAWrite";
import QnADetail from "../component/Etc/QnADetail";

const HelpRouter = () => {
    return (
        <Switch>
            <Route exact path="/help" component={QnA}/>
            <Route exact path="/help/write" component={QnAWrite}/>
            <Route exact path="/help/detail/:id" component={QnADetail}/>
            <Route path="/faq" component={FAQ}/>
        </Switch>
    )
}

export default HelpRouter;