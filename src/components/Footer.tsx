import ContactItem from "./ContactItem";

const Footer = ({
  contact,
  name,
}: {
  contact: { id: number; name: string; href: string; isEmail?: boolean }[];
  name: string;
}) => {
  return (
    <footer className="flex flex-col gap-2 justify-center items-center bg-GRAY h-28 text-xs text-white dark:bg-GRAY_EXTRAHEAVY dark:text-GRAY_HEAVY">
      <div className="flex flex-col items-center">
        <span className="whitespace-pre-wrap text-center">{`Copyright 2025. 서은정 All rights reserved.`}</span>
        <a target="_blank" rel="noreferrer" href="https://github.com/sjoleee/very-simple-portfolio">
          Powered by very-simple-portfolio
        </a>
      </div>
    </footer>
  );
};

export default Footer;
