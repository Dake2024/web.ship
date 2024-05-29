import React, { useState } from 'react';
import SidebarMenu from '../components/SidebarMenu';

const Calculator = () => {
    return (
        <div>
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

      <main className="container mx-auto flex-1 justify-between p-4 pb-5">
        <div className="flex">
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
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <header className="flex justify-between items-center mb-6">
                <section className="flex flex-col items-center">
                    <h3 className="text-sm text-gray-500">Вес посылки, кг (0,88lbs)</h3>
                    <span className="text-4xl font-bold text-blue-900">0,4</span>
                </section>
                <section className="flex flex-col items-center">
                    <h3 className="text-sm text-gray-500">Стоимость, USD</h3>
                    <span className="text-4xl font-bold text-blue-900">5,2</span>
                </section>
            </header>
            <div className="relative">
                <div className="border-b-2 border-blue-900"></div>
                <div className="absolute left-1/3 top-0 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6">
                {/* Add your icons here. For example, I'm using placeholder divs. Replace these with your actual icons */}
                <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-gray-300 rounded-full mb-2"></div>
                    <span className="text-sm text-gray-500">Как Apple Watch</span>
                </div>
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
        </div>

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
    </div>

            );
          };

export default Calculator;