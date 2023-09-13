// ...
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { Slide, Zoom } from 'react-awesome-reveal';
import { ContactProps, ValidationTypeProps } from './types';
import { useForm } from '../../common/utils/useForm';
import validate from '../../common/utils/validationRules';
import { Button } from '../../common/Button';
import Block from '../Block';
import Input from '../../common/Input';
import TextArea from '../../common/TextArea';
import { ContactContainer, FormGroup, Span, ButtonContainer } from './styles';

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  const formRef = useRef(null); // Create a ref for the form

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
      };

      // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your EmailJS service and template IDs
      const response = await emailjs.send(
        'service_koskg15',
        'template_1r979br',
        templateParams,
        'JUp9U_mkWpXuGI1wq' 
      );

      console.log('Email sent:', response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup >
              <form ref={formRef} autoComplete="off" onSubmit={(e) => sendEmail(e)}>
                <Col span={24}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={values.name || ''}
                    onChange={handleChange}
                  />
                  <ValidationType type="name" />
                </Col>
                <Col span={24}>
                  <Input
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    value={values.email || ''}
                    onChange={handleChange}
                  />
                  <ValidationType type="email" />
                </Col>
                <Col span={24}>
                  <TextArea
                    placeholder="Your Message"
                    value={values.message || ''}
                    name="message"
                    onChange={handleChange}
                  />
                  <ValidationType type="message" />
                </Col>
                <ButtonContainer>
                  <button value="Send" type="submit">{t('Submit')}</button>
                </ButtonContainer>
              </form>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
