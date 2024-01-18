import React,{useContext, useEffect} from 'react';
import Logo from './logo';
import NavigationBar from './NavigationBar';
import AuthPanel from './AuthenticationPanel/AuthPanel'

function TopHeaderSection() {
    return (  
        
          <div className='grid grid-cols-[58px_635px_187px] justify-between items-center ' >
            <Logo/>
            <NavigationBar/>
            <AuthPanel/>
        </div>
    );
}

export default TopHeaderSection;