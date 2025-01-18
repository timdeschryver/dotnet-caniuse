<script lang="ts">
  const { label, for: forName }: { label: string; for?: string } = $props();
</script>

<label class="block text-lg text-gray-700 dark:text-gray-300" for={forName}>
  {label}
</label>
