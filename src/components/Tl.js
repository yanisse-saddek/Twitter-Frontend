import { useContext, useEffect } from 'react';
import {UserContext} from '../App'
import {Navigate} from 'react-router-dom'
function Tl() {
    const context = useContext(UserContext)
  return (
   <>
    {!context.Log?<Navigate to="/" />:null}
   </>
    );
}

export default Tl;
