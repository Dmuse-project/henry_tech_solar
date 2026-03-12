import classes from "../styles/home.module.scss"

export default function ServiceSection () {

    return(<>
    
       {/* Services Section */}
      <section className={classes.servicesSection}>
        <div className={classes.container}>
          <div className={`${classes.sectionHeader} ${classes.fadeIn}`}>
            <span className={classes.sectionTag}>Solutions</span>
            <h2 className={classes.sectionTitle}>Tailored for Every Need</h2>
          </div>

          <div className={classes.servicesGrid}>
            <div className={`${classes.serviceCard} ${classes.fadeIn}`}>
              <div className={`${classes.serviceImage} ${classes.residential}`}>
                <span className={classes.serviceEmoji}>🏠</span>
              </div>
              <div className={classes.serviceContent}>
                <h3>Residential Solar</h3>
                <p>Complete home power solutions from 3kVA to 20kVA. Power everything from basic lighting to full air conditioning without generator backup.</p>
                <div className={classes.servicePrice}>From ₦2.5M</div>
              </div>
            </div>

            <div className={`${classes.serviceCard} ${classes.fadeIn}`}>
              <div className={`${classes.serviceImage} ${classes.commercial}`}>
                <span className={classes.serviceEmoji}>🏢</span>
              </div>
              <div className={classes.serviceContent}>
                <h3>Commercial Solar</h3>
                <p>Scalable solutions for offices, hotels, hospitals, and factories. Reduce operational costs by 60-80% while ensuring zero downtime.</p>
                <div className={classes.servicePrice}>From ₦5M</div>
              </div>
            </div>

            <div className={`${classes.serviceCard} ${classes.fadeIn}`}>
              <div className={`${classes.serviceImage} ${classes.battery}`}>
                <span className={classes.serviceEmoji}>🔋</span>
              </div>
              <div className={classes.serviceContent}>
                <h3>Battery Backup Systems</h3>
                <p>Already have panels? Upgrade with premium lithium batteries for overnight power. Compatible with most existing installations.</p>
                <div className={classes.servicePrice}>From ₦1.2M</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>)
}