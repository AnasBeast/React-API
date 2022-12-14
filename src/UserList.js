import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";
import { ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '5' },
  { label: 'Beta Users', value: '521' },
  { label: 'Raised', value: '$25M' },
]
const logos = [
  { name: 'Transistor', url: 'https://tailwindui.com/img/logos/transistor-logo-gray-400.svg' },
  { name: 'Mirage', url: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg' },
  { name: 'Tuple', url: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg' },
  { name: 'Laravel', url: 'https://tailwindui.com/img/logos/laravel-logo-gray-400.svg' },
  { name: 'StaticKit', url: 'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg' },
  { name: 'Workcation', url: 'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg' },
]
const footerNavigation = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}


const UserList = () => {
    const [listOfUSer , setlistOfUSer] = useState([])
    useEffect(()=>{
        const fetchData = ()=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then(({data}) => setlistOfUSer(data))
            .catch((err)=> console.log("error" , err))
        }
        fetchData();
    },[])
    return (
        <div className="bg-white">
          <main>
            {/* Hero section */}
            <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
                <div>
                  <div>
                    <img
                      className="h-12 w-auto"
                      src="https://cdn-images-1.medium.com/max/1200/1*biHDpMaH9fPDL9Z1nhbmpA.jpeg"
                      alt="Gomycode"
                    />
                  </div>
                  <div className="mt-20">
                    <div>
                      <a href="#" className="inline-flex space-x-4">
                        <span className="rounded bg-rose-50 px-2.5 py-1 text-sm font-semibold text-rose-500">
                          What's new
                        </span>
                        <span className="inline-flex items-center space-x-1 text-sm font-medium text-rose-500">
                          <span>Just shipped version 0.1.0</span>
                          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      </a>
                    </div>
                    <div className="mt-6 sm:max-w-xl">
                      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Learn digital skills!
                      </h1>
                      <p className="mt-6 text-xl text-gray-500">
                      Nous formons la prochaine g??n??ration tech aux technologies les plus r??centes et aux m??tiers du futur pour les pr??parer au monde professionnel et renforcer leur employabilit??.
                      </p>
                    </div>
                    <form action="#" className="mt-12 sm:flex sm:w-full sm:max-w-lg">
                      <div className="min-w-0 flex-1">
                        <label htmlFor="hero-email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="hero-email"
                          type="email"
                          className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="mt-4 sm:mt-0 sm:ml-3">
                        <button
                          type="button"
                          className="block w-full rounded-md border border-transparent bg-rose-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10"
                        >
                          Notify me
                        </button>
                      </div>
                    </form>
                    <div className="mt-6">
                      <div className="inline-flex items-center divide-x divide-gray-300">
                        <div className="flex flex-shrink-0 pr-5">
                          <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                          <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                          <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                          <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                          <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                        </div>
                        <div className="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3">
                          <span className="font-medium text-gray-900">Rated 5 stars</span> by over{' '}
                          <span className="font-medium text-rose-500">500 beta users</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                  <div className="hidden sm:block">
                    <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" />
                    <svg
                      className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                      width={404}
                      height={392}
                      fill="none"
                      viewBox="0 0 404 392"
                    >
                      <defs>
                        <pattern
                          id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                    </svg>
                  </div>
                  <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                    <img
                      className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://gomycodewebsite.blob.core.windows.net/website/img/Chiffres1_62833079e9.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
    
            {/* Testimonial/stats section */}
            <div className='relative p-20 mx-auto'>
            <ul role="list" className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {listOfUSer.map((user) => (
                    <li
                    key={user.email}
                    className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                    >
                    <div className="flex flex-1 flex-col p-8">
                        <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="" />
                        <h3 className="mt-6 text-sm font-medium text-gray-900">Name: {user.name}</h3>
                        <h3 className="mt-1 text-sm font-medium text-gray-700">Username: {user.username}</h3>
                        <h3 className="mt-2 text-sm text-gray-500 flex justify-center "><h3>Adress: </h3>
                        <ul className='text-left ml-5'>
                          <li>{user.address.street}</li>
                          <li>{user.address.suite}</li>
                          <li>{user.address.city}</li>
                          <li>{user.address.zipcode}</li>
                          </ul>
                        </h3>
                        <dl className="mt-1 flex flex-grow flex-col justify-between">
                        <dt className="sr-only">Title</dt>
                        <dd className="text-sm text-gray-500">CatchPhrase: {user.company.catchPhrase}</dd>
                        <dd className="text-sm text-gray-500">bs: {user.company.bs}</dd>
                        <dt className="sr-only">Role</dt>
                        <dd className="mt-3">
                            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                            {user.company.name}
                            </span>
                        </dd>
                        
                        </dl>
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                        <div className="flex w-0 flex-1">
                            <a
                            href={`mailto:${user.email}`}
                            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                            >
                            <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            <span className="ml-3">Email</span>
                            </a>
                        </div>
                        <div className="-ml-px flex w-0 flex-1">
                            <a
                            href={`tel:${user.phone}`}
                            className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                            >
                            <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            <span className="ml-3">Call</span>
                            </a>
                        </div>
                        </div>
                    </div>
                    </li>
                ))}
            </ul>
            </div>
    
            {/* Logo cloud section */}
            
    
            {/* CTA section */}
            <div className="relative mt-24 sm:mt-32 sm:py-16">
              <div aria-hidden="true" className="hidden sm:block">
                <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50" />
                <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
                  <defs>
                    <pattern
                      id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
                </svg>
              </div>
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="relative overflow-hidden rounded-2xl bg-rose-500 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
                  <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                    <svg
                      className="absolute inset-0 h-full w-full"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 1463 360"
                    >
                      <path
                        className="text-rose-400 text-opacity-40"
                        fill="currentColor"
                        d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                      />
                      <path
                        className="text-rose-600 text-opacity-40"
                        fill="currentColor"
                        d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                      />
                    </svg>
                  </div>
                  <div className="relative">
                    <div className="sm:text-center">
                      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Get notified when we&rsquo;re launching.
                      </h2>
                      <p className="mx-auto mt-6 max-w-2xl text-lg text-rose-100">
                        Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
                        tristique pellentesque.
                      </p>
                    </div>
                    <form action="#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                      <div className="min-w-0 flex-1">
                        <label htmlFor="cta-email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="cta-email"
                          type="email"
                          className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="mt-4 sm:mt-0 sm:ml-3">
                        <button
                          type="submit"
                          className="block w-full rounded-md border border-transparent bg-gray-900 px-5 py-3 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                        >
                          Notify me
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
    
          {/* Footer section */}
          <footer className="mt-24 bg-gray-900 sm:mt-12">
            <div className="mx-auto max-w-md overflow-hidden py-12 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                {footerNavigation.main.map((item) => (
                  <div key={item.name} className="px-5 py-2">
                    <a href={item.href} className="text-base text-gray-400 hover:text-gray-300">
                      {item.name}
                    </a>
                  </div>
                ))}
              </nav>
              <div className="mt-8 flex justify-center space-x-6">
                {footerNavigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="mt-8 text-center text-base text-gray-400">
                &copy; 2022 AnasBeast, Inc. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      )
}

export default UserList