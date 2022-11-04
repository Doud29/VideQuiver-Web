const ImgCategorie = ({ name, source, alt }) => {
  return (
    <div className="categorie">
      <img src={source} alt={alt} />
      <p>{name}</p>
    </div>
  );
};

export default ImgCategorie;
