import { ReactNode } from "react";


export default function({children}:{children:ReactNode}){
    return <div>
        <div>Headers</div>
        <br />
        {children}
        <br /><br />
         <div>Footer</div>
    </div>
}