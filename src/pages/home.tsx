import { UserProps } from "../types/user";
import React from "react";
import Search from "../components/Search";
import { useState } from "react";

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);

    const loadUser = async (userName: string) => {
    
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const  data = await res.json();

    console.log(data); // Comando para observar se esta tudo OK 

    }

    return (

        <div>
            <Search loadUser={loadUser} />

        </div>

    )

};

export default Home;