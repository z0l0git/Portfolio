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
      className="relative flex justify-end items-center"
      style={{ width: bigWidth, height: bigHeight }}
    >
      <Image
        src={image}
        width={width}
        height={height}
        className="absolute  z-10"
        style={{ width: width, height: width, top: top, left: left }}
      ></Image>
      <div
        className="w-[280px] h-[320px] bg-gray-200 absolute z-[2]"
        style={{ bg: bg, width: width, height: height, top: topSquare }}
      ></div>
    </div>
  );
};
