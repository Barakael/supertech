type SmartImageProps = {
  src: string
  alt: string
  className?: string
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
}

export function SmartImage({
  src,
  alt,
  className,
  loading = 'lazy',
  fetchPriority = 'auto',
}: SmartImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
      onError={(event) => {
        event.currentTarget.onerror = null
        event.currentTarget.src = '/assets/placeholders/image-placeholder.svg'
      }}
    />
  )
}
