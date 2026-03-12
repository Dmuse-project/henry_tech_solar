
import classes from "../../styles/thankYou.module.scss"
import Link from "next/link"

export default async function ThankYouPage({ searchParams }) {


  const params = await searchParams
  const leadId = params?.lead || "Pending"

  console.log(leadId)

  return (
    <div className={classes.thankYouWrapper}>
      
      <h1>✅ Thank You!</h1>

      <p>Your solar assessment request has been received.</p>

      <p>
        Reference ID: <span className={classes.leadId}>{leadId}</span>
      </p>

      <p>
        Our engineers will contact you within 24 hours.
      </p>

      <Link href="/" className={classes.backButton}>
        ← Back to Home
      </Link>

    </div>
  )
}

