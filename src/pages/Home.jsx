import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components/index';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        appwriteService.getPosts()
            .then((response) => {
                if (response) {
                    setPosts(response.documents);
                    setLoading(false);
                }
            })
            .catch((err) => {
                setError("Failed to fetch posts");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="w-full py-8 text-center">
                <Container>
                    <div className="flex justify-center items-center">
                        <div className="spinner-border text-gray-500" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full py-8 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold text-red-500">{error}</h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
