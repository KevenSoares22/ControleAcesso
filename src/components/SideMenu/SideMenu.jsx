import MenuItem from '../MenuItem/MenuItem'
import styles from './SideMenu.module.css'

const SideMenu = ({selected}) => {

    const menuOptions = [{key: 'PANEL', name: 'Painel', url: '/'}, {key: 'HISTORY', name: 'Histórico', url: '/history'}, {key: 'REGISTER', name: 'Cadastrar Usuário', url: '/registerUser'}]
  return (
    <div className={styles.sideMenu}>
        <div className={styles.title}>
            <h2>Controle de Acesso</h2>

        </div>
        <div className={styles.items}>
            {menuOptions && menuOptions.map(item=>(
                <MenuItem key={item.key} title={item.name} selected={item.key===selected} url={item.url}/>



            ))}
        </div>


    </div>
  )
}

export default SideMenu