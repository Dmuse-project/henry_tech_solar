import classes from "../styles/home.module.scss"

export default  function Footer () {
    return (<>
    {/* Footer */}
      <footer className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.footerGrid}>
            <div className={classes.footerBrand}>
              <img src="/logo.jpeg" alt="Henry Tech Solar" className={classes.footerLogo} />
              <p>Premium solar solutions for South-East Nigeria. Engineering energy independence since 2018.</p>
            </div>
            
            <div className={classes.footerCol}>
              <h4>Services</h4>
              <ul>
                <li><a href="#">Residential Solar</a></li>
                <li><a href="#">Commercial Solar</a></li>
                <li><a href="#">Battery Systems</a></li>
                <li><a href="#">Maintenance</a></li>
              </ul>
            </div>
            
            <div className={classes.footerCol}>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            
            <div className={classes.footerCol}>
              <h4>Contact</h4>
              <ul>
                <li>📞 0806-804-5514</li> 
                <li>📧 info@henrytechsolar.ng</li>
                <li>📍 Imo, Nigeria</li>
              </ul>
            </div>
          </div>
          
          <div className={classes.footerBottom}>
            <p>&copy; 2026 Henry Tech Services Nig. Ltd. All rights reserved. | RC Number: 7473694</p>
            <p> powered by Photon Code Innovations</p>
          </div>
        </div>
      </footer>
    </>)
}