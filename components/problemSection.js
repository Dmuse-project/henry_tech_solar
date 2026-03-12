import classes from "../styles/home.module.scss"


export default function ProblemSection () {

    return (<>
     {/* Problem Section */}
      <section className={classes.problemSection}>
        <div className={classes.container}>
          <div className={`${classes.sectionHeader} ${classes.fadeIn}`}>
            <span className={classes.sectionTag}>The Problem</span>
            <h2 className={classes.sectionTitle}>How Much Is Unreliable Power Costing You?</h2>
            <p className={classes.sectionSubtitle}>
              Every day without solar, you're burning money on alternatives that never deliver.
            </p>
          </div>

          <div className={classes.painPoints}>
            <div className={`${classes.painCard} ${classes.fadeIn}`}>
              <div className={classes.painIcon}>💸</div>
              <h3>₦150,000+ Monthly on Fuel</h3>
              <p>The average 5-bedroom home in Enugu spends over ₦150,000 monthly on diesel/petrol. That's ₦1.8 million yearly—money that could buy you a complete solar system.</p>
            </div>
            
            <div className={`${classes.painCard} ${classes.fadeIn}`}>
              <div className={classes.painIcon}>🏥</div>
              <h3>Health Hazards</h3>
              <p>Generator fumes cause respiratory issues. The WHO estimates 3.8 million premature deaths annually from household air pollution—don't let your family be a statistic.</p>
            </div>
            
            <div className={`${classes.painCard} ${classes.fadeIn}`}>
              <div className={classes.painIcon}>📉</div>
              <h3>Business Losses</h3>
              <p>Restaurants, hospitals, and offices lose 30-40% productivity to power outages. Cold stores lose inventory. Patients suffer. Deadlines are missed.</p>
            </div>
          </div>
        </div>
      </section>
    </>)
}