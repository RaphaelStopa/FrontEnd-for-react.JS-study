import { useParams } from "react-router-dom";

function BlogPost() {
  // Desconstruímos da URL a varíavel idPost
  const { id } = useParams();

  return id
}