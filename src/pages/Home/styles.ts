import styled from 'styled-components';

export const ContentSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray.main};
  padding: 3.2rem 4.4rem;
  margin-bottom: 7.2rem;
`;

export const ContentBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 5rem;
  width: 100%;
  max-width: 1152px;
  margin-top: min(5%, 11rem);
  margin-bottom: 3.2rem;

  img {
    width: clamp(16rem, 50vw, 32rem);
    height: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 40rem;

  h1 {
    font-size: clamp(2.4rem, 5vw, 4.4rem);
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
  }

  div {
    display: block;
    margin-top: min(5%, 3.3rem);
    margin-bottom: min(10%, 2.8rem);
    border-left: 2px solid ${({ theme }) => theme.colors.black};

    p {
      font-size: clamp(1rem, 2vw, 1.6rem);
      font-weight: 400;
      margin-left: 1.2rem;
      color: ${({ theme }) => theme.colors.gray.darker};
    }
  }
`;
