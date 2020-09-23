import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { HighlightProps } from '.';

type ContainerProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>;

const containerModifiers = {
  right: () => css`
    grid-template-areas: 'FLOAT_IMAGE CONTENT';
    grid-template-columns: 1.3fr 2fr;

    ${Content} {
      text-align: right;
    }
  `,
  left: () => css`
    grid-template-areas: 'CONTENT FLOAT_IMAGE';
    grid-template-columns: 2fr 1.3fr;
    ${Content} {
      text-align: left;
    }
    ${FloatImageWrapper} {
      justify-self: end;
    }
  `
};

export const Container = styled.section<ContainerProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;
    height: 23rem;
    display: grid;
    background-image: url(${backgroundImage});
    background-position: bottom center;
    background-size: cover;
    grid-template-areas: 'FLOAT_IMAGE CONTENT';

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}

    ${containerModifiers[alignment!]()}
  `}
`;

export const FloatImageWrapper = styled.img`
  ${({ theme }) => css`
    grid-area: FLOAT_IMAGE;
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;
    align-self: end;

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: CONTENT;
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;
