import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  showSkeleton?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  showSkeleton = true,
  loading = 'lazy',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Sync state when src prop changes (crucial for gallery, thumbnails & lightbox)
  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    setIsLoading(false);
    if (!hasError && fallbackSrc && imgSrc !== fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-purple-950/60">
      {/* Skeleton Shimmer overlay while image loads */}
      {showSkeleton && isLoading && (
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-purple-950 via-purple-900/60 to-purple-950 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-amber-400/40 border-t-amber-400 rounded-full animate-spin" />
        </div>
      )}

      <img
        {...props}
        src={imgSrc || fallbackSrc}
        alt={alt || 'Grand Rimedya Hotel Mudanya'}
        loading={loading}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`${className} transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};

