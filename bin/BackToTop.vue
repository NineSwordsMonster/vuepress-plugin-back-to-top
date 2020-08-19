<template>
  <transition name="fade">
    <div v-show="visible" :style="customStyle" class="back-to-ceiling" @click="backToTop">
      <svg
        t="1597808273231"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="652"
        width="200"
        height="200"
      >
        <path
          d="M271.984 1020a8 8 0 0 1-3.856-15.008l35.664-19.616a231.968 231.968 0 0 0 120.192-203.296v-37.312a8 8 0 0 1 16 0v37.312a248.048 248.048 0 0 1-128.464 217.312l-35.664 19.616a8.112 8.112 0 0 1-3.872 0.992zM751.984 1020a8 8 0 0 1-3.856-0.992l-35.664-19.616a248 248 0 0 1-128.48-217.312v-37.312a8 8 0 0 1 16 0v37.312a232.032 232.032 0 0 0 120.208 203.296l35.664 19.616a8 8 0 0 1-3.872 15.008z"
          fill="#263238"
          p-id="653"
        />
        <path
          d="M199.984 1020a8 8 0 0 1-8-8c0-110.288 89.712-200 200-200 1.008 0 2.032 0.064 3.024 0.144 4.416 0.112 8.688 3.84 8.576 8.256-0.128 4.352-2.928 7.84-7.216 7.84h-0.224l-4.176-0.224c-101.456 0-184 82.544-184 184a7.968 7.968 0 0 1-7.984 7.984zM823.984 1020a8 8 0 0 1-8-8c0-101.456-82.544-184-184-184l-4.16 0.224h-0.224a8 8 0 0 1-0.224-16c2.576-0.16 3.584-0.224 4.592-0.224 110.288 0 200 89.712 200 200a7.984 7.984 0 0 1-7.984 8zM39.984 1020a8 8 0 0 1-8-8c0-83.808 68.192-152 152-152a151.52 151.52 0 0 1 35.296 4.224 8 8 0 1 1-3.76 15.568 135.04 135.04 0 0 0-31.552-3.792c-74.992 0-136 61.008-136 136a7.984 7.984 0 0 1-7.984 8zM983.984 1020a8 8 0 0 1-8-8c0-74.992-61.008-136-136-136-10.48 0-21.088 1.28-31.536 3.792a8 8 0 1 1-3.76-15.568 151.472 151.472 0 0 1 35.28-4.224c83.808 0 152 68.192 152 152a7.984 7.984 0 0 1-7.984 8z"
          fill="#263238"
          p-id="654"
        />
        <path
          d="M1015.984 1020h-432a8 8 0 0 1 0-16h432a8 8 0 0 1 0 16zM535.984 1020h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16zM439.984 1020H8a8 8 0 0 1 0-16h431.984a8 8 0 0 1 0 16zM623.984 656.784h-224a7.968 7.968 0 0 1-8-8l0.016-418.192c0-72.576 24.528-144.096 69.088-201.376C473.68 13.008 492.096 4 512 4c19.888 0 38.304 8.992 50.512 24.704l-5.936 5.408 6.32-4.912a329.52 329.52 0 0 1 69.088 201.376v418.208a8 8 0 0 1-8 8z m-216-16h208V230.592c0-69.04-23.344-137.056-65.712-191.552l-0.096-0.112-0.368-0.496A47.584 47.584 0 0 0 512 20a47.68 47.68 0 0 0-37.904 18.528A314.08 314.08 0 0 0 408 230.592l-0.016 410.192z"
          fill="#263238"
          p-id="655"
        />
        <path d="M368 584.784H208v64h160" fill="#FFD740" p-id="656" />
        <path
          d="M367.984 656.784h-160a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h160a8 8 0 0 1 0 16h-152v48h152a8 8 0 0 1 0 16zM591.984 720.784h-160a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8z m-152-16h144v-48h-144v48z"
          fill="#263238"
          p-id="657"
        />
        <path d="M512 204m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#40C4FF" p-id="658" />
        <path
          d="M511.984 276c-39.696 0-72-32.304-72-72s32.304-72 72-72 72 32.304 72 72-32.304 72-72 72z m0-128c-30.88 0-56 25.12-56 56s25.12 56 56 56 56-25.12 56-56-25.12-56-56-56zM207.984 592.784a8 8 0 0 1-8-8v-48c0-2.448 1.12-4.752 3.024-6.272l160-126.672a8 8 0 1 1 9.936 12.56l-156.976 124.256v44.128a7.968 7.968 0 0 1-7.984 8z"
          fill="#263238"
          p-id="659"
        />
        <path d="M656 584.784h160v64H656" fill="#FFD740" p-id="660" />
        <path
          d="M815.984 656.784h-160a8 8 0 0 1 0-16h152v-48h-152a8 8 0 0 1 0-16h160a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8z"
          fill="#263238"
          p-id="661"
        />
        <path
          d="M815.984 592.784a8 8 0 0 1-8-8v-44.128l-156.976-124.256a8 8 0 1 1 9.936-12.56l160 126.672a8.032 8.032 0 0 1 3.024 6.272v48a7.968 7.968 0 0 1-7.984 8zM903.984 108h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16z"
          fill="#263238"
          p-id="662"
        />
        <path
          d="M871.984 140a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v64a8 8 0 0 1-8 8zM1015.984 212h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16z"
          fill="#263238"
          p-id="663"
        />
        <path
          d="M983.984 244a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v64a8 8 0 0 1-8 8zM335.984 348a8 8 0 0 1-8-8v-32a8 8 0 0 1 16 0v32a8 8 0 0 1-8 8zM335.984 284a8 8 0 0 1-8-8l0.016-120a8 8 0 0 1 16 0l-0.016 120a8 8 0 0 1-8 8z"
          fill="#263238"
          p-id="664"
        />
        <path
          d="M687.984 348a8 8 0 0 1-8-8v-32a8 8 0 0 1 16 0v32a8 8 0 0 1-8 8z"
          fill="#263238"
          p-id="665"
        />
        <path
          d="M687.984 284a8 8 0 0 1-8-8l0.016-120a8 8 0 0 1 16 0l-0.016 120a8 8 0 0 1-8 8z"
          fill="#263238"
          p-id="666"
        />
        <path
          d="M575.984 608.784a8 8 0 0 1-8-8v-320a8 8 0 0 1 16 0v320a8 8 0 0 1-8 8z"
          fill="#263238"
          p-id="667"
        />
      </svg>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BackToTop",
  data() {
    return {
      visible: false,
      /* eslint-disable no-undef */
      customStyle: CUSTOM_STYLE,
      visibilityHeight: VISIBILITY_HEIGHT,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.throttle(this.handleScroll, 500));
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.throttle(this.handleScroll, 500));
  },
  methods: {
    handleScroll() {
      this.visible = window.pageYOffset > this.visibilityHeight;
    },
    backToTop() {
      window.scrollTo(0, 0);
    },
    throttle(func, delay) {
      let timer = null;
      let startTime = Date.now();
      return function () {
        const curTime = Date.now();
        const remaining = delay - (curTime - startTime);
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        if (remaining <= 0) {
          func.apply(context, args);
          startTime = Date.now();
        } else {
          timer = setTimeout(func, remaining);
        }
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.back-to-ceiling {
  background-color: #fff;
  background-color: var(--background-color);
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  box-shadow: var(--box-shadow);
  position: fixed;
  display: inline-block;
  text-align: center;
  cursor: pointer;

  &::hover {
    background: #d5dbe7;
  }

  .icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 26px;
    height: 26px;
    fill: $accentColor;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-100vh);
}
</style>
