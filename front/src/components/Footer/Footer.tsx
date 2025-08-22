import "./Footer.css";

interface FooterProps {
  title: string;
  text: string;
  backgroundColor: "preto" | "roxo";
}

const Footer = ({ text, backgroundColor, title }: FooterProps) => {
  return (
    <footer className={`mainFooter ${backgroundColor}`}>
      <section className="tituloFooter">
        <h1>{title}</h1>
        <p>{text}</p>
      </section>
      
      {/* Usando a tag <form> para agrupar os elementos */}
      <form className="newsLetter">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </form>
    </footer>
  );
};

export default Footer;