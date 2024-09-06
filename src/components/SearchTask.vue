<script>
import ButtonImg from "@/components/UI/buttons/ButtonWithImg.vue"
export default {
  name: "SearchTask",
  components: {
    ButtonImg
  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    handlerSearch() {
      this.$emit('search', this.search)
    }
  },
  watch: {
    search() {
      this.handlerSearch()
    }
  }
}
</script>

<template>
  <div class="search">
    <input type="text" placeholder="Поиск..." class="search__input" v-model="search">
    <ButtonImg class="search__btn" @clickBtn="handlerSearch">
      <img src="@/assets/UI/icon-search.svg" alt="search">
    </ButtonImg>
  </div>
</template>

<style scoped lang="scss">
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 10px;

  &__input {
    width: 90%;
    padding: 10px;
    border: 1px solid #808080;
    border-radius: 5px 0 0 5px;

    &:focus{
      borger: 1px solid rgba(1, 98, 133, 0.55);
    }
  }

  &__btn {
    width: 10%;
    border-radius: 0 5px 5px 0;
  }
}
</style>