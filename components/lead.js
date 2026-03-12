import { useState } from "react";
import classes from "../styles/home.module.scss"

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Lead() {


    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        location: '',
        address:'',
        budgetType:'',
        propertyType: '',
        monthlyBill: '',
        urgency: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter()


    const handleInputChange = (e) => {

        const {name, value} = e.target
        setFormData((prev) =>({ ...prev, [name]:value}))
       

    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError("")

        // // VALIDATION

        if(!formData.fullName|| !formData.phone || !formData.address || !formData.email ||!formData.location ||!formData.propertyType ||!formData.budgetType ||!formData.urgency ||!formData.message ){
            setError("All  Input field must be filled!")
            toast.error("All required fields must be filled!")
            setIsSubmitting(false)
            return
        }
     

      

        // BACKEND COMMUNICATION
        try {
            const response = await fetch(`/api/leads`, {
                method: "POST",
                headers:{ 
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()
             console.log("form lead form front End 2 try and catch:", formData)

             if(!response.ok){
                toast.error(data.error ||   "Something went wrong. Try again.")
                return
             }

            if (response.ok) {
                // console.log("Request sent sucessfully!")
              
                toast.success("Your solar quote request has been sent!")
              
                setFormData(
                    {
                        fullName: '',
                        phone: '',
                        email: '',
                        location: '',
                        address:'',
                        budgetType:'',
                        propertyType: '',
                        monthlyBill: '',
                        urgency: '',
                        message: ''
                    }
                )

                  setShowSuccess(true)
                    // router.push("/thankYou")
                        router.push(`/thank-you?lead=${data.leadId}`)

            }


        } catch (e) {
              toast.error("Network error. Try again.")
        } finally {
            setIsSubmitting(false)
            setShowSuccess(false)
        }

    }






    return (<>

        {/* Lead Capture Section */}
        <section className={classes.leadSection} id="assessment">
            <div className={classes.container}>
                <div className={classes.leadContainer}>
                    <div className={`${classes.leadHeader} ${classes.fadeIn}`}>
                        <span className={classes.sectionTag}>Free Assessment</span>
                        <h2 className={classes.leadTitle}>Get Your Custom Solar Quote</h2>
                        <p className={classes.leadSubtitle}>Tell us about your power needs and urgency. Our engineers will design a system specifically for your property within 24 hours.</p>
                    </div>

                    <form className={`${classes.leadForm} ${classes.fadeIn}`} onSubmit={handleSubmit}>
                        <div className={classes.formRow}>
                            <div className={classes.formGroup}>
                                <label htmlFor="fullName">Full Name *</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    // required
                                    placeholder="John Doe"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    placeholder="0803 123 4567"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className={classes.formRow}>
                            <div className={classes.formGroup}>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="address">Address *</label>
                                < textarea
                                    type="text"
                                    id="address"
                                    name="address"
                                    required
                                    placeholder="Your address..."
                                    value={formData.address}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>

                            <div className={classes.formGroup}>
                                <label htmlFor="location">Location in South-East *</label>
                                <select
                                    id="location"
                                    name="location"
                                    required
                                    value={formData.location}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select State</option>
                                    <option value="anambra">Anambra</option>
                                    <option value="enugu">Enugu</option>
                                    <option value="imo">Imo</option>
                                    <option value="abia">Abia</option>
                                    <option value="cross-river">Cross-River</option>
                                    <option value="ebonyi">Ebonyi</option>
                                    <option value="rivers">Rivers</option>
                                </select>
                            </div>


                        </div>

                        <div className={classes.formGroup}>
                            <label htmlFor="propertyType">Property Type *</label>
                            <select
                                id="propertyType"
                                name="propertyType"
                                required
                                value={formData.propertyType}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Type</option>
                                <option value="1bedroom">1 Bedroom Flat</option>
                                <option value="3bedroom">3 Bedroom Flat</option>
                                <option value="5bedroom">5 Bedroom Duplex</option>
                                <option value="mansion">Mansion/Estate</option>
                                <option value="shop">Shop/Office</option>
                                <option value="commercial">Commercial Building</option>
                                <option value="industrial">Industrial Facility</option>
                            </select>
                        </div>



                        <div className={classes.formGroup}>
                            <label htmlFor="monthlyBill">Current Monthly Power Cost (₦) *</label>
                            <input
                                type="number"
                                id="monthlyBill"
                                name="monthlyBill"
                                required
                                placeholder="e.g., 150000"
                                value={formData.monthlyBill}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={classes.formGroup}>
                            <label>How urgent is your need for solar? *</label>
                            <div className={classes.urgencySelector}>
                                <div className={classes.urgencyOption}>
                                    <input
                                        type="radio"
                                        id="urgent-now"
                                        name="urgency"
                                        value="critical"
                                        required
                                        checked={formData.urgency === 'critical'}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="urgent-now" className={classes.urgencyLabel}>
                                        <span className={classes.urgencyEmoji}>🔥</span>
                                        <strong>Critical</strong>
                                        <small>Within 1 week</small>
                                    </label>
                                </div>
                                <div className={classes.urgencyOption}>
                                    <input
                                        type="radio"
                                        id="urgent-soon"
                                        name="urgency"
                                        value="high"
                                        checked={formData.urgency === 'high'}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="urgent-soon" className={classes.urgencyLabel}>
                                        <span className={classes.urgencyEmoji}>⚡</span>
                                        <strong>High</strong>
                                        <small>Within 1 month</small>
                                    </label>
                                </div>
                                <div className={classes.urgencyOption}>
                                    <input
                                        type="radio"
                                        id="urgent-planning"
                                        name="urgency"
                                        value="planning"
                                        checked={formData.urgency === 'planning'}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="urgent-planning" className={classes.urgencyLabel}>
                                        <span className={classes.urgencyEmoji}>📅</span>
                                        <strong>Planning</strong>
                                        <small>1-3 months</small>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="budgetType">Budget Range *</label>
                            <select
                                id="budgetType"
                                name="budgetType"
                                required
                                value={formData.budgetType}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Range</option>
                                <option value="1M-2M">₦1M-2M</option>
                                <option value="3M-5M">₦3M-5M</option>
                                <option value="5M-10M">₦5M- 10M</option>
                                <option value="10M-15M">₦10M-15M</option>
                                <option value="15M-30M">₦15M-30M</option>
                                <option value="30M-100M">₦30M-100M</option>
                                <option value="100M+">₦100M+</option>
                            </select>
                        </div>

                        <div className={classes.formGroup}>
                            <label htmlFor="message">Additional Requirements (Optional)</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={3}
                                placeholder="e.g., Need to power 2 AC units, medical equipment, etc."
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                        </div>
                        {error && <p  style={{textAlign:"center", color:"red"}}>{error}</p>}

                        <button
                            type="submit"
                            className={`${classes.submitBtn} ${isSubmitting ? classes.loading : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Processing...' : 'Get My Free Quote Now'}
                        </button>

                        {showSuccess && (
                            <div className={`${classes.successMessage} ${classes.show}`}>
                                <h3>✓ Quote Request Received!</h3>
                                <p>Our team will contact you within 24 hours with your custom solar solution.</p>
                            </div>
                        )}

                        <p className={classes.formNote}>
                            <span className={classes.lockIcon}>🔒</span> Your information is secure. We never share your data with third parties.
                        </p>
                    </form>
                </div>
            </div>
        </section>

    </>)
}