

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/src/containers/NotFound'), universalOptions)
      t_0.template = '__react_static_root__/src/containers/NotFound'
      
const t_1 = universal(import('__react_static_root__/src/containers/Home'), universalOptions)
      t_1.template = '__react_static_root__/src/containers/Home'
      
const t_2 = universal(import('__react_static_root__/src/containers/Doc'), universalOptions)
      t_2.template = '__react_static_root__/src/containers/Doc'
      
const t_3 = universal(import('__react_static_root__/src/containers/Search'), universalOptions)
      t_3.template = '__react_static_root__/src/containers/Search'
      

// Template Map
export default {
  '__react_static_root__/src/containers/NotFound': t_0,
'__react_static_root__/src/containers/Home': t_1,
'__react_static_root__/src/containers/Doc': t_2,
'__react_static_root__/src/containers/Search': t_3
}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/src/containers/NotFound"

