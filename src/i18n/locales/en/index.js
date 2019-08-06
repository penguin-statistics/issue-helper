export default {
  _label: 'English',

  // intro
  'intro': require('./intro.md'),
  'intro-modal-title': 'The reason behind our strict issue policy',

  // bug report
  'repo-title': 'I am opening an issue for',
  'repo-subtitle': 'Please make sure to file the issue at appropriate repo.',
  'type-title': 'This is a',
  'title-title': 'Issue title',

  'version-title': 'Version',
  'version-subtitle': 'Check if the issue is reproducible with the latest stable version of Vue.',

  'browser-and-os-title': 'Browser and OS info',
  'browser-and-os-subtitle': 'Please specify browser name & version, OS name & version. Example: Chrome 62 / Windows 10',

  'url-title': "URL",
  'url-subtitle': "The URL that the bug occurs at. (e.g. https://penguin-stats.io/report)",

  'steps-title': 'Steps to reproduce',
  'steps-subtitle': require('./steps-subtitle.md'),

  'expected-title': 'What is expected?',
  'actual-title': 'What is actually happening?',
  'extra-title': 'Any additional comments? (optional)',
  'extra-subtitle': 'e.g. some background/context of how you ran into this bug.',

  // feature request
  'rationale-title': 'What problem does this feature solve?',
  'rationale-subtitle': require('./rationale-subtitle.md'),

  'proposal-title': 'What does the proposed API look like?',
  'proposal-subtitle': require('./proposal-subtitle.md'),

  // preview
  'preview': 'Preview',
  'preview-title': 'Issue Preview',
  'create': 'Create',

  // misc
  'bug-report': 'Bug Report',
  'feature-request': 'Feature Request',
  'similar-issues': 'Similar issues',
  'show-more': 'Show more',
  'show-less': 'Show less',
  'drop-warn':
    `Unfortunately, image drop/uploading is not supported due to GitHub API ` +
    `limitations. However, you can create the issue first (which will take you ` +
    `to GitHub) and then drop the images needed.`
}
