import type { CollectionEntry } from "astro:content";

export type Version = CollectionEntry<"versions">["data"];
export type Versions = Version[];
export type VersionSelection = Omit<Version, "features"> & { selected: boolean };

export type Features = Version["features"];
export type Feature = Features[0];
export type FeatureSelection = Pick<Feature, "name"> & { selected: boolean };

export type FeatureWithVersion = Feature & { version: string };
