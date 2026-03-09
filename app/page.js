// app/page.js
'use client';
import { useEffect, useState } from 'react';
import classes from "../styles/home.module.scss"

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    propertyType: '',
    monthlyBill: '',
    urgency: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classes.visible);
        }
      });
    }, observerOptions);

    document.querySelectorAll(`.${classes.fadeIn}`).forEach(el => observer.observe(el));

    // Navbar scroll effect
    const navbar = document.querySelector(`.${classes.navbar}`);
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        navbar?.classList.add(classes.scrolled);
      } else {
        navbar?.classList.remove(classes.scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Stats counter animation
    const statsSection = document.querySelector(`.${classes.statsSection}`);
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statNumbers = entry.target.querySelectorAll(`.${classes.statNumber}`);
          statNumbers.forEach(stat => {
            const finalValue = parseInt(stat.getAttribute('data-value') || '0');
            if (!isNaN(finalValue)) {
              animateValue(stat, 0, finalValue, 2000);
            }
          });
          statsObserver.unobserve(entry.target);
        }
      });
    });

    if (statsSection) {
      statsObserver.observe(statsSection);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  const animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start).toString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        location: '',
        propertyType: '',
        monthlyBill: '',
        urgency: '',
        message: ''
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={classes.container}>
      {/* Navigation */}
      <nav className={classes.navbar}>
        <div className={classes.navContainer}>
          <img src="/logo.jpeg" alt="Henry Tech Solar" className={classes.logo} />
          <button onClick={() => scrollToSection('assessment')} className={classes.navCta}>
            Get Free Quote
          </button>
        </div>
      </nav>

      {/* Urgency Bar */}
      <div className={classes.urgencyBar} style={{ marginTop: '80px' }}>
        <span className={classes.urgencyIcon}>⚡</span>
        Limited Slots Available: Only 12 installation spots left for March 2026 in South-East Nigeria
      </div>

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
            <img src="/installation-2.jpeg" alt="Premium Solar Installation by Henry Tech" />
            <div className={classes.floatingBadge}>
              <span className={classes.badgeNumber}>500+</span>
              <span className={classes.badgeText}>Installations<br />Completed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className={classes.problemSection}>
        <div className={classes.container}>
          <div className={`${classes.sectionHeader} ${classes.fadeIn}`}>
            <span className={classes.sectionTag}>The Problem</span>
            <h2 className={classes.sectionTitle}>How Much Is Unreliable Power Costing You?</h2>
            <p className={classes.sectionSubtitle}>
              Every day without solar, you're burning money on alternatives that never deliver.
            </p>
          </div>

          <div className={classes.painPoints}>
            <div className={`${classes.painCard} ${classes.fadeIn}`}>
              <div className={classes.painIcon}>💸</div>
              <h3>₦150,000+ Monthly on Fuel</h3>
              <p>The average 5-bedroom home in Enugu spends over ₦150,000 monthly on diesel/petrol. That's ₦1.8 million yearly—money that could buy you a complete solar system.</p>
            </div>
            
            <div className={`${classes.painCard} ${classes.fadeIn}`}>
              <div className={classes.painIcon}>🏥</div>
              <h3>Health Hazards</h3>
              <p>Generator fumes cause respiratory issues. The WHO estimates 3.8 million premature deaths annually from household air pollution—don't let your family be a statistic.</p>
            </div>
            
            <div className={`${classes.painCard} ${classes.fadeIn}`}>
              <div className={classes.painIcon}>📉</div>
              <h3>Business Losses</h3>
              <p>Restaurants, hospitals, and offices lose 30-40% productivity to power outages. Cold stores lose inventory. Patients suffer. Deadlines are missed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className={classes.solutionSection} id="installations">
        <div className={classes.container}>
          <div className={classes.solutionGrid}>
            <div className={`${classes.solutionImage} ${classes.fadeIn}`}>
              <img src="/installation-1.jpeg" alt="Professional Solar Installation" />
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

      {/* Stats Section */}
      <section className={classes.statsSection}>
        <div className={classes. half_container}>
          <div className={classes.statsGrid}>
            <div className={`${classes.statItem} ${classes.fadeIn}`}>
              <h3 className={classes.statNumber} data-value="500">500+</h3>
              <p>Installations Completed</p>
            </div>
            <div className={`${classes.statItem} ${classes.fadeIn}`}>
              <h3 className={classes.statNumber} data-value="0">0</h3>
              <p>Power Bills for Clients</p>
            </div>
            <div className={`${classes.statItem} ${classes.fadeIn}`}>
              <h3 className={classes.statNumber} data-value="100">100</h3>
              <p>% Customer Satisfaction</p>
            </div>
            <div className={`${classes.statItem} ${classes.fadeIn}`}>
              <h3 className={classes.statNumber} data-value="24">24</h3>
              <p>/7 Support Available</p>
            </div>
          </div>
        </div>
      </section>

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
                    required 
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
                    value={formData.fullName}
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
          </div>
        </div>
      </footer>
    </div>
  );
}