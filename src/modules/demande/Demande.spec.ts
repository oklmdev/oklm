import { DemandeState, updateState } from './Demande'
import { makeDemandeAcceptée, makeDemandeDéposée } from './events'

const demandeId = ""

const initialState: DemandeState = {
  status: 'nouvelle'
}

describe('Demande', () => {

  describe('quand il reçoit un événement DemandeAcceptée', () => {
    it('doit retourner un status accepté', () => {
      expect(updateState(initialState, makeDemandeAcceptée({ demandeId, acceptéeLe: 123, acceptéePar: "" }))).toEqual({
        status: 'acceptée'
      })
    })
  })

  describe('quand il reçoit un événement DemandeDéposée', () => {
    it('doit retourner un status déposée', () => {
      expect(updateState(initialState, makeDemandeDéposée({ demandeId, type: 'réclamation', justification: '', déposéeLe: 123, déposéePar: "" }))).toEqual({
        status: 'déposée'
      })
    })
  })
})