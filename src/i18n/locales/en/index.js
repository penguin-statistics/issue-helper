export default {
  _label: 'English',

  // app metadata
  'app-name': 'Issue Helper',
  'org-name': 'Penguin Statistics',

  // intro
  'intro': require('./intro.md'),

  // bug report
  'repo-title': 'I am opening an issue for',
  'repo-subtitle': 'Please make sure to file the issue at appropriate repo',
  'type-title': 'This is a',
  'title-title': 'Issue title',

  'browser-and-os-title': 'Browser and OS info',

  'url-title': "The bug occurred at...",
  'url-subtitle': "The URL that the bug occurred at (e.g. https://penguin-stats.io/report)",

  'steps-title': 'Steps to reproduce',
  'steps-subtitle': require('./steps-subtitle.md'),

  'expected-title': 'What is expected?',
  'actual-title': 'What is actually happening?',
  'extra-title': 'Any additional comments? (optional)',
  'extra-subtitle': 'e.g. some background/context of how you ran into this bug',

  // feature request
  'rationale-title': 'What exact problem does this feature solve?',
  'rationale-subtitle': require('./rationale-subtitle.md'),

  'proposal-title': 'What does the proposed feature looks like?',
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
    `Unfortunately, file drop/uploading is not supported due to GitHub API ` +
    `limitations. However, you can create the issue first (which will take you ` +
    `to GitHub) and then drop the files needed.`
}
