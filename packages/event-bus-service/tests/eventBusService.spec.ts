// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { EventBusService } from "../src/eventBusService";

describe("EventBusService", () => {
	test("can construct with dependencies", async () => {
		const eventBusService = new EventBusService();
		expect(eventBusService).toBeDefined();
	});
});
