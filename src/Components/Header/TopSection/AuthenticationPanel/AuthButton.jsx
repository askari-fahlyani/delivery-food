import React, { useContext, useEffect } from 'react';
import HeaderContext from '../../../../Contexts/NavigationContext/HeaderContext';

function AuthButton({id,className,title}) {
    const{navigationItems,AuthenticationItems,setInitialAuthenticationItems} = useContext(HeaderContext)
  useEffect(()=>{
console.log('navigationItems',navigationItems);
  },[navigationItems])
  const handleActivitation = ()=>{
    const changedItems = AuthenticationItems.map((item)=>item.id===id?{...item,active:true,className:'active-auth-button'}:{...item,active:false,className:'auth-button'}
        )
        setInitialAuthenticationItems(changedItems)
  }
    return (  
        <button onClick={handleActivitation}     className={className}
        >
            <a  href="#">{title}</a>
        </button>
    );
}

export default AuthButton;