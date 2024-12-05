import HeaderStyled from "../styles/components/headerStyled";

const Header= () => (
<HeaderStyled>
    <div className="container">
        <h1>Logo</h1>
        <nav>
            <ul>
                <li><a href="#beneficios">Benefícios</a></li>
                <li><a href="#conteudo">Conteúdo</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#faq">FAQ</a></li>
            </ul>
        </nav>
        <a href="#contato" className="btn">Whatsapp</a>
    </div>
</HeaderStyled>
);

export default Header;