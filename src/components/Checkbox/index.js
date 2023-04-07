import { buildClassName } from 'Utils'
import React, { forwardRef } from 'react';

import style from './style.scss';

const Checkbox = forwardRef(({ className, classNames = {}, children, registerProps, isError }, ref) => {
    return (
       <div className={
           `${buildClassName(
               ['container'], style, classNames
           )} ${className}`
         }
       >
           <div className={style.wrapper}>
               <input
                   ref={ref}
                   type="checkbox"
                   id={registerProps.name}
                   { ...registerProps }
               />
               <span className={style.checkbox} />
           </div>
           <label htmlFor={registerProps.name} className={`${style.label} ${className}`}>
               { children }
           </label>
           <span className={style.errorMessage}>{ isError }</span>
       </div>
    );
});

export default Checkbox;
