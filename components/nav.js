

import classes from "../styles/home.module.scss"
export default function Navigation(){

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

    return(<>
      <nav className={classes.navbar}>
        <div className={classes.navContainer}>

          <img src="/logo.jpeg" alt="Henry Tech Solar" className={classes.logo} />
          <button onClick={() => scrollToSection('assessment')} className={classes.navCta}>
            Get Free Quote
          </button>
        </div>
      </nav>
    </>)
}