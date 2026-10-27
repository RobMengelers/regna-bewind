import { Link } from "react-router";
import "./Brand.css";

export default function Brand() {
  return (
    <Link className="brand" to="/" prefetch="intent" aria-label="Regna Bewind — home">
      <span className="monogram">
        R<span>.</span>
      </span>
      <span className="wordmark">
        REGNA<small>BEWIND</small>
      </span>
    </Link>
  );
}
