(this["webpackJsonpexemplar-io.github.io"]=this["webpackJsonpexemplar-io.github.io"]||[]).push([[0],{381:function(e,t,s){"use strict";s.r(t);var o=s(1),n=s.n(o),i=s(57),a=s.n(i),r=(s(72),s(12)),c=s(2),l=s(21),d=s(10),h=s(14),p=s.n(h),u=s(58),b=s.n(u),m=function(){var e=Object(l.a)(p.a.mark((function e(t,s){var o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.delete("/github/repo?projectName=".concat(t,"&token=").concat(s));case 2:return o=e.sent,console.log(o),e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),j=b.a.create({baseURL:"https://8eqbhzi5ay.eu-west-1.awsapprunner.com"}),x=s(0),f=function(e){var t=e.title,s=e.onClick,o=e.disabled;return Object(x.jsx)("button",{className:"bg-primary-800 shadow hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50  focus:shadow-outline focus:outline-none text-secondary font-semibold py-2 px-4 rounded",onClick:s,disabled:o,children:t})},g=function(e){var t=e.id,s=e.placeholder,o=e.error,n=e.value,i=e.onChange,a="border-primary-500";return o&&(a="border-error"),Object(x.jsx)("input",{className:"shadow appearance-none border-2 "+a+" rounded py-2 px-3 text-primary-500 leading-tight focus:outline-none focus:shadow-outline",id:t,type:"text",placeholder:s,value:n,onChange:i})},w=s(59),y=s.n(w),O=function(){return Object(x.jsx)("div",{className:y.a.loader})},v=s(382),k=s(383),N=function(){var e=Object(o.useState)(""),t=Object(d.a)(e,2),s=t[0],n=t[1],i=Object(o.useState)(""),a=Object(d.a)(i,2),r=a[0],h=a[1],u=Object(o.useState)(""),b=Object(d.a)(u,2),w=b[0],y=b[1],N=Object(o.useState)(""),T=Object(d.a)(N,2),S=T[0],A=T[1],_=Object(o.useState)(!1),E=Object(d.a)(_,2),I=E[0],C=E[1],P=new URLSearchParams(Object(c.f)().search).get("code");console.log("code1",P),Object(o.useEffect)((function(){console.log("code",P),P&&function(e){return j.post("/github/auth",{githubCode:e}).then((function(e){return console.log(e.data),e.data}))}(P).then((function(e){n(e)}))}),[P]);var D=function(){var e=Object(l.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(r,s).then((function(){A(""),y("")})).catch((function(){A("Oh no! One or more of the repositories could not be deleted! \ud83d\ude2e Please try again later")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("main",{className:"container mx-auto w-2/6 space-y-10 pb-20 pt-20",children:[Object(x.jsx)("h1",{className:"text-secondary text-4xl font-medium ",children:"Exemplar \ud83d\udd25"}),Object(x.jsx)("h3",{className:"text-secondary text-xl",children:"In order for us to be able to create an awesome project template for you, we need you to authorize your Github account with us."}),Object(x.jsx)("div",{children:Object(x.jsx)(f,{disabled:!!s,onClick:function(){return window.location.href="https://github.com/login/oauth/authorize?client_id=e78392cb4d38b6f34b4b&scope=public_repo workflow "+("dev"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GITHUB_CLIENT_ID:"e78392cb4d38b6f34b4b",REACT_APP_BACKEND_BASE_URL:"https://8eqbhzi5ay.eu-west-1.awsapprunner.com"}).REACT_APP_ENVIRONMENT?"delete_repo":""),Object(x.jsx)("div",{children:Object(x.jsx)(f,{title:"Delete Repositories",onClick:D})})},title:s?"You have authorized Github \ud83c\udf89":"Authorize Github"})}),s?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h3",{className:"text-secondary text-xl",children:"Cool! The next step is to choose a project name \ud83d\ude0e"}),Object(x.jsxs)("div",{className:"space-y-3",children:[Object(x.jsx)("div",{hidden:!S,children:Object(x.jsx)("p",{className:"text-error text-xl",children:S})}),Object(x.jsx)("div",{children:Object(x.jsx)(g,{id:"projectName",error:S,placeholder:"Project name",value:r,onChange:function(e){A(""),h(e.target.value)}})}),Object(x.jsx)("div",{children:Object(x.jsx)(f,{title:"Create Repositories",onClick:function(){C(!0),function(e,t){return j.post("/github/repo",{projectName:e,githubToken:t}).then((function(e){return e.data.rootUrl}))}(r,s).then((function(e){C(!1),y(e)})).catch((function(e){422===e.response.status&&A("Oh no! Project name was already occupied on your Github account! \ud83d\ude2e Find a new name and try again!"),y(""),C(!1)}))},disabled:!s||!r})}),"dev"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GITHUB_CLIENT_ID:"e78392cb4d38b6f34b4b",REACT_APP_BACKEND_BASE_URL:"https://8eqbhzi5ay.eu-west-1.awsapprunner.com"}).REACT_APP_ENVIRONMENT?Object(x.jsx)("div",{children:Object(x.jsx)(f,{title:"Delete Repositories",onClick:D})}):Object(x.jsx)("div",{}),Object(x.jsx)("div",{children:I?Object(x.jsx)(O,{}):null})]}),w?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{children:Object(x.jsx)("h3",{className:"text-secondary text-xl",children:"Alright, this is it. Here's the link to your new Github repo! \ud83d\udc4a\ud83c\udffc"})}),Object(x.jsx)("div",{children:Object(x.jsx)(f,{title:"Open Root Repository",onClick:function(){return window.open(w)}})}),Object(x.jsx)("div",{children:Object(x.jsx)("h3",{className:"text-secondary text-xl",children:"To download the entire project, open a terminal, paste and run the command below!"})}),Object(x.jsx)("div",{children:Object(x.jsx)(k.a,{language:"shell",style:v.a,showLineNumbers:!0,children:"git clone --recurse-submodules -j8 ".concat(w)})}),Object(x.jsx)("div",{children:Object(x.jsx)("h3",{className:"text-secondary text-xl",children:"Now navigate to the project folder and run the entire project!\ud83c\udf7e\ud83e\udd42\ud83e\udd73"})}),Object(x.jsx)("div",{children:Object(x.jsx)(k.a,{language:"shell",style:v.a,showLineNumbers:!0,children:"cd ".concat(r," && docker-compose up")})})]}):null]}):null]})},T=function(){return Object(x.jsxs)("div",{className:"h-screen w-1/6 ml-0 pt-20 top-0 fixed flex flex-col space-y-3 border-r-2 ",children:[Object(x.jsxs)("div",{className:"flex flex-col space-y-3 rounded p-4 ",children:[Object(x.jsx)("a",{className:"sticky text-secondary font-medium text-xl  hover:font-bold",href:"#introduction",children:"Introduction"}),Object(x.jsx)("a",{className:"sticky text-secondary text-m font-light hover:font-medium",href:"#how-does-it-work",children:"How does it work?"}),Object(x.jsx)("a",{className:"sticky text-secondary text-m font-light hover:font-medium",href:"#tech-stack",children:"Tech stack"})]}),Object(x.jsx)("div",{className:"w-1/2 border-2 mx-auto border-primary-800"}),Object(x.jsxs)("div",{className:"flex flex-col space-y-3 rounded p-4",children:[Object(x.jsx)("a",{className:"sticky text-secondary font-medium text-xl hover:font-bold",href:"#whats-generated",children:"What's generated"}),Object(x.jsx)("a",{className:"sticky text-secondary text-m font-light hover:font-medium",href:"#frontend-repository",children:"Frontend"}),Object(x.jsx)("a",{className:"sticky text-secondary text-m font-light hover:font-medium",href:"#backend",children:"Backend"}),Object(x.jsx)("a",{className:"sticky text-secondary text-m font-light hover:font-medium",href:"#root-repository",children:"Root repository (System)"}),Object(x.jsx)("a",{className:"sticky text-secondary text-m font-light hover:font-medium",href:"#DevOps",children:"DevOps"})]}),Object(x.jsx)("div",{className:"w-1/2 border-2 mx-auto border-primary-800"}),Object(x.jsxs)("div",{className:"flex flex-col space-y-3 rounded p-4",children:[Object(x.jsx)("a",{className:"sticky text-secondary font-medium text-xl hover:font-bold",href:"#next-steps",children:"Development Guidelines"}),Object(x.jsx)("a",{className:"sticky text-secondary text-m font-light hover:font-medium",href:"#developing-a-new-feature",children:"Developing a new feature"}),Object(x.jsx)("a",{className:"sticky text-secondary text-m font-light hover:font-medium",href:"#addning_new_ms",children:"Adding a new microservice"}),Object(x.jsx)("a",{className:"sticky text-secondary text-m font-light hover:font-medium",href:"#deploying-to-production",children:"Deploying to production"})]})]})},S=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(T,{}),Object(x.jsxs)("main",{className:"container mx-auto w-1/2 space-y-5 pb-10 pt-20 text-secondary text-left font-montserrat ",children:[Object(x.jsx)("h1",{className:"text-2xl bg-primary-800 bg-opacity-50 p-3 rounded font-semibold",id:"introduction",children:"Introduction"}),Object(x.jsx)("p",{className:"text-m",children:"For a developer, setting up a new project from scratch can be a difficult task. The developer has to come up with a good overall design and architecture, while also choosing which tech stacks to use. By picking the correct choices from the beginning, a lot of time spent refactoring code in the future can be mitigated and the focus of the developer can be on developing cool features instead!"}),Object(x.jsx)("p",{className:"text-m",children:"Exemplar is a framework with the intention to help developers build full stack software solutions, by providing an out-of-the-box template to generate a project, with a frontend, backend consisting of microservices, message queue and a DevOps setup with pipelines for automatic testing and deployment. The motivation behind this is, to ensure a software project doesn't run in to scalability issues, and in general help the project evolving in a direction that satisfy both short-term, but especially long-term requirements. From the rest of the documentation page, we will focus on the project that exemplar generates for you."}),Object(x.jsx)("h2",{className:"text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1 ",id:"how-does-it-work",children:"How does it work?"}),Object(x.jsx)("p",{className:"text-m",children:"Imagine you, a developer, wants to start a new project. What would be the first steps you take? Probably picking an adequate frontend and backend technology and create a Git repository. Afterwards, you would probably setup some testing framework, write a pipeline to ensure automatic deployment to a cloud and more. By looking at the diagram, the idea behind Exemplar is, that all of this is provided to you already. You are simply asked to authorise your Github account and choose a project name and a project is generated for you."}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:"/docs/system.png",alt:"overview",className:"w-4/4 m-auto rounded-lg"})}),Object(x.jsx)("h2",{className:"text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1",id:"tech-stack",children:"Tech stack"}),Object(x.jsx)("p",{className:"text-m",children:"Before we are diving deeper into what exactly is generated, we would just like to show the tech stack that you will have available in your generated project."}),Object(x.jsxs)("ul",{className:"list-disc pl-8  bg-gray-900 bg-opacity-50 rounded p-4",children:[Object(x.jsx)("li",{children:"React with TypeScript (Dockerized)"}),Object(x.jsx)("li",{children:"Nestjs applications with Typescript (Dockerized)"}),Object(x.jsx)("li",{children:"Redis (Dockerized)"}),Object(x.jsx)("li",{children:"Git submodules"}),Object(x.jsx)("li",{children:"Github actions"}),Object(x.jsx)("li",{children:"Github pages"}),Object(x.jsx)("li",{children:"Docker-compose"}),Object(x.jsx)("li",{children:"Webdriver.io (Selenium grid)"}),Object(x.jsx)("li",{children:"Postman automation"}),Object(x.jsx)("li",{children:"Kubernetes integration including deployment files for each app"})]}),Object(x.jsx)("h1",{className:"text-2xl bg-primary-800 bg-opacity-50 p-3 rounded font-semibold",id:"whats-generated",children:"What's generated"}),Object(x.jsx)("p",{className:"text-m",children:"Now, let's get into what Exemplar generates for you. There are three main applications, a frontend and two microservices; all three are dockerized. Besides that, there are test suites, build, test, deployment pipelines as well as docker orchestration tools. A lot of these technologies does not live in a specific app, but cross-app. It might seem counter-intuitive to develop microservices and still rely on some sort of centralization, but for example E2E tests or orchestration tools such as Kubernetes simply needs to be in a centralized context. Therefore, it makes sense to start explaining the root project."}),Object(x.jsx)("h2",{className:"text-xl  border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1",id:"frontend-repository",children:"Frontend"}),Object(x.jsxs)("p",{className:"text-m",children:["The frontend is the users' way of interacting with the system. We have decided to use the"," ",Object(x.jsx)("a",{href:"https://reactjs.org/",target:"_blank",children:"ReactJS"})," ","and specifically, combined with"," ",Object(x.jsx)("a",{href:"https://www.typescriptlang.org/",target:"_blank",children:"Typescript"})," ","."]}),Object(x.jsx)("p",{className:"text-m",children:"The frontend contains a simple login component, that allows the user to authenticate themselves with a username and a password to the generated backend. For the frontend it has been chosen to have a bare minimum of functionality, and instead the focus has been on the creating the infrastructure to develop, test and deploy it. Specifically, the following functionality is included in the frontend."}),Object(x.jsxs)("ul",{className:"list-disc pl-8 bg-gray-900 bg-opacity-50 rounded p-4",children:[Object(x.jsx)("li",{children:"The frontend application is a ReactJS application with Typescript"}),Object(x.jsx)("li",{children:"Automatic Github deployment to public URL with Github Pages"}),Object(x.jsx)("li",{children:"Selenium e2e test-suite setup"}),Object(x.jsx)("li",{children:"Integration tests setup"}),Object(x.jsx)("li",{children:"Unit tests setup"}),Object(x.jsx)("li",{children:"Github actions to build and test automatically, upon opening a pull request"})]}),Object(x.jsx)("h2",{className:"text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1",id:"backend",children:"Backend"}),Object(x.jsx)("p",{children:"The backend is the part of the system which is not run in your browser. Specifically, looking at the figure below, it can be seen as the white box surrounding the API gateway, AuthMS, MS and MQ."}),Object(x.jsx)("p",{children:"As it is, the backend\u2019s current functionality is to authenticate users and that's it. As mentioned in the frontend section, the focus is to create the infrastructure to develop a scalable and flexible application. To authenticate a user, all of the components below are triggered (except MS, but we will explain that a bit later)."}),Object(x.jsx)("img",{src:"/docs/generated_app_architecture.svg",alt:"overview",className:"w-3/6 m-auto"}),Object(x.jsx)("h2",{className:"text-m border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1 max-w-max",id:"backend",children:"API gateway"}),Object(x.jsxs)("p",{className:"text-m",children:["The API gateway is the point that the frontend can interact with through Rest. It is developed in"," ",Object(x.jsxs)("a",{href:"https://nestjs.com/",target:"_blank",children:[" ","NestJS"]})," ",". The API gateways responsibility is to provide the infrastructure for the communication between the frontend and backend in this scenario."]}),Object(x.jsx)("p",{children:"The API gateway listens on port 3000 and it serves one endpoint, the /login endpoint. The endpoint will put a message on the message queue, saying that an authentication task is ready to be picked up. This is also why it is called the API gateway, because its task is to delegate the communication in the app. The actual authentication logic resides in the AuthMS."}),Object(x.jsx)("h2",{className:"text-m border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1 max-w-max",children:"AuthMS"}),Object(x.jsx)("p",{children:"The The AuthMS microservice cannot be interacted through rest, as it is with the API gateway. The AuthMS can be interacted with through messages put on the message queue. Just like the API gateway, this is a NestJS project written in Typescript."}),Object(x.jsxs)("p",{children:["It connects to the message queue and listens for messages with the login id. When a message with the login id is put on the queue, it will consume it and verify if the user is an authenticated user or not. If the user is authenticated, it will return a JWT (JSON web token) and if not, a new unauthorized exception will be thrown and the user will receive a 401 Unauthorized status code. Using JWTs for authentication is a very popular and highly scalable method of implementing authentication - you can read a lot more about it on the",Object(x.jsxs)("a",{href:"https://jwt.io/",target:"_blank",children:[" ","jwt.io"," "]}),"website."]}),Object(x.jsx)("h2",{className:"text-m border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1 max-w-max",children:"Backend summary"}),Object(x.jsxs)("ul",{className:"list-disc pl-8 bg-gray-900 bg-opacity-50 rounded p-4",children:[Object(x.jsx)("li",{children:"API gateway written in NestJS"}),Object(x.jsx)("li",{children:"Authentication microservice written in NestJS"}),Object(x.jsx)("li",{children:"Empty (extendable microservice) written in NestJS"}),Object(x.jsx)("li",{children:"All three of the above services in their Github repositories (submodules)"}),Object(x.jsx)("li",{children:"Dockerization by all of the above services"}),Object(x.jsx)("li",{children:"Message queue using Redis"}),Object(x.jsx)("li",{children:"Postman Automation e2e tests for API gateway"}),Object(x.jsx)("li",{children:"Integration tests for backend"}),Object(x.jsx)("li",{children:"Unit tests for backend"}),Object(x.jsx)("li",{children:"Github actions to build and test automatically, upon opening a pull request"})]}),Object(x.jsx)("h2",{className:"text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1",id:"root-repository",children:"Root repository (System)"}),Object(x.jsx)("p",{className:"text-m",children:"Now, you might think there is a missing link, which comes now. Even though we seek to decouple the different apps as much as possible, when it comes to testing and managing the applications in a production context, there needs to be some sort of centralization. This is done by having a root git project."}),Object(x.jsxs)("p",{children:["The root project will be a stand alone Github repository which contains references to all the repositories we have generated. The different references are so called"," ",Object(x.jsx)("a",{href:"https://git-scm.com/book/en/v2/Git-Tools-Submodules",target:"_blank",children:"submodules"}),", which are links to other stand alone repositories - hence, it is not a nested repository. This means that the different git submodule apps, can also be cloned and developed independently if desired."]}),Object(x.jsxs)("p",{children:["Apart from the submodule references, the root project also contains a",Object(x.jsxs)("a",{href:"https://docs.docker.com/compose/",target:"_blank",children:[" ","docker-compose"]})," ","file. With this file, after you've downloaded the project, you can spin up the entire project with the command docker-compose up. This is because all three apps are dockerized as mentioned before."]}),Object(x.jsxs)("p",{children:["Docker-compose is a good tool for local docker-orchestration, but in a production context it is inadequate. Therefore, there is also provided support to deploy the application using"," ",Object(x.jsxs)("a",{href:"https://kubernetes.io/",target:"_blank",children:[" ","Kubernetes"]}),". Below is an example of the application could be deployed using Kubernetes, and it is showing a state with multiple service pods. This could indicate that the MS pods have been under some load, and therefore the system deemed it necessary to deploy several pods."]}),Object(x.jsx)("img",{src:"/docs/system_diagram_k8.svg",alt:"overview",className:"w-4/6 m-auto"}),Object(x.jsx)("p",{children:"Seen below is the folder structure of the generated app, where the building, deployment, orchestration files and more is shown. DevOps pipelines and Github actions will be shown later."}),Object(x.jsx)("img",{src:"/docs/git_structure.png",alt:"overview",className:"w-5/6 m-auto"}),Object(x.jsx)("p",{children:"Specifically, the files above means that the project supports the following features:"}),Object(x.jsxs)("ul",{className:"list-disc pl-8 bg-gray-900 bg-opacity-50 rounded p-4",children:[Object(x.jsx)("li",{children:"Docker orchestration for local development using docker-compose"}),Object(x.jsx)("li",{children:"Deployment files used to deploy the microservices and Redis into Kubernetes clusters either locally or on a cloud-provider"}),Object(x.jsx)("li",{children:"Local deployment, scaling and management of containerized applications using Kubernetes and minikube"}),Object(x.jsx)("li",{children:"Guide on how to deploy the backend on Amazons EKS (Elastic Kubernetes service)"}),Object(x.jsx)("li",{children:"Script to build all Docker images"})]}),Object(x.jsx)("h2",{className:"text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1",id:"DevOps",children:"DevOps"}),Object(x.jsx)("p",{children:"In order to ensure that the app is always functioning, and that it gets deployed continuously, DevOps pipelines have been setup. Each component is isolated in the sense that they have their own repository and thus each have their own DevOps pipelines."}),Object(x.jsx)("p",{children:"The process of extending one of the apps is shown below. The process is started, by opening a pull request. This pull request will trigger two pipelines; Unit tests and E2E tests. If they pass, you will merge the PR into the master branch and you can deploy the code to production, knowing that it works (if you wrote tests that actually check the newly implemented code)."}),Object(x.jsx)("img",{src:"/docs/devops.png",alt:"overview",className:"w-4/6 m-auto"}),Object(x.jsx)("p",{children:"Depending on which app it is testing, the actual workflow and test frameworks are a bit different."}),Object(x.jsxs)("p",{children:["For the frontend, there are unit tests, integration tests and E2E tests. The unit tests are based on Jest and can be run using"," ",Object(x.jsx)("span",{className:"font-mono text-sm  bg-gray-800 p-1",children:"npm test"}),", where as the E2E tests are based on the Selenium grid using webdriver.io. This actually launches a Chromium browser running in headless state, performing UI updates through the frontend."]}),Object(x.jsx)("p",{children:"It is E2E test, because we are directly interfering with the UI and the tests are written, such that a user interaction calls the backend and a value is expected in return; if the value is returned and correct, it means that the other end, i.e. the backend has also been included and therefore it is an E2E-test. This is possible because the Selenium project running these E2E tests, pulls the whole application and spins it up with Docker-compose"}),Object(x.jsxs)("p",{children:["If the tests pass and you merge your branch into master, the code will"," ",Object(x.jsx)("span",{className:"italic",children:"automatically"})," be pushed to production, i.e. Github pages. This is to ensure continuous deployment and if the tests have been written correctly and they pass, there is no reason to hold your release back in general."]}),Object(x.jsx)("p",{children:"For the other apps, the idea is the same as for the frontend, except that continuous deployment is not included. Each app meaning the API gateway, AuthMS and MS have their own testing pipelines, which include unit and E2E-tests."}),Object(x.jsxs)("p",{children:["The E2E tests in the context of the backend are initiated through"," ","Postman Automation tests. The Postman Automation tests will call the endpoint(s) in the API gateway, and it will reach all the microservices and Redis MQ."]}),Object(x.jsx)("p",{children:"The integration tests are triggering code across methods and classes, but not across microservices. The responses from other microservices are mocked, which could be message queue responses or API request responses."}),Object(x.jsx)("h1",{className:"text-2xl  bg-primary-800 bg-opacity-50 p-3 rounded font-semibold",id:"next-steps",children:"Next Steps - Development Guidelines"}),Object(x.jsx)("p",{className:"text-secondary text-m text-left",children:"You have gotten the project and seen all of the awesome components and code that have been generated for you. Now it's time to make it your own and implement exactly the features you want in your project. In this section we will go through how to work with the generated project and how to extend it with new features."}),Object(x.jsx)("p",{className:"text-secondary text-m text-left",children:"You have gotten the project and seen all of the awesome components and code that have been generated for you. Now it's time to make it your own and implement exactly the features you want in your project. In this section we will go through how to work with the generated project and how to extend it with new features."}),Object(x.jsx)("h2",{className:"text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1",id:"development-process",children:"Development Process"}),Object(x.jsx)("p",{className:"text-secondary text-m text-left",children:"One of the key features of Exemplar is the setup for continuous integration, testing and deployment. For this flow to work optimally we expect you to follow a certain process when developing new features. In this section we will explain this development process."})," ",Object(x.jsx)("p",{className:"text-secondary text-m text-left",children:"Generally, the flow of adding new features to the project should follow the listed protocol below. If the feature involves editing multiple different repositories, repeat this protocol for all of the repositories that the feature touches."}),Object(x.jsxs)("ul",{className:"list-disc pl-8 bg-gray-900 bg-opacity-50 rounded p-4",children:[Object(x.jsx)("li",{children:"Create and checkout a new git branch with the name of the feature."}),Object(x.jsx)("li",{children:"Develop the necessary code. Issue Git commits regularly"}),Object(x.jsx)("li",{children:"Develop appropriate amount of unit, integration and e2e tests"}),Object(x.jsx)("li",{children:"When the feature is implemented, open a new pull request in Github."}),Object(x.jsx)("li",{children:"Verify that all Github Actions workflows runs and completes."}),Object(x.jsx)("li",{children:"Merge the pull request with the main branch."})]}),Object(x.jsx)("p",{className:"text-secondary text-m text-left",children:"The principles introduced in the list above are mostly general good practice. This includes working with features on a separate branch, developing automated tests etc. But especially important to mention, is that a Github pull request has to be opened in order for the automated test to run. This can even be forced by changing a configuration setting in Github but this has this up to the developer to do."}),Object(x.jsx)("h2",{className:"text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1",id:"developing-a-new-feature",children:"Developing a new feature"}),Object(x.jsx)("p",{className:"text-secondary text-m text-left",children:"When adding a new feature to the application it often involves modifying multiple different repositories as frontend changes often results in the backend needing to be modified as well. In this section we will go through some examples of how the different components of the generated app can be extended with new features."}),Object(x.jsx)("h2",{className:"text-m border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1 max-w-max",children:"Extending the frontend"}),Object(x.jsxs)("p",{className:"text-secondary text-m text-left",children:["The frontend is"," ",Object(x.jsx)("a",{href:"https://reactjs.org/",target:"_blank",children:"ReactJS"})," ","application, so extending it involves adding new UI components to existing pages or adding separate pages that can be accessed with e.g. a navigation bar. To add new pages to the frontend, you need to implement routing in the app in order to match the different urls to different pages. Visit"," ",Object(x.jsx)("a",{href:"https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/",target:"_blank",children:"this guide"})," ","to see how to do it."]}),Object(x.jsxs)("p",{className:"text-secondary text-m text-left",children:["The code for the communication with the backend takes places in the files located in the ",Object(x.jsx)("span",{className:"font-mono",children:"api"})," folder. When adding new features you are most likely going to extend one of these files with new api calls."]}),Object(x.jsx)("h2",{className:"text-m border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1 max-w-max",id:"root-repository",children:"Extending a microservice"}),Object(x.jsxs)("p",{className:"text-secondary text-m text-left",children:["The generated microservices are NestJS applications, so for extending these applications with new features, a good place to start would be to visit the"," ",Object(x.jsx)("a",{href:"https://docs.nestjs.com/",target:"_blank",children:"NestJS documentation."})," ","Here, you will find a lot more info on how NestJS is setup and how new components can be added. Generally, for extending the microservices, the"," ",Object(x.jsx)("a",{href:"https://docs.nestjs.com/cli/overview",target:"_blank",children:"NestJS CLI"})," ","can be used. For example, to generate a new module in the project, the following command can be used"," ",Object(x.jsx)(k.a,{language:"shell",style:v.a,showLineNumbers:!0,children:"nest g module"}),"If the folder with the name of the module is not already present, Nest will also create this for you. Similarly, the Nest CLI can be used to create template code for service classes, controller classes and even automated tests. Similarly, the Nest CLI can be used to create controller template code for service classes, controller classes and even automated tests."]}),Object(x.jsx)("h2",{className:"text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1",id:"addning_new_ms",children:"Adding a new microservice"}),Object(x.jsx)("p",{children:"Sometimes extending the existing microservices are not enough, which leads to the step of adding a new microservice to the project. This is also the part of the project, in which it would be natural to use other technologies that you are more familiar with, if you do not like Nestjs or prefer something else. We will show how to add a new Nestjs microservice - the initial steps are the same for other microservices as well though."}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{className:"font-bold",children:"This can be skipped if using nest CLI:"})," ","The most natural step would be to create a new git repository"]}),Object(x.jsx)("p",{children:Object(x.jsx)(k.a,{language:"shell",style:v.a,showLineNumbers:!0,children:"mkdir new-ms-name && cd ms-name && git init"})}),Object(x.jsx)("p",{children:"Now, we will create a Nestjs app. This could however be whatever technology you would want."}),Object(x.jsxs)("p",{children:[Object(x.jsx)(k.a,{language:"shell",style:v.a,showLineNumbers:!0,children:"nest new ms-name"}),Object(x.jsx)("p",{children:"It will ask you some questions about the project, such as whether to use npm or yarn etc. This is up to you to chose, but we use npm."}),Object(x.jsxs)("p",{children:["The next part of the Documentation is heavily based on the"," ",Object(x.jsx)("a",{href:"https://docs.nestjs.com/microservices/basics/",target:"_blank",children:"official Nestjs documentation"}),". Since the backend for the generated project is already using a Redis MQ, we will create a microservice using Redis. Navigate into the project and install the microservice package and Redis"]})]}),Object(x.jsx)("p",{}),Object(x.jsxs)("p",{children:["Once that is installed go to the"," ",Object(x.jsx)("span",{className:"font-mono text-sm bg-gray-800 p-1 rounded",children:"main.ts"})," ","file. Assuming the generated app is up, Redis should already be running on port 6379. Import the necessary libraries and setup the connection. The file should look like this"]}),Object(x.jsx)("p",{children:Object(x.jsx)(k.a,{language:"javascript",style:v.a,showLineNumbers:!0,children:"import { NestFactory } from '@nestjs/core';\nimport { MicroserviceOptions, Transport } from '@nestjs/microservices';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.createMicroservice<MicroserviceOptions>(\n    AppModule,\n    {\n      transport: Transport.REDIS,\n      options: {\n        url: 'redis://redis-master:6379',\n      },\n    },\n  );\n  await app.listen();\n}\nbootstrap();"})}),Object(x.jsx)("h2",{className:"text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1",id:"deploying-to-production",children:"Deploying to production"}),Object(x.jsx)("p",{children:"For deploying the code to production there are of course a lot of options. In the generated code, we have added support for easily deploying the frontend to Github Pages and the backend to a Kubernetes Cluster in AWS (or any other Cloud Provider). In this section we will explain how to do this."}),Object(x.jsx)("h2",{className:"text-m border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1 max-w-max",children:"Deploying the frontend"}),Object(x.jsxs)("p",{children:["As explained, we have setup everything needed to deploy the frontend with Github Pages to a public URL. When you create the project, a Github Actions workflow called",Object(x.jsx)("span",{className:"italic",children:" deploy "}),"is started which will build a performance optimized build of the code and push that build to a branch called ",Object(x.jsx)("span",{className:"font-mono",children:" gh-pages "}),". The default URL of the frontend will have the format",Object(x.jsxs)("span",{className:"font-mono",children:[" ","https://[username].github.io/[repository-name]"]}),". However, we haven't made it live yet, in case you wanted to modify some things before making it accessible to everyone."]}),Object(x.jsxs)("p",{children:["After the ",Object(x.jsx)("span",{className:"italic",children:" deploy "})," workflow has completely, follow these steps o deploy the frontend to a public domain"]}),Object(x.jsxs)("ul",{className:"list-disc pl-8 bg-gray-900 bg-opacity-50 rounded p-4",children:[Object(x.jsx)("li",{children:"Go to the settings page of the Github repository of the frontend"}),Object(x.jsx)("li",{children:"Navigate to the Pages menu"}),Object(x.jsxs)("li",{children:["Change the source branch to"," ",Object(x.jsx)("span",{className:"font-mono",children:" gh-pages "})]})]}),Object(x.jsx)("p",{children:"Now just wait around 5 minutes for Github Pages to publish the code and that's it!"}),Object(x.jsx)("h2",{className:"text-m border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1 max-w-max",children:"Deploying the backend"}),Object(x.jsxs)("p",{children:["For deploying the backend we have generated deployment files to generate a Kubernetes Cluster. This cluster can basically be deployed on any cloud provider supporting Kubernetes, such as Google Cloud, AWS and Azure. We will go through how to deploy the cluster on AWS using the service AWS EKS. For deploying on Azure you need to use the service"," ",Object(x.jsx)("a",{href:"https://azure.microsoft.com/en-us/services/kubernetes-service/#overview",target:"_blank",children:"Azure Kubernetes Service"})," ","and for Google Cloud, you need to visit the service"," ",Object(x.jsx)("a",{href:"https://cloud.google.com/kubernetes-engine",target:"_blank",children:"Google Kubernetes Engine"})]})]})]})},A=function(){return Object(x.jsx)(x.Fragment,{})},_=function(e){var t=e.link,s=e.onClick,o=e.children;return Object(x.jsx)(r.b,{to:t,className:"px-3 py-2 flex items-center text-xs uppercase font-semibold leading-snug text-secondary hover:opacity-75",onClick:s,children:Object(x.jsx)("span",{className:"ml-2",children:o})})},E=function(e){var t=e.link,s=e.children;return Object(x.jsx)("button",{className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-secondary hover:opacity-75",onClick:function(){return window.open(t)},children:Object(x.jsx)("span",{className:"ml-2",children:s})})},I=Object(x.jsx)("svg",{fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"30px",height:"30px",children:Object(x.jsx)("path",{d:"M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"})}),C=function(){var e=n.a.useState(!1),t=Object(d.a)(e,2),s=t[0],o=t[1];return Object(x.jsx)("nav",{className:"fixed w-full flex flex-wrap items-center justify-between px-2 py-3 h-16 z-10",children:Object(x.jsxs)("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between",children:[Object(x.jsxs)("div",{className:"w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start",children:[Object(x.jsx)(r.b,{className:"text-sm font-semibold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-secondary",to:"/",children:"Exemplar"}),Object(x.jsx)("button",{className:"text-secondary cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return o(!s)},children:I})]}),Object(x.jsx)("div",{className:"lg:flex flex-grow items-center"+(s?" flex":" hidden"),id:"example-navbar-danger",children:Object(x.jsxs)("ul",{className:"flex flex-col lg:flex-row list-none lg:ml-auto",children:[Object(x.jsx)(_,{link:"/docs",onClick:function(){return o(!s)},children:"docs"}),Object(x.jsx)(_,{link:"/about",onClick:function(){return o(!s)},children:"about"}),Object(x.jsx)(E,{link:"https://github.com/peareasy-elastics",children:"github"})]})})]})})};var P=function(){return Object(x.jsx)("div",{className:"min-h-screen text-center bg-cover bg-center bg-wave font-montserrat",children:Object(x.jsxs)(r.a,{children:[Object(x.jsx)(C,{}),Object(x.jsx)("div",{children:Object(x.jsxs)(c.c,{children:[Object(x.jsx)(c.a,{path:"/docs",component:S}),Object(x.jsx)(c.a,{path:"/about",component:A}),Object(x.jsx)(c.a,{path:"/",component:N})]})})]})})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,384)).then((function(t){var s=t.getCLS,o=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),o(e),n(e),i(e),a(e)}))};a.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(P,{})}),document.getElementById("root")),D()},59:function(e,t,s){e.exports={loader:"Spinner_loader__fTuX5",load6:"Spinner_load6__1_74m",round:"Spinner_round__3G_CY"}},72:function(e,t,s){}},[[381,1,2]]]);
//# sourceMappingURL=main.64e06cf4.chunk.js.map