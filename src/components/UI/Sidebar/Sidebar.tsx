const Sidebar = () => {
  return (
    <div className="h-screen w-1/6 ml-0 pt-20 top-0 fixed flex flex-col space-y-3 border-r-2 ">
      <div className="flex flex-col space-y-3 rounded p-4 ">
        <a
          className="sticky text-secondary font-medium text-xl  hover:font-bold"
          href="#introduction"
        >
          Introduction
        </a>
        <a
          className="sticky text-secondary text-m font-light hover:font-medium"
          href="#how-does-it-work"
        >
          How does it work?
        </a>
        <a
          className="sticky text-secondary text-m font-light hover:font-medium"
          href="#tech-stack"
        >
          Tech stack
        </a>
      </div>
      <div className="w-1/2 border-2 mx-auto border-primary-800" />
      <div className="flex flex-col space-y-3 rounded p-4">
        <a
          className="sticky text-secondary font-medium text-xl hover:font-bold"
          href="#whats-generated"
        >
          What's generated
        </a>
        <a
          className="sticky text-secondary text-m font-light hover:font-medium"
          href="#frontend-repository"
        >
          Frontend
        </a>
        <a
          className="sticky text-secondary text-m font-light hover:font-medium"
          href="#backend"
        >
          Backend
        </a>
        <a
          className="sticky text-secondary text-m font-light hover:font-medium"
          href="#root-repository"
        >
          Root repository (System)
        </a>
        <a
          className="sticky text-secondary text-m font-light hover:font-medium"
          href="#DevOps"
        >
          DevOps
        </a>
      </div>
      <div className="w-1/2 border-2 mx-auto border-primary-800" />

      <div className="flex flex-col space-y-3 rounded p-4">
        <a
          className="sticky text-secondary font-medium text-xl hover:font-bold"
          href="#next-steps"
        >
          Development Guidelines
        </a>
        <a
          className="sticky text-secondary text-m font-light hover:font-medium"
          href="#developing-a-new-feature"
        >
          Developing a new feature
        </a>

        <a
          className="sticky text-secondary text-m font-light hover:font-medium"
          href="#addning_new_ms"
        >
          Adding a new microservice
        </a>

        <a
          className="sticky text-secondary text-m font-light hover:font-medium"
          href="#deploying-to-production"
        >
          Deploying to production
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
