<script setup lang="ts">
import Button from "primevue/button";
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex items-end gap-1">
      <Button icon="pi pi-check" label="Foo" size="small" />
      <Button icon="pi pi-check" label="Foo" />
      <Button icon="pi pi-check" label="Foo" size="large" />
    </div>
    <div class="flex items-end gap-1">
      <Button icon="pi pi-check" label="Foo" rounded size="small" />
      <Button icon="pi pi-check" label="Foo" rounded />
      <Button icon="pi pi-check" label="Foo" rounded size="large" />
    </div>
    <div class="flex items-end gap-1">
      <Button icon="pi pi-check" size="small" />
      <Button icon="pi pi-check" />
      <Button icon="pi pi-check" size="large" />
    </div>
    <div class="flex items-end gap-1">
      <Button icon="pi pi-check" rounded size="small" />
      <Button icon="pi pi-check" rounded />
      <Button icon="pi pi-check" rounded size="large" />
    </div>
  </div>
</template>
