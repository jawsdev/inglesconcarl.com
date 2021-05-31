<template>
  <div
    class="w-full h-screen bg-white flex flex-col justify-between items-center"
  >
    <header
      class="w-full h-20 lg:h-36 bg-primary flex justify-around items-center"
    >
      <NuxtLink to="/">
        <img class="h-12 lg:h-20" src="~@/assets/logo.svg" alt />
      </NuxtLink>
      <div class="flex lg:h-full w-2/5 lg:w-3/4 flex-col justify-between">
        <div
          class="
            flex flex-row
            h-full
            justify-end
            lg:relative
            items-center
            lg:items-start
          "
        >
          <button class="text-white flex flex-row justify-center items-center">
            <span class="hidden lg:block text-sm font-semibold">English</span>
            <font-awesome-icon
              class="pl-2 pr-2 lg:pr-0"
              :icon="['fas', 'language']"
              size="3x"
            />
          </button>
        </div>
        <nav class="w-full bg-primary text-white hidden lg:block">
          <div class="container mx-auto flex justify-end">
            <ul class="flex">
              <li class="hoverable hover:bg-gray-100 hover:text-primary">
                <router-link
                  class="
                    relative
                    block
                    py-2
                    px-4
                    lg:p-6
                    text-xs
                    lg:text-base
                    font-bold
                    hover:bg-gray-100
                    hover:text-primary
                  "
                  to="exam-preparation"
                >
                </router-link>
                <div class="p-6 mega-menu h-64 mb-16 sm:mb-0 bg-gray-100 z-50">
                  <div
                    class="
                      mx-auto
                      w-full
                      h-full
                      flex flex-wrap
                      justify-center
                      items-center
                    "
                  >
                    <div class="w-auto text-primary text-center">
                      <h2 class="font-bold text-4xl">
                        Need help preparing for exams?
                      </h2>
                      <p class="text-gray-600 text-xl">
                        Professional one-to-one help to prepare you for the
                        Cambridge Exams
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <main class="w-full flex flex-grow flex-col justify-start">
      <Nuxt />
    </main>
    <footer class="w-full h-48 bg-primary">footer</footer>
  </div>
</template>

<script>
export default {}
</script>

<style>
.mega-menu {
  display: none;
  left: 0;
  position: absolute;
  text-align: left;
  width: 100%;
}

/* #hoverable Class Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
.hoverable {
  position: static;
}

.hoverable:hover .mega-menu {
  display: block;
}

/* #toggle Class Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

.toggle-input {
  display: none;
}
.toggle-input:not(checked) ~ .mega-menu {
  display: none;
}

.toggle-input:checked ~ .mega-menu {
  display: block;
}

.toggle-input:checked + label {
  color: white;
  background: #2c5282;
  @apply bg-blue-800;
}

.toggle-input:checked ~ label:after {
  content: '\25B2';
  font-size: 10px;
  padding-left: 6px;
  position: relative;
  top: -1px;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
