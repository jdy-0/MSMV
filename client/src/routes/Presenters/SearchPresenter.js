import React, {optionsState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    padding-top: 60px; 
`;

const SearchTitle = styled.div`
  
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 600;
`;

const Input = styled.input`

  padding: 0px 10px;
  box-sizing: border-box;
  width: 40%;
  height: 40px;
  margin-top: 5px;
  margin-bottom: 20px;
  border: 2px solid black;
  border-radius: 3px;
  transition: border 0.1s ease-in-out;
  outline: none;
  &:hover,
  &:focus {
    border: 2px solid red;
  }
`;

const SearchButton = styled.button`
  font-weight: 600;
  width: 55px;
  color: red;
  border: 1px solid red;
  background-color: black;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  border-radius: 3px;
  text-decoration: none;
  transition: .2s all;

  &:hover {
      background: black;
      color: white;
  }
`;
const Spacer = styled.div`
    flex-grow: 0.01;
`;

const SearchAsk = styled.div`
    margin: 10px 10px 10px 10px;
`;


const SearchResult = styled.div`
    margin: 10px 10px 10px 10px;
`;

const Shape = styled.div`
    display: block;
    flex: 1;
    margin-left: auto;
    margin-right: auto; 
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    width: 75%;
    height: auto;
    background: lightgray;

  
  `;

const MovieDiv = styled.div`
 
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  height: 310px;
  background: #606060;
  float: right;
  list-style: none;
  padding: 10px;
  margin: 10px 20px 30px 10px;
  border-radius: 10px;
  box-shadow: 0 15px 10px #000;
  font-family: 'Noto Sans KR', sans-serif;

`;

const Image = styled.div`
  width: 210px;
  height: 200px;
  size: cover;
`;  

const InfoBox = styled.div`
  float: right;
  width: 290px;
  height: 200px;
  text-align: center;
  font-size: 20px;
`;

const InfoName = styled.div`
  display: inline-block;
  font-size: 25px;
`;

const InfoRate = styled.div`
  font-size: 20px;
`;


const SearchPresenter = ({searchCritCheck, searchCrit, submitSearch, takeInput, result, currentSearch, inputEnter}) => {

  return (
    <Wrapper>
    <div>
    <SearchAsk>
      <SearchTitle></SearchTitle>
        <select name="SearchCrit" value={optionsState} onChange={searchCritCheck}>
        <option value="title">제목</option>
        <option value="director">감독</option>
      </select>

      <Spacer/>
      <Input onChange={takeInput} onKeyPress={inputEnter} placeholder="검색어 입력"></Input>
      <Spacer/>
        <SearchButton onClick={submitSearch}>검색</SearchButton>
      
      
    </SearchAsk>
    <SearchResult>
    <Shape>
      <h1>----------------------{currentSearch}에 대한 검색 결과----------------------</h1>
      {result.map((movie) => ( 
            
        <MovieDiv key={movie.movieCd}>
          <Image>
            <img alt="movie" src={movie.image}></img>
          </Image>
          <InfoBox>
            <InfoName>
              <Link to={`/Detail?code=${movie.movieCd}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{movie.title}</Link> 
            </InfoName>
            <InfoRate>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;평점 &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{movie.rate}</p>
            </InfoRate>
            <p>줄거리 : {movie.summary}</p>
            <p>개봉일 : {movie.openDt}</p>
          </InfoBox>
              
        </MovieDiv>

          ))}
    </Shape>
    </SearchResult>  

    </div>
    </Wrapper>
  )
}

export default SearchPresenter;