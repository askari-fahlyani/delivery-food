import React,{useContext} from 'react';
import AuthButton from './AuthButton';
import HeaderContext from '../../../../Contexts/NavigationContext/HeaderContext';

function AuthPanel() {
    const {AuthenticationItems}=useContext(HeaderContext)

    return ( 
        <ul className='flex justify-around items-center w-[200px]'>
        {AuthenticationItems.map((item)=><AuthButton id={item.id} className={item.className} key={item.id} title={item.title}/>)}
        </ul>
     );
}

export default AuthPanel;