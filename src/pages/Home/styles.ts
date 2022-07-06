import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)',
};


export const HomeContainer = styled.div`
background-color: rgb(32, 35, 41);
margin: 0;
${media.desktop} {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin-bottom: 500%;
  border-bottom: solid 300% blue;
}
`;

export const Home = styled.div`
margin: 0;
${media.desktop} {
  display: flex;
  flex-flow: row wrap;
  width: 20%;
}   

 
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: rgb(32, 35, 41);
  padding: 0;
  margin: 0;
  .character-card {
    background: rgb(60, 62, 68);
    width: 80%;
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: 10%;
    border-radius: 10px;

   

    .characterStatusColorAlive {
      margin-top: 0;
      font-size: 1.5em;
      margin-left: 5%;
      color : red;
    }

    .characterStatusColorDead {
      margin-top: 0;
      font-size: 1.5em;
      margin-left: 5%;
      color : rgb(50,205,50);
    }

    img {
      width: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: gray;
    }
  }
 
`;

export const Button = styled.h1`
width: 100%;
cursor: pointer;
color: white;
font-size: 2em;
border-radius: 10px;
hight: 2em;
margin-bottom: 0;
text-align: flex-start;
justify-content: flex-start;
align-itemns: flex-start;
margin-left: 5%;

&:hover {
  color: #00DBAF;
}
`;
