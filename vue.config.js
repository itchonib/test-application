module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
            @import "@/styles/_variables.scss";
            @import "@/styles/_global.scss";
            @import "@/styles/_mixins.scss";
          `,
      },
    },
  },
};
