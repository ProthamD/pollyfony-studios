"use client";

import React, { useState, useEffect } from 'react'
import Lottie from "react-lottie";
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import { testimonials } from '@/Data';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { FaMusic, FaUsers, FaGithub, FaTwitter, FaInstagram, FaTelegram } from 'react-icons/fa'; // Add icons
import animationData from '@/Data/confetti.json'
import { FaComputer, FaWebAwesome } from 'react-icons/fa6';
import MagicButton from './ui/MagicButton';
import { IoCopyOutline } from 'react-icons/io5';

const Hero = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<string[]>([]); // Fixed typing here

  // Current Date and Time (UTC): 2025-05-21 17:38:13
  // Current User's Login: ProthamD

  useEffect(() => {
    // Animate items in sequence when content is displayed
    if (isClicked) {
      const items = ['header', 'description', 'testimonials', 'features', 'cta'];
      let timeout = 100;

      items.forEach((item, index) => {
        setTimeout(() => {
          setAnimatedItems(current => [...current, item]);
        }, timeout * (index + 1));
      });
    } else {
      setAnimatedItems([]);
    }
  }, [isClicked]);

  const handleMouseDown = () => {
    if (!isClicked) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    if (!isClicked) {
      setIsPressed(false);
    }
  };

  const handleClick = () => {
    // Toggle the clicked state
    if (!isClicked) {
      setIsClicked(true);
      console.log("Polyfony clicked and transformed!");
    }
  };

  const handleBackButton = () => {
    setIsClicked(false);
    setIsPressed(false);
  };

  // Animation classes for staggered entrance
  const getAnimationClass = (item: string) => {
    return animatedItems.includes(item) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4';
  };

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "protham.dey@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div className='w-full h-screen relative'> {/* Added h-screen and relative to parent */}
      {/* Fixed backgroundGradient positioning */}
      <div className="absolute inset-0 w-full h-full">
        <BackgroundGradientAnimation />
      </div>

      {!isClicked ? (
        // Original Polyfony button with improved styling - fixed positioning
        <div
          className={`sm:text-8xl text-center font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 
                     border-gradient-pink-rose rounded-full p-9 cursor-pointer max-sm:text-4xl
                     transition-all duration-300 ease-in-out bg-black/10 backdrop-blur-sm inline-block
                     ${isPressed ? 'scale-90' : 'hover:scale-105'}`}
          style={{
            boxShadow: isPressed ? 'inset 0 8px 16px rgba(0,0,0,0.3)' : '0 8px 24px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.3s ease, background-color 0.3s ease',
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => !isClicked && setIsPressed(false)}
          onClick={handleClick}
        >
          <span className='bg-gradient-to-r from-pink-500 to-rose-500 text-transparent bg-clip-text'>
            Pollyfony
          </span>
        </div>
      ) : (
        // Enhanced transformed content with better structure and animations
        <div
          className="bg-white/90 backdrop-blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 
                    p-8 w-[95%] max-w-5xl animate-fadeIn overflow-y-auto max-h-[90vh] scrollbar-hide
                    rounded-2xl border-gradient-pink-rose shadow-2xl"
        >
          {/* Navigation */}
          <nav className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <img
                src="/image.png"
                alt="pollyfony"
                className={`h-12 w-auto object-contain rounded-full shadow-md border-gradient-pink-rose transition-all duration-500 ${getAnimationClass('header')}`}
                style={{ maxWidth: '60px' }}
              />
              <span className="font-bold text-xl bg-gradient-to-r from-pink-500 to-rose-500 text-transparent bg-clip-text">Pollyfony</span>
            </div>

          </nav>

          {/* Hero Section */}
          <div className={`transition-all duration-700 ease-out ${getAnimationClass('header')}`}>
            <h1 className="text-5xl font-bold mb-6 w-full text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-black">
              Welcome to <span className='bg-gradient-to-r from-pink-500 to-rose-500 text-transparent bg-clip-text'>Pollyfony</span>
            </h1>
          </div>

          <p className={`text-lg mb-10 text-center px-4 w-full max-w-3xl mx-auto text-gray-700 font-medium leading-relaxed transition-all duration-700 ease-out delay-100 ${getAnimationClass('description')}`}>
            At Pollyfony, we craft visually stunning and intuitively functional websites that resonate with your brand’s unique voice. Led by Polina, our studio blends creativity with precision, transforming ideas into seamless digital experiences. Whether you’re a startup, artist, or established business, we design with a symphony of aesthetics and technology to ensure your online presence strikes the right chord. {new Date().getFullYear() - 2024 + 1} years and counting, led by Polina.
          </p>

          {/* Feature Cards */}
          <div className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-700 ease-out delay-200 ${getAnimationClass('features')}`}>
            <div className="bg-gradient-to-b from-pink-400 to-rose-500
backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-violet-200">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <FaComputer className="text-pink-500 text-xl" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-pink-100">Create Website</h3>
              <p className="text-pink-100">Access powerful templates to design, edit, and function your websites.</p>
            </div>

            <div className="bg-gradient-to-b from-pink-400 to-rose-500
 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-rose-400">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <FaUsers className="text-rose-500 text-xl" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-pink-100">Collaborate</h3>
              <p className="text-pink-100">Connect with me from anywhere russia and work together on web-designing projects.</p>
            </div>

            <div className="bg-gradient-to-b from-pink-400 to-rose-500
backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-pink-400">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <FaWebAwesome className="text-pink-500 text-xl" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-pink-100">Share & Discover</h3>
              <p className="text-pink-100">Publish your work and discover inspiring websites</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className={`py-10 transition-all duration-700 ease-out delay-300 ${getAnimationClass('testimonials')}`} id='testimonials'>
            <h2 className='text-3xl font-bold text-center mb-8'>
              Kind Words From
              <span className='bg-gradient-to-r from-pink-500 to-rose-500 text-transparent bg-clip-text'> Satisfied Clients</span>
            </h2>

            <div className='w-full overflow-hidden rounded-xl shadow-lg'>
              <InfiniteMovingCards
                items={testimonials}
                direction='right'
                speed='slow'
                className="py-4"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className={`flex flex-col items-center mt-10 pb-4 transition-all duration-700 ease-out delay-400 ${getAnimationClass('cta')}`}>
            <div className="flex gap-4 mb-8 justify-evenly">
              <div
                className="border-gradient-pink-rose bg-transparent text-gray-800 px-9 h-10 rounded-full font-semibold 
             hover:bg-pink-500 transition-all duration-300 ease-in-out transform hover:scale-105 
             inline-flex items-center text-base relative top-11 cursor-pointer"
                onClick={handleBackButton}
              >
                Back to Home
              </div>
              <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-pink-500 hover:!bg-pink-600 text-white px-6 py-3"
                handleClick={handleCopy}
              />
            </div>

            {/* Footer */}
            <div className="w-full pt-6 border-t border-gray-200 flex justify-between items-center">
              <p className="text-sm text-gray-500">© 2025 Pollyfony. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="t.me/fvapolina" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <FaTelegram />
                </a>

                <a href="https://github.com/fvapolina" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero