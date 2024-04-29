import styles from './Gorny.module.css'

function Gorny(props){
    return(
        <>
        <h1 className={styles.h1}>{props.h1gorny}</h1>
        <p className={styles.p}>{props.pgorny}</p>
        </>
    );
}

export default Gorny