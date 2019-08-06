<template>
  <nav class="app-header">
    <div class="container">
      <a class="brand" href="/">
        <img
          class="logo"
          src="../assets/images/logo.png"
          alt="Logo of Penguin Statistics"
          height="24"

          style="pointer-events: none"
        >
        Issue Helper
      </a>

      <ul class="nav">
        <li
          v-for="(locale, key) in $root.$locales"
          :key="key"
          class="nav-item"
        >
          <a
            class="nav-link"
            :class="{ active: lang === key }"
            @click="$emit('change-lang', key)"
          >
            {{ locale._label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['lang']
}
</script>

<style lang="stylus" scoped>
@import "../style/imports"

.app-header
  background lighten($vue-ui-color-light-neutral, 60%)
  border-bottom solid 1px $vue-ui-color-light-neutral

  &,
  .container,
  .brand,
  .nav
    h-box()
    box-center()

  .container
    max-width $page-width
    flex 100% 1 1
    justify-content space-between
    padding 24px
    box-sizing border-box

  .brand
    color $vue-ui-color-dark
    .logo
      margin-right 8px

  .nav
    margin 0

  .nav-item
    list-style none
  .nav-item + .nav-item
    margin-left 8px

  .nav-link
    cursor default
    padding 2px 4px
    font-size 14px
    transition all 150ms ease-out
    &:hover
      text-shadow 0 1px 3px $vue-ui-color-dark
      margin-top -3px
    &:active
      text-shadow 0 0 0 $vue-ui-color-dark
    &.active
      padding 6px 10px
      font-size 16px
      text-shadow none
      background darken($vue-ui-color-light-neutral, 20%)
      color $vue-ui-color-dark
      border 1px solid darken($vue-ui-color-light-neutral, 60%)
      border-radius 4px
    &:not(.active)
      cursor pointer
      color $vue-ui-color-dark

</style>
