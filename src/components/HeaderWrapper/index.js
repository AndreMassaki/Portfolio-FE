import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import LogoWrapper from '../common/LogoWrapper';
import DesktopNavigationWrapper from '../DesktopNavigationWrapper';
import MobileNavigationWrapper from '../MobileNavigationWrapper';
import Header from './styles';

export default function HeaderWrapoper() {
  const [mobileNavigationIsVisible, setMobileNavigationIsVisible] = useState(false);

  return (
    <Header>
      <Header.Div>
        <LogoWrapper />
        <DesktopNavigationWrapper />
      </Header.Div>
      <AiOutlineMenu
        className="aiOutlineMenu"
        onClick={() => setMobileNavigationIsVisible(true)}
      />
      <MobileNavigationWrapper
        mobileNavigationIsVisible={mobileNavigationIsVisible}
        setMobileNavigationIsVisible={setMobileNavigationIsVisible}
      />
    </Header>
  );
}
