import React, { useContext, useEffect } from 'react';
import HeaderContext from '../../../Contexts/NavigationContext/HeaderContext';

function TopBarItem({id,className,title}) {
    const{navigationItems,setNavigationItems} = useContext(HeaderContext)
 
  const handleActivitation = ()=>{
    const changedItems = navigationItems.map((item)=>item.id===id?{...item,active:true,className:'active-navigation-item'}:{...item,active:false,className:'navigation-item'}
        )
        setNavigationItems(changedItems)
  }
    return (  
        <li onClick={handleActivitation}     className={className}
        >
            <a  href="#">{title}</a>
        </li>
    );
}

export default TopBarItem;