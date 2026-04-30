"use server";
import { redirect } from "next/navigation";
export function handle(formData:FormData){
    const name = formData.get("name");
    const mail = formData.get("mail");
    const mess = formData.get("mess");
    console.log("入力された情報",name,mail,mess);
    if(!name)throw new Error("文字を入力してください"); 
    if(!mail)throw new Error("文字を入力してください"); 
    if(!mess)throw new Error("文字を入力してください"); 
    redirect(`/practice3/success`);
}