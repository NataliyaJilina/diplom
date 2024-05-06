import styled from "styled-components";



export const SCHeader = styled.div`
  height: 100px;
  position: relative;
  display: flex;
  gap: 300px;
  align-items: center;

  border-bottom: 2px solid green;
  background: url("./public/img/header1.jpg") center/cover no-repeat; 
  opacity: 1;

  .a {
    text-decoration: none;
    color: darkgreen;
    font-weight: bold;

    &:hover {
      color: rgb(0, 61, 0);
      
      text-decoration: underline;
    }
  }

  #navigation {
    display: flex;
    gap: 100px;
    margin-left: 25px;
    margin-right: 250px;
  }


  .profileBtn {
    width: 50px;
    height: 50px;

    margin-left: 25px;

    border: 2px solid green;
    border-radius: 100px;

    background-image: url("./public/img/profile.jpg");
    background-size: cover;

    cursor: pointer;
  }
  .LogOutBtn {
    width: calc(2.35vw + 91.2px);
    height: calc(0.47vw + 28.24px);
    

   
    border-radius: 10px;
    border: 1.5px none;
    background-color: rgb(40, 147, 26);
    transition: transform 0.2s ease;
    color: white;
    cursor: pointer;
    &:is(:active) {
      transform: scale(0.95);
      background-color: rgb(2, 170, 47);
    }
  }
  
  /* p {
    position: absolute;
    bottom: -25px;
    right: 0px;
    background-color: rgba(20, 112, 0, 0.7);

    padding: 5px;
    color: white;

    border-left: 2px solid lightGray;
    border-right: 2px solid lightGray;
    border-radius: 10px;

    text-align: center;
    &:is(:hover) {
      color: black;
      font-weight: bold;
    }
  } */
`;