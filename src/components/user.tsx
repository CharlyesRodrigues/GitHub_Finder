import { UserProps } from "../types/user";
import { MapPinLine } from "phosphor-react";
import Link from "../pages/home";
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
        <p className={classes.location}>
            <MapPinLine size={32} color="#c105f5" />
            <span>{location}</span>

        </p>
        )} 
        <div  className= {classes.stats}>
            <div>
                <p>Seguidores:</p>
                <p className={classes.number}>{followers}</p>
           </div>

           <div>
                <p>Seguindo:</p>
                <p className={classes.number}>{following}</p>
           </div>
 
            
        </div>
        <div className={classes.projetos}> Ver melhores Projetos</div>  
    </div>

    );

};




export default User;