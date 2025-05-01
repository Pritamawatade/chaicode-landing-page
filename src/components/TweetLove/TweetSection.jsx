import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Loader2, ArrowRight } from "lucide-react";
import DeviderLine from "../DeviderLine/DeviderLine";
import PremiumButton from "../Button/LiquidButton";

function TweetSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    // Set up a listener for Twitter widgets loading
    const handleTweetsLoaded = () => {
      setIsLoading(false);
    };

    // Attempt to load Twitter widgets script
    if (window.twttr) {
      window.twttr.ready(() => {
        // Add event listener to detect when widgets are loaded
        window.twttr.events.bind("loaded", handleTweetsLoaded);
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
        window.twttr.events.unbind("loaded", handleTweetsLoaded);
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
      <Twitter className="text-orange-400 mb-4" size={32} />
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
      <div className="flex md:flex-row flex-col flex-wrap items-start justify-center gap-4 py-8 lg:pb-16 px-4 md:px-8 cursor-pointer">
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
            <div className="tweetCard w-full md:w-auto min-w-0 overflow-hidden p-2 flex-1">
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
                  what's the difference between learning with mentor and
                  randomly watching tutorials
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

            <div className="tweetCard w-full md:w-auto min-w-0 overflow-hidden p-2 flex-1">
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
                  what's the difference between learning with mentor and
                  randomly watching tutorials
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

            <div className="tweetCard w-full md:w-auto min-w-0 overflow-hidden p-2 flex-1">
              <blockquote
                className="twitter-tweet"
                data-theme="dark"
                data-dnt="true"
                align="center"
              >
                <p lang="en" dir="ltr">
                  Just won ₹10K in a giveaway! Feeling incredibly lucky and
                  grateful.
                  <br />
                  Thank you,{" "}
                  <a href="https://twitter.com/Hiteshdotcom?ref_src=twsrc%5Etfw">
                    @Hiteshdotcom
                  </a>{" "}
                  and{" "}
                  <a href="https://twitter.com/piyushgarg_dev?ref_src=twsrc%5Etfw">
                    @piyushgarg_dev
                  </a>{" "}
                  for the fantastic giveaway. This has doubled my motivation.
                  <br />
                  Also, thanks to{" "}
                  <a href="https://twitter.com/nirudhuuu?ref_src=twsrc%5Etfw">
                    @nirudhuuu
                  </a>{" "}
                  <a href="https://twitter.com/mukulpadwal?ref_src=twsrc%5Etfw">
                    @mukulpadwal
                  </a>{" "}
                  <a href="https://twitter.com/yntpdotme?ref_src=twsrc%5Etfw">
                    @yntpdotme
                  </a>{" "}
                  <a href="https://t.co/0Vxa4TRL0N">
                    pic.twitter.com/0Vxa4TRL0N
                  </a>
                </p>
                &mdash;{" "}
                <a href="https://twitter.com/jahanweee/status/1907045909394788416?ref_src=twsrc%5Etfw">
                  Jaani (@jahanweee)
                </a>{" "}
                <a href="https://twitter.com/jahanweee/status/1907045909394788416?ref_src=twsrc%5Etfw">
                  April 1, 2025
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

        <PremiumButton />\

    </div>
  );
}

export default TweetSection;
