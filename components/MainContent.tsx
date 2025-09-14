/* eslint-disable @next/next/no-img-element */
import React from "react";

type MovieCardProps = {
    title: string;
    description: string;
    image: string;
};

const MovieCard = ({ title, description, image }: MovieCardProps) => {
    return (
        <article className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
            <img
                src={image}
                alt={title}
                className="w-full h-60 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">{title}</h2>
            <p className="mt-2 text-gray-600">{description}</p>
        </article>
    );
};

export default MovieCard;
