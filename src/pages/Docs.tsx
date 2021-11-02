import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

const markdown = `<div className="min-h-screen bg-gray-800 text-center">
  <BrowserRouter>
    <NavigationBar />
    <Switch>
      <Route path={'/docs'} component={Docs} />
      <Route path={'/about'} component={About} />
      <Route path={'/'} component={Homepage} />
    </Switch>
  </BrowserRouter>
</div>`;

const Docs = () => {
  return (
    <main
      className={
        'container mx-auto w-1/2 space-y-5 pb-10 pt-10 text-left text-secondary'
      }
    >
      <h3 className="text-4xl ">Introduction</h3>
      <p className="text-secondary text-m text-left">
        Nest (NestJS) is a framework for building efficient, scalable Node.js
        server-side applications. It uses progressive JavaScript, is built with
        and fully supports TypeScript (yet still enables developers to code in
        pure JavaScript) and combines elements of OOP (Object Oriented
        Programming), FP (Functional Programming), and FRP (Functional Reactive
        Programming).
      </p>
      <p className="text-secondary text-m text-left">
        Under the hood, Nest makes use of robust HTTP Server frameworks like
        Express (the default) and optionally can be configured to use Fastify as
        well!
      </p>
      <p className="text-secondary text-m text-left">
        Nest provides a level of abstraction above these common Node.js
        frameworks (Express/Fastify), but also exposes their APIs directly to
        the developer. This gives developers the freedom to use the myriad of
        third-party modules which are available for the underlying platform.
      </p>
      <div>
        <SyntaxHighlighter language="javascript" style={nord}>
          {markdown}
        </SyntaxHighlighter>
      </div>
      <h3 className="text-secondary text-2xl text-left pt-5">Philosophy</h3>
      <p className="text-secondary text-m text-left">
        In recent years, thanks to Node.js, JavaScript has become the “lingua
        franca” of the web for both front and backend applications. This has
        given rise to awesome projects like Angular, React and Vue, which
        improve developer productivity and enable the creation of fast,
        testable, and extensible frontend applications. However, while plenty of
        superb libraries, helpers, and tools exist for Node (and server-side
        JavaScript), none of them effectively solve the main problem of -
        Architecture.
      </p>
      <p className="text-secondary text-m text-left">
        Nest provides an out-of-the-box application architecture which allows
        developers and teams to create highly testable, scalable, loosely
        coupled, and easily maintainable applications. The architecture is
        heavily inspired by Angular.
      </p>
      <h1 className="text-4xl">What's generated</h1>
      <p className="text-secondary text-m text-left">
        So what exactly happens after you click the button "Generate project"?
        In this section we'll cover the the different components that we
        generate for you.
      </p>
      <h2 className="text-2xl">Root repository</h2>
      <p className="text-m">
        When we are done generating the code for you, you will be presented with
        a link to the root repository. This will look similar to the screenshot
        seen below. The root project will be a stand alone Github repository
        which contains references to all the repositories we have generated. The
        different references are so called{' '}
        <a href="https://git-scm.com/book/en/v2/Git-Tools-Submodules">
          submodules
        </a>
        . Which are basically just links to other stand alone repositories - but
        it allows you to clone (download) the entire project in one go!
      </p>
      <p>
        Apart from the submodule references, the root project also contains a
        <a href="https://docs.docker.com/compose/"> docker-compose</a> file.
        With this file, after you've downloaded the project, you can spin up the
        entire thing with the command docker-compose up. To allow for this, we
        have wrapped each component of the project in a container with a
        Dockerfile. But more about this in the "Workflow" section.
      </p>
      <img
        src={process.env.PUBLIC_URL + '/docs/root.png'}
        alt="overview"
        className="w-3/4 m-auto"
      />
      <h2 className="text-2xl">Frontend repository</h2>
      <p className="text-m">
        So, the most flashy part of your newly generated project is definitely
        the frontend. This repository has the code for an entire web application
        developed in <a href="https://reactjs.org/">ReactJS</a>! We have chosen
        to use <a href="https://www.typescriptlang.org/">Typescript</a> as the
        development language for the web application, but you can also develop
        ReactJS web apps in Javascript.
      </p>
      <p className="text-m">
        Just like all the other repositories we generate for you, we have
        wrapped the frontend in a docker container. The configurations for the
        docker container can be found in the Dockerfile - it allows you to run
        the frontend in pretty much any environment, abstracting away the OS
        details of the specific environment you're in.
      </p>
      <p className="text-m">
        From the get go, the frontend contains a simple login component, that
        allows the user to authenticate themselves with a username and a
        password. When you log in, the web application actually communicates
        with the backend which is divided into two repositories. The Api
        repository and the MS repository.
      </p>
      <h2 className="text-2xl">Api repository</h2>
      <p className="text-m">
        The Api repository is the gateway into your backend. It's a standalone
        <a href="https://nestjs.com/" target="_blank">
          {' '}
          nestJS project
        </a>{' '}
        written in Typescript, which serves the API to the outside world - and
        in this case it serves the frontend web application we generated for
        you. In this project you write the different endpoints you want to have
        for your backend. To allow the user to login we have already created a
        /login endpoint, which expects a username and a password as input. These
        details will be forwarded to the relevant microservice through a
        RabbitMQ message queue. In the case of the login endpoint the relevant
        microservice is the user microservice, which has its own standalone
        repository - the user-ms repository which is up next!
      </p>

      <h2 className="text-2xl">User ms repository</h2>
      <p className="text-m">
        The user-ms repository is the microservice dedicated to handling
        everything regarding the users of your application. Just like the Api
        repository, this is a NestJS project written in Typescript. Instead of
        hosting Rest endpoint, it listens to the RabbitMQ message queue for
        messages. From the get go we have set it up to listen for a login
        message, with login credentials. When a login message is received it
        checks an in-memory database with users, to see if the credentials
        match. If the credentials match, a Json Web Token is generated and sent
        back through the RabbitMQ message queue. Using JWTs for authentication
        is a very popular and highly scalable method of implementing
        authentication - you can read a lot more about it on the official
        <a href="https://jwt.io/" target="_blank">
          {' '}
          website for JWT
        </a>
        .
      </p>
    </main>
  );
};

export default Docs;
