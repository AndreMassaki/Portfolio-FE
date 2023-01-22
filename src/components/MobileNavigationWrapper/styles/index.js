import styled, { css } from 'styled-components';

const MobileNavigation = styled.nav`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  backdrop-filter: blur(0.25rem);
  background: rgb(30,249,86);
  background: -moz-linear-gradient(180deg, rgba(30,249,86,0.5) 0%, rgba(0,0,0,0.5) 100%);
  background: -webkit-linear-gradient(180deg, rgba(30,249,86,0.5) 0%, rgba(0,0,0,0.5) 100%);
  background: linear-gradient(180deg, rgba(30,249,86,0.5) 0%, rgba(0,0,0,0.5) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1ef956",endColorstr="#000000",GradientType=1);
  pointer-events: none;
  transition: 0.3s;
  transform: translateY(3rem);

  .aiOutlineClose {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.5s;
    width: 35px;
    height: 35px;
  }

  @media screen and (min-width: 425px) {
    .aiOutlineClose {
      width: 45px;
      height: 45px;
    }
  }

  ${({ mobileNavigationIsVisible }) => mobileNavigationIsVisible && css`
    pointer-events: auto;
    transform: translateY(0);
    opacity: 1;

    .aiOutlineClose {
      transform: rotate(0deg);
    }
  `}
`;

MobileNavigation.List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transform: scale(0.5);
  transition: 0.5s;

  ${({ mobileNavigationIsVisible }) => mobileNavigationIsVisible && css`
    transform: scale(1);
  `}
`;

MobileNavigation.Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.default.green};
  font-size: 1.25rem;

  @media screen and (min-width: 425px) {
    font-size: 1.5rem
  }
`;

export default MobileNavigation;
