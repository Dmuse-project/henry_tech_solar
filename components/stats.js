import classes from "../styles/home.module.scss"

export default  function StatSection () {

    return(<>
          {/* Stats Section */}
      <section className={classes.statsSection}>
        <div className={classes. half_container}>
          <div className={classes.statsGrid}>
            <div className={`${classes.statItem} ${classes.fadeIn}`}>
              <h3 className={classes.statNumber} data-value="500">500+</h3>
              <p>Installations Completed</p>
            </div>
            <div className={`${classes.statItem} ${classes.fadeIn}`}>
              <h3 className={classes.statNumber} data-value="0">0</h3>
              <p>Power Bills for Clients</p>
            </div>
            <div className={`${classes.statItem} ${classes.fadeIn}`}>
              <h3 className={classes.statNumber} data-value="100">100</h3>
              <p>% Customer Satisfaction</p>
            </div>
            <div className={`${classes.statItem} ${classes.fadeIn}`}>
              <h3 className={classes.statNumber} data-value="24">24</h3>
              <p>/7 Support Available</p>
            </div>
          </div>
        </div>
      </section>

    </>)
}