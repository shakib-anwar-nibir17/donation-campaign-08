const Banner = () => {
  return (
    <div className="relative">
      <div className="h-[200px] md:h-[400px] lg:h-[800px] bg-cover relative bg-[url('https://i.ibb.co/SJcHJvg/fc1f79e18cdc1a12320b9b10ec3e253d.jpg')]"></div>
      <div id="div2" className="absolute inset-0 bg-[#FFFFFFF2]">
        <div className="flex justify-center items-center border-2 border-red-200 mt-[50px] md:mt-[130px] lg:mt-[300px]">
          <h1 className="text-xl md:text-2xl lg:text-5xl font-bold">
            I Grow By Helping People In Need
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
