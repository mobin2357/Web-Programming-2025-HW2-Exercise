interface MultilineTextProps {
  text: string;
  className?: string; // Optional for custom styling
}

const MultilineText = ({ text, className = "" }: MultilineTextProps) => {
  return (
    <p className={`multiline-text ${className}`}>
      {text.split("\n").map((line, index) => (
        <span key={index}>
          {line.replace(/ /g, "\u00A0")}
          <br />
        </span>
      ))}
    </p>
  );
};

export default MultilineText;
