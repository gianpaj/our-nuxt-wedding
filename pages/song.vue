<template>
  <div class="body justify-center flex flex-col">
    <form @submit.prevent="handleSubmit" class="checkout-form">
      <!-- <StaticElement
      name="img"
      content="<img
      src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.quotesgram.com%2Fimg%2F49%2F61%2F348510321-f3f722cc346a5dbe3686aeda1999420a.jpg&f=1&nofb=1&ipt=62f0d0b7c65f4190617f4ae94773a6b23fdeb6973b1e0028d0b06a6e8da60168&ipo=images'
      alt='Image'
      title='Image'
    />"
    /> -->
      <h1>Checkout Form</h1>
      <div class="address__field">
        <label for="firstName">Name</label>
        <input type="text" id="firstName" v-model="form.firstName" required />
      </div>
      <div class="address__field">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <!-- <FormKit
        type="text"
        name="song-title"
        label="Song title"
        placeholder="e.g.  Dancing Queen"
        :rules="['required', 'min:2']"
        field-name="song-title"
      />
      <FormKit
        type="text"
        name="artist"
        label="Artist"
        placeholder="e.g. ABBA"
        :rules="['required', 'min:4']"
        field-name="artist"
      />
      <FormKit
        type="text"
        name="link"
        label="Link"
        placeholder="e.g. https://youtube.com/..."
        info="YouTube, Spotify, etc."
        :rules="['min:10', 'url']"
      />
      <FormKit
        validation="email"
        validation-visibility="live"
        label="Email address"
        prefix-icon="email"
      /> -->
      <!-- <ButtonElement name="submit" button-label="Send 💃" :submits="true" /> -->
    </form>
  </div>
</template>

<!-- // import { ref } from "vue";
// const formValues = ref({
//   fruit: ["Strawberry", "Banana"],
// });
// const emailCount = ref(1);
/**
 *
 * In this page guests to the weeding can send us a song
 *
 *
 * TODO
 * - [ ] Add a form
 * - [ ] Add functionality to send the form data to the backend
 * - [ ] Add a thank you message
 *
 */
// export default {
//   name: "SendUsASong",
//   components: {
//   },
// }; -->
<script lang="ts" setup>
import { ref, reactive } from "vue";

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  billingAddress: {
    streetName: "",
    streetNumber: "",
    city: "",
    postcode: "",
  },
  deliveryAddress: {
    streetName: "",
    streetNumber: "",
    city: "",
    postcode: "",
  },
});
const submitted = ref(false);
const formData = ref({});
const handleSubmit = async () => {
  // Lets pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000));
  submitted.value = true;
};
</script>
<style lang="scss">
.app {
  font-family: Arial, Helvetica, sans-serif;
  color: #434141;
  text-align: center;
}
.checkout-form {
  margin: 5px auto;
  padding: 10px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.address__field {
  padding-bottom: 10px;
  width: 250px;
  text-align: left;
}
label {
  display: block;
  font-weight: bold;
}

input {
  padding: 10px;
  width: 230px;
  border: 1px solid #fff;
  border-radius: 5px;
  outline: 0;
  background: #f8edcf;
}

button {
  margin-top: 30px;
  padding: 10px;
  width: 250px;
  color: #f8edcf;
  border: 1px solid #fff;
  border-radius: 5px;
  outline: 0;
  background: #434141;
}
</style>
