import React, { useContext } from 'react'

const UserContext:React.Context<any> = React.createContext({})

{/* <UserProvider value={user}>
 Any component
 </UserProvider> */}

 function Welcome() {
    const user = useContext(UserContext);
    return (
    <span>Hello, {user.name} {user.surName}!</span>
    );
   }
   export default Welcome