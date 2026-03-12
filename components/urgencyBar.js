import classes from "../styles/home.module.scss"


export default function UrgencyBar (){

    return (<>
        
        {/* Urgency Bar */}
      <div className={classes.urgencyBar} style={{ marginTop: '80px' }}>
        <span className={classes.urgencyIcon}>⚡</span>
        Limited Slots Available: Only 12 installation spots left for March 2026 in South-East Nigeria
      </div>
        </>)
    
}
    

