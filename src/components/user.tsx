import { UserProps } from "../types/user";
import { MapPinLine } from "phosphor-react";
import Home from "../pages/home";
import classes from './User.module.css';

const User = ({
    login, 
    avatar_url,
    followers,
    following,
    location,
}: UserProps) => {

    return (
    <div className= {classes.user}>
        <img src={avatar_url} alt={login} />
        <h2>{login}</h2>
       {location && (
        <p>
            <MapPinLine size={32} color="#c105f5" />
            <span>{location}</span>

        </p>
        )} 
        <div>
            <div>
                <p>Seguidores:</p>
                <p>{followers}</p>
           </div>

           <div>
                <p>Seguindo:</p>
                <p>{following}</p>
           </div>
   
              
        </div>
  
    </div>

    );

};




export default User;