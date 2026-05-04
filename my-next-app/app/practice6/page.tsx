type SuccessPr<T> = {
    status:"success",
    data:T
}
type ErrorPr = {
    status:"error",
    message:string
}
type Users = {
    id:number,
    name:string,
    mail:string
}
type Result<T> = SuccessPr<T> | ErrorPr;
async function Fetchdate<T>(url:string):Promise<Result<T>>{
    try{
        const res = await fetch(url);
        const result = await res.json();
        return { status: "success", data:result } //これが<Result<T>のデータとして返ってくる成功時
    }catch(e){
       return {status:"error",message:"エラーです"}//これが<Result<T>のデータとして返ってくる失敗時
    }
}
 export async function GetData(){
     const data = await Fetchdate<Users>("https://jsonplaceholder.typicode.com/users/1");
     data.status === "success"?console.log(data.data.name):console.log(data.message)
     
 }
