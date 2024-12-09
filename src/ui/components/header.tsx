import HeaderStyled from "../styles/components/headerStyled";

const Header= () => (
<HeaderStyled>
    <div className="container">
        <nav>
            <ul>
                <li><a href="#beneficios">Benefícios</a></li>
                <li><a href="#conteudo">Conteúdo</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#faq">FAQ</a></li>
            </ul>
        </nav>
    </div>
</HeaderStyled>
);

export default Header;