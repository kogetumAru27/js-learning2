"use client"
type Success = {
    status:"success",
    data:string
}
type ERror ={
    status:"error",
    message:string
}
type result = Success |ERror
function handleResult(result: result) {
    if (result.status === "success") {
        console.log("成功：" + result.data)
    } else {
        console.log("失敗：" + result.message)
    }
}
handleResult({ status: "success", data: "Tanaka Taro" })
handleResult({ status: "error", message: "ユーザーが見つかりませんでした" })
