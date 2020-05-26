<template>
  <div>
    <modal-template v-if="toggle" class="override-modal">
      <template #header>
        <b-icon icon="close" @click.native="toggleInfoModal()" />
        <h3>Biometria Animal</h3>
      </template>
      <template #body>
        <div class="animal-record">
          <b-icon type="is-danger" icon="launch" />

          <div class="group-info">
            <h1 class="group-title">Apelido</h1>
            <p class="group-text">Mel</p>
          </div>

          <div class="group-info">
            <h1 class="group-title">Nome Popular</h1>
            <p class="group-text">Cão</p>
          </div>

          <div class="group-info">
            <h1 class="group-title">Nome Científico</h1>
            <p class="group-text">Canis lupus familiaris</p>
          </div>

          <div class="group-info">
            <h1 class="group-title">Responsável</h1>
            <p class="group-text">Matheus Ferreira</p>
          </div>

          <hr>

          <div class="group-info">
            <h1 class="group-title">Data de Medida</h1>
            <p class="group-text">27/04/2020</p>
          </div>

          <div class="group-info">
            <h1 class="group-title">Observação</h1>
            <p class="group-text">Animal de grande porte com problemas de alimentação e possível insuficiência renal. Peso em declínio segundo a última medida.</p>
          </div>

          <hr>

          <div class="group-info">
            <h1 class="group-title">Prescrição</h1>
            <p class="group-text">Medicá-lo com Nutrifull Dog Organnact, 1cp de 12h/12h</p>
          </div>

          <div class="group-info">
            <h1 class="group-title">Medidas</h1>
          </div>

          <div class="biometrys">
            <p><strong>Peso -</strong> 19kg</p>
          </div>
          <div class="biometrys">
            <p><strong>Altura -</strong> 49cm</p>
          </div>
          <div class="biometrys">
            <p><strong>Comprimeto -</strong> Não calculado</p>
          </div>
          <div class="biometrys">
            <p><strong>Largura -</strong> Não calculado</p>
          </div>
        </div>
      </template>
      <template #footer class="columns is-centered">
        <div class="action-modal">
          <b-button class="btn-secundary" @click.native="toggleInfoModal()">Voltar</b-button>
        </div>
      </template>
    </modal-template>
  </div>
</template>

<script>
import ModalTemplate from "../shared/ModalTemplate";
export default {
  name: "BiometryRecord",
  components: { ModalTemplate },
  data () {
    return {
      biometry: [
        { id: 1, date: '24/07/2020', responsible: 'Matheus Ferreira' },
        { id: 2, date: '23/05/2020', responsible: 'Matheus Ferreira' },
        { id: 3, date: '22/04/2020', responsible: 'Matheus Ferreira' },
        { id: 4, date: '21/03/2020', responsible: 'Matheus Ferreira' },
        { id: 5, date: '20/01/2020', responsible: 'Matheus Ferreira' },
      ]
    }
  },
  props: {
    toggle: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleInfoModal() {
      this.$emit("closeModal");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheet/base";
.override-modal /deep/ .modal-box {
  width: 100%;
  max-width: 65rem;
  height: 100%;
  max-height: 40rem;
  .modal-body {
    max-height: 100%;
    .animal-record {
      margin-left: 1rem;
      margin-right: 1rem;
      .icon {
        position: absolute;
        right: 0;
        cursor: pointer;
      }
      hr {
        width: 50%;
        margin: 1.5rem auto;
        border: 0.05rem solid $primary;
      }
      .biometrys {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.35rem;
        strong {
          color: $primary;
        }
      }
      .group-info {
        margin-bottom: 0.75rem;
        .group-title {
          font-weight: $font-bold;
        }
        .group-text {
          text-align: justify;
          text-justify: inter-word;
        }
      }
    }
  }
}

.control /deep/.help.counter {
  display: none;
}
.action-modal {
  display: flex;
  justify-content: center;
  .btn {
    margin-top: 1rem;
    height: 2.5rem;
    width: 33%;
    font-weight: 700;
  }
  .btn-secundary {
    margin-top: 1rem;
    height: 2.5rem;
    width: 33%;
    font-weight: 700;
    color: $primary;
    border: 0.05rem solid $primary;

    &:hover {
      background: linear-gradient(
        to right,
        rgba(255, 114, 95, 1) 30%,
        rgba(242, 49, 165, 1) 100%
      );
      color: #fafafa;
    }
  }
}
</style>
