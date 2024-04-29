import styles from './Nav.module.css'
import React, { useState, useEffect } from 'react';
// function Nav() {
//     return (
//         <nav className={styles.navi}>
//             <ul className={styles.ul}>
//                 <li><a className={styles.a}> O studiuję IT</a></li>
//                 <li> <a className={styles.a}>Ścieżki nauki</a></li>
//                 <li><a className={styles.a}> dla kogo studiuję IT</a></li>
//                 <li><a className={styles.a}>przednioty</a></li>
//                 <li><a className={styles.a}>kontakt</a></li>
//                 <li><a className={styles.a}>zaloguj się</a></li>
                
//             </ul>
//         </nav>
//     );
// }
// export default Nav

// Nav.jsx




// const Nav = () => {
//     const [isSticky, setIsSticky] = useState(false);
//     const [prevScrollPos, setPrevScrollPos] = useState(0);
  
//     useEffect(() => {
//       const handleScroll = () => {
//         const currentScrollPos = window.pageYOffset;
  
//         if (currentScrollPos >= 100) {
//           setIsSticky(true);
//         } else {
//           setIsSticky(false);
//         }
  
//         setPrevScrollPos(currentScrollPos);
//       };
  
//       window.addEventListener('scroll', handleScroll);
  
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }, []);
  
//     return (
//       <nav id="navbar" className={`${styles.navi} ${isSticky ? styles.sticky : ''}`}>
//         <ul className={styles.ul}>
//           <li><a className={styles.a}> O studiuję IT</a></li>
//           <li> <a className={styles.a}>Ścieżki nauki</a></li>
//           <li><a className={styles.a}> dla kogo studiuję IT</a></li>
//           <li><a className={styles.a}>przednioty</a></li>
//           <li><a className={styles.a}>kontakt</a></li>
//           <li><a className={styles.a}>zaloguj się</a></li>
//         </ul>
//       </nav>
//     );
//   };
  
//   export default Nav;

const Nav = () => {
    const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
      let timeoutId;
  
      const handleScroll = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          const currentScrollPos = window.pageYOffset;
          setIsSticky(currentScrollPos >= 145);
        }); //possible to add delay if used;run  , x;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timeoutId);
      };
    }, []);
  
    return (
      <nav id="navbar" className={`${styles.navi} ${isSticky ? styles.sticky : ''}`}>
        <ul className={styles.ul}>
          <li><a className={styles.a}> O studiuję IT</a></li>
          <li> <a className={styles.a}>Ścieżki nauki</a></li>
          <li><a className={styles.a}> dla kogo studiuję IT</a></li>
          <li><a className={styles.a}>przednioty</a></li>
          <li><a className={styles.a}>kontakt</a></li>
          <li><a className={styles.a}>zaloguj się</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Nav;
