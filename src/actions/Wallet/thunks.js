import {setCryptoBalances, errorFetchingBalance} from "./actions";

export const fetchCryptoBalances = (account) => (dispatch) => {
    account.wallet.getCoinBalances()
        .then(balances => {
            dispatch(setCryptoBalances(balances))
        })
        .catch(err => {
            dispatch(errorFetchingBalance(err))
        })
}



// -------------------------------------------------------------------------------------------------
// @ToDo::PROMPT SWAP

// -------------------------------------------------------------------------------------------------
//  @ToDo::PROMPT CURRENCY BUY

// -------------------------------------------------------------------------------------------------
//  @ToDo::PROMPT TRY FAUCET

// -------------------------------------------------------------------------------------------------
//  @ToDo::TRY DAILY FAUCET

