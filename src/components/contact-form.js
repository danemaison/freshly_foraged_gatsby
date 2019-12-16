import React from "react"
import { Container, Header, Subheader } from "./ui/elements"
import styled from "styled-components"
import leaf from "../images/leaf-button.png"

const Email = styled.a`
  font-size: 1.35rem;
  font-family: "Berkshire Swash";
  text-decoration: none;
  display: block;
  margin: 15px 0;
  color: ${({ theme }) => theme.primary};

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: 1.5rem;
  }
`

const Form = styled.form`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media ${({ theme }) => theme.mediaQueries.small} {
    width: 75%;
  }
  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 60%;
  }
  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 50%;
  }
`

const Button = styled.button`
  cursor:pointer;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  border-radius:3px;
  padding: 10px 17px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-size:1rem;
  text-shadow:
  font-weight: 900;
  border: none;
  background-image: url(${leaf});
  background-position-y: -15px;
  background-position:right;
  background-repeat: no-repeat;
  background-size: 100px;
`
const Input = styled.input`
  border-radius: 3px;
  height: 40px;
  padding: 0px 5px;
  font-size: 0.9rem;
  border: 1px solid ${({ theme }) => theme.grey};
  &:focus {
    outline:2px solid ${({theme})=>theme.primary};
  }
`
const TextArea = styled.textarea`
  border-radius: 3px;
  padding: 5px;
  font-size: 0.9rem;
  resize: vertical;
  height: 200px;
  border: 1px solid ${({ theme }) => theme.grey};
  &:focus {
    outline: 2px solid ${({ theme }) => theme.primary};
  }
`
const Label = styled.label`
  margin-bottom: 15px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
`
const ContactForm = () => {
  return (
    <Container>
      <Header>Contact Us</Header>
      <Subheader>
        Have any questions about our products? We would love to talk to you.
        <br />
        Send us an email at
        <br />
        <Email href="mailto:freshlyforagedofficial@gmail.com">
          freshlyforagedofficial@gmail.com
        </Email>
        or fill out the contact form below!
      </Subheader>
      <Form name="contact-landing" method="POST" data-netlify="true">
        <Label>
          Name
          <Input required type="text" />
        </Label>
        <Label>
          Email
          <Input required type="email" />
        </Label>
        <Label>
          Message
          <TextArea required />
        </Label>
        <Button type="submit">Send</Button>
      </Form>
    </Container>
  )
}

export default ContactForm
