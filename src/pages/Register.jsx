// src/components/RegistrationPage.jsx
import React, { useState } from 'react';
import Navbar from '../components/AuthNavbar';
import Footer from '../components/Footer';

const Register= () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Handle form submission logic here
  }

  return (
    <div class="min-h-screen bg-gray-100">
    <Navbar/>
    <br></br>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-5xl text-center font-bold mb-6 text-gray-800">Регистрация</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Имя</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={formData.email} 
              onChange={handleChange} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            />
          </div>
          <div>
            <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Фамилия</label>
            <input 
              type="text" 
              name="surname" 
              id="surname" 
              value={formData.email} 
              onChange={handleChange} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Телефон</label>
            <input 
              type="tel" 
              name="phone" 
              id="phone" 
              value={formData.email} 
              onChange={handleChange} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Пароль</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={formData.password} 
              onChange={handleChange} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Повторите Пароль</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={formData.password} 
              onChange={handleChange} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            />
            <br/>
            <div class=" flex justify-between">
              <div class="">
                <label class="inline-flex items-center cursor-pointer"><input id="customCheckLogin" type="checkbox" class="form-checkbox border-1 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"/><span class="ml-2 text-sm font-semibold text-blueGray-600">Запомнить меня</span></label>
              </div>
              <div class="inline-flex items-center">
                <a class="ml-2 text-sm font-semibold text-blueGray-600 underline">Восстановление пароля</a>
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <div>
              <a class="text-gray-500">Есть учетная запись?</a><br/>
              <a class="underline text-gray-700">Войти</a>
            </div>
            <button type="submit" className=" w-1/2 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
             Войти
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Register;
