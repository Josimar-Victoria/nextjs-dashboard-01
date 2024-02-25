
import menuItems from "@/data/menuItems"
import styles from "./sidebar.module.css"
import MenuLink from "./menuLink/menuLink"
import Image from "next/image"

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/noavatar.png" alt="imag" width="50" height="50" />
        <span className={styles.username}>John Joe</span>
        <span className={styles.userTitle}>Administrator</span>
      </div>
      <ul className={styles.list}>
        {
          menuItems.map((cat => (
            <li key={cat.title}> <span className={styles.cat}>{cat.title}</span>
              {cat.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          )))
        }
      </ul>
    </div>
  )
}

export default Sidebar
