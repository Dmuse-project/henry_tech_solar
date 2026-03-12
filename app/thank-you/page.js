
// "use client"

// import { useSearchParams } from "next/navigation"

// export default function ThankYou(){

//   const params = useSearchParams()
//   const leadId = params.get("lead")

//   return (
//     <div style={{textAlign:"center", padding:"80px"}}>
//       <h1>✅ Thank You!</h1>
//       <p>Your solar assessment request has been received.</p>

//       <p>
//         Reference ID: <strong>{leadId}</strong>
//       </p>

//       <p>
//         Our engineers will contact you within 24 hours.
//       </p>
//     </div>
//   )
// }


"use client";

import { useSearchParams } from "next/navigation";
import classes from "../../styles/thankYou.module.scss";
import Link from "next/link";

export default function ThankYou() {
  const params = useSearchParams();
  const leadId = params.get("lead");

  return (
    <div className={classes.thankYouWrapper}>
      <h1>✅ Thank You!</h1>
      <p>Your solar assessment request has been received.</p>

      <p>
        Reference ID: <span className={classes.leadId}>{leadId}</span>
      </p>

      <p>Our engineers will contact you within 24 hours.</p>

      <Link href="/" className={classes.backButton}>
        ← Back to Home
      </Link>
    </div>
  );
}