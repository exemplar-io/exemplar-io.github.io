import React from 'react';
import Sidebar from '../components/UI/Sidebar/Sidebar';

// How to create a code block

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Docs = () => {
  return (
    <>
      <Sidebar />
      <main
        className={
          'container mx-auto w-1/2 space-y-5 pb-10 pt-20 text-secondary text-left font-montserrat '
        }
      >
        <h1
          className="text-2xl bg-primary-800 bg-opacity-50 p-3 rounded font-semibold"
          id="introduction"
        >
          Introduction
        </h1>
        <p className="text-m">
          For a developer, setting up a new project from scratch can be a
          difficult task. The developer has to come up with a good overall
          design and architecture, while also choosing which tech stacks to use.
          By picking the correct choices from the beginning, a lot of time spent
          refactoring code in the future can be mitigated and the focus of the
          developer can be on developing cool features instead!
        </p>
        <p className="text-m">
          Exemplar is a framework with the intention to help developers build
          full stack software solutions, by providing an out-of-the-box template
          to generate a project, with a frontend, backend consisting of
          microservices, message queue and a DevOps setup with pipelines for
          automatic testing and deployment. The motivation behind this is, to
          ensure a software project doesn't run in to scalability issues, and in
          general help the project evolving in a direction that satisfy both
          short-term, but especially long-term requirements. From the rest of
          the documentation page, we will focus on the project that exemplar
          generates for you.
        </p>
        <h2
          className="text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1 "
          id="how-does-it-work"
        >
          How does it work?
        </h2>
        <p className="text-m">
          Imagine you, a developer, wants to start a new project. What would be
          the first steps you take? Probably picking an adequate frontend and
          backend technology and create a Git repository. Afterwards, you would
          probably setup some testing framework, write a pipeline to ensure
          automatic deployment to a cloud and more. By looking at the diagram,
          the idea behind Exemplar is, that all of this is provided to you
          already. You are simply asked to authorise your Github account and
          choose a project name and a project is generated for you.
        </p>
        <div>
          <img
            src={process.env.PUBLIC_URL + '/docs/system.png'}
            alt="overview"
            className="w-4/4 m-auto rounded-lg"
          />
        </div>
        <h2
          className="text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1"
          id="tech-stack"
        >
          Tech stack
        </h2>
        <p className="text-m">
          Before we are diving deeper into what exactly is generated, we would
          just like to show the tech stack that you will have available in your
          generated project.
        </p>
        <ul className="list-disc pl-8  bg-gray-900 bg-opacity-50 rounded p-4">
          <li>React with TypeScript (Dockerized)</li>
          <li>Nestjs applications with Typescript (Dockerized)</li>
          <li>Redis (Dockerized)</li>
          <li>Git submodules</li>
          <li>Github actions</li>
          <li>Github pages</li>
          <li>Docker-compose</li>
          <li>Webdriver.io (Selenium grid)</li>
          <li>Postman automation</li>
          <li>
            Kubernetes integration including deployment files for each app
          </li>
        </ul>
        <h1
          className="text-2xl bg-primary-800 bg-opacity-50 p-3 rounded font-semibold"
          id="whats-generated"
        >
          What's generated
        </h1>
        <p className="text-m">
          Now, let's get into what Exemplar generates for you. There are three
          main applications, a frontend and two microservices; all three are
          dockerized. Besides that, there are test suites, build, test,
          deployment pipelines as well as docker orchestration tools. A lot of
          these technologies does not live in a specific app, but cross-app. It
          might seem counter-intuitive to develop microservices and still rely
          on some sort of centralization, but for example E2E tests or
          orchestration tools such as Kubernetes simply needs to be in a
          centralized context. Therefore, it makes sense to start explaining the
          root project.
        </p>
        <h2
          className="text-xl  border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1"
          id="frontend-repository"
        >
          Frontend
        </h2>
        <p className="text-m">
          The frontend is the users' way of interacting with the system. We have
          decided to use the{' '}
          <a href="https://reactjs.org/" target="_blank">
            ReactJS
          </a>{' '}
          and specifically, combined with{' '}
          <a href="https://www.typescriptlang.org/" target="_blank">
            Typescript
          </a>{' '}
          .
        </p>
        <p className="text-m">
          The frontend contains a simple login component, that allows the user
          to authenticate themselves with a username and a password to the
          generated backend. For the frontend it has been chosen to have a bare
          minimum of functionality, and instead the focus has been on the
          creating the infrastructure to develop, test and deploy it.
          Specifically, the following functionality is included in the frontend.
        </p>
        <ul className="list-disc pl-8 bg-gray-900 bg-opacity-50 rounded p-4">
          <li>
            The frontend application is a ReactJS application with Typescript
          </li>
          <li>Automatic Github deployment to public URL with Github Pages</li>
          <li>Selenium e2e test-suite setup</li>
          <li>Integration tests setup</li>
          <li>Unit tests setup</li>
          <li>
            Github actions to build and test automatically, upon opening a pull
            request
          </li>
        </ul>
        <h2
          className="text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1"
          id="backend"
        >
          Backend
        </h2>
        <p>
          The backend is the part of the system which is not run in your
          browser. Specifically, looking at the figure below, it can be seen as
          the white box surrounding the API gateway, AuthMS, MS and MQ.
        </p>
        <p>
          As it is, the backend's current functionality is to authenticate users
          and that's it. As mentioned in the frontend section, the focus is to
          create the infrastructure to develop a scalable and flexible
          application. To authenticate a user, all of the components below are
          triggered (except MS, but we will explain that a bit later).
        </p>
        <img
          src={process.env.PUBLIC_URL + '/docs/generated_app_architecture.svg'}
          alt="overview"
          className="w-3/6 m-auto"
        />
        <h2
          className="text-m border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1 max-w-max"
          id="backend"
        >
          API gateway
        </h2>
        <p className="text-m">
          The API gateway is the point that the frontend can interact with
          through Rest. It is developed in{' '}
          <a href="https://nestjs.com/" target="_blank">
            {' '}
            NestJS
          </a>{' '}
          . The API gateways responsibility is to provide the infrastructure for
          the communication between the frontend and backend in this scenario.
        </p>
        <p>
          The API gateway listens on port 3000 and it serves one endpoint, the
          /login endpoint. The endpoint will put a message on the message queue,
          saying that an authentication task is ready to be picked up. This is
          also why it is called the API gateway, because its task is to delegate
          the communication in the app. The actual authentication logic resides
          in the AuthMS.
        </p>
        <h2 className="text-m border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1 max-w-max">
          AuthMS
        </h2>
        <p>
          The The AuthMS microservice cannot be interacted through rest, as it
          is with the API gateway. The AuthMS can be interacted with through
          messages put on the message queue. Just like the API gateway, this is
          a NestJS project written in Typescript.
        </p>
        <p>
          It connects to the message queue and listens for messages with the
          login id. When a message with the login id is put on the queue, it
          will consume it and verify if the user is an authenticated user or
          not. If the user is authenticated, it will return a JWT (JSON web
          token) and if not, a new unauthorized exception will be thrown and the
          user will receive a 401 Unauthorized status code. Using JWTs for
          authentication is a very popular and highly scalable method of
          implementing authentication - you can read a lot more about it on the
          <a href="https://jwt.io/" target="_blank">
            {' '}
            jwt.io{' '}
          </a>
          website.
        </p>
        <h2 className="text-m border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1 max-w-max">
          Backend summary
        </h2>
        <ul className="list-disc pl-8 bg-gray-900 bg-opacity-50 rounded p-4">
          <li>API gateway written in NestJS</li>
          <li>Authentication microservice written in NestJS</li>
          <li>Empty (extendable microservice) written in NestJS</li>
          <li>
            All three of the above services in their Github repositories
            (submodules)
          </li>
          <li>Dockerization by all of the above services</li>
          <li>Message queue using Redis</li>
          <li>Postman Automation e2e tests for API gateway</li>
          <li>Integration tests for backend</li>
          <li>Unit tests for backend</li>
          <li>
            Github actions to build and test automatically, upon opening a pull
            request
          </li>
        </ul>
        <h2
          className="text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1"
          id="root-repository"
        >
          Root repository (System)
        </h2>
        <p className="text-m">
          Now, you might think there is a missing link, which comes now. Even
          though we seek to decouple the different apps as much as possible,
          when it comes to testing and managing the applications in a production
          context, there needs to be some sort of centralization. This is done
          by having a root git project.
        </p>
        <p>
          The root project will be a stand alone Github repository which
          contains references to all the repositories we have generated. The
          different references are so called{' '}
          <a
            href="https://git-scm.com/book/en/v2/Git-Tools-Submodules"
            target="_blank"
          >
            submodules
          </a>
          , which are links to other stand alone repositories - hence, it is not
          a nested repository. This means that the different git submodule apps,
          can also be cloned and developed independently if desired.
        </p>
        <p>
          Apart from the submodule references, the root project also contains a
          <a href="https://docs.docker.com/compose/" target="_blank">
            {' '}
            docker-compose
          </a>{' '}
          file. With this file, after you've downloaded the project, you can
          spin up the entire project with the command docker-compose up. This is
          because all three apps are dockerized as mentioned before.
        </p>
        <p>
          Docker-compose is a good tool for local docker-orchestration, but in a
          production context it is inadequate. Therefore, there is also provided
          support to deploy the application using{' '}
          <a href="https://kubernetes.io/" target="_blank">
            {' '}
            Kubernetes
          </a>
          . Below is an example of the application could be deployed using
          Kubernetes, and it is showing a state with multiple service pods. This
          could indicate that the MS pods have been under some load, and
          therefore the system deemed it necessary to deploy several pods.
        </p>
        <img
          src={process.env.PUBLIC_URL + '/docs/system_diagram_k8.svg'}
          alt="overview"
          className="w-4/6 m-auto"
        />
        <p>
          Seen below is the folder structure of the generated app, where the
          building, deployment, orchestration files and more is shown. DevOps
          pipelines and Github actions will be shown later.
        </p>
        <img
          src={process.env.PUBLIC_URL + '/docs/git_structure.png'}
          alt="overview"
          className="w-5/6 m-auto"
        />
        <p>
          Specifically, the files above means that the project supports the
          following features:
        </p>
        <ul className="list-disc pl-8 bg-gray-900 bg-opacity-50 rounded p-4">
          <li>
            Docker orchestration for local development using docker-compose
          </li>
          <li>
            Deployment files used to deploy the microservices and Redis into
            Kubernetes clusters either locally or on a cloud-provider
          </li>
          <li>
            Local deployment, scaling and management of containerized
            applications using Kubernetes and minikube
          </li>
          <li>
            Guide on how to deploy the backend on Amazons EKS (Elastic
            Kubernetes service)
          </li>
          <li>Script to build all Docker images</li>
        </ul>
        <h2
          className="text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1"
          id="DevOps"
        >
          DevOps
        </h2>
        <p>
          In order to ensure that the app is always functioning, and that it
          gets deployed continuously, DevOps pipelines have been setup. Each
          component is isolated in the sense that they have their own repository
          and thus each have their own DevOps pipelines.
        </p>
        <p>
          The process of extending one of the apps is shown below. The process
          is started, by opening a pull request. This pull request will trigger
          two pipelines; Unit tests and E2E tests. If they pass, you will merge
          the PR into the master branch and you can deploy the code to
          production, knowing that it works (if you wrote tests that actually
          check the newly implemented code).
        </p>
        <img
          src={process.env.PUBLIC_URL + '/docs/devops.png'}
          alt="overview"
          className="w-4/6 m-auto"
        />
        <p>
          Depending on which app it is testing, the actual workflow and test
          frameworks are a bit different.
        </p>
        <p>
          For the frontend, there are unit tests, integration tests and E2E
          tests. The unit tests are based on Jest and can be run using{' '}
          <span className="font-mono text-sm  bg-gray-800 p-1">npm test</span>,
          where as the E2E tests are based on the Selenium grid using
          webdriver.io. This actually launches a Chromium browser running in
          headless state, performing UI updates through the frontend.
        </p>
        <p>
          It is E2E test, because we are directly interfering with the UI and
          the tests are written, such that a user interaction calls the backend
          and a value is expected in return; if the value is returned and
          correct, it means that the other end, i.e. the backend has also been
          included and therefore it is an E2E-test. This is possible because the
          Selenium project running these E2E tests, pulls the whole application
          and spins it up with Docker-compose
        </p>
        <p>
          If the tests pass and you merge your branch into master, the code will{' '}
          <span className="italic">automatically</span> be pushed to production,
          i.e. Github pages. This is to ensure continuous deployment and if the
          tests have been written correctly and they pass, there is no reason to
          hold your release back in general.
        </p>
        <p>
          For the other apps, the idea is the same as for the frontend, except
          that continuous deployment is not included. Each app meaning the API
          gateway, AuthMS and MS have their own testing pipelines, which include
          unit and E2E-tests.
        </p>
        <p>
          The E2E tests in the context of the backend are initiated through{' '}
          Postman Automation tests. The Postman Automation tests will call the
          endpoint(s) in the API gateway, and it will reach all the
          microservices and Redis MQ.
        </p>
        <p>
          The integration tests are triggering code across methods and classes,
          but not across microservices. The responses from other microservices
          are mocked, which could be message queue responses or API request
          responses.
        </p>
        <h1
          className="text-2xl  bg-primary-800 bg-opacity-50 p-3 rounded font-semibold"
          id="next-steps"
        >
          Next Steps - Development Guidelines
        </h1>
        <p className="text-secondary text-m text-left">
          You have gotten the project and seen all of the awesome components and
          code that have been generated for you. Now it's time to make it your
          own and implement exactly the features you want in your project. In
          this section we will go through how to work with the generated project
          and how to extend it with new features.
        </p>
        <p className="text-secondary text-m text-left">
          You have gotten the project and seen all of the awesome components and
          code that have been generated for you. Now it's time to make it your
          own and implement exactly the features you want in your project. In
          this section we will go through how to work with the generated project
          and how to extend it with new features.
        </p>
        <h2
          className="text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1"
          id="development-process"
        >
          Development Process
        </h2>
        <p className="text-secondary text-m text-left">
          One of the key features of Exemplar is the setup for continuous
          integration, testing and deployment. For this flow to work optimally
          we expect you to follow a certain process when developing new
          features. In this section we will explain this development process.
        </p>{' '}
        <p className="text-secondary text-m text-left">
          Generally, the flow of adding new features to the project should
          follow the listed protocol below. If the feature involves editing
          multiple different repositories, repeat this protocol for all of the
          repositories that the feature touches.
        </p>
        <ul className="list-disc pl-8 bg-gray-900 bg-opacity-50 rounded p-4">
          <li>
            Create and checkout a new git branch with the name of the feature.
          </li>
          <li>Develop the necessary code. Issue Git commits regularly</li>

          <li>Develop appropriate amount of unit, integration and e2e tests</li>
          <li>
            When the feature is implemented, open a new pull request in Github.
          </li>
          <li>Verify that all Github Actions workflows runs and completes.</li>
          <li>Merge the pull request with the main branch.</li>
        </ul>
        <p className="text-secondary text-m text-left">
          The principles introduced in the list above are mostly general good
          practice. This includes working with features on a separate branch,
          developing automated tests etc. But especially important to mention,
          is that a Github pull request has to be opened in order for the
          automated test to run. This can even be forced by changing a
          configuration setting in Github but this has this up to the developer
          to do.
        </p>
        <h2
          className="text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1"
          id="developing-a-new-feature"
        >
          Developing a new feature
        </h2>
        <p className="text-secondary text-m text-left">
          When adding a new feature to the application it often involves
          modifying multiple different repositories as frontend changes often
          results in the backend needing to be modified as well. In this section
          we will go through some examples of how the different components of
          the generated app can be extended with new features.
        </p>
        <h2 className="text-m border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1 max-w-max">
          Extending the frontend
        </h2>
        <p className="text-secondary text-m text-left">
          The frontend is{' '}
          <a href="https://reactjs.org/" target="_blank">
            ReactJS
          </a>{' '}
          application, so extending it involves adding new UI components to
          existing pages or adding separate pages that can be accessed with e.g.
          a navigation bar. To add new pages to the frontend, you need to
          implement routing in the app in order to match the different urls to
          different pages. Visit{' '}
          <a
            href="https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/"
            target="_blank"
          >
            this guide
          </a>{' '}
          to see how to do it.
        </p>
        <p className="text-secondary text-m text-left">
          The code for the communication with the backend takes places in the
          files located in the <span className="font-mono">api</span> folder.
          When adding new features you are most likely going to extend one of
          these files with new api calls.
        </p>
        <h2
          className="text-m border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1 max-w-max"
          id="root-repository"
        >
          Extending a microservice
        </h2>
        <p className="text-secondary text-m text-left">
          The generated microservices are NestJS applications, so for extending
          these applications with new features, a good place to start would be
          to visit the{' '}
          <a href="https://docs.nestjs.com/" target="_blank">
            NestJS documentation.
          </a>{' '}
          Here, you will find a lot more info on how NestJS is setup and how new
          components can be added. Generally, for extending the microservices,
          the{' '}
          <a href="https://docs.nestjs.com/cli/overview" target="_blank">
            NestJS CLI
          </a>{' '}
          can be used. For example, to generate a new module in the project, the
          following command can be used{' '}
          <SyntaxHighlighter language="shell" style={nord} showLineNumbers>
            {`nest g module`}
          </SyntaxHighlighter>
          If the folder with the name of the module is not already present, Nest
          will also create this for you. Similarly, the Nest CLI can be used to
          create template code for service classes, controller classes and even
          automated tests. Similarly, the Nest CLI can be used to create
          controller template code for service classes, controller classes and
          even automated tests.
        </p>
        <h2
          className="text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1"
          id="addning_new_ms"
        >
          Adding a new microservice
        </h2>
        <p>
          Sometimes extending the existing microservices are not enough, which
          leads to the step of adding a new microservice to the project. This is
          also the part of the project, in which it would be natural to use
          other technologies that you are more familiar with, if you do not like
          Nestjs or prefer something else. We will show how to add a new Nestjs
          microservice - the initial steps are the same for other microservices
          as well though.
        </p>
        <p>
          <span className="font-bold">
            This can be skipped if using nest CLI:
          </span>{' '}
          The most natural step would be to create a new git repository
        </p>
        <p>
          <SyntaxHighlighter language="shell" style={nord} showLineNumbers>
            {`mkdir new-ms-name && cd ms-name && git init`}
          </SyntaxHighlighter>
        </p>
        <p>
          Now, we will create a Nestjs app. This could however be whatever
          technology you would want.
        </p>
        <p>
          <SyntaxHighlighter language="shell" style={nord} showLineNumbers>
            {`nest new ms-name`}
          </SyntaxHighlighter>
          <p>
            It will ask you some questions about the project, such as whether to
            use npm or yarn etc. This is up to you to chose, but we use npm.
          </p>
          <p>
            The next part of the Documentation is heavily based on the{' '}
            <a
              href="https://docs.nestjs.com/microservices/basics/"
              target="_blank"
            >
              official Nestjs documentation
            </a>
            . Since the backend for the generated project is already using a
            Redis MQ, we will create a microservice using Redis. Navigate into
            the project and install the microservice package and Redis
          </p>
        </p>
        <p>
          Once that is installed go to the{' '}
          <span className="font-mono text-sm bg-primary-500 p-1 rounded">
            main.ts
          </span>{' '}
          file. Assuming the generated app is up, Redis should already be
          running on port 6379. Import the necessary libraries and setup the
          connection. The file should look like this
        </p>
        <p>
          <SyntaxHighlighter language="javascript" style={nord} showLineNumbers>
            {`import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options: {
        url: 'redis://redis-master:6379',
      },
    },
  );
  await app.listen();
}
bootstrap();`}
          </SyntaxHighlighter>
        </p>
        <p>
          It is not necessary, but ideally the microservice should be
          Dockerized. The same Dockerfile used in the other microservices, i.e.
          AuthMS and MS can be used again. For local development, it is nice to
          use docker-compose, so the next step is to extend the
          docker-compose.yml file to spin up the new service.
        </p>
        <SyntaxHighlighter language="yaml" style={nord} showLineNumbers>
          {`new-ms:
  container_name: nestjs_new-ms-name_dev
  image: nestjs-ms-dev:1.0.0
  build:
    context: ./new-ms-name
    target: development
    dockerfile: ./Dockerfile
  command: npm run start:dev
  networks:
    - nesjs-network
  volumes:
    - ./ms:/usr/src/app
    - /usr/src/app/node_modules
  restart: unless-stopped`}
        </SyntaxHighlighter>
        <p>
          You set the context to be the name of the new microservice, and
          therefore you will need to put the Dockerfile in the root folder of
          the new microservice.
        </p>
        <p>
          Now, if you run{' '}
          <span className="font-mono text-sm bg-primary-500 p-1 rounded">
            docker-compose up
          </span>{' '}
          the new microservice should be deployed along the others, and it will
          listen to the Redis queue.
        </p>
        <p>
          The new microservice is now officially a part of your application, but
          it cannot really be interacted with. In order to tie all the loose
          ends together, the next step is to define a message Redis message and
          create an endpoint in the API-gateway.
        </p>
        <p>
          Go the the{' '}
          <span className="font-mono text-sm bg-primary-500 p-1 rounded">
            app.controller.ts
          </span>{' '}
          in the api microservice. As mentioned, we want to create a new
          endpoint that can be called externally. A simple GET request is
          sufficient for this use case.
        </p>
        <p>
          <SyntaxHighlighter language="javascript" style={nord} showLineNumbers>
            {`@Get('new-endpoint')
newEndpoint() {
  return this.appService.newEndpoint();
}`}
          </SyntaxHighlighter>
        </p>
        <p>
          In the same microservice, go to the service class{' '}
          <span className="font-mono text-sm bg-primary-500 p-1 rounded">
            app.service.ts
          </span>{' '}
          and implemented the method that is called above, i.e.{' '}
          <span className="font-mono text-sm bg-primary-500 p-1 rounded">
            newEndpoint()
          </span>
          .
        </p>
        <p>
          <SyntaxHighlighter language="javascript" style={nord} showLineNumbers>
            {`newEndpoint() {
  return this.clientProxy.send('new-endpoint', 'arbitrary-data')
}`}
          </SyntaxHighlighter>
        </p>
        <p>
          What this does is that it sends a new message to the Redis message
          queue, with a message id{' '}
          <span className="font-mono text-sm bg-primary-500 p-1 rounded">
            new-endpoint
          </span>{' '}
          and some data, in this case a string.
        </p>
        <p>
          In the new microservice,{' '}
          <span className="font-mono text-sm bg-primary-500 p-1 rounded">
            new-ms
          </span>{' '}
          we want to listen for messages containing the message id{' '}
          <span className="font-mono text-sm bg-primary-500 p-1 rounded">
            new-endpoint
          </span>
          .
        </p>
        <p>
          In order to do so, go the the{' '}
          <span className="font-mono text-sm bg-primary-500 p-1 rounded">
            app.controller.ts
          </span>{' '}
          in the new-ms microservice. Here, we decorate the method with the{' '}
          message pattern decorator.
        </p>
        <p>
          <SyntaxHighlighter language="javascript" style={nord} showLineNumbers>
            {`@MessagePattern('new-endpoint')
returnSomeMessage(): string {
  return this.appService.returnSomeMessage();
}`}
          </SyntaxHighlighter>
        </p>
        <p>
          Lastly, in the same microservice, go to the service class{' '}
          <span className="font-mono text-sm bg-primary-500 p-1 rounded">
            app.service.ts
          </span>{' '}
          and implemented the method that is called above, i.e.{' '}
          <span className="font-mono text-sm bg-primary-500 p-1 rounded">
            returnSomeMessage()
          </span>
          .
        </p>
        <p>
          <SyntaxHighlighter language="javascript" style={nord} showLineNumbers>
            {`newEndpoint(): string {
  return 'You have created a new endpoint which uses Redis';
}`}
          </SyntaxHighlighter>
        </p>
        <p>
          To test it out, if you navigate to localhost:3000/new-endpoint, you
          should see the message above.
        </p>
        <h2
          className="text-xl border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1"
          id="deploying-to-production"
        >
          Deploying to production
        </h2>
        <p>
          For deploying the code to production there are of course a lot of
          options. In the generated code, we have added support for easily
          deploying the frontend to Github Pages and the backend to a Kubernetes
          Cluster in AWS (or any other Cloud Provider). In this section we will
          explain how to do this.
        </p>
        <h2 className="text-m border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1 max-w-max">
          Deploying the frontend
        </h2>
        <p>
          As explained, we have setup everything needed to deploy the frontend
          with Github Pages to a public URL. When you create the project, a
          Github Actions workflow called
          <span className="italic"> deploy </span>is started which will build a
          performance optimized build of the code and push that build to a
          branch called <span className="font-mono"> gh-pages </span>. The
          default URL of the frontend will have the format
          <span className="font-mono">
            {' '}
            https://[username].github.io/[repository-name]
          </span>
          . However, we haven't made it live yet, in case you wanted to modify
          some things before making it accessible to everyone.
        </p>
        <p>
          After the <span className="italic"> deploy </span> workflow has
          completely, follow these steps o deploy the frontend to a public
          domain
        </p>
        <ul className="list-disc pl-8 bg-gray-900 bg-opacity-50 rounded p-4">
          <li>
            Go to the settings page of the Github repository of the frontend
          </li>
          <li>Navigate to the Pages menu</li>

          <li>
            Change the source branch to{' '}
            <span className="font-mono"> gh-pages </span>
          </li>
        </ul>
        <p>
          Now just wait around 5 minutes for Github Pages to publish the code
          and that's it!
        </p>
        <h2 className="text-m border-b-2 border-primary-800 font-medium bg-opacity-50 pb-1 max-w-max">
          Deploying the backend
        </h2>
        <p>
          For deploying the backend we have generated deployment files to
          generate a Kubernetes Cluster. This cluster can basically be deployed
          on any cloud provider supporting Kubernetes, such as Google Cloud, AWS
          and Azure. We will go through how to deploy the cluster on AWS using
          the service AWS EKS. For deploying on Azure you need to use the
          service{' '}
          <a
            href="https://azure.microsoft.com/en-us/services/kubernetes-service/#overview"
            target="_blank"
          >
            Azure Kubernetes Service
          </a>{' '}
          and for Google Cloud, you need to visit the service{' '}
          <a href="https://cloud.google.com/kubernetes-engine" target="_blank">
            Google Kubernetes Engine
          </a>
        </p>
        <p>
          To deploy on AWS you need to utilize the generated deployment files as
          well as some commandline tools for kubernetes and AWS EKS. Below is a
          guide to deploy with the backend on a Macbook
        </p>
        <p>First, you need to get the EKS CLI</p>
        <SyntaxHighlighter language="shell" style={nord} showLineNumbers>
          {`brew tap weaveworks/tap \nbrew install weaveworks/tap/eksctl`}
        </SyntaxHighlighter>
        <p>
          Then, you need to create a cluster and make sure you have AWS
          credentials stored in a file `~/.aws/credentials`. A lot of variables
          are available and the process can take up to 20 minutes.{' '}
        </p>
        <SyntaxHighlighter language="shell" style={nord} showLineNumbers>
          {`eksctl create cluster --name exemplar --node-type t2.micro`}
        </SyntaxHighlighter>
        <p>To verify the status of the generated node, input the following: </p>
        <SyntaxHighlighter language="shell" style={nord} showLineNumbers>
          {`kubectl get nodes`}
        </SyntaxHighlighter>
        <p>
          Then, you need to create an ECR registry and publish your images.{' '}
        </p>
        <p>
          In your .yaml deployment files make sure that the image value points
          to the ECR url from AWS.{' '}
        </p>
        <p>Now, you can deploy using kubetl:</p>
        <SyntaxHighlighter language="shell" style={nord} showLineNumbers>
          {`kubectl deploy`}
        </SyntaxHighlighter>
      </main>
    </>
  );
};

export default Docs;
