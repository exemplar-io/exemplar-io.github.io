const Sidebar = () => {
  return (
    <div className="h-screen w-1/6 ml-0 pt-20 top-0 fixed flex flex-col space-y-3">
      <div className="flex flex-col space-y-3 bg-primary-900 rounded p-4">
        <a
          className="sticky text-secondary font-medium text-xl"
          href="#introduction"
        >
          Introduction
        </a>
        <a
          className="sticky text-secondary text-m font-light"
          href="#how-does-it-work"
        >
          How does it work?
        </a>
        <a
          className="sticky text-secondary text-m font-light"
          href="#tech-stack"
        >
          Tech stack
        </a>
      </div>
      <div className="flex flex-col space-y-3 bg-primary-900 rounded p-4">
        <a
          className="sticky text-secondary font-medium text-xl"
          href="#whats-generated"
        >
          What's generated
        </a>
        <a
          className="sticky text-secondary text-m font-light"
          href="#root-repository"
        >
          Root repository
        </a>
        <a
          className="sticky text-secondary text-m font-light"
          href="#frontend-repository"
        >
          Frontend repository
        </a>
        <a
          className="sticky text-secondary text-m font-light"
          href="#api-repository"
        >
          Api repository
        </a>
        <a
          className="sticky text-secondary text-m font-light"
          href="#user-ms-repository"
        >
          User ms repository
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
