import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components/index';
import service from '../appwrite/config';

export const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        service.getPost([])
            .then((response) => {
                if (response) {
                    setPosts(response.documents);
                    setLoading(false);
                }
            })
            .catch((err) => {
                setError('Failed to load posts');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="py-8 text-center">
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
            <div className="py-8 text-center">
                <Container>
                    <div className="flex justify-center items-center">
                        <p className="text-red-500">{error}</p>
                    </div>
                </Container>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="py-8 text-center">
                <Container>
                    <div className="flex justify-center items-center">
                        <p>No posts available</p>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="py-8">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};
