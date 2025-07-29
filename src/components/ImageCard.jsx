import React, { useState } from "react";

function ImageCard({ image }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="card bg-base-100 shadow-lg max-w-sm w-full">
      <figure className="relative w-full h-48">
        {isLoading && (
          <span className="loading loading-spinner loading-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        )}

        <img
          src={image.urls.regular}
          alt={image.alt_description || "Image"}
          className={`object-cover w-full h-48 transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-base-content line-clamp-1">
          {image.alt_description
            ? image.alt_description.charAt(0).toUpperCase() +
              image.alt_description.slice(1)
            : "No description"}
        </h2>

        <div className="text-sm text-base-content/70">
          <p>
            <span className="font-semibold">Author:</span>{" "}
            {image.user.name || image.user.username}
          </p>
          <p>
            <span className="font-semibold">Likes:</span> ❤️ {image.likes}
          </p>
          <p>
            <span className="font-semibold">Resolution:</span> {image.width} x{" "}
            {image.height}
          </p>
          <p>
            <span className="font-semibold">Created:</span>{" "}
            {new Date(image.created_at).toLocaleDateString()}
          </p>
        </div>

        <div className="card-actions mt-4 justify-between">
          <a
            href={image.links.html}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            View
          </a>
          <a
            href={image.links.download}
            target="_blank"
            className="btn btn-sm btn-outline"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
