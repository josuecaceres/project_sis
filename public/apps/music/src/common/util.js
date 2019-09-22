export const {
	PI,
	cos,
	sin,
	tan,
	abs,
	sqrt,
	pow,
	min,
	max,
	ceil,
	floor,
	round,
	random,
	atan2
} = Math
export const HALF_PI = 0.5 * PI
export const QUART_PI = 0.25 * PI
export const TAU = 2 * PI
export const TO_RAD = PI / 180
export const G = 6.67 * pow(10, -11)
export const EPSILON = 2.220446049250313e-16
export const rand = n => n * random()
export const randIn = (_min, _max) => rand(_max - _min) + _min
export const randRange = n => n - rand(2 * n)
export const fadeIn = (t, m) => t / m
export const fadeOut = (t, m) => (m - t) / m
export const fadeInOut = (t, m) => {
	let hm = 0.5 * m
	return abs((t + hm) % m - hm) / hm
}
export const dist = (x1, y1, x2, y2) => sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2))
export const angle = (x1, y1, x2, y2) => atan2(y2 - y1, x2 - x1)
export const lerp = (a, b, amt) => (1 - amt) * a + amt * b
export const vh = p => p * window.innerHeight * 0.01
export const vw = p => p * window.innerWidth * 0.01
export const vmin = p => min(vh(p), vw(p))
export const vmax = p => max(vh(p), vw(p))
export const clamp = (n, _min, _max) => min(max(n, _min), _max)
export const norm = (n, _min, _max) => (n - _min) / (_max - _min)

export const pad = (n, len = 2, char = '0') => {
	let result = `${n}`

	while (result.length < len) {
		result = `${char}${result}`
	}

	return result
}

export const sToTime = s => {
	return `${pad(parseInt(s / 60))}:${pad(parseInt(s % 60))}`
}

export const clone = o => JSON.parse(JSON.stringify(o))

/* eslint-disable no-extend-native */
Array.prototype.lerp = function(t = [], a = 0) {
	this.forEach((n, i) => (this[i] = lerp(n, t[i], a)))
}

Float32Array.prototype.get = function(i = 0, n = 0) {
	const t = i + n

	let r = []

	for (; i < t; i++) {
		r.push(this[i])
	}

	return r
}
