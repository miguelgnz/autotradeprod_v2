import CarsGrid from '../components/CarsGrid/CarsGrid'

import classes from './Pages.module.css'

const Catalog = () => {
  return (
    <div>
      <div className={classes.pageTitle}>
        <h1>Catálogo</h1>
      </div>
      <CarsGrid />
    </div>
  )
}

export default Catalog