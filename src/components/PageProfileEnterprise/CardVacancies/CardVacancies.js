import React from 'react';
import styled from 'styled-components'



const Vacancies = styled.div `   
margin-left: 127px;
margin-top: 86px;
font-family: Nunito;
font-weight: bold;
font-size: 36px;
line-height: 49px;
color: #393939;


`

const LineVancancies = styled.div `  
width: 261px;
height: 0px;
margin-top: 15px;
margin-left: 127px;
background: #C4C4C4;
border: 1px solid #000000;

`

const AvailableVacancies = styled.div `
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
margin-left: 127px;
margin-right: 170px;


    &{
        p{
            width: 200px;
            height: 10px;          
            margin-top: 53px;        
            font-family: Nunito;
            font-weight: bold;
            font-size: 18px;
            line-height: 25px;

        }

        span{
          
            width: 378px;
            height: 54px;
            top: 832px;               
            font-family: Nunito;
            font-style: normal;
            font-size: 18px;
            line-height: 25px;
        }
    }

`


export function CardVacancies() {
    return (
        <div>
             <section>
              <Vacancies>Vagas</Vacancies>
              <div>
                  <LineVancancies></LineVancancies>
  
              <AvailableVacancies>
                  <div>
                       <p>Developer Java Junior</p>
                       <span>Textinho bem curto</span> 
                  </div>
                  <div>
       <p>Developer Java Junior</p>
       <span>Textinho bem curto</span> 
  </div>
  
  <div>
       <p>Developer Java Junior</p>
       <span>Textinho bem curto</span> 
  </div>               
             
             
              </AvailableVacancies>
  
  
              </div>
          </section>
        </div>
    )
  }
  



























