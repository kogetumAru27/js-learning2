type User = {
    id:number
    name:string,
}
type TItle = {
    id:number
    title:string
}
async function Prc<T>(url:string):Promise<T>{
    const res = await fetch(url)
    return res.json()
}
export default async function Page(){
    const users = await Prc<User[]>('https://jsonplaceholder.typicode.com/users')
    const posts = await Prc<TItle[]>('https://jsonplaceholder.typicode.com/posts')
    
    return(
        <div>
            {users.map(user => <p key={user.id}>{user.name}</p>)}
            {posts.map(post => <p key={post.id}>{post.title}</p>)}
        </div>
    )
}