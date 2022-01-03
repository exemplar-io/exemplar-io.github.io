import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationItem from './NavigationItem';
import ExternalNavigationItem from './ExternalNavigationItem';
import { menu as menuIcon } from '../../icons';

const NavigationBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="sticky w-full flex flex-wrap items-center justify-between px-2 py-3 h-16 z-10">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <NavLink
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-secondary"
            to={'/'}
          >
            Exemplar
          </NavLink>
          <button
            className="text-secondary cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {menuIcon}
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <NavigationItem
              link={'/docs'}
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              docs
            </NavigationItem>
            <NavigationItem
              link={'/about'}
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              about
            </NavigationItem>
            <ExternalNavigationItem
              link={'https://github.com/peareasy-elastics'}
            >
              github
            </ExternalNavigationItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
