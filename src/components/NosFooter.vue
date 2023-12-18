<template>
  <footer class="nos-footer">
    <div>
      App-Version:
      <span class="nos-footer__code">{{ getBuildVersion() }} ({{ getBuildDate() }})</span>
    </div>
    <div>
      SAA-Version: <span class="nos-footer__code">{{ getSaaVersion() }}</span>
    </div>
  </footer>
</template>

<script>
import { getBuildDate, getBuildVersion, getSaaVersion } from '@/plugins/version'
export default {
  name: 'NosFooter',
  methods: {
    getBuildDate,
    getBuildVersion,
    getSaaVersion
  }
}
</script>

<style lang="scss" scoped>
.nos-footer {
  position: absolute;
  bottom: 1px;
  text-align: center;
  width: 100%;
  background: #eee;
  padding: 8px;
  font-size: 0.8rem;
  color: #999;
  &__code {
    font-family: monospace;
    color: #777;
  }
}
</style>
