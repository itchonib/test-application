import { shallowMount} from "@vue/test-utils";
import Product from "@/components/ProductDetailed.vue";

describe("SingleProductPage.vue", () => {
  it("renders correct product information when passed", async () => {
    const product = {
      ItemName: "This is the name",
      BasePrice: "14.00",
    };
    const wrapper = shallowMount(Product, {
      props: { product }
    });
    expect(wrapper.find('.product__name').text()).toContain(product.ItemName);
    //need to update to formatted 
    expect(wrapper.find('.product__price').text()).toContain(product.BasePrice);
  });

  it("renders out of stock badge when quantity is 0", () => {
    const product = {
      OnHandQuantity: 0
    };
    const wrapper = shallowMount(Product, {
      props: { product }
    });

    expect(wrapper.find('.product__price').attributes().class).toContain("strike")
    expect(wrapper.find('.no-stock__badge').exists()).toBe(true)
    expect(wrapper.find('.no-stock__badge').text()).toContain('Out of stock');
  });

  it("renders out of stock badge when quatity is negative", () => {
    const product = {
      OnHandQuantity: -100
    };
    const wrapper = shallowMount(Product, {
      props: { product }
    });

    expect(wrapper.find('.product__price').attributes().class).toContain("strike")
    expect(wrapper.find('.no-stock__badge').exists()).toBe(true)
    expect(wrapper.find('.no-stock__badge').text()).toContain('Out of stock');
  });

  it("does NOT render out of stock badge when quantity is positive", () => {
    const product = {
      OnHandQuantity: 100
    };
    const wrapper = shallowMount(Product, {
      props: { product }
    });

    expect(wrapper.find('.product__price').classes()).not.toContain("message")
    expect(wrapper.find('.no-stock__badge').exists()).toBe(false)

  });
});
