import React from 'react';

interface PlaceholderImageProps {
  className?: string;
  text?: string;
  aspectRatio?: string;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ 
  className = "", 
  text = "Insert Photo Here",
  aspectRatio = "aspect-video"
}) => {
  return (
    <div className={`bg-zinc-100 border-2 border-dashed border-zinc-300 flex items-center justify-center text-zinc-400 font-medium text-sm text-center p-4 ${aspectRatio} ${className}`}>
      <span>{text}</span>
    </div>
  );
};
