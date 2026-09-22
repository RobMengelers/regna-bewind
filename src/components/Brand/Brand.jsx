import { Link } from "react-router-dom";
import "./Brand.css";

export default function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Regna Bewind — home">
      <span className="monogram">
        R<span>.</span>
      </span>
      <span className="wordmark">
        REGNA<small>BEWIND</small>
      </span>
    </Link>
  );
}
