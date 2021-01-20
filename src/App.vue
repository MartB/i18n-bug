<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/">{{ $t("link") }}</router-link>
  </div>
  <router-view />
</template>
