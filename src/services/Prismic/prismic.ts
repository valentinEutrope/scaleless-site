import * as prismic from "@prismicio/client";
// import env from "react-dotenv";

// Fill in your repository name
export const repositoryName =
  process.env.REACT_APP_PRISMIC_REPOSITORY_NAME || "";
export const entryPoint = process.env.REACT_APP_PRISMIC_ENTRY_POINT;
export const accessToken = process.env.REACT_APP_PRISMIC_ACCESS_TOKEN;

console.log("API : ", process.env.REACT_APP_PRISMIC_REPOSITORY_NAME);

export const client = prismic.createClient(repositoryName, {
  accessToken: accessToken,

  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: "homepage",
      path: "/",
    },
  ],
});
