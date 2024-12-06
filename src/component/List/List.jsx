import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import styles from './list.module.css'

export default function List() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.product}>Products</div>
        <Popover >
          <PopoverButton className={styles.popoverButton}>
            Solutions
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className={styles.popoverPanel}
          >
            <div className={styles.popoverContent}>
              <a className={styles.link} href="#">
                <p className={styles.linkTitle}>Insights</p>
                <p className={styles.linkDescription}>Measure actions your users take</p>
              </a>
              <a className={styles.link} href="#">
                <p className={styles.linkTitle}>Automations</p>
                <p className={styles.linkDescription}>Create your own targeted content</p>
              </a>
              <a className={styles.link} href="#">
                <p className={styles.linkTitle}>Reports</p>
                <p className={styles.linkDescription}>Keep track of your growth</p>
              </a>
            </div>
            <div className={styles.popoverContent}>
              <a className={styles.link} href="#">
                <p className={styles.linkTitle}>Documentation</p>
                <p className={styles.linkDescription}>Start integrating products and tools</p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
        <div className={styles.product}>Pricing</div>
      </div>
    </div>
  )
}