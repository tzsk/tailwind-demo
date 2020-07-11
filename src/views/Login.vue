<template>
  <div class="w-full max-w-xs mx-auto">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1
        class="my-4 text-xl font-bold text-center text-gray-700 uppercase tracking-wider"
      >
        Sign In
      </h1>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
        />
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign In
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm text-primary hover:text-primary-dark"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2020 Robustwealth. All rights reserved.
    </p>
  </div>
</template>
