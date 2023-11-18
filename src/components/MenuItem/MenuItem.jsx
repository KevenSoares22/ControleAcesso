import styles from './MenuItem.module.css'
const MenuItem = ({title, selected, url}) => {
  return (
    <div className={styles.menuItem} style ={{backgroundColor: selected && '#b9b9b838'}} onClick={()=>window.location.replace(url)}>{title && title}</div>
  )
}

export default MenuItem