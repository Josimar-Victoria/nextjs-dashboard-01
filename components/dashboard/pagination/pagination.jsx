"use client";

import styles from "./pagination.module.css";

function Pagination() {
    return (
        <div className={styles.container}>
            <button
                className={styles.button}

                onClick={() => { }}
            >
                Previous
            </button>
            <button
                className={styles.button}

                onClick={() => { }}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination
