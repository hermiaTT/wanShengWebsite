import React, {Component} from "react";
import {withTranslation} from "react-i18next";
class ErrorBoudary extends Component{
    constructor(props){
        super(props);
        this.state = {hasError: false};
    }
    static getDerivedStateFromError(error){
        return { hasError: true};
    }
    componentDidCatch(error, info){
        console.error(error);
    }
    render(){
        const { t } = this.props;
        if(this.state.hasError){
            return <h1>{t('L_screen_not_exist')}</h1>;
        }
        return this.props.children;
    }
}

export default withTranslation()(ErrorBoudary);