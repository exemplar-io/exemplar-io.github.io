import React from 'react';

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
    <main
      className={
        'container mx-auto w-1/2 space-y-5 pb-10 pt-10 text-secondary text-left'
      }
    >
      <h1 className="text-4xl">Introduction</h1>
      <p className="text-m">
        For a developer, setting up a new project from scratch can be a diﬀicult
        task. The developer has to come up with a good overall design and
        architecture, while also choosing which tech stacks to use. By picking
        the correct choices from the beginning, a lot of time spent refactoring
        code in the future can be mitigated and the focus of the developer can
        be on developing cool features instead!
      </p>
      <p className="text-m">
        Pear is a framework with the intention to help developers build full
        stack software solutions, by providing an out-of-the-box template to
        generate a project, with a frontend, backend consisting of
        microservices, message queue and a DevOps setup with pipelines for
        automatic testing and deployment. The motivation behind this is to
        ensure a software project doesn't run in to scalability issues, security
        issues and in general help the project evolving in a direction that
        satisfy both short-term, but especially long-term requirements. From the
        rest of the documentation page, we will use the name Orange to specify,
        that we are talking about the generated project.
      </p>
      <h2 className="text-2xl">How does it work?</h2>
      <p className="text-m">
        Imagine you, a developer, wants to start a new project. What would be
        the first steps you take? Probably picking an adequate frontend and
        backend technology and create a Git repository to utilise version
        control. By looking at the diagram, the idea behind Pear is, that you
        are asked to authorise your Github account and choose a project name and
        a project is generated for you, with a frontend application, a message
        queue and two microservices.
      </p>
      <img
        src={process.env.PUBLIC_URL + '/docs/overview.png'}
        alt="overview"
        className="w-3/4 m-auto"
      />
      <h2 className="text-2xl">Tech stack</h2>
      <p className="text-m">
        In this section the generated tech stack will briefly be mentioned, and
        later on a more in-depth walk-through of Orange will be introduced.
        {<span className="font-bold"> All</span>} of the following applications
        are dockerized
      </p>
      <ul className="list-disc">
        <li>The frontend application is a React application with Typescript</li>
        <li>The microservices are Nestjs applications with Typescript</li>
        <li>A RabbitMQ which is already setup and both microservices use</li>
        <li>
          Git modules with the frontend application and two microservice
          applications in a root repository
        </li>
        <li>
          Docker-compose that spins up the whole system, so development can
          start immediately
        </li>
      </ul>
    </main>
  );
};

export default Docs;
