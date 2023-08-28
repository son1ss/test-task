import styles from './header.module.css'
import click from '@/assets/icons/click.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Покемоны API</h1>
      <div className={styles.info}>
        <img src={click} alt="иконка курсора" className={styles.infoIcon} />
        <p className={styles.instruction}>Нажмите на нужное Покемона</p>
      </div>
  </header>
  )
}