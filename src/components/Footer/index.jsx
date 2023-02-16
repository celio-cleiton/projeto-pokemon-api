import * as React from "react";
import { Container, Link, Stack } from "@chakra-ui/react";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaGithub, FaLinkedin,FaWhatsapp } from "react-icons/fa";

const Copyright = () => {
  return (
    <Container align="center" display="block">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/c%C3%A9lio-cleiton/"
      >
        Célio Cleiton.
      </Link>{" "}
      {new Date().getFullYear()}.
      <Stack isInline spacing={18} mt={5}     justifyContent="space-around">
        <Link href="https://www.facebook.com/cleitoneregina">
          <FaFacebookSquare size={32} />
        </Link>
        <Link href="https://www.twitter.com/srheizenberg">
          <FaTwitterSquare size={32} />
        </Link>
        <Link href="https://www.instagram.com/celio_cleiton/">
          <FaInstagram size={32} />
        </Link>
        <Link href="https://github.com/celio-cleiton">
        <FaGithub size={32} />
        </Link>
        <Link href="https://www.linkedin.com/in/c%C3%A9lio-cleiton/">
        <FaLinkedin size={32} />
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=5584986180964&text=Ol%C3%A1%20Projeto%20Pok%C3%A9mon%20API">
        <FaWhatsapp size={32} />
        </Link>
      </Stack>
    </Container>
  );
};

export default Copyright;
