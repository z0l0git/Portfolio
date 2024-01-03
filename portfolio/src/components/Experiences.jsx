import Image from "next/image";

export const Experiences = (props) => {
  const { title, text = [], date } = props;
  return (
    <div className="text-gray-600 w-fit md:w-[896px] dark:bg-[#1F2937] gap-[16px] flex p-[32px] md:p-[32px] flex-col md:flex-row bottomShadow">
      <div>
        <Image src="/upwork.png" width={102} height={28}></Image>
      </div>

      <div className="w-full flex flex-col-reverse md:flex-row justify-end gap-[16px] md:gap-[48px]">
        <div className="w-full md:w-[200px]">
          <h2 className="mb-[16px] text-[20px] font-bold text-gray-900 dark:text-[#D1D5DB]">
            {title}
          </h2>
          <ul className="list-disc list-outside ml-[19px] dark:text-[#D1D5DB]">
            {text.map((com, i) => {
              return <li key={i}>{com}</li>;
            })}
          </ul>
        </div>
        <div className="dark:text-[#D1D5DB]">
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
