import Search from '@/components/dashboard/search/search'
import styles from '@/components/dashboard/users/users.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Users() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user..." />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>

                                <Image
                                    src="/noavatar.png"
                                    alt='jss' width={40}
                                    height={40}
                                    className={styles.userImage} />
                            </div>

                        </td>
                        <td>JOsimar@gmail.com</td>
                        <td>2/202/10</td>
                        <td>Admin</td>
                        <td>active</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/users/1`}>
                                    <button className={`${styles.button} ${styles.view}`}>
                                        View
                                    </button>
                                </Link>
                                <form action="">
                                    <input type="hidden" name="id" value="" />
                                    <button className={`${styles.button} ${styles.delete}`}>
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Users
