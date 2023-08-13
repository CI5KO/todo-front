'use client'

import { useState } from 'react'

export default function Home() {
  const [activeForm, setActiveForm] = useState('login')

  const handleFormChange = (form: string) => {
    setActiveForm(form)
  }
  return (
    <main className="main h-screen grid">
      <div className="flex h-1/2 bg-gray-100 self-center">
        <div className="w-1/2 bg-white flex items-center justify-center">
          {activeForm === 'login' ? (
            <form className="w-4/5 p-8 bg-gray-200 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
              <div className="mb-4">
                <label
                  htmlFor="login-email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Correo
                </label>
                <input
                  type="email"
                  id="login-email"
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Ingrese su correo"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="login-password"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="login-password"
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Ingrese su contraseña"
                />
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full w-full">
                Iniciar Sesión
              </button>
            </form>
          ) : (
            <form className="w-4/5 p-8 bg-gray-200 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Registrarse</h2>
              <div className="mb-4">
                <label
                  htmlFor="register-name"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="register-name"
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Ingrese su nombre"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="register-email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Correo
                </label>
                <input
                  type="email"
                  id="register-email"
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Ingrese su correo"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="register-password"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="register-password"
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Ingrese su contraseña"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="register-confirm-password"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Repetir Contraseña
                </label>
                <input
                  type="password"
                  id="register-confirm-password"
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Reingrese su contraseña"
                />
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-full w-full">
                Registrarse
              </button>
            </form>
          )}
        </div>
        <div className="w-1/2 bg-gradient-to-r from-pink-400 to-red-500 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-semibold mb-6">Bienvenido</h1>
          <p className="text-white text-xl mb-6">
            {activeForm === 'login'
              ? '¿Nuevo aquí? Regístrate.'
              : '¿Ya tienes una cuenta? Inicia sesión.'}
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => handleFormChange('login')}
              className={`${
                activeForm === 'login' ? 'bg-white text-gray-800' : 'text-white'
              } px-4 py-2 rounded-full transition duration-300`}
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => handleFormChange('register')}
              className={`${
                activeForm === 'register'
                  ? 'bg-white text-gray-800'
                  : 'text-white'
              } px-4 py-2 rounded-full transition duration-300`}
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
