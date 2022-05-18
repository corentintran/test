import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "reactstrap";

export default function Volcano() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div className="container">
      <h1>Individual Volcano</h1>
      <p>The book that you selected was: {id}</p>
      <Button
        color="info"
        size="sm"
        className="mt-3"
        onClick={() => navigate("/")}
      >
        Back
      </Button>
    </div>
  );
}
