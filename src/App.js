
import {Header} from './components/PageHeader/Header'
import {ProfileEnterprise} from './components/PageProfileEnterprise/ProfileEnterprise'
import {PageFilter} from './components/PageFilter/PageFilter'
import {PageResultFilter} from './components/PageFilter/PageResultFilter/PageResultFilter'
import {PagaAvaliableUser} from './components/PagaAvaliableUser/PagaAvaliableUser'

import styled from 'styled-components'

/*const Container = styled.div `
  width:1200px;
  height: 1024px ;
  background-color: pink;

`*/
//colocar um container aqui e colocar os nomes page nos arquivos
function App() {
  return (
    < >
       {/* <Header/>  */}
       <ProfileEnterprise/>  
      {/* <PageFilter/> */} 
      {/* <PageResultFilter/>  */}
   {/*  <PagaAvaliableUser/>  */}
    
    </>
  );
}

export default App;
