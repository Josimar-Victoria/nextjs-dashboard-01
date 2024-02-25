import Navbar from '@/components/dashboard/navbar/navbar'
import Sidebar from '@/components/dashboard/sidebar/sidebar'
import styles from "@/components/dashboard.module.css"
import React from 'react'

const layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
            </div>

        </div>
    )
}

export default layout
