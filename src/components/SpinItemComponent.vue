<template>

  <div id="spin-item">
    <v-touch id="touch-area"
      v-on:panleft="prev"
      v-on:panright="next"
      v-bind:pan-options="{ direction: 'horizontal', threshold: 30 }"
    />
      <img :src="currentImage" alt="SpinItem.com" />
  </div>

</template>

<script>
// const apiUrl = "http://localhost:8000";
const apiUrl = "http://api.spinitem.com";

export default {
  props: {
    itemId: { type: String }
  },
  data: function() {
    return {
      currentIndex: 0,
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/New_hampshire_in_autumn.jpg/1280px-New_hampshire_in_autumn.jpg"]
    };
  },
  created: function() {
    fetch(apiUrl + "/images?item_id=" + this.itemId)
      .then(response => response.json())
      .then(jsonData => {
        var errorMessage = (jsonData["error"] || {}).message || "";
        var images = (jsonData["data"] || {}).images || [];
        this.images = images.map(image => image["destination"].replace("%s", "_500x500"));
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  computed: {
    currentImage: function() {
      return this.images[this.currentIndex];
    }
  },
  methods: {
    prev: function($event) {
      $event.preventDefault();
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.images.length - 1;
      }
    },
    next: function($event) {
      $event.preventDefault();
      this.currentIndex++;
      if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
      }
    }
  }
}
</script>

<style scoped>
  #spin-item {
    position: relative;
    display: inline-block;
  }

  #touch-area {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
  }

  #spin-item img{
    max-width: 500px;
    display: block;
  }
</style>
