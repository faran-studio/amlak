type PropertyCardProps = {
  title: string;
  location: string;
  description: string;
  price: string;
  image: string;
};

export default function PropertyCard({
  title,
  location,
  description,
  price,
  image,
}: PropertyCardProps) {
  return (
    <div>
      <img src={image} alt={title} />

      <h3>{title}</h3>
      <p>{location}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}