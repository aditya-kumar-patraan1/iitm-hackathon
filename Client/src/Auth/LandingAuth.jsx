import React from "react";
import AuthImage from "../assets/AuthImage.png";

const LandingAuth = () => {
  return (
    <div
      className="w-screen min-h-screen flex flex-col gap-5 items-center py-5 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${AuthImage})` }}
    >
      {/* Header */}
      <h1 className="text-black font-bold text-3xl md:text-5xl text-center bg-transparent py-3 px-6 ">
        HAPPIER MEDITATION
      </h1>

      {/* Main Content */}
      <div className="w-full mt-12 flex justify-center items-center lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1 bg-[#FEFEF0] rounded-3xl border border-black p-8 flex flex-col gap-10 shadow-lg">
          <h2 className="text-black font-bold text-xl md:text-2xl text-center">
            Do what it actually takes to be happier.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">
            {/* Card 1 */}
            <div className="bg-transparent rounded-2xl p-4 text-center flex flex-col items-center">
              <img
                src="https://my.meditatehappier.com/packs/media/images/leaf-2a8fbd10bd7ac7561854a1440fb81ed6.svg"
                alt="leaf"
                className="w-14 mb-3"
              />
              <p className="text-lg md:text-xl">
                Learn to meditate from the world’s best teachers with video
                courses & a library of 500+ meditations
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-transparent rounded-2xl p-4 text-center flex flex-col items-center">
              <img
                src="https://my.meditatehappier.com/packs/media/images/meditate-6d899c9883ee458e4cf6f07c4e1c44cf.svg"
                alt="meditation"
                className="w-14 mb-3"
              />
              <p className="text-lg md:text-xl">
                Build your meditation habit during live challenges with
                thousands of other meditators
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-transparent rounded-2xl p-4 text-center flex flex-col items-center">
              <img
                src="https://my.meditatehappier.com/packs/media/images/moon-d357a9cd678e626e771aacf7b89e3459.svg"
                alt="sleep"
                className="w-14 mb-3"
              />
              <p className="text-lg md:text-xl">
                Fall — and stay — asleep with relaxing Sleep sessions
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-transparent rounded-2xl p-4 text-center flex flex-col items-center">
              <img
                src="https://my.meditatehappier.com/packs/media/images/Lightbulb%20Transparent%20Background-6e9f063ae4a4c56b0789bfa2ca588ac9.svg"
                alt="bulb"
                className="w-14 mb-3"
              />
              <p className="text-lg md:text-xl">
                Fit mindfulness into your day with Shorts: quick videos of
                real-life mindfulness insights and tips
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Signup) */}
        <div className="lg:w-1/3 bg-[#FEFEF0] rounded-3xl border border-black shadow-lg p-8 flex flex-col items-center text-center gap-6 h-fit justify-start">
          <h2 className="text-2xl font-bold">Sign up for 7 days free</h2>

          {/* Buttons */}
          <button className="w-full bg-black text-white py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition cursor-pointer">
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg"
              alt="apple"
              className="w-5 h-5"
            />
            Continue with Apple
          </button>
          <button className="w-full bg-black text-white py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition  cursor-pointer">
            <img
              src="https://i0.wp.com/nanophorm.com/wp-content/uploads/2018/04/google-logo-icon-PNG-Transparent-Background.png?fit=1000%2C1000&ssl=1"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <p className="text-gray-600">or</p>

          <button className="w-full border border-black py-3 rounded-full font-semibold hover:bg-gray-100 transition  cursor-pointer">
            Continue with email
          </button>

          {/* Terms */}
          <p className="text-sm text-gray-600">
            By signing up, you agree to our{" "}
            <span className="font-semibold underline cursor-pointer">
              Terms of Service
            </span>
          </p>

          <hr className="w-full border-gray-300" />

          {/* Sign In */}
          <p className="text-sm text-gray-700">
            Already have an account?{" "}
            <span className="font-semibold underline cursor-pointer">
              Sign In
            </span>
          </p>
        </div>
      </div>
      <p>
        Having Issues?{" "}
        <span className="text-gray-700 font-bold hover:underline cursor-pointer">Contact Support</span>
      </p>
    </div>
  );
};

export default LandingAuth;
