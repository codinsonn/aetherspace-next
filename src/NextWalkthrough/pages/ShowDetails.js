import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Text } from 'react-native';
// Components
import { Layout } from '../../componentRegistry';
import Image from '../components/Common/Image';
// Styles
import { PageTitle } from '../../styleRegistry';

/* --- Styles ------------------------------------------------------------------------------ */

const S = { PageTitle };

/* --- <Show/> ------------------------------------------------------------------------------ */

const ShowDetails = ({ show }) => (
    <Layout>
        <S.PageTitle>{show.name}</S.PageTitle>
        <Text>{show.summary.replace(/<[/]?p>/g, '')}</Text>
        {show.image && <Image resizeMode="contain" src={show.image.medium} />}
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
