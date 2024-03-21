import React from 'react'
import type { Preview } from '@storybook/react'
import 'tailwindcss/tailwind.css'

import '../src/app/style.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    mockAddonConfigs: {
      globalMockData: [],
      ignoreQueryParams: true,
    },
    backgrounds: {
      values: [{ name: 'white', value: '#ffffff' }],
    },
  },
  decorators: [
    // add more providers if required
    (Story) => <Story />,
  ],
}

export default preview
