import Image from "next/image";

export const ImageContainer = (props) => {
  const { image, width, height, bg, isProfile, isProfileDiv, isProfilePic } =
    props;

  const heroStyle =
    "w-[280px] md:w-[280px] h-[280px] md:h-[320px] bg-gray-200 absolute bottom-0 top-10 right-[1/2] md:right-0 z-[2] border-white border-[8px]";
  const profileStyle =
    "w-[320px] md:w-[400px] h-[360px] md:h-[480px] bg-gray-200 absolute bottom-0 top-10 border-white border-[8px]";

  const heroDivStyle =
    "w-full md:w-[400px] h-[300px] md:h-[360px] relative flex items-end md:items-center justify-center md:justify-start";

  const profileDivStyle =
    " w-full h-[420px] md:h-full relative flex items-end md:items-center justify-center md:justify-start";

  const heroPic =
    "absolute top-5 md:top-[11px] left-[1/2] md:left-[30px] w-[240px] md:w-[280px] h-[280px] md:h-[320px] z-10 border-white border-[8px]";

  const profilePic =
    "absolute top-5 md:top-[11px] left-[1/2] md:left-[30px] w-[280px] md:w-[400px] h-[360px] md:h-[480px] z-10 border-white border-[8px]";

  console;
  return (
    <div className={isProfileDiv ? profileDivStyle : heroDivStyle}>
      <Image
        src={image}
        width={width}
        height={height}
        alt="image"
        className={isProfilePic ? profilePic : heroPic}
      />

      <div className={isProfile ? profileStyle : heroStyle}></div>
    </div>
  );
};
