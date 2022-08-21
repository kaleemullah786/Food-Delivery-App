import React from 'react'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import FoodBankIcon from '@mui/icons-material/FoodBank';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import styles from '../CreateContainer.module.css'

const CreateContainer = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.flex}>
        <PlaylistAddIcon className={styles.icon} />
        <input className={`${styles.input} ${styles.title}`} type="text" placeholder='Give your title here...' />
      </div>
      <div>
        <select className={styles.select}  >
          <option value="Select a category">--Select a category--</option>
          <option value="Icecreams">Icecreams</option>
          <option value="Icecreams">Icecreams</option>
          <option value="Icecreams">Icecreams</option>
          <option value="Icecreams">Icecreams</option>
        </select>
      </div>
      <div className={styles.upload}>
        <label>Upload Image
          <input className={styles.uploadInput} type="file" />
        </label>
      </div>
      <div className={styles.innerGrid}>
        <div className={styles.flex}>
          <FoodBankIcon className={styles.icon} />
          <input className={styles.input} type="text" placeholder='Calories' />
        </div>
        <div className={styles.flex}>
          <AttachMoneyIcon className={styles.icon} />
          <input className={styles.input} type="text" placeholder='Price' />
        </div>
      </div>
      <div>
        <button className={styles.btnSave}>Save</button>
      </div>
    </div>
  )
}

export default CreateContainer