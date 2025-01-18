<script lang="ts" generics="T">
import type { Snippet } from "svelte";
import Label from "./Label.svelte";

let {
	label,
	tags,
	buttonSnippet,
}: { label: string; tags: (T & { selected: boolean })[]; buttonSnippet: Snippet<[T]> } = $props();

function tagClick(tag: { selected: boolean }) {
	tag.selected = !tag.selected;
}
</script>

<Label {label} />

<div class="flex flex-wrap gap-2">
  {#each tags as tag}
    <button
      onclick={() => tagClick(tag)}
      class="relative group px-4 py-2 rounded-lg transition-all duration-200 border hover:z-10
        {tag.selected
        ? 'bg-indigo-600 text-white dark:bg-indigo-500 shadow-md border-transparent'
        : 'border-gray-300 dark:border-indigo-400/30 text-indigo-800 dark:text-indigo-300 bg-white dark:bg-indigo-900/10 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-500/70 dark:hover:border-indigo-400/70 hover:shadow-sm hover:-translate-y-0.5'} font-medium"
    >
      {@render buttonSnippet(tag)}
    </button>
  {/each}
</div>
