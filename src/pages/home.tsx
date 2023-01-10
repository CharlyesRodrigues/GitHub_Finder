import { UserProps } from "../types/user";
import React from "react";
import Search from "../components/Search";
import { useState } from "react";
import User from "../components/user";

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);

    const loadUser = async (userName: string) => {
    
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const  data = await res.json();

    console.log(data); // Comando para observar se esta tudo OK 

    const {avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {

    avatar_url,
    login,
    location,
    followers,
    following,
    };

    setUser(userData);

    }

    return (

        <div>
            <Search loadUser={loadUser} />
          {user && <User {...user} />}
         
        </div>

    )

};

export default Home;