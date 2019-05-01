import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
// Components
import { withLayout } from '../../componentRegistry';

/* --- Helpers ------------------------------------------------------------------------------ */

const getPosts = () => [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' },
];

/* --- Styles ------------------------------------------------------------------------------ */

export const fontFamily = css`
    font-family: 'Arial';
`;

export const PageTitle = styled.h1`
    ${fontFamily}
`;

export const BlogpostList = styled.ul`
    padding: 0;
`;

export const BlogpostListItem = styled.li`
    list-style: none;
    margin: 5px 0;
`;

export const BlogpostLink = styled.a`
    ${fontFamily}
    text-decoration: none;
    color: blue;
    &:hover {
        opacity: 0.6;
    }
`;

const S = { PageTitle, BlogpostList, BlogpostListItem, BlogpostLink };

/* --- <Homepage/> ------------------------------------------------------------------------------ */

const Homepage = () => {
    return (
        <div>
            <S.PageTitle suppressClassNameWarning>Blogposts</S.PageTitle>
            <S.BlogpostList>
                {getPosts().map(post => (
                    <S.BlogpostListItem key={post.id}>
                        <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
                            <S.BlogpostLink>{post.title}</S.BlogpostLink>
                        </Link>
                    </S.BlogpostListItem>
                ))}
            </S.BlogpostList>
        </div>
    );
};

/* --- Export Page ------------------------------------------------------------------------------ */

export default withLayout(Homepage);
