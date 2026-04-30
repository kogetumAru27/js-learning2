export default function Loading(){
    return(
    <div className="p-8 flex justify-center items-center">
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      <p className="ml-4 font-bold text-gray-600">データを取得中...</p>
    </div>
    )
}