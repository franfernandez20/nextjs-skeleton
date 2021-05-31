This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## ESlint config

Resource to adapt lint config to NextJS[Config for NextJS](https://devinshoemaker.com/blog/next-js/configure-eslint).

Check out our [ESLint documentation](https://eslint.org/docs/).

Add the next code at setting.json to config VSC to autoformat the file when save.
```JSON
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": ["javascript"]
```
To use eslint: 
```bash
npm run lint
```
---
## Add Test utilities 
### Jest Testing Library + examples
Oficial docu [Jest](https://jestjs.io/docs/)

Examples:
- test/index
- test/testExample
### React Testing Library + examples
Oficial docu [testing-library](https://testing-library.com/docs/react-testing-library/intro/)

[Midu explain](https://www.youtube.com/watch?v=KYjjtRgg_H0&t=360s)

Examples:
- components/Note
- components/Toggaleble
#### To run all de test use:
```bash
npm run test
```

#### To run test in interactive mode use:
```bash
npm run test-watch
```
---

## Chakra UI 
[Oficial Docu](https://chakra-ui.com/)

#### Examples of use in:
- index.js
- Main
- Hero
- CTA
- AirbnbCard
---

## Absolute routes config
 Configuration on __jsconfig.json__  
```js
"paths": {
      "@components/*": ["components/*"]
}

//call like:
import { <xxx> } from '@componens/<xxx>'
```


 Updates on it requires a server restart
 
 > Some extra code for example is keeped
---

# Mongo + Mongoose ___baseline___
- Basic config to access DB. 
    - Set de var ***MONGODB_URI*** with the connection URL+credentials
- Define the User model
- API with end point to mannage the simples action with the model
- Include ***/request*** folder with defined request to created endPoint in the API

---

# Simple test cases
- Orders created to test interaction with db


# Progressive Web App

This example uses [`next-pwa`](https://github.com/shadowwalker/next-pwa)
