const Footer = () => {
  return (
    <footer>
      <ul className="flex gap-5 text-sm text-muted-gold-yellow">
        <li className="hover:underline">
          <a
            href="codigo-conduta-cifra.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download={true}
          >
            Código de conduta
          </a>
        </li>
        <li className="hover:underline">
          <a
            href="https://www.instagram.com/cifraengenharia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li className="hover:underline">
          <a
            href="https://www.linkedin.com/company/cifra-engenharia"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
