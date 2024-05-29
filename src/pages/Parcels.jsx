// // src/components/MainPage.jsx
// import React from 'react';
import SidebarMenu from '../components/SidebarMenu';
// import Balance from '../components/Balance';
// import AddParcel from '../components/AddParcel';
// import Navbar from '../components/Navbar';




// const Parcels = () => {
//   return (
    
//     <div className=" bg-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <Navbar/>
//         <div class="flex">

//         {/* Sidebar */}
//         <div id="sidebar">
//             <AddParcel/>
//             <Balance/>
//             <SidebarMenu/>
//         </div>
        
//         {/* Dasboard */}
//         <div>
        
//         </div>

//         {/* Обратите внимание */}

//         </div>  
//     </div>
//   );
// }

// export default Parcels;


import React from "react";

const Parcels = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <a href="/address" className="flex items-center space-x-2">
              <svg width="135" height="38">
                <use xlinkHref="#logo"></use>
              </svg>
              <span className="text-sm font-bold opacity-20">Prime</span>
            </a>
          </div>
          <div className="flex-1 mx-16">
            <div className="relative">
              <svg
                width="16"
                height="16"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <use xlinkHref="#ic-search"></use>
              </svg>
              <input
                type="text"
                id="dashboard-search-input"
                placeholder="Поиск посылок"
                className="w-full pl-10 pr-4 py-2 border rounded"
              />
            </div>
          </div>
          <div className="relative">
            <button className="flex items-center space-x-2">
              <svg width="36" height="36" className="text-gray-500">
                <use xlinkHref="#ic-ava"></use>
              </svg>
              <span className="text-gray-700">
                <em>Hello,</em>
              </span>
              <svg width="10" height="6" className="text-gray-500">
                <use xlinkHref="#arrow"></use>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto flex-1 p-4 pb-5">
        <div className="flex space-x-4">
          <aside className="w-64 bg-white p-4 shadow rounded">
            <button className="w-full flex items-center space-x-2 bg-red-500 text-white py-2 px-4 rounded hover:shadow-lg">
              <svg width="16" height="16" className="text-white">
                <use xlinkHref="#ic-plus"></use>
              </svg>
              <span>Добавить</span>
            </button>
            <div className="mt-4">
              <div className="text-gray-500">Баланс</div>
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold">$0.00</div>
                <a href="/add-balance" className="text-gray-700">
                  <svg width="24" height="24">
                    <use xlinkHref="#add-balance-icon"></use>
                  </svg>
                </a>
              </div>
            </div>
            <hr className="my-4" />
            <SidebarMenu/>
          </aside>
          <section className="flex-1">
            <h1 className="text-2xl font-bold mb-4">
              Ваш персональный адрес в Америке
            </h1>
            <div className="mb-6">
              <p className="text-gray-700">
                Это адреса складов в Америке, которые вам нужно указывать при
                оформлении покупок в американских интернет-магазинах
              </p>
              <button className="text-blue-500 mt-2">Примеры заполнения адреса</button>
            </div>
          </section>
          <aside className="w-72 bg-white p-4 shadow rounded">
            <h2 className="text-xl font-bold mb-4">Обратите внимание</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Экономьте на покупках</h3>
              <p className="text-gray-700">
                На <a href="/address" className="text-blue-500">нашем складе</a> в штате Delaware
                (DE) нет налогов, вы экономите до 9% от стоимости заказа.
                Используйте{" "}
                <a href="https://www.mrrebates.com?refid=1398988" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  кэшбэк сервис
                </a>{" "}
                и получайте возврат до 15% от стоимости заказ.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Где покупать в США?</h3>
              <p className="text-gray-700">
                Рекомендуем покупать только в проверенных интернет-магазинах, мы
                следим за отзывами и рейтингами всех магазинов.{" "}
                <a href="/shops" className="text-blue-500">Проверенные магазины</a>.
              </p>
            </div>
          </aside>
        </div>
      </main>
      

      <footer className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center p-4">
          <span className="text-gray-700">Shipper © 2024 Все права защищены</span>
          <div className="flex space-x-4">
            <a href="https://shipper.kz/privacy" className="text-gray-700">
              Политика конфиденциальности
            </a>
            <a href="https://shipper.kz/agreement" className="text-gray-700">
              Соглашение с пользователем
            </a>
            <a href="https://shipper.statuspage.io/" className="text-gray-700" target="_blank" rel="noopener noreferrer">
              Статус
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Parcels;
