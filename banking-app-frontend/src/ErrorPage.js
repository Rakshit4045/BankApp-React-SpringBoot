import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
        <img className="errorImg" src="https://tse1.mm.bing.net/th?id=OIP.B3udwdIn5IVlDe82t9blWAHaEL&pid=Api&P=0" alt="page not found">
        </img>
        <Link to={"/"}>
            <button type="button" className="errorBtn btn btn-success">Go to Home</button>
        </Link>
    </div>
  )
}
