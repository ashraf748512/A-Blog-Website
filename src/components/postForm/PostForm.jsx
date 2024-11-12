import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, RTE, Input, Select } from "../index";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import appwriteService from '../../appwrite/config';

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues, formState: { errors } } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8">
            <form onSubmit={handleSubmit(submit)} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-screen-lg space-y-6">
                <h2 className="text-3xl font-semibold text-center text-gray-800">{post ? "Edit Post" : "Create Post"}</h2>
                
                {/* Form Layout for Larger Screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Editor Section (Left) */}
                    <div className="space-y-4">
                        {/* Title */}
                        <div className="space-y-2">
                            <Input
                                label="Title"
                                placeholder="Enter post title"
                                className="w-full"
                                required
                                {...register("title", { required: "Title is required" })}
                            />
                            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                        </div>

                        {/* Slug */}
                        <div className="space-y-2">
                            <Input
                                label="Slug (auto-generated)"
                                placeholder="Enter post slug"
                                className="w-full"
                                {...register("slug", { required: "Slug is required" })}
                                onInput={(e) => setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true })}
                            />
                            {errors.slug && <p className="text-red-500 text-sm">{errors.slug.message}</p>}
                        </div>

                        {/* Content */}
                        <div className="space-y-2">
                            <RTE label="Content" name="content" control={control} defaultValue={getValues("content")} />
                        </div>
                    </div>

                    {/* Status and Button Section (Right) */}
                    <div className="space-y-4">
                        {/* Featured Image */}
                        <div className="space-y-2">
                            <Input
                                label="Featured Image"
                                type="file"
                                required
                                className="w-full"
                                accept="image/png, image/jpg, image/jpeg, image/gif"
                                {...register("image", { required: !post && "Featured image is required" })}
                            />
                            {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                            {post && (
                                <div className="w-full mt-4">
                                    <img
                                        src={appwriteService.getFilePreview(post.featuredImage)}
                                        alt={post.title}
                                        className="rounded-lg w-full object-cover"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Status */}
                        <div className="space-y-2">
                            <Select
                                options={["active", "inactive"]}
                                label="Status"
                                className="w-full"
                                {...register("status", { required: "Status is required" })}
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            bgColor={post ? "bg-green-500" : "bg-blue-500"}
                            className="w-full py-3 rounded-lg mt-4 active:bg-blue-600 text-white text-xl"
                        >
                            {post ? "Update Post" : "Create Post"}
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}
