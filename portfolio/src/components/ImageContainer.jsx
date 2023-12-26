import Image from "next/image";

export const ImageContainer = (props) => {
  const {
    image,
    width,
    height,
    bg,
    top,
    left,
    bigWidth,
    bigHeight,
    topSquare,
  } = props;
  return (
    <div
      className={` w-[${bigWidth}px] h-[${bigHeight}px] relative flex justify-end items-center`}
    >
      <Image
        src={image}
        width={width}
        height={height}
        alt="image"
        className={`absolute -top-3 md:top-0 left-1/2 md:left-3 w-[240px] md:w-[280px] h-[280px] md:h-[320px] z-10 border-white border-[8px]`}
      />

      <div
        className={`w-[280px] md:w-[280px] h-[280px] md:h-[320px] bg-${bg} absolute -top-3 bottom-0 z-[2]`}
      ></div>
    </div>
  );
};
