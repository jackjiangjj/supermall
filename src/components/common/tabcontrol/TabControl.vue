<template>
  <div id="control">
    <slot>

    </slot>
  </div>
</template>

<script>
    export default {
        name: "TabControl"
    }
</script>

<style scoped>
#control{
  display: flex;
  height: 44px;
  width: 100%;
  position: sticky;
  top: 44px;

}
</style>
