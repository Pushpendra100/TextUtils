import React from 'react';

export default function Alert(props) {
    const capitalize = (word)=>{                                      // in javascript we don't have method like capitalize
            const lower = word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
    }






  return (<div style={{height:'50px'}}>

{/*  this happens because all the jsx will be converted to javascript calls */}
     { props.alert &&      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">     
         <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
  </div>
      }
  </div>
  );
}
