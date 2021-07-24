import React from 'react';
import styles from './Header.module.css'

const Header = (props) => {
    const {title} = props;

    return (
        <>
            <div className={styles.container}>
                <div className={styles.section}>
                    <div className={styles.title}>
                        {title}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;