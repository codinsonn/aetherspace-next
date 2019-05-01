import React from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import Markdown from 'react-markdown';
// Components
import { withLayout } from '../../componentRegistry';
// Styles
import { PageTitle } from '../../styleRegistry';

/* --- Styles ------------------------------------------------------------------------------ */

const PostMarkdown = styled.div`
    font-family: 'Arial';

    a {
        text-decoration: none;
        color: blue;
    }

    a:hover {
        opacity: 0.6;
    }

    h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
    }
`;

const S = { PageTitle, PostMarkdown };

/* --- Markdown ------------------------------------------------------------------------------ */

const PostMD = `
This is our blog post.
Yes. We can have a [link](/shows).
And we can have a title as well.

### This is a title

And here's the content.
`;

/* --- <Blogpost/> ------------------------------------------------------------------------------ */

const Blogpost = ({ router }) => (
    <React.Fragment>
        <S.PageTitle>{router.query.title}</S.PageTitle>
        <S.PostMarkdown>
            <Markdown source={`${PostMD}`} />
        </S.PostMarkdown>
    </React.Fragment>
);

/* --- Exports ------------------------------------------------------------------------------ */

export default withLayout(withRouter(Blogpost));
