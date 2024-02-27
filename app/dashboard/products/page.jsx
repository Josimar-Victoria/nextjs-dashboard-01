import Pagination from '@/components/dashboard/pagination/pagination'
import Search from '@/components/dashboard/search/search'
import styles from '@/components/dashboard/products/products.module.css'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Products() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..." />
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>

                                <Image
                                    src="/noproduct.jpg"
                                    alt='jss' width={40}
                                    height={40}
                                    className={styles.productImage} />
                                Iphone
                            </div>

                        </td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing</td>
                        <td>$1000</td>
                        <td>2/202/10</td>
                        <td>active</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/products/1`}>
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
            <Pagination />
        </div>
    )
}

export default Products
