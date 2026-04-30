"use server";
import {redirect} from "next/navigation";
export async function handleSubmit(formData:FormData){
    const name = formData.get("name");
    console.log("アクション経由で送信された名前:",name);
    redirect("/contact/succes");
}