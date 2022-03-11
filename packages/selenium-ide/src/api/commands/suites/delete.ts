import { SuiteShape } from '@seleniumhq/side-model'
import update from 'lodash/fp/update'
import browserHandler from 'browser/api/classes/Handler'
import mainHandler from 'main/api/classes/Handler'
import { Session } from 'main/types'
import { Mutator } from 'api/types'

export type Shape = Session['suites']['delete']

export const mutator: Mutator<Shape> = (session, { params: [suiteID] }) =>
  update(
    'project.suites',
    (suites) => suites.filter((suite: SuiteShape) => suite.id !== suiteID),
    session
  )

export const browser = browserHandler<Shape>()

export const main = mainHandler<Shape>()