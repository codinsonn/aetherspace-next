import React from 'react';
import axios from 'axios';
import { css } from 'styled-components';
import { Text } from 'react-native';
// Components
import { Layout, Image } from '../../componentRegistry';
// Styles
import { PageTitle } from '../../styleRegistry';

/* --- Styles ------------------------------------------------------------------------------ */

const ShowImage = css`
    margin-top: 20px;
    border-radius: 10px;
    width: 300px;
`;

const S = { PageTitle };
const CSS = { ShowImage };

/* --- <Show/> ------------------------------------------------------------------------------ */

const ShowDetails = ({ show }) => (
    <Layout>
        <S.PageTitle>{show.name}</S.PageTitle>
        <Text>{show.summary.replace(/<[/]?p>/g, '')}</Text>
        {show.image && <Image css={CSS.ShowImage} src={show.image.medium} />}
    </Layout>
);

/* --- Initial Props ------------------------------------------------------------------------------ */

ShowDetails.getInitialProps = async context => {
    const { id } = context.query;
    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    return { show: data };
};

/* --- Exports ------------------------------------------------------------------------------ */

export default ShowDetails;
