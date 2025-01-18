<script lang="ts">
import Label from "./Label.svelte";
let { label = "", search = $bindable("") } = $props();
</script>

<div class="space-y-2">
  <Label {label} for="feature-search" />
  <input
    bind:value={search}
    id="feature-search"
    placeholder="LINQ, collection, OpenAPI, ..."
    class="w-full px-4 py-2 text-lg rounded-lg bg-white dark:bg-indigo-900/10 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-indigo-400/30 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 hover:border-indigo-500/70 dark:hover:border-indigo-400/70 transition-colors placeholder:text-gray-500 dark:placeholder:text-gray-400"
  />
</div>
