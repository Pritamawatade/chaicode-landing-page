import { motion } from 'framer-motion';
import { Download, Bell, Zap, Smartphone } from 'lucide-react';
import mobileAppImage from '../../assets/MobileApp.webp'
const MobileAppSection = () => {
  return (
    <section className="bg-gradient-to-tr from-black via-zinc-900 to-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
        {/* LEFT: Phone UI Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={mobileAppImage} // Replace with your actual image path
            alt="ChaiCode App UI"
            className="w-full max-w-md mx-auto rounded-3xl shadow-xl ring-2 ring-orange-400"
          />
        </motion.div>

        {/* RIGHT: Text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-orange-500">
            Learn on the Go
          </h2>
          <p className="text-gray-300 text-lg">
            Take your coding journey anywhere with the <strong>ChaiCode</strong> mobile app.
            Access courses, join live sessions, and connect with the community — all from your pocket.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Zap className="text-orange-400" size={22} />
              <span className="text-white">Offline course access</span>
            </li>
            <li className="flex items-center gap-3">
              <Bell className="text-orange-400" size={22} />
              <span className="text-white">Live session notifications</span>
            </li>
            <li className="flex items-center gap-3">
              <Smartphone className="text-orange-400" size={22} />
              <span className="text-white">Revision while commuting</span>
            </li>
          </ul>

          <div className="flex gap-4 pt-4 flex-wrap">
            <a
              href="https://apps.apple.com/in/app/chaicode/id6504993143"
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-5 rounded-xl flex items-center gap-2 shadow-md transition-transform hover:scale-105"
            >
              <Download size={18} /> App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.chaicode.courses&hl=en_IN&pli=1"
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-5 rounded-xl flex items-center gap-2 shadow-md transition-transform hover:scale-105"
            >
              <Download size={18} /> Google Play
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileAppSection;
