<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal-box"
        role="dialog"
      >
        <div class="modal-header">
          <slot name="header" />
          <hr>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Modal',
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/stylesheet/base';

  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .3s ease
  }
    .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    color: $black;
    .modal-box {
      padding: 2.5rem;
      background: $white;
      box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.2);
      overflow-x: auto;
      display: flex;
      flex-direction: column;
      max-width: 37.5rem;
      border-radius: 0.625rem;
      width: 100%;
      min-height: 10.375rem;
      max-height: 80%;
      height: auto;
      text-align: left;
      position: relative;
      color: $black;
      .modal-header {
        text-align: center;
        position: relative;
        h3 {
          font-family: $font-primary;
          font-size: 1.125rem;
          font-weight: $font-bold;
          line-height: 1.375rem;
        }
        i {
          position: absolute;
          right: 0;
          top: 0.9375rem;
          cursor: pointer;
        }
        hr {
          border: 0.05rem solid $primary;
        }
      }
      .modal-body {
        position: relative;
        padding: 0 0 1.25rem;
        max-height: 15.625rem;
        overflow-y: auto;
        .subtitle {
          font-weight: $font-bold;
          font-size: 1.125rem;
          line-height: 1.375rem;
          color: $black;
          &.pink {
            color: $black;
          }
        }
      }
    }
  }
  @media screen and (max-width: 49.3125rem) {
      .modal-backdrop {
        .modal-box {
          padding: 1.25rem;
          margin: 0rem 0.9375rem;
          max-height: 95%;
        }
      }
    }
</style>