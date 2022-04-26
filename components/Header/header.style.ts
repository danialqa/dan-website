import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  .nav-item {
    &:hover,
    &.active {
      div {
        transition: all ease-in-out 0.2s;

        &:first-child {
          color: ${({ theme }) => theme.colors.yellow} !important;
        }

        &:last-child {
          color: ${({ theme }) => theme.colors.gray2} !important;
        }
      }
    }
  }
`;
