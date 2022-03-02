# RSA Insurance - My quote


This project is a react practice test I have developed for RSA, it allows the usuer to add/remove addons as well as switching between monthly or annual payment plans.

[DEMO](https://silverhoodlum.github.io/rsa_quote)

![image](https://s7.gifyu.com/images/ezgif-2-bbb6fcc3d7.gif)

## Tech

This project has been build mainly using React, React-Hooks & Material UI



## Installation

Install the mock-api, running on server 8000. Open a terminal

```sh
cd mock-api
npm install
npm start
```

Once api is running open a new terminal & cd into into main folder, install dependencies & start

```sh
npm install 
npm start
```

## Design

The project was design in Adobe XD following the wireframe guideline provided. 
I used RSA website as a reference and colour palette matches those of RSA. 
![image](https://www.linkpicture.com/q/Web-1920-n-1_2.jpg)

## Functionality Overview

Tree component goes as follow

![image](https://www.linkpicture.com/q/rsa_diagram.jpg)

User & addOn data is fetched from mock-api (running locally on port 8000) in quotePage component.
I have used react functional components with react hooks to manage state across the tree component.
Page is mainly divided in three components: **quote summary**, **quote plan** & **addOn list**. From QuotePlanType component user can switch between monthly and annual.
Three re-usable components are used across the entire page: **button**, **quote price** & **small title**. 
Navigation bar was imported as a separate component from Material UI for visual purposes.






**Thanks for visiting!**


