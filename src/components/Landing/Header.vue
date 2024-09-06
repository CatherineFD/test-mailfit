<script>
export default {
  name: "Header"
}
</script>

<template>
  <section class="header">
    <div class="container">
      <div>
        <img src="@/assets/Landing/logo.svg" alt="logo">
      </div>

      <div class="content">
        <h1 class="content__title">
          <span>Превратите уездный город</span>
          <span>в столицу</span>
          <span>земного шара</span>
        </h1>

        <p class="content__description">Оплатите взнос на телеграммы для организации Международного васюкинского турнира по шахматам</p>

        <div class="content__buttons">
          <button class="btn_black">Поддержать шахматную мысль</button>
          <button class="btn_white">Подробнее о турнире</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

.header {
  background-image: url("@/assets/Landing/background-header.png");
  background-color: #E9DED4;
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 50px;
  position: relative;

}

.overlay {

}

@media (max-width: 1024px) {
  .header {
    padding: 0 20px;
  }
}

@media (max-width:  768px) {

}

@media (max-width:  556px) {

}

@media (max-width:  480px) {

}

@media (max-width: 320px) {

}
</style>