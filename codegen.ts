import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      'src/lib/schema.ts': {
        noRequire: true,
      },
    },
  ],
  documents: '.src/pages/**/*.tsx',
  generates: {
    '.src/lib/gql/': {
      preset: 'client',
      plugins: [],
    },
    '.src/lib/resolvers-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
}

export default config
