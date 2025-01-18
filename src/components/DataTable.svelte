<script lang="ts">
import type { FeatureWithVersion } from "../types/models";
let { features }: { features: FeatureWithVersion[] } = $props();
</script>

<div class="relative overflow-x-auto shadow-md rounded-lg">
    <table class="w-full text-base text-left text-gray-700 dark:text-gray-300">
      <thead class="text-sm uppercase bg-indigo-50 dark:bg-indigo-900/40">
        <tr>
          <th scope="col" class="px-4 py-3">Feature</th>
          <th scope="col" class="px-4 py-3">Description</th>
          <th scope="col" class="px-4 py-3">Version</th>
          <th scope="col" class="px-4 py-3">Tags</th>
        </tr>
      </thead>
      <tbody>
          {#each features as feature}
            <tr class="bg-white dark:bg-indigo-900/10 border-b border-gray-200 dark:border-indigo-400/30 transition-all duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
              <th scope="row" class="px-4 py-3 font-medium">
                <a
                  href={feature.docs}
                  class="text-indigo-600 dark:text-indigo-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {feature.name}
                </a>
              </th>
              <td class="px-4 py-3">{feature.description}</td>
              <td class="px-4 py-3">{feature.version}</td>
              <td class="px-4 py-3">
                <div class="flex gap-2 flex-wrap">
                  {#each feature.tags as tag}
                    <span class="px-3 py-1.5 text-sm rounded-full bg-indigo-50 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300">
                      {tag}
                    </span>
                  {/each}
                </div>
              </td>
            </tr>
            {:else}
            <tr class="bg-white dark:bg-indigo-900/10">
              <td colspan="100" class="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                No features found matching your criteria.
              </td>
            </tr>
          {/each}
      </tbody>
    </table>
</div>
