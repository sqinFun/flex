<template lang="pug">
form.form(@submit.prevent="submit")
  slot
  template(v-if="!userEmail")
    input.form__input(
      :class="{ form__input_err: $v.formEmail.$error }",
      v-model="formEmail",
      placeholder="e-mail",
      @input="$v.formEmail.$touch"
    )
    span.form__err(v-if="!$v.formEmail.required && $v.formEmail.$dirty") Введён пустой e-mail
    span.form__err(v-else-if="!$v.formEmail.email && $v.formEmail.$dirty") Введён некорректный e-mail
    button.form__submit.btn.btn_theme_tranparent(type="submit") отправить
  template(v-else)
    span Подписка оформлена
    button.form__submit.btn.btn_theme_tranparent(
      type="button",
      @click.prevent="resetEmail"
    ) отправить повторно
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      formEmail: "",
    };
  },
  validations: {
    formEmail: { required, email },
  },
  methods: {
    ...mapMutations(["setUserEmail"]),
    submit: function () {
      if (this.$v.formEmail.$invalid) return;
      this.setUserEmail(this.formEmail);
    },
    resetEmail() {
      this.setUserEmail("");
    },
  },
  computed: {
    ...mapState({ userEmail: (state) => state.userData.userEmail }),
  },
};
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;

  &__input {
    border: 0;
    border-bottom: 1px solid #000000;
    outline: 0;
    background: transparent;

    &_err {
      border-bottom: 1px solid #a75555;
    }

    &::placeholder {
      color: #000;
    }
  }

  &__err {
    color: #a75555;
  }

  &__submit {
    margin-top: 32px;
  }
}
</style>