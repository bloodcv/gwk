<script setup lang="ts">

</script>

<template>
  <div>
    <h1>Home</h1>
    <nav>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
      <RouterLink to="/report">Report</RouterLink>
      <RouterLink to="/media">Media</RouterLink>
      <RouterLink to="/newAd">NewAd</RouterLink>
      <RouterLink to="/template">Template</RouterLink>
      <RouterLink to="/flow">Flow</RouterLink>
      <RouterLink to="/deliveryPlans">DeliveryPlans</RouterLink>
      <RouterLink to="/dsp">DSP</RouterLink>
      <RouterLink to="/supplier">Supplier</RouterLink>
      <RouterLink to="/log">Log</RouterLink>
      <RouterLink to="/blockingTools">BlockingTools</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
