import styled from "styled-components";

export const InstagramSection = styled("div")`
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }

  button {
    display: block;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    background-color: rgb(27, 57, 111);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      color: #1b396f;
      border: 1px solid #1b396f;
      background-color: #fff;
    }
  }
  a {
    display: block;
    margin-top: 10px;
    color: #333;
    text-decoration: none;
    text-align: center;
  }
`;

export const Posts = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
`;

export const Post = styled("div")`
  padding: 0.5rem;
  margin-bottom: 1rem;
  img,
  video {
    width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  a {
    display: block;
    margin-top: 10px;
    color: #333;
    text-decoration: none;
  }

  p {
    margin: 1rem 0;
  }
`;
