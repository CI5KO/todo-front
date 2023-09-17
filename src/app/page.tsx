'use client'

import Header from '@/utils/components/organisms/Header'
import { EyeFilledIcon } from '@/utils/components/icons/EyeFilledIcon'
import { EyeSlashFilledIcon } from '@/utils/components/icons/EyeSlashFilledIcon'
import { MailIcon } from '@/utils/components/icons/MailIcon'
import { Input } from '@nextui-org/react'
import { useState, useMemo } from 'react'

export default function Home() {
  const [activeForm, setActiveForm] = useState('login')
  const [email, setEmail] = useState<string>('')
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)

  const isInvalid: boolean = useMemo(() => {
    if (email === '') return false

    return validateEmail(email) ? false : true
  }, [email])

  const handleFormChange = (form: string) => {
    setActiveForm(form)
  }
  return (
    <main className="bg-[url('../../public/img/backgrounds/desktop/index-[3].jpg')] bg-cover bg-no-repeat w-screen h-screen flxed">
      <Header />
      <div className="main h-screen grid">
        <div className="flex h-1/2 self-center">
          <div className="w-1/2 light:bg-gray-400 dark:bg-gray-800 flex items-center justify-center">
            {activeForm === 'login' ? (
              <form className="w-4/5 p-8 bg-gray-200 rounded-lg shadow-md">
                <h2 className="dark:text-white light:text-black text-2xl font-bold mb-4">
                  Iniciar Sesión
                </h2>
                <div className="mb-4">
                  <Input
                    value={email}
                    type="email"
                    label="Email"
                    variant="flat"
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    isInvalid={isInvalid}
                    color={isInvalid ? 'danger' : 'default'}
                    errorMessage={isInvalid && 'Please enter a valid email'}
                    onValueChange={setEmail}
                    className="max-w-xs"
                  />
                </div>
                <div className="mb-4">
                  <Input
                    label="Password"
                    variant="flat"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? 'text' : 'password'}
                    className="max-w-xs"
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
            <h1 className="text-4xl text-white font-semibold mb-6">
              Bienvenido
            </h1>
            <p className="text-white text-xl mb-6">
              {activeForm === 'login'
                ? '¿Nuevo aquí? Regístrate.'
                : '¿Ya tienes una cuenta? Inicia sesión.'}
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleFormChange('login')}
                className={`${
                  activeForm === 'login'
                    ? 'bg-white text-gray-800'
                    : 'text-white'
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
      </div>
    </main>
  )
}
