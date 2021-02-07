import React from 'react';
import {Header} from '../PageHeader/Header'
import {CardEnterprise} from '../PageProfileEnterprise/CardEnterprise/CardEnterprise'
import {CardVacancies} from '../PageProfileEnterprise/CardVacancies/CardVacancies'



    
export function ProfileEnterprise() {
  return (
      <div>
          <Header/>
          <CardEnterprise/>
          <CardVacancies/>


      </div>
  )
}

