import Navbar from "./Navbar";
// import six from '../assets/six-Photoroom.png'
// import five from '../assets/five-Photoroom.png'
import four from "../assets/four-Photoroom.png";
// import three from '../assets/three-Photoroom.png'
// import two from '../assets/two-Photoroom.png'
// import one from '../assets/one-Photoroom.png'

export default function Banner() {
  return (
    <div className="flex flex-col border h-screen">
      <Navbar />
      <div className="flex flex-row-reverse h-full overflow-hidden">
        <div className="flex-2 h-full flex justify-center flex-col">
          <h1 className="font-mono font-thick text-7xl text-logo-blue">
            Shop for Your Style,
          </h1>
          <h1 className="font-mono font-thick text-7xl text-logo-blue">
            Own the Moment!
          </h1>
          <p className="text-logo-green font-bold text-xl w-4/5">
            {
              /*Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, molestiae!
Lorem ipsum dolor sit amet consectetur.
Lorem, ipsum dolor.*/
            }
            Discover a world of trendy fashion and effortless shopping, where
            style meets convenience and every purchase brings you closer to your
            best look.
          </p>
          <a
            className="bg-white border border-logo-blue text-logo-blue font-extrabold self-start px-8 py-4 mt-5 text-xl rounded-full shadow-button hover:shadow-button-hover"
            href="#d-shopping-title"
          >
            Shop Now!
          </a>
        </div>
        <div className="flex-1 flex justify-start items-center bg-center bg-cover p-0">
          <img src={four} alt="image" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
