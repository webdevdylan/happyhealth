import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoNoText from '../../images/logos/hh_main_notext.png';
import FBIcon from '../../images/logos/facebook_icon.png';
import YTIcon from '../../images/logos/youtube_icon.png';
import TwitterIcon from '../../images/logos/twitter_icon.jpg';
import InstaIcon from '../../images/logos/instagram_icon.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinks>
          <FooterLink hover='true' to='/workouts'>
            This does something
          </FooterLink>
          <FooterLink to='/'>I go somwhere</FooterLink>
          <FooterLink hover='true' to='/'>
            This does something
          </FooterLink>
        </FooterLinks>
        <FooterLogoLink to='/'>
          <FooterLogo src={LogoNoText} />
        </FooterLogoLink>
        <FooterLinks>
          <FooterLink to='/'>This does something</FooterLink>
          <FooterLink hover='true' to='/'>
            I go somwhere
          </FooterLink>
          <FooterLink to='/'>This does something</FooterLink>
        </FooterLinks>
      </FooterWrapper>
      <SocialWrapper>
        <SocialLinks>
          <SocialLink
            to='www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SocialIcon src={FBIcon} />
          </SocialLink>
          <SocialLink
            to='www.youtube.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SocialIcon src={YTIcon} />
          </SocialLink>
          <SocialLink
            to='www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SocialIcon src={InstaIcon} />
          </SocialLink>
          <SocialLink
            to='www.twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SocialIcon src={TwitterIcon} />
          </SocialLink>
        </SocialLinks>
      </SocialWrapper>
      <Copyright>© happyhealth {new Date().getFullYear()}</Copyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  position: relative;
  min-height: 250px;
  /* background-color: lightpink; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  /* border: 1px solid red; */

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 100px 0;
  }
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  text-align: center;
  color: #000;
  font-weight: 300;

  &:hover {
    color: ${({ hover }) => (hover ? '#824998' : '#009fe3')};
  }

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

const FooterLogoLink = styled(Link)`
  @media screen and (max-width: 768px) {
    order: -1;
    margin-bottom: 1rem;
  }
`;

const FooterLogo = styled.img`
  width: 80px;
`;

const Copyright = styled.small`
  position: absolute;
  bottom: 0;
  left: 50;
  font-weight: 400;
`;

const SocialWrapper = styled.div`
  width: 30%;
  padding: 1rem;
  margin-top: 1rem;
  /* border: 1px solid black; */

  @media screen and (max-width: 768px) {
    width: 70%;
    margin: 0 0 1rem 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SocialLink = styled(Link)``;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.4);
  }
`;