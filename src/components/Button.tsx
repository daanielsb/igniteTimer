import styles from './Button.module.css'

interface ButtonProps{
    color?: 'primary' | 'secondary' | 'danger' | 'sucess';

}

export function Button(props: ButtonProps) {
    return <button className={styles.button}>Enviar</button>
}