import { useEffect } from 'react'
import styles from './SuccessPopUp.module.css'

const SuccessPopUp = ({message, closeFn}) => {

    useEffect(()=>{setTimeout(() => {
        closeFn()
    }, 4000);}, [])
  return (
    <div className={styles.successPopUp}>
        <div className={styles.content}><p>{message}</p></div>
        


    </div>
  )
}

export default SuccessPopUp