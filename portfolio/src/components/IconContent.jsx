import Image from "next/image";

export const IconContent = (props) => {
  const { image, text, width = "64px" } = props;
  return (
    <div className="w-fit h-fit flex flex-col items-center justify-center gap-[8px] flex-wrap">
      <div className={`relative  h-[64px]`} style={{ width }}>
        <Image src={image} alt={text} fill />
      </div>
      <p>{text}</p>
    </div>
  );
};
