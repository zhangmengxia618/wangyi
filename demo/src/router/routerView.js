import React  from 'react'
import { Route,Redirect,Switch} from "react-router-dom";

function  View(props){
   let {router}=props;
   let arr=router.filter(item=>!item.redirect);
   let arr1=router.filter(item=>item.redirect).map(val=>{
       return <Redirect from={val.path} to={val.redirect}></Redirect>
   })
   return <Switch>
       {
           arr.map((item,index)=>{
               return <Route path={item.path} key={index} render={(props)=>{
                   return <item.component {...props} child={item.children}></item.component>
               }}>
                        
               </Route>
           }).concat(arr1)
       }
   </Switch>
}

export default View;
