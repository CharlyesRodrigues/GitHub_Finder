type SearchProps ={

    loadUser: (username: string) => Promise <void>;

}



import React from "react";
import { MagnifyingGlass } from "phosphor-react";
import { useState, KeyboardEvent } from "react";
import teste  from './Search.module.css'


const Search = ({loadUser}: SearchProps) => {

    const [userName, setUserName] = useState ("");

     const handleKeyDown = (e: KeyboardEvent) =>{
      if(e.key === "Enter"){
     loadUser(userName);

      }

     } ;
    return (

        <div className= {teste.search}>
            <h2>Busque por um usuário: </h2>
            <p>Conheça seus melhores repositórios</p>

            <div className={teste.search_container}>
              <input 
              type="text" 
              placeholder="Digite o nome do usuário"
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown ={handleKeyDown}
              
              />
              <button onClick={()=> loadUser(userName)} >

              <MagnifyingGlass className={teste.icons} />
              </button>

            </div>
        </div>

    )

};

export default Search;