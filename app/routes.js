import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("over-ons", "routes/over-ons.jsx"),
  route("diensten", "routes/diensten.jsx"),
  route("contact", "routes/contact.jsx"),
  route("klachten", "routes/klachten.jsx"),
  route("diensten/beschermingsbewind", "routes/beschermingsbewind.jsx"),
  route("veelgestelde-vragen", "routes/veelgestelde-vragen.jsx"),
  route("*", "routes/not-found.jsx"),
];
