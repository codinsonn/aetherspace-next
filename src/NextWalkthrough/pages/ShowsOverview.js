import React from 'react';
import axios from 'axios';
import Link from 'next/link';
// Components
import { Layout } from '../../componentRegistry';
// Styles
import { PageTitle, BlogpostList, BlogpostListItem, BlogpostLink } from '../../styleRegistry';

/* --- Styles ------------------------------------------------------------------------------ */

const S = { PageTitle, BlogpostList, BlogpostListItem, BlogpostLink };

/* --- ShowsOverview Page ------------------------------------------------------------------------------ */

const ShowsOverview = ({ shows }) => {
    return (
        <Layout>
            <S.PageTitle suppressClassNameWarning>Marvel TV Shows</S.PageTitle>
            <S.BlogpostList suppressClassNameWarning>
                {shows.map(show => (
                    <S.BlogpostListItem key={show.id} suppressClassNameWarning>
                        <Link as={`/s/${show.id}`} href={`/show?id=${show.id}`}>
                            <S.BlogpostLink suppressClassNameWarning>{show.name}</S.BlogpostLink>
                        </Link>
                    </S.BlogpostListItem>
                ))}
            </S.BlogpostList>
        </Layout>
    );
};

/* --- Initial Props ------------------------------------------------------------------------------ */

ShowsOverview.getInitialProps = async () => {
    const { data } = await axios.get('https://api.tvmaze.com/search/shows?q=marvel');
    return { shows: data.map(entry => entry.show) };
};

/* --- Export Page ------------------------------------------------------------------------------ */

export default ShowsOverview;
