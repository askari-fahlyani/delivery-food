import React,{useContext, useEffect} from 'react';
import TopBarItem from './TopBarItem';
import HeaderContext from '../../../Contexts/NavigationContext/HeaderContext';
function NavigationBar() {
const {navigationItems}=useContext(HeaderContext)

return ( 
        <ul className='flex justify-start items-center gap-[2.5rem] h-[56px]' >
            {navigationItems.map((item)=><TopBarItem id={item.id}  className={item.className} key={item.id} title={item.title} isActive={item.active}/>)}
        </ul>
     );
}

export default NavigationBar;