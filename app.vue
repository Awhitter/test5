<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/saved-prompts">Saved Prompts</NuxtLink></li>
          <li><NuxtLink to="/chatbots">Chatbots</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <p>&copy; 2023 AI Mastery. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
  /* Add your global styles here */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  header {
    background-color: #333;
    color: #fff;
    padding: 20px;
  }

  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    display: inline;
    margin-right: 10px;
  }

  nav ul li a {
    color: #fff;
    text-decoration: none;
  }

  main {
    padding: 20px;
  }

  footer {
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
  }
</style>
