export const myMixin = {
  data() {
    return { formattedImg: " " };
  },
  computed: {
    formatPrice() {
      return parseFloat(this.product.BasePrice).toFixed(2);
    },
  },
  methods: {
    formatImg(url, dimensions) {
      console.log(url, dimensions);
      return (this.formattedImg = url + `?width=${dimensions}&height=${dimensions}`);
    },
  },
  created() {
    this.formatImg(this.product.PhotoName, this.dimensions);
  },
  updated() {
    this.formatImg(this.product.PhotoName, this.dimensions);
  },
};
