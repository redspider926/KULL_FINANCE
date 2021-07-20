import React from 'react';
import { Hidden } from "@material-ui/core";

const MobileView:React.FC = ({children}) => {
    return <Hidden mdUp>{children}</Hidden>
}

const DesktopView:React.FC = ({children}) => {
    return <Hidden smDown>{children}</Hidden>  
}

export {MobileView, DesktopView}