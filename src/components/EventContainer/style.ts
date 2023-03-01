import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  max-width: calc(1152px + 17%);

  padding: 0 5%;

  margin-bottom: 3.2rem;

  .title {
    display: flex;
    align-items: center;

    hr {
      width: 2rem;
      background-color: ${({ theme }) => theme.colors.black};
      height: 0.1rem;
      border: none;
    }

    a,
    h1 {
      text-decoration: none;
      margin-right: 1rem;
      color: ${({ theme }) => theme.colors.black};
      font-size: clamp(1.2rem, 2vw, 2.4rem);
      font-weight: 700;
      cursor: pointer;
    }
  }
`;
