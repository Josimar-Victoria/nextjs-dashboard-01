import Image from 'next/image'
import styles from "@/components/dashboard/products/singleProduct/singleProduct.module.css"

function page() {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                ti
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="hidden" name="id" value='' />
                    <label>Title</label>
                    <input type="text" name="title" placeholder='title' />
                    <label>Price</label>
                    <input type="number" name="price" placeholder='price' />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder='stock' />
                    <label>Color</label>
                    <input
                        type="text"
                        name="color"
                        placeholder="color"
                    />
                    <label>Size</label>
                    <textarea
                        type="text"
                        name="size"
                        placeholder="size"
                    />
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea
                        name="desc"
                        id="desc"
                        rows="10"
                        placeholder='desc'
                    ></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default page
