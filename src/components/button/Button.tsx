type ButtonProps = {
  text: string;
};

function Button({ text }: ButtonProps) {
  return <button className="inputs__submit">{text}</button>;
}

export default Button;
