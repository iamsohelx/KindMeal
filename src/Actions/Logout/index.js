'use server'
import { cookies } from "next/headers";
export async function Logout() {
    const cookieStore = cookies();

    const res = (await cookieStore).delete("token");
    (await cookieStore).delete("accType");
    if(res){
        return {
            msg:"Logout successfull",
            success: true,
        }
    }

    return {
        msg: "Something Went Wrong",
        success: false,
    }
}