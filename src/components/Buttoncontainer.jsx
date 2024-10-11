import styles from "./Buttonscontainer.module.css"
const Buttonscontainer = ({onbuttonclick}) => {
    const buttonname=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
    return(
 
    <div className={styles.buttonscontainer}>
    {buttonname.map((buttonname)=>(
        <button className={styles.button} onClick={()=>onbuttonclick(buttonname)}>{buttonname}</button>
    ))}
    </div>
    );
   




};
export default Buttonscontainer;
