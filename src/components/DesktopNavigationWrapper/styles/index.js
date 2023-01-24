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
  background-color: ${({ theme }) => theme.default.background.light};
  position: absolute;
  top: 0;
  right: 0;
  width: 15rem;
  height: 5rem;
  padding-right: 1rem;
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
