import {memo} from 'react'

import {useHydrateAtoms} from 'jotai/utils'
import {UserState} from '@states/user'

const AppStatesHydration = ({cookies = {}}) => {
  useHydrateAtoms([
    [UserState, cookies?.['user'] ? cookies['user'] : null],
  ])

  return null
}

export default memo(AppStatesHydration)
