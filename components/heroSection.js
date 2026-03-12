import classes from "../styles/home.module.scss"


export default function HeroSection(){

      const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


    return(<>
      {/* Hero Section */}
      <section className={classes.hero}>
        <div className={classes.heroContainer}>
          <div className={`${classes.heroContent} ${classes.fadeIn}`}>
            <h1 className={classes.heroTitle}>
              Stop Letting <span className={classes.highlight}>NEPA</span> Control Your Life
            </h1>
            <p className={classes.heroSubtitle}>
              Join 500+ homes and businesses across South-East Nigeria who've eliminated power outages forever with our premium solar installations.
            </p>
            
            <div className={classes.heroBenefits}>
              <div className={classes.benefitItem}>
                <span className={classes.benefitIcon}>✓</span>
                <span>24/7 uninterrupted power supply guaranteed</span>
              </div>
              <div className={classes.benefitItem}>
                <span className={classes.benefitIcon}>✓</span>
                <span>Zero fuel costs, zero generator noise</span>
              </div>
              <div className={classes.benefitItem}>
                <span className={classes.benefitIcon}>✓</span>
                <span>Payback in 18-24 months vs diesel costs</span>
              </div>
            </div>

            <div className={classes.heroCtaGroup}>
              <button onClick={() => scrollToSection('assessment')} className={classes.btnPrimary}>
                Calculate Your Savings
                <span className={classes.arrow}>→</span>
              </button>
              <button onClick={() => scrollToSection('installations')} className={classes.btnSecondary}>
                View Installations
              </button>
            </div>
          </div>
          
          <div className={`${classes.heroImage} ${classes.fadeIn}`}>
            {/* <Image src="/installation-2.jpeg" alt="Premium Solar Installation by Henry Tech" width={100} height={100} className={classes.heroImage__img} /> */}
            <img src="/installation-2.jpeg" alt="Premium Solar Installation by Henry Tech" />
            <div className={classes.floatingBadge}>
              <span className={classes.badgeNumber}>500+</span>
              <span className={classes.badgeText}>Installations<br />Completed</span>
            </div>
          </div>
        </div>
      </section>

    </>)
}