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
  }, [term]);

  //when ever term changes, useEffect runs again

  return (
    <div className="container mx-auto md:max-w-2xl lg:max-w-5xl 2xl:max-w-7xl">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {/* searchText is a func we call in ImageSearch, and when its called, we have a func that gets the text parsed in and we can set the term with that text */}

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images found</h1>}

      {!term && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images found</h1>}

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Images loading, please wait...</h1> : <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 m-5 2xl:m-1">
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
