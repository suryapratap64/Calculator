import styles from "./App.module.css";
import Buttonscontainer from "./components/Buttoncontainer";
import Display from "./components/Display";
import { useState } from "react";
function App() {
   const  [calval,setcalval]=useState("");
   const onbuttonclick=(buttontext)=>{
    if(buttontext=='C'){
      setcalval("");

    }
    else if (buttontext =='=')
    {
      const result =eval(calval);
      setcalval(result);

    }
    else{
      const newdisplayvalue =calval+buttontext;
      setcalval(newdisplayvalue);
    }

   }
  
  return (
    
  
    <div className={styles.center}>
      <h1 className={styles.head}>CALCULATOR</h1>

      <div className={styles.calculator}>
        
       <Display displayvalue={calval}></Display>
       <Buttonscontainer onbuttonclick={ onbuttonclick}></Buttonscontainer>
       
      </div>
      </div>
     
   
  );
}

export default App;
