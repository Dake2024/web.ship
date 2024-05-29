import React, { useState } from 'react';
import SidebarMenu from '../components/SidebarMenu';

const Address = () => {
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
          
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4">
            <div className="flex border-b">
                <div className="w-1/2 py-2 text-center border-r">
                    <h3 className="text-lg font-semibold text-blue-700">Express (DE)</h3>
                    <div className="flex justify-center items-center">
                        <span className="text-xs text-gray-500">Нет налога на покупки</span>
                        <span className="bg-red-500 text-white text-xs font-bold ml-2 px-2 rounded">NEW</span>
                    </div>
                </div>
                <div className="w-1/2 py-2 text-center text-gray-400">
                    <h3 className="text-lg font-semibold">Standard (DE)</h3>
                    <span className="text-xs">Нет налога на покупки</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label className="block text-xs text-gray-500">First name</label>
                    <div className="text-lg">Daulet</div>
                </div>
                <div>
                    <label className="block text-xs text-gray-500">Last name</label>
                    <div className="text-lg">Aimenov</div>
                </div>
                <div>
                    <label className="block text-xs text-gray-500">Street address</label>
                    <div className="text-lg">601 Cornell Drive, STE G8</div>
                </div>
                <div>
                    <label className="block text-xs text-gray-500">Address 2 (Apt, Unit, Suite)</label>
                    <div className="flex items-center text-lg">
                        <span>SHI 372564</span>
                        <button className="ml-2">
                            <svg width="16" height="16" className="text-gray-500">
                                <use xlinkHref="#help-circle" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    <label className="block text-xs text-gray-500">City</label>
                    <div className="text-lg">Wilmington</div>
                </div>
                <div>
                    <label className="block text-xs text-gray-500">State</label>
                    <div className="text-lg">Delaware (DE)</div>
                </div>
                <div>
                    <label className="block text-xs text-gray-500">ZIP</label>
                    <div className="text-lg">19801</div>
                </div>
                <div>
                    <label className="block text-xs text-gray-500">Country</label>
                    <div className="text-lg">United States</div>
                </div>
                <div>
                    <label className="block text-xs text-gray-500">Phone</label>
                    <div className="text-lg">(302) 8616062</div>
                </div>
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

export default Address;