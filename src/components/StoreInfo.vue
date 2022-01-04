<template>
  <div class="store-info">
    <h2 class="store-info__name">repzio store</h2>
    <div class="store-info__contact">
      <p>name:</p>
      <p>Max Someone</p>
      <p>email</p>
      <p>max@repzio.com</p>
      <p>phone</p>
      <p>888-888-8888</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreInfo",
};
</script>

<style scoped lang="scss">
.store-info {
  margin: 1.8rem 0;
  @include tablet-lg {
    width: 20%;
    margin: 0;
  }

  &__name {
    font-weight: 500;
  }

  &__contact {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 10px;
  }
}
</style>
