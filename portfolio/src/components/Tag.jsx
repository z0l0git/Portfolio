export const Tag = (props) => {
  const { text } = props;
  return (
    <div className="bg-gray-200 rounded-[12px] px-[20px] py-[4px] flex items-center justify-center w-fit">
      <p>{text}</p>
    </div>
  );
};
