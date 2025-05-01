import Aos from "aos";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Loader2, ArrowRight } from "lucide-react";
import DeviderLine from "../DeviderLine/DeviderLine";

function TweetSection() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    Aos.init({ duration: 500 });
    
    // Set up a listener for Twitter widgets loading
    const handleTweetsLoaded = () => {
      setIsLoading(false);
    };
    
    // Attempt to load Twitter widgets script
    if (window.twttr) {
      window.twttr.ready(() => {
        // Add event listener to detect when widgets are loaded
        window.twttr.events.bind('loaded', handleTweetsLoaded);
      });
    } else {
      // If Twitter script isn't loaded yet, set a timeout as fallback
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
    
    return () => {
      // Clean up event listener if it was added
      if (window.twttr) {
        window.twttr.events.unbind('loaded', handleTweetsLoaded);
      }
    };
  }, []);

  // Loading animation component
  const TweetLoadingCard = () => (
    <motion.div 
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      className="flex-1 bg-gray-800 rounded-lg p-4 h-96 flex flex-col items-center justify-center shadow-lg border border-gray-700"
    >
      <Twitter className="text-blue-400 mb-4" size={32} />
      <div className="flex items-center justify-center">
        <Loader2 className="text-orange-500 mr-2 animate-spin" size={24} />
        <p className="text-gray-400">Loading tweet...</p>
      </div>
    </motion.div>
  );

  return (
    <div className="mt-12 py-12">
      <DeviderLine />

      {/* Headline of tweet section */}
      <div className="flex justify-center mt-12 p-0">
        <div data-aos="fade-up">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl text-orange-600 pb-2"
          >
            <span className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#f59e0c] letter-spacing">
              Tweet Love
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-[#f59e0c] rounded-full"
              />
            </span>
          </motion.h1>
        </div>
      </div>

      {/* Twitter/X cards */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 py-8 lg:pb-16 md:px-8 cursor-pointer">
        {isLoading ? (
          // Show loading cards while tweets are loading
          <>
            <TweetLoadingCard />
            <TweetLoadingCard />
            <TweetLoadingCard />
          </>
        ) : (
          // Show actual tweets once loaded
          <>
            <div className="tweetCard flex-1">
              <blockquote
                className="twitter-tweet"
                data-theme="dark"
                data-dnt="true"
                align="center"
              >
                <p lang="en" dir="ltr">
                  When the hard work of the{" "}
                  <a href="https://twitter.com/bharatui?ref_src=twsrc%5Etfw">
                    @bharatui
                  </a>{" "}
                  team finally paid off! But honestly, having{" "}
                  <a href="https://twitter.com/Hiteshdotcom?ref_src=twsrc%5Etfw">
                    @Hiteshdotcom
                  </a>{" "}
                  mentor us has been the greatest reward of all.
                  <br />
                  <br />
                  Grateful for the amazing teammates I get to work with.
                  <a href="https://twitter.com/hashtag/ChaiCode?src=hash&amp;ref_src=twsrc%5Etfw">
                    #ChaiCode
                  </a>{" "}
                  <a href="https://twitter.com/hashtag/BharatUI?src=hash&amp;ref_src=twsrc%5Etfw">
                    #BharatUI
                  </a>{" "}
                  <a href="https://twitter.com/620Sundram?ref_src=twsrc%5Etfw">
                    @620Sundram
                  </a>{" "}
                  <a href="https://twitter.com/AniketDey_?ref_src=twsrc%5Etfw">
                    @AniketDey_
                  </a>{" "}
                  <a href="https://twitter.com/sashpawar11?ref_src=twsrc%5Etfw">
                    @sashpawar11
                  </a>{" "}
                  <a href="https://twitter.com/tiwari_shyam55?ref_src=twsrc%5Etfw">
                    @tiwari_shyam55
                  </a>
                  …
                </p>
                <a href="https://twitter.com/_saumya_ag/status/1916911783584899557?ref_src=twsrc%5Etfw">
                  April 28, 2025
                </a>
              </blockquote>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              />
            </div>

            <div className="tweetCard flex-1">
              <blockquote
                className="twitter-tweet"
                data-theme="dark"
                data-dnt="true"
                align="center"
              >
                <p lang="en" dir="ltr">
                  it's all started in January
                  <br />
                  <br />
                  Best cohort ever
                  <br />
                  <br />
                  couldn't thank myself enough for enrolling in the cohort
                  <br />
                  <br />
                  After this cohort I realize that
                  <br />
                  <br />
                  what's the difference between learning with mentor and randomly
                  watching tutorials
                  <br />
                  <br />
                  it's experience is crazy
                  <br />
                  <br />
                  So again thanks{" "}
                  <a href="https://twitter.com/Hiteshdotcom?ref_src=twsrc%5Etfw">
                    @Hiteshdotcom
                  </a>
                </p>
                &mdash;{" "}
                <a href="https://twitter.com/Pritam_Awatade/status/1917588204506734937?ref_src=twsrc%5Etfw">
                  Pritam (@Pritam_Awatade)
                </a>{" "}
                <a href="https://twitter.com/Pritam_Awatade/status/1917588204506734937?ref_src=twsrc%5Etfw">
                  April 30, 2025
                </a>
              </blockquote>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              />
            </div>

            <div className="tweetCard flex-1">
              <blockquote
                className="twitter-tweet"
                data-theme="dark"
                data-dnt="true"
                align="center"
              >
                <p lang="en" dir="ltr">
                  Feeling super blessed to receive a prize from Hitesh sir ! Now my
                  motivation level is officially higher than my phone's screen time
                  😁.
                  <br />
                  Thank you sir !{" "}
                  <a href="https://twitter.com/Hiteshdotcom?ref_src=twsrc%5Etfw">
                    @Hiteshdotcom
                  </a>{" "}
                  <a href="https://twitter.com/piyushgarg_dev?ref_src=twsrc%5Etfw">
                    @piyushgarg_dev
                  </a>
                </p>
                &mdash;{" "}
                <a href="https://twitter.com/saurabhHD/status/1906390359841640771?ref_src=twsrc%5Etfw">
                  Saurabh (@saurabhHD)
                </a>{" "}
                <a href="https://twitter.com/saurabhHD/status/1906390359841640771?ref_src=twsrc%5Etfw">
                  March 30, 2025
                </a>
              </blockquote>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              />
            </div>
          </>
        )}
      </div>

      {/* Start Learning button */}

     <div className="flex justify-center items-center relative">
          <motion.button
            className="bg-[#e85c0c] cursor-pointer hover:bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight size={24} />
            <span>Start Learning</span>
          </motion.button>
     </div>

    </div>
  );
}

export default TweetSection;