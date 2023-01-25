import styled from 'styled-components';

const DesktopNavigation = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

DesktopNavigation.Div = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem 1rem 0 0;
  align-items: center;
  justify-content: flex-end;
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

DesktopNavigation.List = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1rem;
`;

DesktopNavigation.Item = styled.li`
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

DesktopNavigation.Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.default.blue};

  &:hover {
    color: ${({ theme }) => theme.default.pink};
  }
`;

DesktopNavigation.Dracula = styled.a`
  display: none;
  background-image: url(/images/dracula.webp);
  width: 4rem;
  height: 4rem;
  background-size: cover;
  border-radius: 50%;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

export default DesktopNavigation;
