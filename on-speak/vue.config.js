module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      "/api": {
        target: "https://localhost:44331/"
      }
    }
  }
}