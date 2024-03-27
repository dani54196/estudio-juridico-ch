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
  Sos,
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
        <SvgIcon src={src} width="50px" height="50px" />
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
              <Language>DIRECCIÓN</Language>
              <Para>Homero 3470</Para>
              <Para>Lomas de Zamora</Para>
              <Para>Buenos Aires</Para>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204.9293044101932!2d-58.4633753611673!3d-34.73369954799665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccf11ed18cf59%3A0x544998d99674b645!2sEstudio%20Jur%C3%ADdico%20CH%20y%20Asociados!5e0!3m2!1sen!2sar!4v1711554558082!5m2!1sen!2sar"
                width="350"
                height="300"
                style={{ border: 0, margin: 1 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
          <br />
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
            {/* <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <a target="_blank" href="https://www.afip.gob.ar">
                Data Filcal
              </a>
            </Col> */}
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
        <Sos>
          <a target="_blank" href="https://south.software">
            by Software of South{" "}
          </a>
        </Sos>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
