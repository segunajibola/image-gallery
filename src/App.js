import react, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`) 
    //fetch images
      .then(res => res.json())
      .then(data => {
          setImages(data.hits); //set images here
          setIsLoading(false);
        })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      <ImageSearch />
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Images loading, please wait...</h1> : <div className="grid grid-cols-3 gap-4">
       {/* // map through all images and set to "image" */}
        {images.map(image => ( 
          <ImageCard key={image.id}
          //set image as a prop 
          image={image}/>
        ))}
      </div>}
    </div>
  );
}

export default App;
