<template>
  <div class="main-holder">
    <h1 class="main-header">Find weather in your city</h1>
    <form
      @submit.prevent="searchWeather(search)"
      class="form-inline form_search"
    >
      <div v-if="data.descriptionIcon">
        <img
          :src="
            'http://openweathermap.org/img/w/' + data.descriptionIcon + '.png'
          "
          alt="Weather Icon"
        />
      </div>
      <div class="input-holder mb-2">
        <input
          type="text"
          placeholder="Enter any city"
          aria-label="City"
          v-model="search"
          class="form-control-plaintext border d-md-flex-fill"
        />
      </div>
      <button
        @click="searchWeather(search)"
        type="submit"
        class="btn btn-info mb-2 d-md-flex-fill search-button"
      >
        Get weather
      </button>
    </form>
    <div v-if="data.results" class="error-holder">
      <h2 v-show="data.errorMessage" class="error-message">
        {{ data.errorMessage }}
      </h2>
    </div>
    <div class="detail-holder">
      <DetailDescription
        v-for="{ title, value, id } in data.results"
        :key="id"
        :title="title"
        :result="value"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import DetailDescription from "./components/DetailDescription.vue";
import { WeatherTypes } from "./types/weatherTypes.interface";
import { getWeather } from "./api/weatherApi";

export default defineComponent({
  name: "App",
  components: {
    DetailDescription,
  },
  setup() {
    let results = reactive<{ data: WeatherTypes }>({ data: {} });
    let search = ref("");
    const searchWeather = async (search: string): Promise<void> => {
      const value = await getWeather(search);
      results.data = value;
    };
    return { searchWeather, ...toRefs(results), search };
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;800&display=swap");

.main-holder {
  font-family: "M PLUS Rounded 1c", sans-serif;
  margin: 8% auto;
  max-width: 1000px;
  text-align: center;
}

.main-header {
  font-weight: 900;
  margin-bottom: 1.7em;
}

form {
  width: 60%;
  margin: auto;
}

.input-holder {
  margin: auto;
  width: 25em;
  max-width: 80%;
}

input {
  width: 100%;
  text-align: center;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset,
    0px 0px 8px rgba(0, 123, 255, 0.5);
}

::-webkit-input-placeholder {
  text-align: center;
}

.error-holder {
  margin: auto;
  padding-top: 3em;
  width: 80%;
  text-align: center;
}

.error-message {
  line-height: 1.6;
}

.detail-holder {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  gap: 0.5em 1em;
  justify-content: center;
}

@media only screen and (max-width: 1000px) {
  .form_search {
    width: 65%;
  }
}

@media only screen and (max-width: 880px) {
  button.btn.btn-info.mb-2.d-md-flex-fill.search-button {
    margin: 1em auto;
    position: relative;
    left: 8%;
    padding: 0.8em 3em;
  }
}

@media only screen and (max-width: 800px) {
  .detail-holder {
    justify-content: space-around;
    flex-direction: column;
    padding-left: 15%;
  }
}
</style>
