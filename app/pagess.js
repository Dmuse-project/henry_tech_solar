// app/page.js
'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.scss';

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
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    document.querySelectorAll(`.${styles.fadeIn}`).forEach(el => observer.observe(el));

    const navbar = document.querySelector(`.${styles.navbar}`);
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        navbar?.classList.add(styles.scrolled);
      } else {
        navbar?.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const statsSection = document.querySelector(`.${styles.statsSection}`);
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statNumbers = entry.target.querySelectorAll(`.${styles.statNumber}`);
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
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <img src="/logo.png" alt="Henry Tech Solar" className={styles.logo} />
          <button onClick={() => scrollToSection('assessment')} className={styles.navCta}>
            Get Free Quote
          </button>
        </div>
      </nav>

      {/* Urgency Bar */}
      <div className={styles.urgencyBar} style={{ marginTop: '90px' }}>
        <span className={styles.urgencyIcon}>⚡</span>
        Limited Slots Available: Only 12 installation spots left for March 2026 in South-East Nigeria
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={`${styles.heroContent} ${styles.fadeIn}`}>
            <h1 className={styles.heroTitle}>
              Stop Letting <span className={styles.highlight}>NEPA</span> Control Your Life
            </h1>
            <p className={styles.heroSubtitle}>
              Join 500+ homes and businesses across South-East Nigeria who've eliminated power outages forever with our premium solar installations.
            </p>
            
            <div className={styles.heroBenefits}>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>✓</span>
                <span>24/7 uninterrupted power supply guaranteed</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>✓</span>
                <span>Zero fuel costs, zero generator noise</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>✓</span>
                <span>Payback in 18-24 months vs diesel costs</span>
              </div>
            </div>

            <div className={styles.heroCtaGroup}>
              <button onClick={() => scrollToSection('assessment')} className={styles.btnPrimary}>
                Calculate Your Savings
                <span className={styles.arrow}>→</span>
              </button>
              <button onClick={() => scrollToSection('installations')} className={styles.btnSecondary}>
                View Installations
              </button>
            </div>
          </div>
          
          <div className={`${styles.heroImage} ${styles.fadeIn}`}>
            <img src="/installation-1.jpg" alt="Premium Solar Installation by Henry Tech" />
            <div className={styles.floatingBadge}>
              <span className={styles.badgeNumber}>500+</span>
              <span className={styles.badgeText}>Installations<br />Completed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.fadeIn}`}>
            <span className={styles.sectionTag}>The Problem</span>
            <h2 className={styles.sectionTitle}>How Much Is Unreliable Power Costing You?</h2>
            <p className={styles.sectionSubtitle}>
              Every day without solar, you're burning money on alternatives that never deliver.
            </p>
          </div>

          <div className={styles.painPoints}>
            <div className={`${styles.painCard} ${styles.fadeIn}`}>
              <div className={styles.painIcon}>💸</div>
              <h3>₦150,000+ Monthly on Fuel</h3>
              <p>The average 5-bedroom home in Enugu spends over ₦150,000 monthly on diesel/petrol. That's ₦1.8 million yearly—money that could buy you a complete solar system.</p>
            </div>
            
            <div className={`${styles.painCard} ${styles.fadeIn}`}>
              <div className={styles.painIcon}>🏥</div>
              <h3>Health Hazards</h3>
              <p>Generator fumes cause respiratory issues. The WHO estimates 3.8 million premature deaths annually from household air pollution—don't let your family be a statistic.</p>
            </div>
            
            <div className={`${styles.painCard} ${styles.fadeIn}`}>
              <div className={styles.painIcon}>📉</div>
              <h3>Business Losses</h3>
              <p>Restaurants, hospitals, and offices lose 30-40% productivity to power outages. Cold stores lose inventory. Patients suffer. Deadlines are missed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className={styles.solutionSection} id="installations">
        <div className={styles.container}>
          <div className={styles.solutionGrid}>
            <div className={`${styles.solutionImage} ${styles.fadeIn}`}>
              <img src="/installation-2.jpg" alt="Professional Solar Installation" />
              <div className={styles.experienceBadge}>
                <span className={styles.expYears}>8+</span>
                <span className={styles.expText}>Years<br />Experience</span>
              </div>
            </div>
            
            <div className={`${styles.solutionContent} ${styles.fadeIn}`}>
              <span className={styles.sectionTag}>Our Solution</span>
              <h2 className={styles.solutionTitle}>Engineered for Nigerian Conditions</h2>
              <p className={styles.solutionText}>
                We don't just install panels—we engineer complete energy independence. Our systems are designed specifically for South-East Nigeria's climate, grid instability patterns, and your unique power needs.
              </p>
              
              <ul className={styles.featureList}>
                <li>High-efficiency monocrystalline panels (25-year warranty)</li>
                <li>Lithium iron phosphate batteries (10+ year lifespan)</li>
                <li>Hybrid inverters with grid-tie capability</li>
                <li>Remote monitoring via mobile app</li>
                <li>Professional CAC-certified installation team</li>
                <li>24/7 technical support & maintenance</li>
              </ul>

              <button onClick={() => scrollToSection('assessment')} className={styles.btnPrimary}>
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={`${styles.statItem} ${styles.fadeIn}`}>
              <h3 className={styles.statNumber} data-value="500">0</h3>
              <p>Installations Completed</p>
            </div>
            <div className={`${styles.statItem} ${styles.fadeIn}`}>
              <h3 className={styles.statNumber} data-value="0">0</h3>
              <p>Power Bills for Clients</p>
            </div>
            <div className={`${styles.statItem} ${styles.fadeIn}`}>
              <h3 className={styles.statNumber} data-value="100">0</h3>
              <p>% Customer Satisfaction</p>
            </div>
            <div className={`${styles.statItem} ${styles.fadeIn}`}>
              <h3 className={styles.statNumber} data-value="24">0</h3>
              <p>/7 Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.fadeIn}`}>
            <span className={styles.sectionTag}>Solutions</span>
            <h2 className={styles.sectionTitle}>Tailored for Every Need</h2>
          </div>

          <div className={styles.servicesGrid}>
            <div className={`${styles.serviceCard} ${styles.fadeIn}`}>
              <div className={`${styles.serviceImage} ${styles.residential}`}>
                <span className={styles.serviceEmoji}>🏠</span>
              </div>
              <div className={styles.serviceContent}>
                <h3>Residential Solar</h3>
                <p>Complete home power solutions from 3kVA to 20kVA. Power everything from basic lighting to full air conditioning without generator backup.</p>
                <div className={styles.servicePrice}>From ₦2.5M</div>
              </div>
            </div>

            <div className={`${styles.serviceCard} ${styles.fadeIn}`}>
              <div className={`${styles.serviceImage} ${styles.commercial}`}>
                <span className={styles.serviceEmoji}>🏢</span>
              </div>
              <div className={styles.serviceContent}>
                <h3>Commercial Solar</h3>
                <p>Scalable solutions for offices, hotels, hospitals, and factories. Reduce operational costs by 60-80% while ensuring zero downtime.</p>
                <div className={styles.servicePrice}>From ₦5M</div>
              </div>
            </div>

            <div className={`${styles.serviceCard} ${styles.fadeIn}`}>
              <div className={`${styles.serviceImage} ${styles.battery}`}>
                <span className={styles.serviceEmoji}>🔋</span>
              </div>
              <div className={styles.serviceContent}>
                <h3>Battery Backup Systems</h3>
                <p>Already have panels? Upgrade with premium lithium batteries for overnight power. Compatible with most existing installations.</p>
                <div className={styles.servicePrice}>From ₦1.2M</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className={styles.leadSection} id="assessment">
        <div className={styles.container}>
          <div className={styles.leadContainer}>
            <div className={`${styles.leadHeader} ${styles.fadeIn}`}>
              <span className={styles.sectionTag}>Free Assessment</span>
              <h2 className={styles.leadTitle}>Get Your Custom Solar Quote</h2>
              <p className={styles.leadSubtitle}>Tell us about your power needs and urgency. Our engineers will design a system specifically for your property within 24 hours.</p>
            </div>

            <form className={`${styles.leadForm} ${styles.fadeIn}`} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
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
                <div className={styles.formGroup}>
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

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
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
                <div className={styles.formGroup}>
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
                    <option value="ebonyi">Ebonyi</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="propertyType">Property Type *</label>
                <select 
                  id="propertyType" 
                  name="propertyType" 
                  required
                  value={formData.propertyType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Type</option>
                  <option value="3bedroom">3 Bedroom Flat</option>
                  <option value="5bedroom">5 Bedroom Duplex</option>
                  <option value="mansion">Mansion/Estate</option>
                  <option value="shop">Shop/Office</option>
                  <option value="commercial">Commercial Building</option>
                  <option value="industrial">Industrial Facility</option>
                </select>
              </div>

              <div className={styles.formGroup}>
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

              <div className={styles.formGroup}>
                <label>How urgent is your need for solar? *</label>
                <div className={styles.urgencySelector}>
                  <div className={styles.urgencyOption}>
                    <input 
                      type="radio" 
                      id="urgent-now" 
                      name="urgency" 
                      value="critical" 
                      required
                      checked={formData.urgency === 'critical'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="urgent-now" className={styles.urgencyLabel}>
                      <span className={styles.urgencyEmoji}>🔥</span>
                      <strong>Critical</strong>
                      <small>Within 1 week</small>
                    </label>
                  </div>
                  <div className={styles.urgencyOption}>
                    <input 
                      type="radio" 
                      id="urgent-soon" 
                      name="urgency" 
                      value="high"
                      checked={formData.urgency === 'high'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="urgent-soon" className={styles.urgencyLabel}>
                      <span className={styles.urgencyEmoji}>⚡</span>
                      <strong>High</strong>
                      <small>Within 1 month</small>
                    </label>
                  </div>
                  <div className={styles.urgencyOption}>
                    <input 
                      type="radio" 
                      id="urgent-planning" 
                      name="urgency" 
                      value="planning"
                      checked={formData.urgency === 'planning'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="urgent-planning" className={styles.urgencyLabel}>
                      <span className={styles.urgencyEmoji}>📅</span>
                      <strong>Planning</strong>
                      <small>1-3 months</small>
                    </label>
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
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
                className={`${styles.submitBtn} ${isSubmitting ? styles.loading : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Get My Free Quote Now'}
              </button>

              {showSuccess && (
                <div className={`${styles.successMessage} ${styles.show}`}>
                  <h3>✓ Quote Request Received!</h3>
                  <p>Our team will contact you within 24 hours with your custom solar solution.</p>
                </div>
              )}

              <p className={styles.formNote}>
                <span className={styles.lockIcon}>🔒</span> Your information is secure. We never share your data with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className={styles.trustSection}>
        <div className={styles.container}>
          <span className={styles.sectionTag}>Trusted By</span>
          <h3 className={styles.trustTitle}>Serving All South-East Nigeria</h3>
          <div className={styles.trustLogos}>
            <div className={styles.trustItem}>Enugu</div>
            <div className={styles.trustItem}>Onitsha</div>
            <div className={styles.trustItem}>Owerri</div>
            <div className={styles.trustItem}>Aba</div>
            <div className={styles.trustItem}>Abakaliki</div>
            <div className={styles.trustItem}>Awka</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <img src="/logo.png" alt="Henry Tech Solar" className={styles.footerLogo} />
              <p>Premium solar solutions for South-East Nigeria. Engineering energy independence since 2018.</p>
            </div>
            
            <div className={styles.footerCol}>
              <h4>Services</h4>
              <ul>
                <li><a href="#">Residential Solar</a></li>
                <li><a href="#">Commercial Solar</a></li>
                <li><a href="#">Battery Systems</a></li>
                <li><a href="#">Maintenance</a></li>
              </ul>
            </div>
            
            <div className={styles.footerCol}>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            
            <div className={styles.footerCol}>
              <h4>Contact</h4>
              <ul>
                <li>📞 0803-XXX-XXXX</li>
                <li>📧 info@henrytechsolar.ng</li>
                <li>📍 Enugu, Nigeria</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p>&copy; 2026 Henry Tech Services Nig. Ltd. All rights reserved. | RC Number: XXXXXXX</p>
          </div>
        </div>
      </footer>
    </div>
  );
}