// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ISocketRouteEntryPoint } from "@twin.org/api-models";
import { generateSocketRoutesEventBus, tagsEventBus } from "./eventBusRoutes";

export const socketEntryPoints: ISocketRouteEntryPoint[] = [
	{
		name: "immutable-proof",
		defaultBaseRoute: "immutable-proof",
		tags: tagsEventBus,
		generateRoutes: generateSocketRoutesEventBus
	}
];
