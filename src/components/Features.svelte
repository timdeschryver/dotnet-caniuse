<script lang="ts">
import type { FeatureSelection, FeatureWithVersion, VersionSelection, Versions } from "../types/models";
import DataTable from "./DataTable.svelte";
import Search from "./Search.svelte";

let { versions: versionsData }: { versions: Versions } = $props();

let search = $state("");
let versionsSelection = $state(initializeVersions(versionsData));
let featuresSelection = $state(initializeFeatureTags(versionsData));
let featureWithVersion = $state(initializeFeatureWithVersion(versionsData));

function initializeVersions(data: Versions): VersionSelection[] {
	return data
		.toSorted((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime())
		.map((v) => ({
			version: v.version,
			endOfSupportDate: v.endOfSupportDate,
			releaseDate: v.releaseDate,
			label: v.label,
			selected: false,
		}));
}

function initializeFeatureTags(data: Versions): FeatureSelection[] {
	return [...new Set(data.flatMap((v) => v.features.map((f) => f.tags[0])))].toSorted().map((f) => ({
		name: f,
		selected: false,
	}));
}

function initializeFeatureWithVersion(data: Versions): FeatureWithVersion[] {
	return data.flatMap((v) => v.features.map((f) => ({ ...f, version: v.version })));
}

function matchesSearchCriteria(feature: FeatureWithVersion, searchTerm: string): boolean {
	if (!searchTerm) return true;
	const searchLower = searchTerm.toLowerCase();
	return (
		feature.name.toLowerCase().includes(searchLower) ||
		feature.tags.some((t) => t.toLowerCase().includes(searchLower)) ||
		feature.description.toLowerCase().includes(searchLower)
	);
}

function matchesVersionFilter(feature: FeatureWithVersion, selectedVersions: string[]): boolean {
	return selectedVersions.length === 0 || selectedVersions.includes(feature.version);
}

function matchesTagFilter(feature: FeatureWithVersion, selectedTags: string[]): boolean {
	return selectedTags.length === 0 || selectedTags.some((tag) => feature.tags.includes(tag));
}

function sortFeatures(a: FeatureWithVersion, b: FeatureWithVersion): number {
	const versionCompare = b.version.localeCompare(a.version, undefined, { numeric: true });
	if (versionCompare !== 0) return versionCompare;

	const tagCompare = a.tags[0].localeCompare(b.tags[0]);
	if (tagCompare !== 0) return tagCompare;

	return a.name.localeCompare(b.name);
}

let filteredFeatures = $derived(
	featureWithVersion
		.filter((feature) => {
			const selectedVersions = versionsSelection.filter((v) => v.selected).map((v) => v.version);
			const selectedTags = featuresSelection.filter((t) => t.selected).map((t) => t.name);

			return (
				matchesSearchCriteria(feature, search) &&
				matchesVersionFilter(feature, selectedVersions) &&
				matchesTagFilter(feature, selectedTags)
			);
		})
		.toSorted(sortFeatures),
);
</script>

<div class="space-y-8">
    <Search
        bind:search
        versions={versionsSelection}
        features={featuresSelection}
    />
    <DataTable features={filteredFeatures} />
</div>
