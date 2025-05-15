import { useEffect, useState } from "react"

const SearchPosts = () => {
    const [query, setQuery] = useState("");
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
                if (!response.ok) {
                    throw new Error("Error al obtener los datos")
                }
                const data = await response.json()
                setPosts(data)
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }

        }

        fetchUsers();

    }, [query])

    if (isLoading) {
        return <p>Cargando... </p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <div>
            <h1>Lista de Posts</h1>
            <input
                type="text"
                placeholder="Buscar por título"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default SearchPosts;