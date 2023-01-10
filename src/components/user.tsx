import { UserProps } from "../types/user";
import { MapPinLine } from "phosphor-react";
import Home from "../pages/home";


const User = ({
    login, 
    avatar_url,
    followers,
    following,
    location,
}: UserProps) => {

    return (
    <div>
        <img src={avatar_url} alt={login} />
        <h2>{login}</h2>
        <p>
            <MapPinLine size={32} />
            <span>{location}</span>

        </p>
        <div>
            <div>
                <p>Seguidores:</p>
                <p>{followers}</p>
           </div>

           <div>
                <p>Seguindo:</p>
                <p>{following}</p>
           </div>
              <Home to={`/repos/${login}`}>Ver melhores projetos</Home>
        </div>

    </div>

    );

};




export default User;