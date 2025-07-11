import { cookies } from "next/headers";
export async function Logout() {
    const cookieStore = cookies();

    const res = (await cookieStore).set("token", "");
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