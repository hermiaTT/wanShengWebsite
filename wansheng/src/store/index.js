import {createBrowserHistory} from 'history';
export const history = createBrowserHistory();

history.listen((location,action)=>{
    window.scrollTo(0,0);
})

// export const historyStart = ()=> history.location.state && history.location.state.key === "start";

history.replace({state:{key:"start"}});