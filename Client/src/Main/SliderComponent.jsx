import { motion } from "framer-motion";

const imageColumns = [
  [
    { src: "/smiling-woman-outdoors.png" },
    { src: "/casual-man-sunglasses.png" },
    { src: "/family-cooking.png" },
    { src: "/person-reading.png" },
    { src: "/friends-laughing-coffee.png" },
    { src: "/peaceful-yoga-meditation.png" },
  ],
  [
    { src: "/cute-dog-hat.png" },
    { src: "/couple-walking-park.png" },
    { src: "/child-playing-garden.png" },
    { src: "/person-working-laptop.png" },
    { src: "/friends-hiking-nature.png" },
    { src: "/family-dinner.png" },
  ],
  [
    { src: "/cozy-sleeping-cat.png" },
    { src: "/home-workout.png" },
    { src: "/kids-playing.png" },
    { src: "/meditation-nature.png" },
    { src: "/coffee-morning.png" },
    { src: "/sunset-walk.png" },
  ],
];

const squareSize = 175;

export default function Component() {
  return (
    <div className="h-screen bg-gradient-to-br flex justify-center bg-[#FFFFFF] w-screen">
      <div className="w-screen px-8 lg:px-12 bg-[#FFFFFF]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Go beyond
                <br />
                <span className="text-gray-700">the cushion.</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Get a glimpse into how expert teachers incorporate mindfulness into real-life situations like parenting, running, and even dishwashing. Explore actionable practices that bring mindfulness into daily moments, making it easy to connect with your practice in the midst of your busy life.
              </p>
            </div>
          </div>

          {/* Image Columns */}
          <div className="relative h-[600px] overflow-hidden">
            <div className="flex gap-4 h-full">
              {imageColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="flex-1 relative overflow-hidden">
                  <motion.div
                    className="flex flex-col gap-4"
                    animate={{ y: [0, -2000] }}
                    transition={{
                      duration: 20 + columnIndex * 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {[...column, ...column, ...column].map((img, i) => (
                      <div
                        key={i}
                        className="relative rounded-2xl overflow-hidden shadow-lg bg-white"
                        style={{
                          height: `${squareSize}px`,
                          width: `${squareSize}px`,
                        }}
                      >
                        <img
                          src={img.src || "/placeholder.svg"}
                          alt={`Mindfulness ${i + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Gradient Overlay */}
            {/* <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-blue-50 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-indigo-100 to-transparent z-10" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
