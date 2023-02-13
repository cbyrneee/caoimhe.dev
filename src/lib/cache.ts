/**
 * An in-memory cached value store.
 */
export class Cached<T> {
	private timeout: number; // Seconds
	private value?: T;

	private lastComputed = 0; // Milliseconds

	constructor(timeout: number, value: T | undefined = undefined) {
		this.timeout = timeout;
		this.value = value;
	}

	set(value: T) {
		this.lastComputed = Date.now();
		this.value = value;
	}

	expired(): boolean {
		return Date.now() - this.lastComputed > this.timeout * 1000;
	}

	valueIfNotExpired(): T | undefined {
		if (this.expired()) {
			this.value = undefined;
		}

		return this.value;
	}
}
