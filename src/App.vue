<template>
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: Segoe-UI;
  src: url(../src/fonts/Segoe\ UI.ttf);
}

@font-face {
  font-family: Segoe-UI-bold;
  src: url(../src/fonts/Segoe\ UI\ Bold.ttf);
}
#app {
  font-family: Segoe-UI;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

b,
.font-bold {
  font-family: Segoe-UI-bold;
}

body,
.body {
  min-height: 100vh !important;
}
</style>
