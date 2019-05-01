import Link from 'next/link';
import styled from 'styled-components';
import { View } from 'react-native';

/* --- Styles ------------------------------------------------------------------------------ */

const HeaderWrapper = styled(View)`
    display: flex;
    flex-direction: row;
`;

const HeaderLink = styled.a`
    margin-right: 15px;
`;

const S = { HeaderWrapper, HeaderLink };

/* --- <Header/> ------------------------------------------------------------------------------ */

const Header = () => (
    <S.HeaderWrapper>
        <Link href="/">
            <S.HeaderLink href="/">Home</S.HeaderLink>
        </Link>
        <Link href="/shows">
            <S.HeaderLink href="/shows">TV Reviews</S.HeaderLink>
        </Link>
    </S.HeaderWrapper>
);

/* --- Exports ------------------------------------------------------------------------------ */

export default Header;
