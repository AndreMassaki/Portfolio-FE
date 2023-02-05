import styled from 'styled-components';

const Header = styled.header`
  background-color: ${({ theme }) => theme.default.background.dark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0 1rem;

  .aiOutlineMenu {
    color: ${({ theme }) => theme.default.pink};
    width: 35px;
    height: 35px;
  }

  @media screen and (min-width: 425px) {
    .aiOutlineMenu {
      width: 45px;
      height: 45px;
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
    padding: 0;

    .aiOutlineMenu {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    padding-left: 2rem;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 3.5rem;
  }
`;

Header.Div = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 2rem;
  }
`;

export default Header;
