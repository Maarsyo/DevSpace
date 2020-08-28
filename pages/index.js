import Head from "next/head";
import img from "../public/logo.svg";
import imgGooglePlay from "../public/google-play-badge.png";
import imgHand from "../public/presentation_image.png";
import {
  Container,
  Header,
  Ul,
  Landing,
  Texts,
  ImageContainer,
} from "./styles";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DevSpace</title>
        <link rel="icon" type="image/png" href={img} />
      </Head>
      <main>
        <Container>
          <Header>
            <img src={img} />
            <Ul>
              <li>
                <a href="#">Entrar</a>
              </li>
            </Ul>
          </Header>

          <Landing>
            <Texts>
              <h1>Uma nova experiência ao buscar novas oportunidades...</h1>
              <p>
                Profissionais de <span>Front-End</span>, <span>Back-End</span>,
                <span>Mobile</span> e demais áreas, com o <span>DevSpace</span>
                você terá a melhor experiência ao buscar uma nova oportunidade.
              </p>
            </Texts>
            <a href="">
              <img
                alt="google play logo"
                src={imgGooglePlay}
                className="imgGooglePlay"
              />
            </a>
            <ImageContainer>
              <img alt="Hand Image" src={imgHand} className="imgHand" />
            </ImageContainer>
          </Landing>
        </Container>
      </main>
    </div>
  );
}
