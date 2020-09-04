<template lang="pug">
footer.footer
  .container
    .footer__inner
      router-link.footer__logo(to="/", exact="") FLEX
      .footer__item-list
        router-link.footer__item-header(to="") шоурум
        a.footer__item(href="/") Москва, ул. Маросейка 2/15, 3 этаж
        a.footer__item(href="tel:8 495 333 44 55") 8 495 333 44 55
        a.footer__item(href="mailto:info@flex.com") info@flex.com
      .footer__item-list
        router-link.footer__item-header(to="") каталог
        router-link.footer__item(to="") Для неё
        router-link.footer__item(to="") Для него
        router-link.footer__item(to="") Новинки
        router-link.footer__item(to="") ALMAZOV
      .footer__item-list
        router-link.footer__item-header(to="") инфо
        router-link.footer__item(to="") Таблица размеров
        router-link.footer__item(to="") Доставка и оплата
        router-link.footer__item(to="") Обмен и возврат
        router-link.footer__item(to="") Договор оферта
      .footer__item-list.footer__item-list_size_auto
        SubmitEmail
          h2.footer__item-header(to="") Подписшись на рассылку
</template>

<script>
import SubmitEmail from "../SubmitEmail/SubmitEmail";
export default {
  components: {
    SubmitEmail,
  },
};
</script>

<style lang="scss">
.footer {
  padding: 38px 0;
  display: flex;
  background: #c4c4c4;

  &__inner {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__logo {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.08em;
    color: #000000;
    text-decoration: none;
    line-height: 1;
  }

  &__item-list {
    display: flex;
    flex-direction: column;
    max-width: 150px;

    &_size_auto {
      max-width: unset;
    }
  }

  &__item-header {
    margin-top: 0;
    margin-bottom: 21px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;
    text-decoration: none;
  }

  &__item {
    margin-bottom: 21px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.01em;
    color: #000000;
    text-decoration: none;
  }
}
</style>