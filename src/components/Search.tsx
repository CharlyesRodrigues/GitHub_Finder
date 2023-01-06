type SearchProps ={

    loadUser: (username: string) => Promise <void>;

}



import React from "react";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import teste  from './Search.module.css'


const Search = ({loadUser}: SearchProps) => {

    const [userName, setUserName] = useState ("");

    return (

        <div className= {teste.search}>
            <h2>Busque por um usuário: </h2>
            <p>Conheça seus melhores repositórios</p>

            <div className={teste.search_container}>
              <input 
              type="text" 
              placeholder="Digite o nome do usuário"
              onChange={(e) => setUserName(e.target.value)  }
              
              />
              <button onClick={()=> loadUser(userName)} >

              <MagnifyingGlass className={teste.icons} />
              </button>

            </div>
        </div>

    )

};

export default Search;