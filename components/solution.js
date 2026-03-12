import classes from "../styles/home.module.scss"
import Image from 'next/image';

export default function SolutionSection () {

      const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

    return (<>
         {/* Solution Section */}
      <section className={classes.solutionSection} id="installations">
        <div className={classes.container}>
          <div className={classes.solutionGrid}>
            <div className={`${classes.solutionImage} ${classes.fadeIn}`}>
              <Image  src="/installation-1.jpeg" alt="Professional Solar Installation" width={100} height={100}/>
              {/* <img src="/installation-1.jpeg" alt="Professional Solar Installation" /> */}
              <div className={classes.experienceBadge}>
                <span className={classes.expYears}>8+</span>
                <span className={classes.expText}>Years<br />Experience</span>
              </div>
            </div>
            
            <div className={`${classes.solutionContent} ${classes.fadeIn}`}>
              <span className={classes.sectionTag}>Our Solution</span>
              <h2 className={classes.solutionTitle}>Engineered for Nigerian Conditions</h2>
              <p className={classes.solutionText}>
                We don't just install panels—we engineer complete energy independence. Our systems are designed specifically for South-East Nigeria's climate, grid instability patterns, and your unique power needs.
              </p>
              
              <ul className={classes.featureList}>
                <li>High-efficiency monocrystalline panels (25-year warranty)</li>
                <li>Lithium iron phosphate batteries (10+ year lifespan)</li>
                <li>Hybrid inverters with grid-tie capability</li>
                <li>Remote monitoring via mobile app</li>
                <li>Professional CAC-certified installation team</li>
                <li>24/7 technical support & maintenance</li>
              </ul>

              <button onClick={() => scrollToSection('assessment')} className={classes.btnPrimary}>
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

    </>)
}