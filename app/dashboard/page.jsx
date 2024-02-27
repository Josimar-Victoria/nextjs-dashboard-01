import Card from '@/components/dashboard/card/card'
import React from 'react'
import { cards } from '../api/data'
import styles from "@/components/dashboard.module.css";
import Chart from '@/components/dashboard/chart/chart'
import Transactions from '@/components/dashboard/transactions/transactions'
import Rightbar from '@/components/dashboard/rightbar/rightbar'

function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  )
}

export default Dashboard
