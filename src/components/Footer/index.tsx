import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={4} md={6} sm={24} xs={24}>
              <Empty />
              <Language>DIRECIÓN</Language>
              <Para>Homero 3470</Para>
              <Para>Lomas de Zamora</Para>
              <Para>Buenos Aires</Para>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3278.8609185421687!2d-58.46597492425411!3d-34.733899972907906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQ0JzAyLjAiUyA1OMKwMjcnNDguMiJX!5e0!3m2!1sen!2sar!4v1694531305384!5m2!1sen!2sar"
                width="350"
                height="300"
                style={{ border: 0, margin: 1 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>

          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>HORARIOS DE ATENCIÓN PRESENCIAL</Language>
              <Para>
                Lunes a Jueves de 10 a 13hs <br />
                Lunes a Viernes de 16.30 a 19.30hs
              </Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>ATENCIÓN TELEFÓNICA</Title>
              <Para>
                Podes comunicarte vía WhatsApp o por llamada y te respondemos a
                la brevedad <br />
                Lunes a Viernes de 10 a 20hs
              </Para>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <a target="_blank" href="https://www.afip.gob.ar">
                Data Filcal
              </a>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo-r.png"
                  aria-label="homepage"
                  width="101px"
                  height="91px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://api.whatsapp.com/message/INDLYWFEXOD3B1?autoload=1&app_absent=0"
                src="whatsapp.png"
              />
              <SocialLink
                href="mailto:estudioayalachiara@gmail.com"
                src="envelope.png"
              />
              <SocialLink
                href="https://www.instagram.com/abogadoschyasociados/"
                src="instagram.png"
              />
              <SocialLink
                href="https://www.facebook.com/estudioayalachiara"
                src="facebook.png"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
      <a target="_blank" href="https://south.software">
        by Software of South{" "}
      </a>
    </>
  );
};

export default withTranslation()(Footer);
