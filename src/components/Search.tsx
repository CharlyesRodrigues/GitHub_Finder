type SearchProps ={

    loadUser: (username: string) => Promise <void>;

}



import React from "react";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";



const Search = ({loadUser}: SearchProps) => {

    const [userName, setUserName] = useState ("");

    return (

        <div>
            <h2>Busque por um usuário: </h2>
            <p>Conheça seus melhores repositórios</p>

            <div>
              <input 
              type="text" 
              placeholder="Digite o nome do usuário"
              onChange={(e) => setUserName(e.target.value)  }
              
              />
              <button onClick={()=> loadUser(userName)} >

              <MagnifyingGlass size={10} />
              </button>

            </div>
        </div>

    )

};

export default Search;