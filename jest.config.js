module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	globals: {
		'ts-jest': {
			tsconfig: {
				module: 'commonjs', // TypeScript가 생성하는 모듈 형식을 CommonJS로 지정
			},
		},
	},
};
