import React, { useState, useEffect } from 'react';
import styles from './Gorny.module.css';

function Gorny(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        'https://static1.s123-cdn-static-a.com/ready_uploads/media/33929/2000_5cde42094ed0a.jpg', 'https://static1.s123-cdn-static-a.com/uploads/5979588/2000_6499a0a1692c1.png', 'https://static1.s123-cdn-static-a.com/uploads/5979588/2000_64999fa523957.png', 'https://static1.s123-cdn-static-a.com/uploads/5979588/2000_64999f1c9adb3_filter_64999f8779d4c.png', 'https://static1.s123-cdn-static-a.com/uploads/5979588/2000_6499a2caedd3c.png'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 10000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.glowny} style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentImageIndex]})`
        }}>
            <h1 className={styles.h1}>{props.h1gorny}</h1>
            <p className={styles.p}>{props.pgorny}</p>
        </div>
    );
}

export default Gorny;
