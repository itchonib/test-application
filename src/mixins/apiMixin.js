import axios from "axios";

export const apiMixin = {
  data() {
    return { products: [] };
  },
  methods: {
    async getAllProducts() {
      try {
        const { data } = await axios.get(process.env.VUE_APP_API_URL);
        const { items, SalesRep, ...manufacturer } = data;
        this.manufacturer = manufacturer;
        this.products = items;
        this.salesRep = SalesRep;
      } catch (error) {
        console.warn(error);
      }
    },
  },
};
