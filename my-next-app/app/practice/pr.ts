"use server";
import { redirect } from "next/navigation";
export async function handolesubmit(formData:FormData){
    const name = formData.get("name");
    if(!name) throw new Error("名前を入力してください");
    console.log("入力された名前",name);
    redirect(`/practice/success`);
}