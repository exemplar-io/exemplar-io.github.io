const Sidebar = () => {
  return (
    <div className="h-screen w-1/6 ml-0 pt-20 top-0 fixed flex flex-col space-y-3 border-r ">
      <div className="flex flex-col space-y-3 rounded p-4">
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
    </div>
  );
};

export default Sidebar;
