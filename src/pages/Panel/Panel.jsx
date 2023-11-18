import { useState } from 'react'
import styles from './Panel.module.css'
import SuccessPopUp from '../../components/SuccessPopUp/SuccessPopUp'
import { CustomWebcam } from '../../components/CustomWebcam/CustomWebcam'
const Panel = () => {

  const [cpf, setCpf] = useState('')
  const [isCpfComplete, setIsCpfComplete] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const [hasValidCpf, setHasValidCpf] = useState(false)
  const formatCpf = (cpf) =>{
    const newCpf = cpf.replace( /\D/g, '' )
    .replace( /(\d{3})(\d)/, '$1.$2' )
    .replace( /(\d{3})(\d)/, '$1.$2' )
    .replace( /(\d{3})(\d{1,2})/, '$1-$2' )
    .replace( /(-\d{2})/, '$1' );
 
    if (newCpf.length===14) {
      setIsCpfComplete(true)
    }else if(newCpf.length<14 && isCpfComplete){setIsCpfComplete(false)}

    return newCpf
  }



  const validateCpf = () =>{
    setIsLoading(true)
    setTimeout(() => {



      setHasValidCpf(true)      
      setIsLoading(false)
      setCpf('')

    }, 4000);


  }
  return (  
    <div className={styles.panel}>
        { hasValidCpf && <SuccessPopUp message="Acesso Liberado" closeFn={()=>setHasValidCpf(false)}/>}





        {isLoading && <CustomWebcam/>}
        <div className={styles.content}>




            <p className={styles.title}>Insira o CPF</p>

            <div className={styles.data}>
                <input type="text" disabled={isLoading} value={cpf} onChange={(e)=>{setCpf(formatCpf(e.target.value))}} maxLength={14}/>

                
                {!isCpfComplete && !isLoading && <button className={styles.invalid}>Preencha o CPF</button>}
                {isCpfComplete && !isLoading && <button className={styles.confirm} onClick={validateCpf}>Confirmar</button>}
                {isLoading && <button disabled>Carregando</button>}

            </div>
        </div>
    </div>
  )
}

export default Panel