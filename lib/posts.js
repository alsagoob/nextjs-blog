export async function getAllPostIds() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    const posts = await res.json()
    return posts.map(post => {
        return {
            params: {
                id: post.id.toString()
            }
        }
    })

}

export async function getPostData(id) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    const data = await res.json()

    return {
        id,
        ...data[id]
    }



}