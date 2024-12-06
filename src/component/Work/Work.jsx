// component.jsx
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import styles from './work.module.css'
import data from './work-data.json' // Import the JSON data


export default function Work() {

    const categories = data.categories; // Access categories from JSON
  return (

    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <TabGroup>
          <TabList className={styles.tabList}>
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className={styles.tab}
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className={styles.tabPanels}>
            {categories.map(({ name, posts }) => (
              <TabPanel key={name} className={styles.tabPanel}>
                <ul>
                  {posts.map((post) => (
                    <li key={post.id} className={styles.listItem}>
                      <a href={post.link!=="" ? post.link:null} className={styles.link}>
                        <span className={styles.linkSpan} />
                        {post.title}
                      </a>
                      <p className={styles.disc}>
                        {post.disc}
                      </p>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}