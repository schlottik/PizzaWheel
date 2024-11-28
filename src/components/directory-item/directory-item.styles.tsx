import styled from 'styled-components';

type BackgroundImageProps = {
  imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  border: 7px solid rgb(45,80,22);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: white;
  opacity: 0.7;
  position: absolute;
  

  h2 {
    font-weight: lighter;
    margin: 0 6px 0;
    font-size: 29px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  
  margin: 0 7.5px 15px;
  overflow: visible;
  transition: box-shadow 0.3s ease;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${Body} {
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;
