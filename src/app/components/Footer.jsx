"use client";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Footer() {
  const services = [
    { title: "CAR HISTORY REPORT", path: "/WebDesign" },
    { title: "BIKE HISTORY REPORT", path: "/GoogleAds" },
    { title: "TRUCK HISTORY REPORT", path: "/PropertyManagementSystem" },
    { title: "VAN HISTORY REPORT", path: "/RevenueManagementSystem" },
    { title: "RV HISTORY REPOR", path: "/OTAListingManagement" },
    // { title: "Social Media Marketing", path: "/SocialMediaMarketing" },
  ];

  const quickLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Contact Us", path: "/Contact-page" },
  ];

  const [formData, setFormData] = useState({ email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = { email: formData.email };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_NEWS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitting(false);
          toast.success("Submitted Successfully");
          setFormData({ email: "" });
        },
        () => {
          setIsSubmitting(false);
          toast.error("Submission failed");
        }
      );
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const socialHover = {
    rest: { scale: 1 },
    hover: { scale: 1.2, transition: { duration: 0.2 } }
  };

  return (
    <footer className="bg-black text-white">
      <div className="container px-4 py-12 mx-auto">
        {/* Top Section with Logo and Social Icons */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-center mb-12"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-48"
          >
            <img src="/Logo.png" alt="microthinks-logo" className="w-48 h-auto" />
          </motion.div>
          
          <motion.div 
            variants={staggerChildren}
            className="flex items-center gap-6 mt-6 md:mt-0"
          >
            {[
              { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/", label: "Facebook" },
              { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com", label: "Instagram" },
              { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/", label: "LinkedIn" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500 transition-colors"
                variants={fadeInUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
                whileTap={{ scale: 0.9 }}
              >
                <motion.div variants={socialHover}>
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Footer Grid */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="grid gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Quick Links Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="mb-6 text-lg font-semibold relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-800 -mb-2"></span>
            </h3>
            <motion.div 
              variants={staggerChildren}
              className="space-y-3 text-sm text-gray-300"
            >
              {quickLinks.map((link, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Link href={link.path} className="flex items-center group">
                    <span className="mr-2 text-red-800">›</span>
                    <span className="hover:text-red-800 transition-colors">{link.title}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Our Services Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="mb-6 text-lg font-semibold relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-800 -mb-2"></span>
            </h3>
            <motion.div 
              variants={staggerChildren}
              className="space-y-3 text-sm text-gray-300"
            >
              {services.slice(0, 5).map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Link href={service.path} className="flex items-center group">
                    <span className="mr-2 text-red-800">›</span>
                    <span className="hover:text-red-800 transition-colors">{service.title}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Get In Touch Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="mb-6 text-lg font-semibold relative">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-800 -mb-2"></span>
            </h3>
            <motion.div 
              variants={staggerChildren}
              className="space-y-4 text-sm text-gray-300"
            >
              <motion.a 
                variants={fadeInUp}
                href="mailto:info@microthinks.com" 
                className="flex items-start hover:text-red-800 transition-colors"
              >
                <Mail className="w-4 h-4 mr-3 mt-1 text-red-800 flex-shrink-0" />
                <span>  support@randomcompany.com</span>
              </motion.a>
              
              <motion.a 
                variants={fadeInUp}
                href="https://maps.app.goo.gl/tZvbk84Xks1YcW6G6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start hover:text-red-800 transition-colors"
              >
                <MapPin className="w-4 h-4 mr-3 mt-1 text-red-800 flex-shrink-0" />
                <span>   42 Silicon Street, Tech Valley, San Francisco, CA</span>
              </motion.a>
              
              <motion.div 
                variants={fadeInUp}
                className="flex items-start"
              >
                <Clock className="w-4 h-4 mr-3 mt-1 text-red-800 flex-shrink-0" />
                <span>Mon to Sat: 9am to 5pm</span>
              </motion.div>
              
              <motion.a 
                variants={fadeInUp}
                href="tel:+923" 
                className="flex items-start hover:text-red-800 transition-colors"
              >
                <Phone className="w-4 h-4 mr-3 mt-1 text-red-800 flex-shrink-0" />
                <span>  Call at: +1 234 567 890</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="mb-6 text-lg font-semibold relative">
              Newsletter
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-800 -mb-2"></span>
            </h3>
            <p className="mb-4 text-sm text-gray-300">Have questions or need assistance? Sign up to our newsletter to receive our latest offers.</p>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-3"
              variants={fadeInUp}
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all"
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full px-4 py-3 text-sm font-medium text-white bg-red-800 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2 focus:ring-offset-black transition-colors"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center">
                  {isSubmitting ? "Signing up..." : "Contact Us"}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </span>
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Bottom Section with Copyright */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="pt-6 text-sm border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 MicroThinks. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-gray-400">
              <Link href="/PrivacyPolicy" className="hover:text-red-800 transition-colors">Privacy Policy</Link>
              <Link href="/TermsandCondition" className="hover:text-red-800 transition-colors">Terms of Service</Link>
              <Link href="/CookiePolicy" className="hover:text-red-800 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}