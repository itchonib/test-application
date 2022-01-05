import { shallowMount} from "@vue/test-utils";
import ProductCard from "@/components/ProductCard.vue";


describe("ProductCard.vue", () => {
  it("renders props when passed", async () => {
    const product = {
      BasePrice: "14.00",
    };
    const wrapper = shallowMount(ProductCard, {
      props: { product }
    });
    expect(wrapper.find('.product-card__price').text()).toContain(product.BasePrice);
  });
});
