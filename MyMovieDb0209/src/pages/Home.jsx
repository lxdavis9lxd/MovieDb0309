import React from "react";
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ApiClient  from "@/utils/ApiClient";
function Home() {
  const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {
    ApiClient.getAll("/movie/popular").then((response) => {
      setMovies(response.data.results);
    });
  }, []);         
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Latest Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Card key={movie.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <CardHeader>
              <CardTitle>{movie.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{movie.description}</p>      
            </CardContent>
            <CardFooter>
              <Link to={`/movies/${movie.id}`} className="text-blue-500 hover:underline">
                View Details
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Home;