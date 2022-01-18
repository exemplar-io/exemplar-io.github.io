import React from 'react';
import Sidebar from '../components/UI/Sidebar/Sidebar';

// How to create a code block

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

// const code_block = `<div className="min-h-screen bg-gray-800 text-center">
//   <BrowserRouter>
//     <NavigationBar />
//     <Switch>
//       <Route path={'/docs'} component={Docs} />
//       <Route path={'/about'} component={About} />
//       <Route path={'/'} component={Homepage} />
//     </Switch>
//   </BrowserRouter>
// </div>`;
//
// <SyntaxHighlighter language="javascript" style={nord}>
//   {code_block}
// </SyntaxHighlighter>;

const Docs = () => {
  return (
    <>
      <Sidebar />
      <main
        className={
          'container mx-auto w-1/2 space-y-5 pb-10 pt-20 text-secondary text-left'
        }
      >
        <h1
          className="text-2xl border-2 bg-primary-900 bg-opacity-50 p-4 rounded"
          id="introduction"
        >
          Introduction
        </h1>
        <p className="text-m">
          For a developer, setting up a new project from scratch can be a
          diﬀicult task. The developer has to come up with a good overall design
          and architecture, while also choosing which tech stacks to use. By
          picking the correct choices from the beginning, a lot of time spent
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
          className="text-xl border bg-primary-900 bg-opacity-50 p-2 rounded"
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
          className="text-xl border bg-primary-900 bg-opacity-50 p-2 rounded"
          id="tech-stack"
        >
          Tech stack
        </h2>
        <p className="text-m">
          Before we are diving deeper into what exactly is generated, we would
          just like to show the tech stack that you will have available in your
          generated project.
        </p>
        <ul className="list-disc pl-8 text-sm bg-gray-900 bg-opacity-50 rounded p-4">
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
          className="text-2xl border-2 bg-primary-900 bg-opacity-50 p-4 rounded"
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
          className="text-xl border bg-primary-900 bg-opacity-50 p-2 rounded"
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
        <ul className="list-disc pl-8 text-sm bg-gray-900 bg-opacity-50 rounded p-4">
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
          className="text-xl border bg-primary-900 bg-opacity-50 p-2 rounded"
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
          As it is, the backend’s current functionality is to authenticate users
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
          className="text-m border bg-primary-900 bg-opacity-50 p-1 rounded"
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
        <h2 className="text-m border bg-primary-900 bg-opacity-50 p-1 rounded">
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
        <h2 className="text-m border bg-primary-900 bg-opacity-50 p-1 rounded">
          Backend summary
        </h2>
        <ul className="list-disc pl-8 text-sm bg-gray-900 bg-opacity-50 rounded p-4">
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
          className="text-xl border bg-primary-900 bg-opacity-50 p-2 rounded"
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
        <ul className="list-disc pl-8 text-sm bg-gray-900 bg-opacity-50 rounded p-4">
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
          className="text-xl border bg-opacity-50 bg-primary-800 p-2 rounded"
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
          <span className="font-mono text-primary-300">npm test</span>, where as
          the E2E tests are based on the Selenium grid using webdriver.io. This
          actually launches a Chromium browser running in headless state,
          performing UI updates through the frontend.
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
        <h1 className="text-2xl  bg-primary-800 p-4 rounded" id="next-steps">
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
        <h2 className="text-2xl" id="root-repository">
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
          follow the listed protocol. If the feature involves editing multiple
          different repositories, repeat this protocol for all of the
          repositories that the feature touches.
          <ul className="list-disc">
            <li>
              Create and checkout a new git branch with the name of the feature.
            </li>
            <li>Develop the necessary code. Issue Git commits regularly</li>
            <li>
              Develop appropriate amount of unit, integration and e2e tests
            </li>
            <li>
              When the feature is implemented, open a new pull request in
              Github.
            </li>
            <li>
              Verify that all Github Actions workflows runs and completes.
            </li>
            <li>Merge the pull request with the main branch.</li>
          </ul>
          The principles introduced in the list above are mostly general good
          practice. This includes working with features on a separate branch,
          developing automated tests etc. But especially important to mention,
          is that a Github pull request has to be opened in order for the
          automated test to run. This can even be forced by changing a
          configuration setting in Github but this has this up to the developer
          to do.
        </p>
        <h2 className="text-2xl" id="root-repository">
          Root repository
        </h2>
        <h2 className="text-2xl" id="root-repository">
          Root repository
        </h2>
        <h2 className="text-2xl" id="root-repository">
          Root repository
        </h2>
      </main>
    </>
  );
};

export default Docs;
