/** @type {import('@react-router/dev/config').Config} */
export default {
  appDirectory: "app",
  ssr: false,
  prerender: [
    "/",
    "/over-ons",
    "/diensten",
    "/contact",
    "/diensten/beschermingsbewind",
    "/diensten/budgetbeheer",
    "/veelgestelde-vragen",
    "/404.html",
  ],
};
