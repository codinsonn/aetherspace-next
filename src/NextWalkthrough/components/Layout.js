import styled from 'styled-components';
import { View } from 'react-native';
// Components
import { Header } from '../../componentRegistry';

/* --- Styles ------------------------------------------------------------------------------ */

const LayoutWrapper = styled(View)`
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
`;

const S = { LayoutWrapper };

/* --- <Layout/> ------------------------------------------------------------------------------ */

const Layout = ({ children }) => (
    <S.LayoutWrapper>
        <Header />
        {children}
    </S.LayoutWrapper>
);

/* --- withLayout ------------------------------------------------------------------------------ */

export const withLayout = Page => () => (
    <Layout>
        <Page />
    </Layout>
);

/* --- Exports ------------------------------------------------------------------------------ */

export default Layout;
