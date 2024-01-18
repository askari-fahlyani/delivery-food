import React, { useState,useEffect } from 'react';
import HeaderContext from './HeaderContext';
// import { v4 as uuidv4 } from 'uuid';
import { initialnNvigationItems } from '../../Data/data';
import { initialAuthenticationItems } from '../../Data/data';


function HeaderProvider({children}) {
    const [navigationItems,setNavigationItems] = useState(initialnNvigationItems)
    const [AuthenticationItems,setInitialAuthenticationItems]= useState(initialAuthenticationItems)
       
    return ( 
        <HeaderContext.Provider value={{navigationItems,setNavigationItems,AuthenticationItems,setInitialAuthenticationItems}}>
            {children}
        </HeaderContext.Provider>
     );
}

export default HeaderProvider;