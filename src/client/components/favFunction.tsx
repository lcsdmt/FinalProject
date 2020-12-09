import * as React from "react";

const Favorites: React.FC = () => {

    const [favorite, setFavorite] = useState("")
    

    let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let res = await fetch("/auth/register/",
            {
                method: "PULL",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": ""
                },
                body: JSON.stringify({ favorite, setFavorite })
            }
        )

        if (res.ok) {
            console.log(res)
        } else {
            console.log("Something went wrong")
        }
    }

    // return (
    //     <>
    //         {/* <div>
    //             <h1>Signup Page</h1>
    //             <form onSubmit={handleSubmit}>
    //                 <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
    //                 <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
    //                 <button type="submit">Signup</button></form>
    //         </div>
    //     </> */}
    // )

}



export default Favorites

