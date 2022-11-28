<template>
  <div class="store-info">
    <h2 class="store-info__name">{{ salesRep.CompanyName }}</h2>
    <p>SalesRep Contact:</p>
    <div class="store-info__contact">
      <p class="store-info__label">name:</p>
      <p>Alice Apple</p>
      <p class="store-info__label">email:</p>
      <a :href="'mailto:' + salesRep.EmailAddress"> someone@test.com</a>
      <p class="store-info__label">phone:</p>
      <a :href="'tel:+' + salesRep.phone"> 555-555-5555 </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreInfo",
  props: {
    salesRep: Object,
  },
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
    @include yellow-underline;
    margin-bottom: 1rem;
  }

  &__contact {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 2rem 1fr;
    grid-gap: 20px;
    font-size: $text-md;
  }

  &__label {
    font-weight: 500;
  }
}
</style>
