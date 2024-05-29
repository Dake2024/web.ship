import React, { useState, useRef, useEffect } from 'react';

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [submenuHeight, setSubmenuHeight] = useState(0);
  const submenuRef = useRef(null);
  
  useEffect(() => {
    if (submenuRef.current) {
      setSubmenuHeight(submenuRef.current.scrollHeight);
    }
  }, [submenuRef.current]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      title: 'Посылки',
      subMenu: [
        { title: 'Ожидаем' },
        { title: 'Получили' },
        { title: 'На упаковке' },
        { title: 'Отправили' },
        { title: 'Готовы к выдаче' },
        { title: 'На доставке' },
        { title: 'Доставлены' },
      ],
    },
    { title: 'Стоимость доставки' },
    { title: 'Мой адрес в США' },
    { title: 'Помощь' },
    { title: 'Настройки' },
  ];

  return (
    <div className=" bg-gray-100 text-gray-900">
      <ul className="space-y-1 py-4 px-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.subMenu ? (
              <>
                <button
                  onClick={toggleMenu}
                  className="w-full flex items-center justify-between px-4 py-2 text-left text-blue-900 font-semibold focus:outline-none"
                >
                  {item.title}
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    ></path>
                  </svg>
                </button>
                <div
                  ref={submenuRef}
                  style={{ maxHeight: isOpen ? submenuHeight : 0 }}
                  className={`transition-all duration-500 overflow-hidden`}
                >
                  <ul className="pl-4 mt-2 space-y-1">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-900 transition-colors duration-200 hover:bg-gray-200 rounded-md"
                        >
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  {isOpen && <hr className="my-2 border-gray-300" />}
                </div>
              </>
            ) : (
              <>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-900 text-sm transition-colors duration-200 hover:bg-gray-200 rounded-md"
                >
                  {item.title}
                </a>
                {index === 0 && isOpen && <hr className="my-2 border-gray-300" />}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
