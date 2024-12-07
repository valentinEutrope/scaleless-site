import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = import.meta.env.VITE_PRISMIC_REPOSITORY_NAME || ''
export const entryPoint = import.meta.env.VITE_PRISMIC_ENTRY_POINT
export const accessToken = import.meta.env.VITE_PRISMIC_ACCESS_TOKEN

// console.log("repositoryName : ", repositoryName);
// console.log("entryPoint : ", entryPoint);
// console.log("accessToken : ", accessToken);

// export const client = prismic.createClient(repositoryName, {
//   accessToken,

//   // This defines how you will structure URL paths in your project.
//   // Update the types to match the custom types in your project, and edit
//   // the paths to match the routing in your project.
//   //
//   // If you are not using a router in your project, you can change this
//   // to an empty array or remove the option entirely.
//   routes: [
//     {
//       type: "homepage",
//       path: "/",
//     },
//   ],
// });

export const client = prismic.createClient('https://scaleless.cdn.prismic.io/api/v2', {
  accessToken:
    'MC5aUThLYUJBQUFDc0FSU3lh.77-9L2dfGzcjL--_vU3vv70VbO-_ve-_ve-_ve-_vRIPFE3vv70l77-977-9Yzjvv73vv73vv73vv70_',
  routes: [
    {
      type: 'homepage',
      path: '/',
    },
    {
      type: 'home_bio',
      path: '/',
    },
  ],
})
