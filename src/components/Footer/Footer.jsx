import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { 
  Instagram, 
  Youtube, 
  Twitter, 
  Linkedin, 
  Code, 
  Coffee,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Github
} from 'lucide-react';

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverLink, setHoverLink] = useState(null);
  const [isGlowing, setIsGlowing] = useState(false);
  const logoRef = useRef(null);
  const footerControls = useAnimation();
  const gradientControls = useAnimation();
  
  // Track mouse position for gradient effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const footer = document.getElementById('cosmic-footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Animate the footer's background gradient
  useEffect(() => {
    const animateGradient = async () => {
      while (true) {
        await gradientControls.start({
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          transition: { 
            duration: 15, 
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop'
          }
        });
      }
    };
    
    animateGradient();
  }, [gradientControls]);
  
  // Initial animation when component mounts
  useEffect(() => {
    const sequence = async () => {
      await footerControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      });
      
      // Start glowing effect for logo after initial animation
      setIsGlowing(true);
    };
    
    sequence();
  }, [footerControls]);
  
  // Generate floating particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 5 + 2,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100
  }));
  
  // Navigation links
  const navLinks = [
    { group: "Products", links: [
      { name: "Courses", href: "https://courses.chaicode.com/learn" },
      { name: "Cohort", href: "https://courses.chaicode.com/learn/view-all?show=batch&type=17" },
      { name: "Coding Hero", href: "https://courses.chaicode.com/learn/batch/about?bundleId=226894" },
      { name: "FreeAPI", href: "https://freeapi.app/" },
      { name: "Masterji", href: "https://masterji.co/login" },
    ]},
    { group: "Resources", links: [
      { name: "Docs", href: "https://www.chaicode.com/docs" },
      { name: "Privacy Policy", href: "https://www.chaicode.com/privacy-policy" },
      { name: "Terms of Service", href: "https://www.chaicode.com/terms-of-services" },
      { name: "Pricing Policy", href: "https://www.chaicode.com/pricing-policy" },
      { name: "Refund Policy", href: "https://www.chaicode.com/refund-policy" },
    ]}
  ];
  
  // Social media links
  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/hiteshchoudharyofficial/?hl=en", color: "text-pink-500" },
    { name: "Youtube", icon: Youtube, href: "https://www.youtube.com/@chaiaurcode", color: "text-red-500" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/hiteshdotcom", color: "text-sky-400" },
    { name: "LinkedIn", icon: Linkedin, href: "https://in.linkedin.com/in/hiteshchoudhary", color: "text-blue-500" },
    { name: "Discord", icon: MessageSquare, href: "https://hitesh.ai/discord", color: "text-blue-500" },
    { name: "GitHub", icon: Github , href: "https://github.com/hiteshchoudhary/chaiaurcode", color: "text-gray-400" },
  ];
  
  return (
    <motion.footer 
      id="cosmic-footer"
      className="relative bg-black overflow-hidden border-t border-orange-900/30"
      initial={{ opacity: 0, y: 50 }}
      animate={footerControls}
    >
      {/* Cosmic background with animated gradient */}
      <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ 
          background: "linear-gradient(45deg, #ea580c, #1d4ed8, #ea580c)",
          backgroundSize: "400% 400%"
        }}
        animate={gradientControls}
      />
      
      {/* Interactive particles */}
     
      
      {/* Interactive spotlight effect */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none bg-radial-gradient"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(234, 88, 12, 0.4) 0%, rgba(0, 0, 0, 0) 50%)`,
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Content container */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and tag line section */}
          <div className="md:col-span-6 flex flex-col">
         
            
            <div className="flex items-start justify-start mb-4">
              <motion.div 
                ref={logoRef}
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                {/* Logo glow effect */}
                <AnimatePresence>
                  {isGlowing && (
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-orange-500"
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ 
                        opacity: [0.2, 0.5, 0.2], 
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          "0 0 5px 2px rgba(234, 88, 12, 0.3)",
                          "0 0 20px 5px rgba(234, 88, 12, 0.6)",
                          "0 0 5px 2px rgba(234, 88, 12, 0.3)"
                        ]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      style={{ filter: "blur(10px)" }}
                    />
                  )}
                </AnimatePresence>
                
                {/* Logo */}
                <div className="flex items-start space-x-2 relative z-10">
                  <Coffee size={28} className="text-orange-500" />
                  <span className="text-2xl font-bold text-white flex items-center">
                    Chai
                    <motion.span 
                      className="text-orange-500"
                      animate={{ 
                        textShadow: [
                          "0 0 5px rgba(234, 88, 12, 0.5)",
                          "0 0 15px rgba(234, 88, 12, 0.8)",
                          "0 0 5px rgba(234, 88, 12, 0.5)"
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                    >
                      Code
                    </motion.span>
                  </span>
                </div>
              </motion.div>
              
            </div>
            <p className="text-gray-400 mb-6">Home for programmers</p>

            {/* Social links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`${social.color} hover:text-white transition-colors p-2 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-70`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            
            {/* Copyright */}
            <motion.div 
              className="text-gray-500 text-sm mt-auto"
              whileHover={{ color: "#ea580c" }}
            >
              © {new Date().getFullYear()} ChaiCode. All rights reserved.
            </motion.div>
          </div>
          
          {/* Navigation sections */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            {navLinks.map((group) => (
              <div key={group.group}>
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <motion.span
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="mr-2 text-orange-500"
                  >
                    {group.group === "Products" ? <Code size={18} /> : <ExternalLink size={18} />}
                  </motion.span>
                  {group.group}
                </h3>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <motion.li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-gray-400 hover:text-orange-500 transition-colors flex items-center group"
                        onMouseEnter={() => setHoverLink(link.name)}
                        onMouseLeave={() => setHoverLink(null)}
                        whileHover={{ x: 5 }}
                      >
                        <motion.span 
                          animate={{ 
                            opacity: hoverLink === link.name ? 1 : 0,
                            x: hoverLink === link.name ? 0 : -10
                          }}
                          className="mr-1 text-orange-500"
                        >
                          <ArrowRight size={14} />
                        </motion.span>
                        <span>{link.name}</span>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Cosmic footer text */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-800 relative overflow-hidden"
        >
          <motion.div
            className="text-5xl md:text-8xl font-bold opacity-10 tracking-wider absolute -bottom-1/2 w-full text-center select-none pointer-events-none"
            animate={{ 
              x: [0, 10, 0, -10, 0],
              y: [0, -5, 0, -5, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          >
            CHAIAURCODE
          </motion.div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
           
            
            <div className="text-gray-500 text-sm flex items-center">
              <motion.span
                whileHover={{ rotateZ: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-block mr-1"
              >
                <Code size={14} />
              </motion.span>
              with
              <motion.span
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.3 }}
                className="mx-1 text-orange-500"
              >
                ♥
              </motion.span>
              by ChaiCode Team
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}