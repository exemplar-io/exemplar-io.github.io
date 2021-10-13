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
    <main className={'container mx-auto w-1/2 space-y-5 pb-10 pt-10'}>
      <h3 className="text-secondary text-2xl text-left">Introduction</h3>
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
    </main>
  );
};

export default Docs;
