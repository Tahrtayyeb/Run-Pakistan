import React, { useState, useEffect, useContext } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/images/logo.png';

function Header () {
  const auth = useAuth();
  const authState = auth?.authState || {};
  console.log('Auth state in Header:', authState);
  const logout = auth?.logout || (() => {});
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);
  const [injuryDropdownOpen, setInjuryDropdownOpen] = useState(false);
  const [kneeDropdownOpen, setKneeDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  const handleEventsMouseEnter = () => {
    setEventsDropdownOpen(true);
  };

  const handleEventsMouseLeave = () => {
    setEventsDropdownOpen(false);
  };

  const handleTrainingMouseEnter = () => {
    setTrainingDropdownOpen(true);
  };

  const handleTrainingMouseLeave = () => {
    setTrainingDropdownOpen(false);
  };

  const handleInjuryMouseEnter = () => {
    setInjuryDropdownOpen(true);
  };

  const handleInjuryMouseLeave = () => {
    setInjuryDropdownOpen(false);
  };

  const handleKneeMouseEnter = () => {
    setKneeDropdownOpen(true);
  };

  const handleKneeMouseLeave = () => {
    setKneeDropdownOpen(false);
  };

  const currentDate = currentTime.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  const currentTimeString = currentTime.toLocaleTimeString('en-US', {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  });

  const activeClassName = 'bg-green-500 text-white rounded-2xl';

  return (
    
    <>
      <div className='text-green-800 font-bold flex justify-between items-center p-1'>
        <div className='text-sm ml-12'>
          {currentDate} {currentTimeString}
        </div>
        
        <div className='flex space-x-5 mr-10'>
          {authState.isAuthenticated ? (
          <>
            <span className='text-sm font-bold text-green-800'>
              Welcome, {authState.user.username}
            </span>
            <button
              onClick={logout}
              className='text-sm font-bold text-green-800 hover:text-white hover:bg-green-600 hover:rounded-2xl ease-in-out duration-150 px-4 py-1 focus:outline-none'
            >
              Logout
            </button>
          </>
      ) : (
          <>
            <NavLink
              to='/login'
              className={({ isActive }) =>
                `text-sm font-bold text-green-800 hover:text-white hover:bg-green-600 hover:rounded-2xl ease-in-out duration-150 px-4 py-1 focus:outline-none ${
                  isActive ? activeClassName : ''
                }`
              }
            >
              Login
            </NavLink>
            <NavLink
              to='/register'
              className={({ isActive }) =>
                `text-sm md:inline-block hidden font-bold text-green-800 hover:text-white hover:bg-green-600 hover:rounded-2xl ease-in-out duration-150 px-4 py-1 focus:outline-none ml-2 ${
                  isActive ? activeClassName : ''
                }`
              }
            >
              Register
            </NavLink>
          </>
        )}
        </div>
      
      </div>
          <nav className='bg-gray-700 bg-opacity-90 bg-clip-padding rounded-none md:rounded-full md:fixed w-full md:w-[97%] z-10 py-1 px-2 md:pr-10 whitespace-nowrap ml-0 md:ml-5'>        <div className='flex items-center justify-between'>
            <div className='flex text-center'>
            <button
              className={`text-white md:hidden mr-4 bg-green-600 p-2 rounded ${mobileMenuOpen ? 'transition-all duration-500 ease-in-out' : ''}`}              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          <NavLink to='/'>
            <img src={logo} alt='Logo' className='h-12 md:h-16 mt-1 md:mt-0 m-auto' />
          </NavLink>
        </div>


        <div className={`hidden md:flex md:items-center md:w-auto items-center space-x-4 ml-2 mr-2`}>
          <div
            onMouseEnter={handleEventsMouseEnter}
            onMouseLeave={handleEventsMouseLeave}
            className="relative"
          >
            <NavLink
              to="/events-main-page"
              className={({ isActive }) => `${isActive ? 'bg-green-500 rounded-2xl' : ''} text-md font-bold text-white focus:outline-none group flex items-center h-full`}
            >
              <span className="group-hover:bg-green-500 group-hover:rounded-2xl ease-in-out duration-150 px-4 py-2 flex items-center">
                Events
                <svg
                  className={`ml-1 w-4 h-4 transform ${eventsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </NavLink>

          {eventsDropdownOpen && (
            <ul className={`absolute left-1/2 transform -translate-x-1/2 w-max p-2 bg-gray-600 text-center rounded-md`}>
              <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                <NavLink to="/karakoram-half-marathon-2024" target="_blank" rel="noopener noreferrer">Karakoram Challenge</NavLink>
              </li>
              <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                <NavLink to="/capital-half-marathon-2025" target="_blank" rel="noopener noreferrer">Capital Half Marathon 2024</NavLink>
              </li>
              <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                <NavLink to="/margalla-backyard-ultra-2024" target="_blank" rel="noopener noreferrer">Margalla Backyard Ultra 2024</NavLink>
              </li>
              <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                <NavLink to="/karachi-marathon-2025" target="_blank" rel="noopener noreferrer">Karachi Marathon 2025</NavLink>
              </li>
              <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                <NavLink to="/islamabad-marathon-2025" target="_blank" rel="noopener noreferrer">Islamabad Marathon 2025</NavLink>
              </li>
              <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                <NavLink to="/lahore-marathon-2025" target="_blank" rel="noopener noreferrer">Lahore Marathon 2025</NavLink>
              </li>
              <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                <NavLink to="/inter-club-hill-half-marathon-2025" target="_blank" rel="noopener noreferrer">Inter Club Half Marathon 2025</NavLink>
              </li>
              <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                <NavLink to="/galiyat-mountain-trail-2025" target="_blank" rel="noopener noreferrer">Galiyat Mountain Trail 2025</NavLink>
              </li>
              <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                <NavLink to="/abbot-world-major-marathons" target="_blank" rel="noopener noreferrer">World Major Marathons</NavLink>
              </li>
            </ul>
          )}
          </div>



          <div
          onMouseEnter={handleTrainingMouseEnter}
          onMouseLeave={handleTrainingMouseLeave}
          className="relative"
        >
          <NavLink
            to="/training-homepage"
            className={({ isActive }) => `${isActive ? 'bg-green-500 rounded-2xl' : ''} text-md font-bold text-white focus:outline-none group flex items-center h-full`}
            >
              <span className="group-hover:bg-green-500 group-hover:rounded-2xl ease-in-out duration-150 px-4 py-2 flex items-center">
                Training Plans
                <svg
                  className={`ml-1 w-4 h-4 transform ${trainingDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
          </NavLink>

          {trainingDropdownOpen && (
            <ul className={`absolute left-1/2 transform -translate-x-1/2 w-max p-2 bg-gray-600 text-center rounded-md`}>
              <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                <NavLink to="/five-training-plan" target="_blank" rel="noopener noreferrer">5km Plan</NavLink>
              </li>
              <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                <NavLink to="/ten-training-plan" target="_blank" rel="noopener noreferrer">10km Plan</NavLink>
              </li>
              <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                <NavLink to="/half-marathon-training-plan" target="_blank" rel="noopener noreferrer">Half Marathon Plan</NavLink>
              </li>
              <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                <NavLink to="/marathon-training-plan" target="_blank" rel="noopener noreferrer">Marathon Plan</NavLink>
              </li>
              <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                <NavLink to="/ultra-marathon-training-plan" target="_blank" rel="noopener noreferrer">Ultra Marathon Plan</NavLink>
              </li>
              <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                <NavLink to="/vo2-max-for-runners" target="_blank" rel="noopener noreferrer">VO<sub>2</sub> Max For Runners</NavLink>
              </li>
              <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                <NavLink to="/twenty-rule-for-life" target="_blank" rel="noopener noreferrer">80/20 Rule of Life</NavLink>
              </li>
            </ul>
          )}
        </div>


          
        <div
            onMouseEnter={handleInjuryMouseEnter}
            onMouseLeave={handleInjuryMouseLeave}
            className="relative"
          >
            <NavLink
              to='/injury-homepage'
              className={({ isActive }) => `${isActive ? 'bg-green-500 rounded-2xl' : ''} text-md font-bold text-white focus:outline-none group flex items-center h-full`}
            >
              <span className="group-hover:bg-green-500 group-hover:rounded-2xl ease-in-out duration-150 px-4 py-2 flex items-center">
              Injury & Recovery
                <svg
                  className={`ml-1 w-4 h-4 transform ${injuryDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </NavLink>

            {injuryDropdownOpen && (
              <ul className={`absolute left-1/2 transform -translate-x-1/2 w-max p-2 bg-gray-600 text-left rounded-md`}>
                <li
                  onMouseEnter={handleKneeMouseEnter}
                  onMouseLeave={handleKneeMouseLeave}
                  className="relative"
                >
                  <button
                    className={`text-lg font-bold text-white hover:bg-green-500 hover:rounded-2xl ease-in-out duration-150 px-4 py-4 focus:outline-none w-full ${kneeDropdownOpen ? 'dropdown-open' : ''}`}
                    aria-expanded={kneeDropdownOpen ? 'true' : 'false'}
                    >
                    <NavLink to="/injury-homepage" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
                      <span>Knee</span>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </NavLink>
                    </button>
                  {kneeDropdownOpen && (
                    <ul className={`absolute left-full top-0 w-max p-2 bg-gray-600 text-left rounded-md`}>
                      <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                        <NavLink to="/injury-knee-running-bad" target="_blank" rel="noopener noreferrer">
                          Is Running Bad For Knees?
                        </NavLink>
                      </li>
                      <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                        <NavLink to="/injury-knee-common-injury" target="_blank" rel="noopener noreferrer">
                          Common Knee Injuries
                        </NavLink>
                      </li>
                      <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                        <NavLink to="/injury-knee-over-use" target="_blank" rel="noopener noreferrer">
                          Overuse Injury in Runners
                        </NavLink>
                      </li>
                      <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                        <NavLink to="/injury-knee-running-technique" target="_blank" rel="noopener noreferrer">
                          Running Technique
                        </NavLink>
                      </li>
                      <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                        <NavLink to="/injury-knee-running-surface" target="_blank" rel="noopener noreferrer">
                          Running Surface & Knee Pain
                        </NavLink>
                      </li>
                      <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                        <NavLink to="/injury-knee-comeback" target="_blank" rel="noopener noreferrer">
                          Comeback After Injury
                        </NavLink>
                      </li>
                      <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                        <NavLink to="/injury-knee-common-rehab" target="_blank" rel="noopener noreferrer">
                          Knee Rehab Exercises
                        </NavLink>
                      </li>
                      <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                        <NavLink to="/injury-knee-strength" target="_blank" rel="noopener noreferrer">
                          Strength For Knee Pain
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                  <NavLink to="/injury-hamstring" target="_blank" rel="noopener noreferrer">Hamstring Injury</NavLink>
                </li>
                <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                  <NavLink to="/injury-itband" target="_blank" rel="noopener noreferrer">IT Band Injury</NavLink>
                </li>
                <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                  <NavLink to="/injury-piriformis" target="_blank" rel="noopener noreferrer">Piriformis Syndrome</NavLink>
                </li>
                <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                  <NavLink to="/injury-shin" target="_blank" rel="noopener noreferrer">Shin Splints</NavLink>
                </li>
                <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                  <NavLink to="/injury-plantar" target="_blank" rel="noopener noreferrer">Plantar Fasciitis</NavLink>
                </li>
                <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                  <NavLink to="/injury-prevention" target="_blank" rel="noopener noreferrer">Injury Prevention</NavLink>
                </li>
                <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                  <NavLink to="/injury-recovery" target="_blank" rel="noopener noreferrer">Recovery Techniques</NavLink>
                </li>
                <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                  <NavLink to="/injury-nutrition" target="_blank" rel="noopener noreferrer">Nutrition for Runners</NavLink>
                </li>
                <li className='text-white hover:bg-green-500 hover:rounded-md ease-in-out duration-150 focus:outline-none rounded-md p-1'>
                  <NavLink to="/running-in-hot-and-humid-weather-tips" target="_blank" rel="noopener noreferrer">Running in Hot Weather</NavLink>
                </li>
              </ul>
            )}
          </div>


          <div>
          <NavLink
            to='/news-main-page'
            className={({ isActive }) => `${isActive ? 'bg-green-500 rounded-2xl' : ''} text-md font-bold text-white focus:outline-none group flex items-center h-full`}
          >
            <span className="group-hover:bg-green-500 group-hover:rounded-2xl ease-in-out duration-150 px-4 py-2">
              News
            </span>
          </NavLink>

          </div>


          <div>
          <NavLink
              to='/club-in-pakistan'
              className={({ isActive }) => `${isActive ? 'bg-green-500 rounded-2xl' : ''} text-md font-bold text-white focus:outline-none group flex items-center h-full`}
            >
              <span className="group-hover:bg-green-500 group-hover:rounded-2xl ease-in-out duration-150 px-4 py-2">
                Running Clubs
              </span>
            </NavLink>
        </div>

      </div>
    </div>
    {mobileMenuOpen && (
          <div className='md:hidden flex flex-col items-center space-y-4 mt-4 transition-all duration-500 ease-in-out'>
            <NavLink
              to='/events-main-page'
              className={({ isActive }) =>
                `${isActive ? 'bg-green-500 rounded-2xl' : ''} text-md font-bold text-white hover:bg-green-500 hover:rounded-2xl ease-in-out duration-150 px-4 py-4 focus:outline-none`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </NavLink>
            <NavLink
              to='/training-homepage'
              className={({ isActive }) =>
                `${isActive ? 'bg-green-500 rounded-2xl' : ''} text-md font-bold text-white hover:bg-green-500 hover:rounded-2xl ease-in-out duration-150 px-4 py-4 focus:outline-none`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Training Plans
            </NavLink>
            <NavLink
              to='/news-main-page'
              className={({ isActive }) =>
                `${isActive ? 'bg-green-500 rounded-2xl' : ''} text-md font-bold text-white hover:bg-green-500 hover:rounded-2xl ease-in-out duration-150 px-4 py-4 focus:outline-none`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </NavLink>
            <NavLink
              to='/injury-homepage'
              className={({ isActive }) =>
                `${isActive ? 'bg-green-500 rounded-2xl' : ''} text-md font-bold text-white hover:bg-green-500 hover:rounded-2xl ease-in-out duration-150 px-4 py-4 focus:outline-none`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Injury & Recovery
            </NavLink>
            <NavLink
              to='/club-in-pakistan'
              className={({ isActive }) =>
                `${isActive ? 'bg-green-500 rounded-2xl' : ''} text-md font-bold text-white hover:bg-green-500 hover:rounded-2xl ease-in-out duration-150 px-4 py-4 focus:outline-none`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Running Clubs
            </NavLink>
            {/* Add more NavLink components as needed */}
          </div>
        )}
    </nav>
  </>
  );
  }

  export default Header;