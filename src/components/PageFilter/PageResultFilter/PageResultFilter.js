import React from 'react';
import styled from 'styled-components'
import LogoBussines from '../../images/logo.svg'

const Container = styled.div ` 
    width: 100%;
    margin-top: 75px;
    display: flex;   

            `

 const ContainerLogo = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Nunito;
    font-weight: bold;
    margin-left: 16px;
    font-size: 36px;
    line-height: 49px; 
   

    `
           
 const LogoImg = styled.img `
    align-items: center;
    margin-left: 87px;
    margin-bottom: 28px;
    width: 46.65px;
    height: 48px;
    top: 208px;
   
 `
 

const Line = styled.div `  
    width: 1125px;
    margin-top: 25px;
    margin-left: 88px;
    background: #C4C4C4;
    border: 1px solid #000000;
`

const Paragraph = styled.p `   
    width: 354px;
    height: 38px;
    margin-left: 88px;
    margin-top: 114px;
    
    font-family: Nunito;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
`

const ContainerCandidates = styled.div ` 
    display: flex;
 
   
`
const NameCandidates = styled.span `
    margin-left: 88px;
    margin-top: 76px;
    margin-right: 10px;
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
   
    `
const DescriptionCandidates = styled.span ` 

    height: 54px;  
    text-align: left;
     font-family: Nunito;
     font-size: 18px;
     line-height: 25px;
     margin-left: 88px;
`
const Div = styled.div `
    display: flex;
    flex-direction: column;
`

const Button = styled.button ` 
    width: 195px;
    height: 58px;
    margin-left: 107px;
    margin-top: 88px;
  

    background-color: #E5E5E5;
 border: none;
 border-radius: 5px;
 font-size: 14px;
 &:hover{
   color: #fff;
   background-color: #5798F9;
   cursor: pointer;
   border: 1px solid #5798F9;
  
 }
`

export function PageResultFilter() {
  return (
      <>
    <Container>
    <LogoImg src = {LogoBussines} alt ="Photo Enterprise"/>
    <ContainerLogo>                 
      Tech Turbo               
    </ContainerLogo>                    
</Container>
<Line></Line>

    <Paragraph>Candidatos encontrados</Paragraph>

    <ContainerCandidates>
        <Div>
        <NameCandidates>Joana Silva</NameCandidates>
        <DescriptionCandidates>
        <span>Developer Java Júnior</span> <br/>
        <span> São Paulo, SP</span><br/>
        <a href="https://github.com/Deborah-Vieira" >https://github.com/Deborah-Vieira</a> 
       </DescriptionCandidates>
        </Div>
        <Button> Enviar Convite</Button>


        
    </ContainerCandidates>
    

    <ContainerCandidates>
     <Div>
     <NameCandidates>Joana Silva</NameCandidates>
     <DescriptionCandidates>
     <span>Developer Java Júnior</span> <br/>
     <span> São Paulo, SP</span><br/>
     <a href="https://github.com/Deborah-Vieira" >https://github.com/Deborah-Vieira</a> 
    </DescriptionCandidates>
     </Div>
     <Button> Enviar Convite</Button>
     
 </ContainerCandidates>
 
 <ContainerCandidates>
     <Div>
     <NameCandidates>Joana Silva</NameCandidates>
     <DescriptionCandidates>
     <span>Developer Java Júnior</span> <br/>
     <span> São Paulo, SP</span><br/>
    <a href="https://github.com/Deborah-Vieira" >https://github.com/Deborah-Vieira</a> 
    </DescriptionCandidates>
     </Div>
     <Button> Enviar Convite</Button>
     
 </ContainerCandidates>
 
    
</>
  )

}

