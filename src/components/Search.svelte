<script lang="ts">
import type { FeatureSelection, VersionSelection } from "../types/models";
import SearchField from "./SearchField.svelte";
import Tags from "./Tags.svelte";

let {
	search = $bindable(""),
	versions,
	features,
}: {
	search: string;
	versions: VersionSelection[];
	features: FeatureSelection[];
} = $props();

function isEndOfLife(date: Date): boolean {
	return date < new Date();
}
</script>

<div class="space-y-2">
  <SearchField label="Search" bind:search />
  <Tags label="Filter by version" tags={versions} buttonSnippet={versionTag} />
  <Tags label="Filter by feature" tags={features} buttonSnippet={featureTag} />

  {#snippet versionTag(tag: VersionSelection)}
    <div class="relative w-32 flex justify-between items-center">
      <span>
        {#if isEndOfLife(tag.endOfSupportDate)}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"
            />
          </svg>
        {/if}
      </span>
      <span>{tag.version}</span>
      <span class="text-xs {tag.selected ? 'text-indigo-100 dark:text-indigo-100' : 'text-indigo-400 dark:text-indigo-400'}"
        >{tag.label}</span
      >
    </div>

    <div
      class="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 px-3 py-2 text-base text-white bg-indigo-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col gap-1"
    >
      <div class="grid grid-cols-[auto_1fr] gap-x-2">
        {#if isEndOfLife(tag.endOfSupportDate)}
          <span class="text-left"><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"
            />
          </svg></span>
          <span class="text-left"
            >End of life</span
          >
          
        {/if}
        <span class="text-left">Released</span>
        <span class="text-left"
          >{tag.releaseDate.toLocaleDateString(undefined, {day: 'numeric', month:'short', year: 'numeric'})}</span
        >
        <span class="text-left">EOS</span>
        <span class="text-left"
          >{tag.endOfSupportDate.toLocaleDateString(undefined, {day: 'numeric', month:'short', year: 'numeric'})}</span
        >
      </div>
    </div>
  {/snippet}

  {#snippet featureTag(feature: FeatureSelection)}
    <div>
      {feature.name}
    </div>
  {/snippet}
</div>
