interface FirstLaterProps {
  name: string;
  className: string;
}

const FirstLater = ({ name, className }: FirstLaterProps) => {
  const firstLetter = name.charAt(0).toUpperCase();
  return <p className={className}>{firstLetter}</p>;
};

export default FirstLater;
