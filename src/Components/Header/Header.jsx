import React,{useContext,useEffect} from 'react';
import TopHeaderSection from './TopSection/TopHeaderSection';
import '../../style/style.css'
import HeaderProvider from '../../Contexts/NavigationContext/HeaderProvider';


function Header() {
    
      
    return ( 
       <HeaderProvider>
         <div  >
            <TopHeaderSection/>
        </div>
       </HeaderProvider>
     );
}

export default Header;