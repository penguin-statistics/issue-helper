<template>
  <div class="bug-report" style="margin:0">
    <div class="vue-ui-grid col-2 default-gap">
      <VueFormField
        class="span-2"
        :title="i18n('browser-and-os-title')"

        v-if="isBrowserEnvironment"
      >
        <VueInput
          v-model="attrs.browserAndOS"
          required
          disabled
        />
      </VueFormField>

      <VueFormField
          class="span-2"
          :title="i18n('url-title')"
      >
        <VueInput
            type="url"
            v-model="attrs.url"
            required
            :disabled="prescribedUrl"
        />
        <i18n slot="subtitle" id="url-subtitle" v-if="!prescribedUrl" />
      </VueFormField>

      <VueFormField
        class="span-2"
        :title="i18n('steps-title')"
      >
        <VueInput
          type="textarea"
          rows="4"
          v-model="attrs.steps"
          required
        />
        <i18n slot="subtitle" id="steps-subtitle"/>
      </VueFormField>

      <VueFormField
        :title="i18n('expected-title')"
      >
        <VueInput
          type="textarea"
          rows="4"
          v-model="attrs.expected"
          required
        />
      </VueFormField>

      <VueFormField
        :title="i18n('actual-title')"
      >
        <VueInput
          type="textarea"
          rows="4"
          v-model="attrs.actual"
          required
        />
      </VueFormField>

      <VueFormField
        class="span-2"
        :title="i18n('extra-title')"
        :subtitle="i18n('extra-subtitle')"
      >
        <VueInput
          type="textarea"
          rows="4"
          v-model="attrs.extra"
        />
      </VueFormField>
    </div>

    <VueModal
      v-if="show"
      :title="i18n('repro-modal-title')"
      class="medium"
      @close="show = false"
    >
      <div class="default-body">
        <i18n id="repro-modal"/>
      </div>
    </VueModal>
  </div>
</template>

<script>
import { generate } from "../helpers";

export default {
  props: ["repo"],

  data() {
    return {
      show: false,
      attrs: {
        reproduction: "",
        steps: "",
        expected: "",
        actual: "",
        extra: "",
        url: "",
        browserAndOS: "",
      },
      versions: [],
      reproNotAvailable: false,
    };
  },

  created() {
    const urlParams = new URLSearchParams(window.location.search);
    this.attrs.url = urlParams.get("url") || "";

    this.attrs.browserAndOS = navigator.userAgent;
  },

  computed: {
    prescribedUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      return !!urlParams.get("url");
    },
    isBrowserEnvironment() {
      return ![
        "penguin-statistics/backend",
        "penguin-statistics/backend-next",
      ].includes(this.repo);
    },
  },

  watch: {
    repo() {
      this.versions = [];
      this.attrs.version = "";
    },
  },

  mounted() {
    this.browserAndOS = navigator.userAgent;
  },

  methods: {
    generate() {
      const { steps, expected, actual, extra, url, browserAndOS } = this.attrs;

      return generate(
        `${
          browserAndOS && this.isBrowserEnvironment
            ? `### Environment
\`${browserAndOS}\``
            : ``
        }

${
          url
            ? `### URL
\`${url}\``
            : ``
        }

### Steps to reproduce
${steps}

### What is expected?
${expected}

### What is actually happening?
${actual}

${extra ? `---\n${extra}` : ""}
  `.trim()
      );
    },
  },
};
</script>
