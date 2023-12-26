import Image from "next/image";

export const ImageContainer = (props) => {
  const { image, width, height, bg } = props;
  return (
    <div
      className={`w-full md:w-[400px] h-[300px] md:h-[360px] relative flex items-end md:items-center justify-center md:justify-start`}
    >
      <Image
        src={image}
        width={width}
        height={height}
        alt="image"
        className={`absolute top-5 md:top-[11px] left-[1/2] md:left-[30px] w-[240px] md:w-[280px] h-[280px] md:h-[320px] z-10 border-white border-[8px]`}
      />

      <div
        className={`w-[280px] md:w-[280px] h-[280px] md:h-[320px] bg-${bg} absolute bottom-0 top-10 right-[1/2] md:right-0 z-[2]`}
      ></div>
    </div>
  );
};
