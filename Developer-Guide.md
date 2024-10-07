# Developer Guide

## Getting started

To start the app locally, currently, you must start each front end and then the container.

Open a new console tab and navigate to the repo root directory

```
cd teams/Dashboard
yarn start
```

Open a new console tab and navigate to the repo root directory

```
cd teams/Onboarding
yarn start
```

Open a new console tab and navigate to the repo root directory

```
yarn start
```

This complicatibon is only temporary! Once the stage environment is deployed, we will be able to start them all right away and just control the specific front end you are working on with an environmental variable

## Adding front ends

Adding front ends is easy. It is simply how the webpack configs interact. The remotes are defined in the main [webpack.config.js](https://github.com/mousemke/special-happiness/blob/main/webpack.config.js#L31-L32). If adding a completely new source, you would start by adding it to this file. Then you would of course need to export your new component from a team folder. Whatever you added to the main webpack config also needs to be exported by your webpack config as in [this example](https://github.com/mousemke/special-happiness/blob/main/teams/Onboarding/webpack.config.js#L44-L50). The last step is importing them into the [externalDependemcies file](https://github.com/mousemke/special-happiness/blob/main/src/externalComponents.ts) so they can be used in across the app

## Changing front ends

Changing front ends is even easier! Check out the links in the above section on adding and just change the information you need to, rebuild/redeploy, and it should be working fine

## Dependencies

Dependencies are not aligned. You should be using compatible versions of react and react-dom across projects, however the individual technologies you use in the front ends is completely up to you.
