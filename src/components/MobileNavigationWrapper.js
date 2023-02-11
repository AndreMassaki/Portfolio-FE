import { motion } from 'framer-motion';
import styled from 'styled-components';

const MobileNavigation = styled(motion.nav)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  backdrop-filter: blur(0.25rem);
  background: rgba(0,0,0, 0.75);
  background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(139,233,253,0.5) 100%);

  .aiOutlineClose {
    position: absolute;
    top: 1rem;
    right: 0.7rem;
    width: 45px;
    height: 45px;
    color: ${({ theme }) => theme.default.pink};
  }

  @media screen and (min-width: 425px) {
    .aiOutlineClose {
      width: 55px;
      height: 55px;
      top: 0.7rem;
    }
  }
`;

MobileNavigation.List = styled(motion.ul)`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 425px) {
    gap: 1.5rem;
  }

  li a {
    text-decoration: none;
    color: ${({ theme }) => theme.default.cyan};
    font-size: 1.5rem;

    @media screen and (min-width: 425px) {
      font-size: 1.75rem
    }
  }
`;

export default MobileNavigation;
