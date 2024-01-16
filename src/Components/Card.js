import { NavLink } from "react-router-dom";

export default function Card({data}){
    const arr = data.tags;
    
    return (
        <div className="my-3 dark:text-white">
            <NavLink to={`/Blog/${data.id}`}>
                <h6 className="font-bold text-base">{data.title}</h6>
            </NavLink>
            
            <NavLink to={`/Category/${data.category}`}>
              <p className="text-sm">By <i>{data.author}</i> on {data.category}</p>
            </NavLink>
            <p className="text-sm">Posted on {data.date}</p>

            <p className="mt-1 text-sm">{data.content}</p>

            <div>
                {
                    arr && arr.map((tag,index)=>
                    (<NavLink to={`/Tag/${tag}`}>
                        <span key={index} className="text-sm text-blue-600">#{tag} </span>
                    </NavLink>))
                }
            </div>
        </div>
    );
}