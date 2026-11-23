<script setup lang="ts">
defineProps<{ course: CourseKey }>()
</script>

<template>
  <ClaudeMark v-if="COURSES[course].mark === 'claude'" />
  <GrokMark v-else />
</template>
