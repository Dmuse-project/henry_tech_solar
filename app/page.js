// app/page.js
'use client';
import { useEffect, useState } from 'react';
import classes from "../styles/home.module.scss"

import Navigation from '@/components/nav';
import HeroSection from '@/components/heroSection';
import UrgencyBar from '@/components/urgencyBar';
import ProblemSection from '@/components/problemSection';
import Lead from '@/components/lead';
import TrustSection from '@/components/trust';
import Footer from '@/components/footer';
import SolutionSection from '@/components/solution';
import StatSection from '@/components/stats';
import ServiceSection from '@/components/service';

export default function Home() {

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

    // // Simulate API call
    // setTimeout(() => {
    //   setIsSubmitting(false);
    //   setShowSuccess(true);
    //   setFormData({
    //     fullName: '',
    //     phone: '',
    //     email: '',
    //     location: '',
    //     propertyType: '',
    //     monthlyBill: '',
    //     urgency: '',
    //     message: ''
    //   });

    //   setTimeout(() => {
    //     setShowSuccess(false);
    //   }, 5000);
    // }, 1500);
  };



  return (
    <div className={classes.container}>
      {/* Navigation */}
      <Navigation />

      <UrgencyBar />

      <HeroSection />

      <ProblemSection />
      <SolutionSection />
      <StatSection />
      <ServiceSection />

      <Lead />
      <TrustSection />

   

      <Footer />


    </div>
  );
}