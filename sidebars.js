/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      link: {type:'doc', id:'introduction'},
      items: [{type: 'autogenerated', dirName: 'Introduction'}]
    },
    {
      type: 'category',
      label: 'Application Process',
      link: {type:'doc', id:'process'},
      items: [{type: 'autogenerated', dirName: 'Process'}]
    },
    {
      type: 'doc',
      id:'suggesting'
    },
    {
      type: 'doc',
      id:'maintenance'
    },
    {
      type: 'doc',
      id:'help'
    },
    {
      type: 'doc',
      id:'referral-program'
    },
    {
      type: 'doc',
      id:'funding'
    },
    {
      type: 'doc',
      id:'contribute'
    },
    {
      type: 'doc',
      id:'faq'
    },
    {
      type: 'doc',
      label: 'List of Grants',
      id:'applications/index'
    },
    {
      type: 'category',
      label: 'Support Docs',
      items: [{type: 'autogenerated', dirName: 'Support Docs'}]
    },
    {
      type: 'category',
      label: 'Requests for Proposal',
      link: {type:'doc', id:'rfps'},
      items: [{type: 'autogenerated', dirName: 'RFPs'}]
    },
  ]
};

module.exports = sidebars;