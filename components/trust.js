import classes from "../styles/home.module.scss"

export default  function TrustSection () {
    return(<>
     {/* Trust Section */}
      <section className={classes.trustSection}>
        <div className={classes. trust_container}>
          <span className={classes.sectionTag}>Trusted By</span>
          <h3 className={classes.trustTitle}>Serving All South-East Nigeria</h3>
          <div className={classes.trustLogos}>
            <div className={classes.trustItem}>Enugu</div>
            <div className={classes.trustItem}>Onitsha</div>
            <div className={classes.trustItem}>Owerri</div>
            <div className={classes.trustItem}>Rivers</div>
            <div className={classes.trustItem}>Aba</div>
            <div className={classes.trustItem}>Imo</div>
            <div className={classes.trustItem}>Abakaliki</div>
            <div className={classes.trustItem}>Awka</div>
          </div>
        </div>
      </section>
    </>)

}