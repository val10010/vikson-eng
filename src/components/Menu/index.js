import React, { useContext } from 'react';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import Mobile from './components/Mobile';
import Desktop from './components/Desktop';

const Menu = ({ children, isShowPlanBtn }) => {
    const { isMobile, isTablet } = useContext(DeviceContext);

    return (
        isMobile || isTablet
            ? <Mobile isShowPlanBtn={isShowPlanBtn}>{ children }</Mobile>
            : <Desktop isShowPlanBtn={isShowPlanBtn}>{ children }</Desktop>
    );
};

export default Menu;
