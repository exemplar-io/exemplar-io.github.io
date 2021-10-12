import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationItem from './NavigationItem';
import ExternalNavigationItem from './ExternalNavigationItem';

const NavigationBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-primary-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-secondary"
              to={'/'}
            >
              Peareasy Elastics
            </NavLink>
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
    </>
  );
};

export default NavigationBar;
