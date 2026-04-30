"use server";
import { redirect } from "next/navigation";
export async function handle(Formdata:FormData){
    const name = Formdata.get("name");
    const mail = Formdata.get("mail");
    const message = Formdata.get("message");
    console.log("入力された情報",name,mail,message);
    if(!name)throw new Error("文字を入力してください");
    if(!mail)throw new Error("文字を入力してください");
    if(!message)throw new Error("文字を入力してください");
    redirect(`/practice2/success`);
}