import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 820px)',
};

const SHeader = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  background: #00DBAF;
  align-items: center;
  position: fixed-top;
  text-decoration: none;
  margin-top: 0;
   
  ${media.desktop} {
    height: 100px;
    font-size: 250%;
  }

  a {
    text-decoration: none; 
    color: inherit; 
    &:hover
    {
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
    }
  } 
  
  h1 {
    padding-bottom: 0px;
    margin: 0;
    font-size: 100%;
    margin-rigth: 10px;
    text-decoration: none;
  }

  h2 {
    font-size: 100%;
    text-decoration: none;
  }

`;

export default SHeader;
